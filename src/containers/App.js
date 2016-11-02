import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from '../logo.svg';
import '../App.css';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search'

import { changeGithubUsername, fetchRepos } from '../actions';

import Repos from '../containers/Repos';

class App extends Component {
  static propTypes = {
    githubUsername: PropTypes.string,
    changeGithubUsername: PropTypes.func,
    fetchRepos: PropTypes.func,
    repos: PropTypes.array,
  }
  
  constructor() {
    super();
    this.onGithubUsernameChanged = this.onGithubUsernameChanged.bind(this);
    this.onSearchButtonClicked = this.onSearchButtonClicked.bind(this);
  }
  
  onGithubUsernameChanged(event) {
    this.props.changeGithubUsername(event.target.value);
  }
  
  onSearchButtonClicked(event) {
    this.props.fetchRepos(this.props.githubUsername);
  }
  
  render() {
    const { githubUsername, repos } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <TextField
          hintText='Enter Github username'
          onChange={this.onGithubUsernameChanged}
          value={githubUsername}
        />
        <IconButton onClick={this.onSearchButtonClicked}>
          <Search />
        </IconButton>
        
        <p className="App-intro">
          Number of repos: {repos.length}
          <br />
        </p>
        <Repos />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  githubUsername: state.githubUsername,
  repos: state.repos,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeGithubUsername,
  fetchRepos,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
