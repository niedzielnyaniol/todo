import { User } from './entity/User';

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    getUser: async (_: any, args: any): Promise<User> => {
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
  },
};
