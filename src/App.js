import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import List from './components/List';
import SignIn from './components/SignIn';
import './App.css';

export default function App() {
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
                <Link className="App-link" to="/about">About</Link>
              </li>
            </ul>
            <div className="nav-right">
              <Link className="App-link" to="/sign-in">Sign in</Link>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
