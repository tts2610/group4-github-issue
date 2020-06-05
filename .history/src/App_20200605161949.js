import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IssueDetail from "./IssueDetail";

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
