require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const config = require("./config");
const MovieDbApi = require("./datasources/MovieDbApi");
const { getUser } = require("./utils/getUser");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  dataSources: () => ({
    movieDbApi: new MovieDbApi(),
  }),
  context: ({ req }) => {
    if (req.headers && req.headers.authorization) {
      const auth = req.headers.authorization;
      const parts = auth.split(" ");
      const bearer = parts[0];
      const token = parts[1];

      if (bearer == "Bearer") {
        const user = getUser(token);

        if (user.error) {
          throw Error(user.msg);
        } else return { user };
      } else {
        throw Error("Authentication must use Bearer.");
      }
    } else {
      throw Error("User must be authenticated.");
    }
  },
});

mongoose
  .connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen();
  })
  .then((res) => {
    console.log(`🚀  Apollo Server running at ${res.url}`);
  });
