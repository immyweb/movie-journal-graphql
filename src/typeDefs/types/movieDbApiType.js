const { gql } = require("apollo-server");

const movieDbApiType = gql`
  type MovieInfo {
    genres: [Genre]
    # director: String
    id: ID
  }

  type Cast {
    name: String
    character: String
  }

  type Crew {
    name: String
    job: String
  }

  type Genre {
    name: String
  }

  type Result {
    title: String
    id: ID
    overview: String
    poster_path: String
    release_date: String
  }
`;

module.exports = movieDbApiType;
