require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const config = require("./config");
const MovieDbApi = require("./datasources/MovieDbApi");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  dataSources: () => ({
    movieDbApi: new MovieDbApi(),
  }),
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
