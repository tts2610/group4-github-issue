import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssueDetail from "./IssueDetail";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/issueDetail">
            <IssueDetail />
          </Route>
        </Switch>
      <Router/>
    </div>
  );
}

ReactDOM.render(

    <App />
  </Router>,
  document.getElementById("root")
);
