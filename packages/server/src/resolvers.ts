import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { User } from './entity/User';
import { Task } from './entity/Task';

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    user: async (_: any, args: any): Promise<User> => {
      const { id } = args;

      return User.findOne({ where: { id } });
    },
  },

  Mutation: {
    addUser: async (_: any, args: any): Promise<boolean> => {
      const { firstName, lastName, age } = args;
      try {
        const user = User.create({
          firstName,
          lastName,
          age,
        });

        await user.save();

        return true;
      } catch (error) {
        return false;
      }
    },

    addTask: async (_: any, args: any): Promise<boolean> => {
      const { name } = args;

      try {
        const task = Task.create({ name });

        await task.save();

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },

  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(+ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
};
