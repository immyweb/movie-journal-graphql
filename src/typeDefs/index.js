const query = require("./query");
const { movieType, movieDbApiType } = require("./types");

const typeDefs = [query, movieType, movieDbApiType];

module.exports = typeDefs;
