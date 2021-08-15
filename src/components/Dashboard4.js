/*
References:
https://github.com/react-grid-layout/react-grid-layout/blob/master/test/examples/15-drag-from-outside.jsx
*/

import React from "react";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./Dashboard1.css";

import GridLayout from "react-grid-layout";
import { Doughnut, Line } from "react-chartjs-2";

const doughnut1_data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const line1_data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

class Dashboard extends React.Component {
  onDrop = (layout, layoutItem, _event) => {
    alert(
      `Dropped element props:\n${JSON.stringify(
        layoutItem,
        ["x", "y", "w", "h"],
        2
      )}`
    );
  };

  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 4, minW: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 4, minW: 2 },
      { i: "c", x: 4, y: 0, w: 1, h: 4, minW: 2 },
    ];
    return (
      <div>
        <div
          className="droppable-element"
          draggable={true}
          unselectable="on"
          // this is a hack for firefox
          // Firefox requires some kind of initialization
          // which we can do by adding this attribute
          // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
          onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        >
          Droppable Element (Drag me!)
        </div>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
          onDrop={this.onDrop}
        >
          <div key="a" className="draggable">
            <Doughnut
              data={doughnut1_data}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div key="b" className="draggable">
            <Line data={line1_data} options={{ maintainAspectRatio: false }} />
          </div>
          <div key="c" className="draggable">
            c
          </div>
        </GridLayout>
      </div>
    );
  }
}

export default Dashboard;
