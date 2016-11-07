import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Commits from '../components/Commits';

import { changeSearchedCommitMessage } from '../actions';

const mapStateToProps = (state, props) => {
    const repo = props.repo
    const searchedCommitMessage = state.searchedCommits[repo] || ''
    const commits = state.commits[repo].data || []
    const filteredCommits = commits.filter((commit) => commit.commit.message.toLowerCase().indexOf(searchedCommitMessage.toLowerCase()) !== -1);
    const isFetchingCommits = state.commits[repo].isFetching

    return {
        searchedCommitMessage,
        commits: searchedCommitMessage.length > 0 ? filteredCommits : commits,
        isFetchingCommits,
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        changeSearchedCommitMessage,
    }, dispatch)
)


export default connect(mapStateToProps, mapDispatchToProps)(Commits)