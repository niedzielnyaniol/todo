import {
  ApolloClient, HttpLink, InMemoryCache, ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
});

export { ApolloProvider, client };
