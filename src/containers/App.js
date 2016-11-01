import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../App.css';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <TextField
          hintText='Enter Github username'
          // onChange={onGithubUsernameChanged}
        />
        <IconButton>
          <Search />
        </IconButton>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  
}

export default connect(mapStateToProps)(App);
