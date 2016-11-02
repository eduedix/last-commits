import React, { Component, PropTypes } from 'react';

class Repos extends Component {
    static propTypes = {
        repos: PropTypes.array,
        toggleRepo: PropTypes.func,
        fetchCommits: PropTypes.func,
        githubUsername: PropTypes.string,
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
        const { repos } = this.props;
        return (
        <ul>
            {repos.map((repo) =>
                <li key={repo.id} onClick={this.onRepoClicked(repo.name)}>
                    {repo.name} {repo.stargazers_count}
                </li>
            )}
        </ul>
        );
    }
}

export default Repos