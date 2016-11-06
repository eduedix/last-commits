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
import GithubUserCharts from '../containers/GithubUserCharts';

class App extends Component {
  static propTypes = {
    fetchRepos: PropTypes.func,
    reposLength: PropTypes.number,
  }
  
  constructor(props) {
    super(props);
    this.state = {
      githubUsername: '',
    }
    this.onGithubUsernameChanged = this.onGithubUsernameChanged.bind(this);
    this.onSearchButtonClicked = this.onSearchButtonClicked.bind(this);
  }
  
  onGithubUsernameChanged(event) {
    this.setState({
      githubUsername: event.target.value,
    });
  }
  
  onSearchButtonClicked(event) {
    this.props.fetchRepos(this.state.githubUsername);
  }
  
  render() {
    const { reposLength } = this.props;
    const { githubUsername } = this.state;


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
          {reposLength > 0 ?
            <GithubUserCharts /> 
            : null
          }
        </p>
        {reposLength > 0 ? <Repos /> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  reposLength: state.repos.length,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeGithubUsername,
  fetchRepos,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
