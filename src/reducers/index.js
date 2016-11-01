import { combineReducers } from 'redux';
import { CHANGE_GITHUB_USERNAME, REQUEST_REPOS,
   RECEIVE_REPOS } from '../actions';
   
const lastCommits = (state = '', action) => {
    switch (action.type) {
        case CHANGE_GITHUB_USERNAME:
            return action.githubUserName
        default:
            return state
    }
}

const rootReducer = combineReducers({
   lastCommits,
})

export default rootReducer
