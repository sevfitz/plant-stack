import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Game } from './routes/Game';

class App extends Component {
    render() {
        return (
          <div className="App">
            <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Genus or Species??</h2>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;