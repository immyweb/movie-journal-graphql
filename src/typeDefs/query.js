const { gql } = require("apollo-server");

const query = gql`
  type Query {
    getMovies: [Movie]
    getMovie(_id: ID): Movie
    getMovieInfo(id: ID): MovieInfo
    getMovieCast(id: ID, offset: Int, limit: Int): [Cast]
    getMovieCrew(id: ID, offset: Int, limit: Int): [Crew]
    searchMovie(title: String, offset: Int, limit: Int): [Result]
    getUsers: [User]
  }

  type Mutation {
    addMovie(input: newMovie): Movie
    updateMovie(id: ID, input: newMovie): Movie
    deleteMovie(id: ID): Movie
  }
`;

module.exports = query;
