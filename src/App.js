import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import Counter from './components/Counter';
import List from './components/List';
import SignIn from './components/SignIn';
import LoginComponent from './components/Login'
import LogoutComponent from './components/Logout'
import AuthenticatedRoute from './components/AuthenticatedRoute';
import AuthenticationService from './service/AuthenticationService';
import './App.css';

export default function App() {
  let logged = !AuthenticationService.isUserLoggedIn() ? <Link className="App-link" to="/sign-in">Sign in</Link> : <Link className="App-link" onClick={AuthenticationService.logout} to="/logout">Sign out</Link>
  return (
    <Router>
      <div>
        <nav>
          <div className="wrapper no-pad">
            <ul>
              <li>
                <Link className="App-link" to="/">Home</Link>
              </li>
              <li>
                <Link className="App-link" to="/list">List</Link>
              </li>
              <li>
                <Link className="App-link" to="/counter">Counter</Link>
              </li>
            </ul>
            <div className="nav-right">
              {logged}
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/login" exact component={LoginComponent} />
          <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
          <AuthenticatedRoute path="/sign-in" exact component={SignIn} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
