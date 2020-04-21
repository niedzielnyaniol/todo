// Construct a schema, using GraphQL schema language
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    user(id: Int!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String, age: Int!): Boolean!
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    age: Int!
  }
`;
