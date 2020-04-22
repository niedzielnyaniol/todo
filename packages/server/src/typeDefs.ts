// Construct a schema, using GraphQL schema language
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  scalar Date

  type Query {
    user(id: Int!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String, age: Int!): Boolean!
    addTask(name: String!): Boolean!
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    age: Int!
  }

  type Task {
    id: Int!
    name: Int!
    created: Date!
    done: Boolean!
  }
`;
