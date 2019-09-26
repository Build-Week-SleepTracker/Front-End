import React from 'react';
import {Bar} from 'react-chartjs-2';


class Graph extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.sessions)
        this.state= {
            chartData: {
                labels: ['Monday' ,'Tuesday', 'Wednesday', 'Thusday','Friday','Saturday','Sunday'],
                 datasets: [
                     {
                         label:'Hours of Sleep',
                         data:[
                             7,
                             8,
                             8,
                             9,
                             10,
                             7,
                             
                             
                         ],
                         backgroundColor: [
                             'rgba(255,99, 132,0.6'
                         ]
                     }
                 ]
            }
        }
    }
 render(){ 
    return (
  <div>
     
  </div>
  )}
}

export default Graph