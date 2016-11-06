import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Commits from '../components/Commits';

import { changeSearchedCommitMessage } from '../actions';

const mapStateToProps = (state, props) => {
    const repo = props.repo
    const searchedCommitMessage = state.searchedCommits[repo] || ''
    const commits = state.commits[repo] || []
    const filteredCommits = commits.filter((commit) => commit.commit.message.toLowerCase().indexOf(searchedCommitMessage.toLowerCase()) !== -1);

    return {
        searchedCommitMessage,
        commits: searchedCommitMessage.length > 0 ? filteredCommits.splice(0, 20) : commits.splice(0, 20),
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        changeSearchedCommitMessage,
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Commits)