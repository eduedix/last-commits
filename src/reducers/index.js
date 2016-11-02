import { combineReducers } from 'redux';
import { CHANGE_GITHUB_USERNAME, REQUEST_REPOS,
   RECEIVE_REPOS, TOGGLE_REPO,
   RECEIVE_COMMITS } from '../actions';
   
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

const toggledRepos = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_REPO:
            if (state.indexOf(action.repo) === -1) 
                return [...state, action.repo]
            else {
                return state.filter((repo) => {
                    return repo !== action.repo
                })
            }
        default:
            return state
    }
}

const commits = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_COMMITS:
            return { ...state, [action.repo]: action.commits }
        default:
            return state
    }
}

const rootReducer = combineReducers({
   githubUsername,
   repos,
   toggledRepos,
   commits,
})

export default rootReducer
