import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Repos from '../components/Repos';
import { toggleRepo } from '../actions';

const mapStateToProps = state => ({
    repos: state.repos,
    toggledRepos: state.toggledRepos
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        toggleRepo
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Repos)