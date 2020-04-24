import React from 'react';
import { Switch } from 'react-router-dom';
import { config } from '../..';
import PrivateRoute from '../PrivateRoute';
import Layout from '../../../components/Layout';

const { INDEX_PATH } = config;

const App = () => (
  <Layout>
    <Switch>
      <PrivateRoute exact path={INDEX_PATH}>
        <div>Hello from index</div>
      </PrivateRoute>
    </Switch>
  </Layout>
);

export default App;
