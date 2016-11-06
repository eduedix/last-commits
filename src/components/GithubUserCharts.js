import React, { Component, PropTypes } from 'react';

import { Pie } from 'react-chartjs-2';
import { generateRandomColor } from '../utils';

class GithubUserCharts extends Component {
    static propTypes = {
        repos: PropTypes.array,
    }

    constructor(props) {
        super(props)
        this.chartData = {
            labels: props.repos.map((repo) => repo.name),
            datasets: [{
                data: props.repos.map((repo) => repo.stargazers_count),
                backgroundColor: props.repos.map((repo) => generateRandomColor()),
            }]
        }
    }

    render() {
        return (
            <div>
                <h1>Starred repos</h1>
                <Pie
                    data={this.chartData}
                    height={200}
                    options={{ maintainAspectRatio: false, legend: { display: false }} }
                />
            </div>
        )
    }
}

export default GithubUserCharts