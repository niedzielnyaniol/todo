import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { config } from '../..';
import FormLayout from '../../../components/FormLayout';

const { LOGIN_PATH } = config;

const Auth = () => {
  const { path } = useRouteMatch();

  return (
    <FormLayout>
      <Switch>
        <Route path={`${path}${LOGIN_PATH}`}>
          <div>Login</div>
        </Route>
      </Switch>
    </FormLayout>
  );
};

export default Auth;
