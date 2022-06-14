const { gql } = require("apollo-server");

const movieType = gql`
  type Movie {
    _id: ID!
    theMovieDbId: Int!
    title: String!
    dateWatched: String!
    rating: Int!
    review: String!
    like: Boolean!
    posterImg: String
    releaseDate: String
  }

  input newMovie {
    theMovieDbId: Int!
    title: String!
    dateWatched: String!
    rating: Int!
    review: String!
    like: Boolean!
    posterImg: String
    releaseDate: String
  }
`;

module.exports = movieType;
