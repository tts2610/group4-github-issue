import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssueDetail from "./IssueDetail";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <IssueDetail />
          </Route>
          <Route path="/issueDetail">
            <IssueDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
