import React from 'react';
import ReactDOM from 'react-dom';
import { client, ApolloProvider } from './utils/apollo';
import './utils/initDesignSystem';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
