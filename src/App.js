import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from './store/auth.actions';

import Routes from './Routes';
import Nav from './components/Nav';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  // componentDidMount() {
  //   console.log('props are', this.props);
  //   const setReady = () => this.setState({ ready: true });

  //   this.props 
  //     .checkForToken()
  //     .then(setReady, setReady);
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Genus or Species??</h2>
            <hr/>
            <Nav />
          </div>
          <main>
            {/* {this.state.ready && <Routes/>} */}
            <Routes />
          </main>
          <footer>Plant Game by sevfitz, 2017</footer>
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
