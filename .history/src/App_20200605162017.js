import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssueDetail from "./IssueDetail";
import Home from "./Home";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/issueDetail">
          <IssueDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
