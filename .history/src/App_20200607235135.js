import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssueDetail from "./IssueDetail";
import Home from "./Home";
import SmithNavigationBar from "./components/SmithNavigationBar";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/IssueDetail/">
            <IssueDetail />
          </Route>
          <Route path="/">
            <SmithNavigationBar input />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
