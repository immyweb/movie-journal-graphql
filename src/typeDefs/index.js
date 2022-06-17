const query = require("./query");
const { movieType, movieDbApiType, userType } = require("./types");

const typeDefs = [query, movieType, movieDbApiType, userType];

module.exports = typeDefs;
