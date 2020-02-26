import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute path='/friends' component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
