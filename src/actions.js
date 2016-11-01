export const CHANGE_GITHUB_USERNAME = 'CHANGE_GITHUB_USERNAME';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';

export const changeGithubUsername = githubUsername => ({
    type: CHANGE_GITHUB_USERNAME,
    githubUsername
})

export const requestRepos = githubUsername => ({
    type: REQUEST_REPOS,
    githubUsername
})

export const receiveRepos = (githubUsername, json) => ({
    type: RECEIVE_REPOS,
    githubUsername,
    repos: json.data.children.map(child => child.data)
})

export const fetchRepos = githubUsername => dispatch => {
    dispatch(requestRepos(githubUsername));
    return fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(json => dispatch(receiveRepos(githubUsername, json)))
}
    