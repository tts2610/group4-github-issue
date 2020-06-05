import React, { useEffect, useState } from "react";
import "./App.css";
import AlyssaModal from "./components/AlyssaModal";
import IssuesTable from "./components/IssuesTable";
import SmithNavigationBar from "./components/SmithNavigationBar";
import SmithWarningModal from "./components/SmithWarningModal";

const clientId = process.env.REACT_APP_CLIENT_ID;

// const postURL = "https://github.com/tts2610/group4-github-issue/issues";
const postURL =
  "https://api.github.com/repos/tts2610/group4-github-issue/issues";

function App() {
  const [token, setToken] = useState(null);
  const [show, setShow] = useState(false);
  const [alyssaShow, setAlyssaShow] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleAlyssaClose = () => setAlyssaShow(false);
  const handleAlyssaShow = () => setAlyssaShow(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [result, setResult] = useState([]);

  const [postUrl, setPostUrl] = useState("");

  const getToken = () => {
    const existingToken = localStorage.getItem("token"); //if we already have token from localStorage just get that
    const accessToken =
      window.location.search.split("=")[0] === "?access_token"
        ? window.location.search.split("=")[1].split("&")[0]
        : null; //read token value from URL

    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`
      );
    }

    if (accessToken) {
      //if you get token value from URL
      console.log(`New accessToken: ${accessToken}`);

      localStorage.setItem("token", accessToken); //save it to localstorage
      setToken(accessToken); //and set the state
    }

    if (existingToken) {
      //if you have token on your localstorage
      setToken(existingToken); //set the existing token
    }
  };

  const getIssues = async (issues, event) => {
    let url = `https://api.github.com/repos/${issues}/issues`;
    let data = await fetch(url);
    let result = await data.json();
    // console.log("what is result", result);
    if (result.message === "Not Found") {
      setWarningMessage(
        "Your search yields no result. Please enter a valid owner/repos"
      );
      handleShow();
      return;
    }
    if (result.length === 0) {
      setWarningMessage("This repository has no issues!");
      handleShow();
      return;
    }
    setResult(result);
    setPostUrl(issues);
  };

  const postNewIssues = async (title, body) => {
    const issue = { title: title, body: body };
    const url = `https://api.github.com/repos/${postURL}/issues`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(issue),
    });
    console.log("what is response", response);
    handleAlyssaClose();
  };

  useEffect(() => {
    getToken();
    getIssues("facebook/react");
  }, []);

  return (
    <div>
      {console.log("What is token", token)}
      <SmithNavigationBar getIssues={getIssues} input />
      <SmithWarningModal
        show={show}
        warningMessage={warningMessage}
        handleClose={handleClose}
        keyboard={false}
        onHide={handleClose}
      />
      <AlyssaModal postNewIssues={postNewIssues} alyssaShow={alyssaShow} handleAlyssaClose={handleAlyssaClose} handleAlyssaShow={handleAlyssaShow}/>
      <IssuesTable result={result} />
    </div>
  );
}

export default App;
