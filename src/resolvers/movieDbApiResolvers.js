const movieDbApiResolvers = {
  Query: {
    getMovieInfo: (_source, { id }, { dataSources }) => {
      return dataSources.movieDbApi.getMovieInfo(id);
    },
    getMovieCast: async (_source, { id, offset, limit }, { dataSources }) => {
      const result = await dataSources.movieDbApi.getMovieCastCrew(id);
      const cast = result.cast.slice(offset, limit + offset);
      return cast;
    },
    getMovieCrew: async (_source, { id, offset, limit }, { dataSources }) => {
      const result = await dataSources.movieDbApi.getMovieCastCrew(id);
      const crew = result.crew.slice(offset, limit + offset);
      return crew;
    },
    searchMovie: async (_source, { title, offset, limit }, { dataSources }) => {
      const result = await dataSources.movieDbApi.searchMovie(title);
      const movies = result.results.slice(offset, limit + offset);
      return movies;
    },
  },
};

module.exports = movieDbApiResolvers;
