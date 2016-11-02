import React, { Component, PropTypes } from 'react';

class Repos extends Component {
    static propTypes = {
        repos: PropTypes.array,
        toggleRepo: PropTypes.func,
    }
    
    constructor() {
        super();
        this.onRepoClicked = this.onRepoClicked.bind(this);
    }
    
    onRepoClicked(repoId) {
        return (event) => {
            const { toggleRepo } = this.props;
            toggleRepo(repoId)
        }
    }
    
    render() {
        const { repos } = this.props;
        return (
        <ul>
            {repos.map((repo) =>
                <li key={repo.id} onClick={this.onRepoClicked(repo.id)}>
                    {repo.name} {repo.stargazers_count}
                </li>
            )}
        </ul>
        );
    }
}

export default Repos