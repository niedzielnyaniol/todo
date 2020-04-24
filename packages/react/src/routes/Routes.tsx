import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import App from './components/App';
import config from './utils/config';

const { AUTH_PATH, INDEX_PATH } = config;

const Routes = () => (
  <Router>
    <Switch>
      <Route path={AUTH_PATH} component={Auth} />
      <Route path={INDEX_PATH} component={App} />
    </Switch>
  </Router>
);

export default Routes;
