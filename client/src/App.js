import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const App = () => (
  <div className="ui container">
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
    </Switch>
  </div>
);

export default App;
