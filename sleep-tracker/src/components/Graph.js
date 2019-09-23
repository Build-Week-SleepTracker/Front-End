import React, {Component} from 'react';
import {Bar} from 'chart.js';

class Graph extends Component {
    constructor() {
        super(props);
        this.state = {
            chartData: {
                labels: this.props.dates.date,
                datasets: [
                    {
                        label: 'Hours of Sleep',
                        data: this.props.dates.sleep,
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