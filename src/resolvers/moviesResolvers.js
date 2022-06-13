const { Movie } = require("../models");

const moviesResolvers = {
  Query: {
    async getMovies() {
      const movies = await Movie.find({});

      return movies;
    },
    async getMovie(_, { _id }) {
      const movie = await Movie.findById(_id);

      return movie;
    },
  },
};

module.exports = moviesResolvers;
