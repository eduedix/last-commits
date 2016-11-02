import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Repos from '../components/Repos';
import { toggleRepo, fetchCommits } from '../actions';

const mapStateToProps = state => ({
    githubUsername: state.githubUsername,
    repos: state.repos,
    toggledRepos: state.toggledRepos
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        toggleRepo,
        fetchCommits,
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Repos)