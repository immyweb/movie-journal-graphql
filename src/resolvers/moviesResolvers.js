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
  Mutation: {
    async addMovie(_, { input }) {
      const newMovie = new Movie(input);
      const createdMovie = await newMovie.save();

      return createdMovie;
    },
    async updateMovie(_, { id, input }) {
      const updatedMovie = await Movie.findByIdAndUpdate({ _id: id }, input, {
        new: true,
      });

      return updatedMovie;
    },
    async deleteMovie(_, { id }) {
      const deletedMovie = await Movie.findByIdAndRemove(id);

      return deletedMovie;
    },
  },
};

module.exports = moviesResolvers;
