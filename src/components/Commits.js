import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';

class Commits extends Component {
    static propTypes = {
        commits: PropTypes.array,
        repo: PropTypes.string,
        searchedCommitMessage: PropTypes.string,
        changeSearchedCommitMessage: PropTypes.func,
    }
    
    constructor(){
        super();
        this.onSearchCommitMessageChanged = this.onSearchCommitMessageChanged.bind(this);
    }
    
    onSearchCommitMessageChanged(event) {
        this.props.changeSearchedCommitMessage(this.props.repo, event.target.value);
    }
    
    render() {
        const { searchedCommitMessage, commits, repo } = this.props;
        return (
            <div>
                <TextField 
                    hintText='Search commit messages'
                    onChange={this.onSearchCommitMessageChanged}
                    value={searchedCommitMessage}
                />
                <ol style={{  }}>
                    {commits.map((commit, i) => 
                        <li key={`${repo}-commit-${i}`}
                            style={{ textAlign: 'left' }}>
                            {commit.commit.message}
                        </li>
                    )}
                </ol>
            </div>
        );
    }
}

export default Commits