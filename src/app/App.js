import React, { Component } from 'react';
import logo from '../rose-icon.png';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from '../auth/actions';

import Routes from './Routes';
import Nav from './Nav';

// Import and modify bulma styles
// import 'bulma/sass/utilities/initial-variables';
import 'bulma/css/bulma.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <span className="icon">
              <img src={logo} className="App-logo image is-32x32" alt="logo" />
            </span>
            <h2>Genus or Species??</h2>
            <Nav />
          </div>
          <main>
            <Routes />
          </main>
          <footer className="footer">
            <div className="content has-text-centered">
              <p>Plant Game © <a href="https://github.com/sevfitz" alt="https://github.com/sevfitz">sevfitz</a> 2017</p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    checkForToken() { return dispatch(checkForToken()); }
  })
)(App);
