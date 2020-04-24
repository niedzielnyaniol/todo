import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth from './components/Auth';
import App from './components/App';

const Routes = () => (
  <Router>
    <Auth />
    <App />
  </Router>
);

export default Routes;
