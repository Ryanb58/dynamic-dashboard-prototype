import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Chart1 from './components/Chart1';
import Dashboard3 from './components/Dashboard3';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard1">Dashboard 1</Link>
            </li>
            <li>
              <Link to="/dashboard2">Dashboard 2</Link>
            </li>
            <li>
              <Link to="/chart1">Chart 1</Link>
            </li>
            <li>
              <Link to="/dashboard3">Dashboard 3</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/dashboard3">
            <Dashboard3 />
          </Route>
          <Route path="/chart1">
            <Chart1 />
          </Route>
          <Route path="/dashboard2">
            <Dashboard2 />
          </Route>
          <Route path="/dashboard1">
            <Dashboard1 />
          </Route>
          <Route path="/">
            <Dashboard1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}