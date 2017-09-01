import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';
import { AddCard } from './components/AddCard';

class App extends Component {
    render() {
        return (
          <div className="App">
            <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Genus or Species??</h2>
        </div>
        <Card />
        <div>
            <AddCard />
        </div>
      </div>
    );
  }
}

export default App;