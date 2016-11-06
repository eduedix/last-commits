import { connect } from 'react-redux';
import GithubUserCharts from '../components/GithubUserCharts';

const mapStateToProps = (state, props) => {

    const filteredRepos = state.repos.sort((a, b) => a.stargazers_count > b.stargazers_count).slice(0, 20);

    return {
        repos: filteredRepos,
    }
}
export default connect(mapStateToProps)(GithubUserCharts)