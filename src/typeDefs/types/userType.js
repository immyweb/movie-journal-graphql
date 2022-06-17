const { gql } = require("apollo-server");

const userType = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type NewUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

module.exports = userType;
