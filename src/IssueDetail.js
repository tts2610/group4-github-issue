import React, {useState}from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SmithNavigationBar from "./components/SmithNavigationBar";
import SmithWarningModal from "./components/SmithWarningModal";

export default function IssueDetail() {
  const [alyssaShow, setAlyssaShow] = useState(false);
  const handleAlyssaShow = () => setAlyssaShow(true);

  return (
    <div>
       <SmithNavigationBar input/>
      <h1>Testing</h1>
    </div>
  );
}
