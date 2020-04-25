import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { config } from 'routes';
import Props from './PrivateProps.types';

const { LOGIN_PATH, AUTH_PATH } = config;

const PrivateRoute = ({ children, ...props }: Props) => (
  <Route
    {...props}
    render={({ location }) => (true ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: AUTH_PATH + LOGIN_PATH,
          state: { from: location },
        }}
      />
    ))}
  />
);

export default PrivateRoute;
