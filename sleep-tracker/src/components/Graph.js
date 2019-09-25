import React, {Component} from 'react';
import {Bar} from 'chart.js';

class Graph extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {
                labels: ['Monday', "Tuesday", 'Wednesday','Thursday','Friday','Saturday','Sunday'], 
                datasets: [
                    {
                        label: 'Hours of Sleep',
                        data:[8, 6, 5, 9, 10, 7, 11,],
                        backgroundColor: ['blue']
                    }
                ]
            }
        }
}
    render() {
        return (
            <div className = "graph">
                <Bar 
                   data={this.state.chartData}
                   width={100}
                   height={50}
                   options= {{
                       maintainAspectRatio: false
                   }}
                   
                   
                   
                   
                   />
            </div>
        )
    }
}

export default Graph