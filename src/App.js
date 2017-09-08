import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import Game from './routes/Game';
import Nav from './components/Nav';
import AddCard from './components/AddCard';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Genus or Species??</h2>
          </div>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/game" component={Game} />
              <Route path="/addcard" component={AddCard} />
              <Redirect to="/" />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;