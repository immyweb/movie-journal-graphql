const moviesResolvers = require("./moviesResolvers");
const movieDbApiResolvers = require("./movieDbApiResolvers");

const resolvers = [moviesResolvers, movieDbApiResolvers];

module.exports = resolvers;
