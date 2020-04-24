import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { config } from '../..';
import Layout from '../../../components/Layout';

const { LOGIN_PATH } = config;

const Auth = () => (
  <Layout>
    <Switch>
      <Route path={LOGIN_PATH}>
        <div>Login</div>
      </Route>
    </Switch>
  </Layout>
);

export default Auth;
