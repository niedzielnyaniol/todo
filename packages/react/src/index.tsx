import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient, HttpLink, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import { applyPolyfills, defineCustomElements } from '@todo/design-system/loader';
import 'antd/dist/antd.css';
import App from './components/App';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        export interface IntrinsicElements {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [tagName: string]: any;
        }
    }
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

applyPolyfills().then(() => {
  defineCustomElements();
});
