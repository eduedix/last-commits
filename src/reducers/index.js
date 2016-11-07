import { combineReducers } from 'redux';
import {
    REQUEST_REPOS, RECEIVE_REPOS, TOGGLE_REPO,
    REQUEST_COMMITS, RECEIVE_COMMITS,
    CHANGE_SEARCHED_COMMIT_MESSAGE
} from '../actions';

const githubUsername = (state = '', action) => {
    switch (action.type) {
        case REQUEST_REPOS:
            return action.githubUsername
        default:
            return state
    }
}

const repos = (state = {
    isFetching: false,
    data: []
}, action) => {
    switch (action.type) {
        case REQUEST_REPOS:
            return { isFetching: true, data: [] }
        case RECEIVE_REPOS:
            return { isFetching: false, data: action.repos }
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
        case REQUEST_COMMITS:
            return { ...state, [action.repo]: { isFetching: true, data: [] } }
        case RECEIVE_COMMITS:
            return { ...state, [action.repo]: { isFetching: false, data: action.commits } }
        default:
            return state
    }
}

const searchedCommits = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_SEARCHED_COMMIT_MESSAGE:
            return { ...state, [action.repo]: action.searchedCommitMessage }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    githubUsername,
    repos,
    toggledRepos,
    commits,
    searchedCommits,
})

export default rootReducer
