import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Props from './PrivateProps.types';
import { config } from '../..';

const { LOGIN_PATH } = config;

const PrivateRoute = ({ children, ...props }: Props) => (
  <Route
    {...props}
    render={({ location }) => (true ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: LOGIN_PATH,
          state: { from: location },
        }}
      />
    ))}
  />
);

export default PrivateRoute;
