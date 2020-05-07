import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FormLayout from 'components/molecules/FormLayout';
import Login from 'components/pages/Login';
import SignUp from 'containers/pages/SignUp';
import { config } from 'routes';

const { LOGIN_PATH, SIGN_UP_PATH } = config;

const Auth = () => (
  <FormLayout>
    <Switch>
      <Route path={LOGIN_PATH}>
        <Login onSubmit={() => {}} />
      </Route>
      <Route path={SIGN_UP_PATH}>
        <SignUp />
      </Route>
    </Switch>
  </FormLayout>
);

export default Auth;
