import { combineReducers } from 'redux';
import { CHANGE_GITHUB_USERNAME, REQUEST_REPOS,
   RECEIVE_REPOS } from '../actions';
   
const githubUsername = (state = '', action) => {
    switch (action.type) {
        case CHANGE_GITHUB_USERNAME:
            return action.githubUsername
        case REQUEST_REPOS:
            return action.githubUsername
        default:
            return state
    }
}

const repos = (state = [], action) => {
    switch (action.type) {
        case REQUEST_REPOS:
            return []
        case RECEIVE_REPOS:
            return action.repos
        default:
            return state
    }
}

const rootReducer = combineReducers({
   githubUsername,
   repos,
})

export default rootReducer
