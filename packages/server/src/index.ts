import 'reflect-metadata';
import * as express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const startServer = async (): Promise<void> => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await createConnection();

  const app = express();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
};

startServer();
