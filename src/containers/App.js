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

import { Pie } from 'react-chartjs-2';

class App extends Component {
  static propTypes = {
    githubUsername: PropTypes.string,
    changeGithubUsername: PropTypes.func,
    fetchRepos: PropTypes.func,
    reposLength: PropTypes.number,
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
    const { githubUsername, reposLength, starsData, backgroundColor, repoLabels } = this.props
    const data = {
      labels: repoLabels,
      datasets: [{
        data: starsData,
        backgroundColor
      }]
    };

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
          Number of repos: {reposLength}
          <br />
          {reposLength > 0 ?
            <Pie data={data} />
            : null
          }
        </p>
        <Repos />
      </div>
    )
  }
}

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 200);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

const mapStateToProps = (state) => {
  const filteredRepos = state.repos.sort((a, b) => a.stargazers_count > b.stargazers_count).slice(0,20);
  const colors = filteredRepos.map((repo) => {
    return generateRandomColor()
  });
  const starsData = filteredRepos.map((repo) => repo.stargazers_count);
  const repoLabels = filteredRepos.map((repo) => repo.name)
  
  return {
    githubUsername: state.githubUsername,
    reposLength: state.repos.length,
    backgroundColor: colors,
    starsData,
    repoLabels,
  }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeGithubUsername,
  fetchRepos,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
