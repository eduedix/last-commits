import React, { Component, PropTypes } from 'react';

import Commits from '../containers/Commits'

class Repos extends Component {
    static propTypes = {
        repos: PropTypes.array,
        toggledRepos: PropTypes.array,
        toggleRepo: PropTypes.func,
        fetchCommits: PropTypes.func,
        githubUsername: PropTypes.string,
        commits: PropTypes.object,
    }
    
    constructor() {
        super();
        this.onRepoClicked = this.onRepoClicked.bind(this);
    }
    
    onRepoClicked(repo) {
        return (event) => {
            const { toggleRepo, fetchCommits, toggledRepos, githubUsername } = this.props;
            toggleRepo(repo);
            if (toggledRepos.indexOf(repo) === -1) {
                fetchCommits(githubUsername, repo);
            }
        }
    }
    
    render() {
        const { repos, toggledRepos } = this.props;
        return (
        <ul>
            {repos.map((repo) =>
                <li key={repo.id}>
                    <p onClick={this.onRepoClicked(repo.name)}>
                        {repo.name} {repo.stargazers_count}
                    </p>
                    {toggledRepos.indexOf(repo.name) !== -1 ? <Commits repo={repo.name} /> : null}
                </li>
            )}
        </ul>
        );
    }
}

export default Repos