import React from "react";

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './Dashboard1.css';

import GridLayout from 'react-grid-layout';
import { Doughnut, Line } from 'react-chartjs-2';

const doughnut1_data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const line1_data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };


class Dashboard3 extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 4, minW: 2},
      {i: 'b', x: 1, y: 0, w: 3, h: 4, minW: 2},
      {i: 'c', x: 4, y: 0, w: 1, h: 4, minW: 2}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a" className="draggable"><Doughnut data={doughnut1_data} options={{ maintainAspectRatio: false }} /></div>
        <div key="b" className="draggable"><Line data={line1_data} options={{ maintainAspectRatio: false }} /></div>
        <div key="c" className="draggable">c</div>
      </GridLayout>
    )
  }
}

export default Dashboard3;
