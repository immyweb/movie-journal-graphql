const moviesResolvers = require("./moviesResolvers");
const movieDbApiResolvers = require("./movieDbApiResolvers");
const userResolvers = require("./userResolvers");

const resolvers = [moviesResolvers, movieDbApiResolvers, userResolvers];

module.exports = resolvers;
