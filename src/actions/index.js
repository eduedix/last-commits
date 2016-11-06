export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';

export const TOGGLE_REPO = 'TOGGLE_REPO';

export const REQUEST_COMMITS = 'REQUEST_COMMITS';
export const RECEIVE_COMMITS = 'RECEIVE_COMMITS';

export const CHANGE_SEARCHED_COMMIT_MESSAGE = 'CHANGE_SEARCHED_COMMIT_MESSAGE';


export const requestRepos = githubUsername => ({
    type: REQUEST_REPOS,
    githubUsername
})

export const receiveRepos = (githubUsername, json) => ({
    type: RECEIVE_REPOS,
    githubUsername,
    repos: json,
})

export const fetchRepos = githubUsername => dispatch => {
    dispatch(requestRepos(githubUsername));
    return fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`)
        .then(response => response.json())
        .then(json => dispatch(receiveRepos(githubUsername, json)))
}

export const toggleRepo = (repo) => ({
    type: TOGGLE_REPO,
    repo
})

export const requestCommits = (githubUsername, repo) => ({
    type: REQUEST_COMMITS,
    githubUsername,
    repo,
})

export const receiveCommits = (githubUsername, repo, json) => ({
    type: RECEIVE_COMMITS,
    githubUsername,
    repo,
    commits: json,
})

export const fetchCommits = (githubUsername, repo) => dispatch => {
    dispatch(requestCommits(githubUsername, repo));
    return fetch(`https://api.github.com/repos/${githubUsername}/${repo}/commits`)
        .then(response => response.json())
        .then(json => dispatch(receiveCommits(githubUsername, repo, json)))
}

export const changeSearchedCommitMessage = (repo, searchedCommitMessage) => ({
    type: CHANGE_SEARCHED_COMMIT_MESSAGE,
    repo,
    searchedCommitMessage,
})
    