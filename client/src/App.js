import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

const App = () => (
  <div className="ui container">
    <Switch>
      <Route exact path="/home" component={HomePage} />
      <Route exact path='/login' component={LoginPage} />

      <Route exact path='/'
        render={() => (
          <Redirect to='/login' />
        )}
      />
    </Switch>
  </div>
);

export default App;
