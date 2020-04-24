import React from 'react';
import { Switch } from 'react-router-dom';
import { config } from '../..';
import PrivateRoute from '../PrivateRoute';

const { INDEX_PATH } = config;

const Auth = () => (
  <Switch>
    <PrivateRoute path={INDEX_PATH}>
      <div>Hello from index</div>
    </PrivateRoute>
  </Switch>
);

export default Auth;
