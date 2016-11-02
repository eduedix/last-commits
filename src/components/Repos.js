import React, { PropTypes } from 'react';

const Repos = ({ repos }) => (
    <ul>
        {repos.map((repo, i) =>
            <li key={i}>{repo.name}</li>
        )}
    </ul>
)

Repos.PropTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos