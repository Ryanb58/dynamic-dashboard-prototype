import React from "react";

import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './Dashboard1.css';

class MyResponsiveGrid extends React.Component {
  render() {
    const layoutLg = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: false},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];

      const layoutMd = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];

    const layouts = {lg: layoutLg, md: layoutMd};
    return (
      <ResponsiveGridLayout className="layout" layouts={layouts}
        breakpoints={{lg: 1200, md: 996}}
        cols={{lg: 12, md: 10}}>
        <div key="a" className="draggable">1</div>
        <div key="b" className="draggable">2</div>
        <div key="c" className="draggable">3</div>
      </ResponsiveGridLayout>
    )
  }
}

export default MyResponsiveGrid;