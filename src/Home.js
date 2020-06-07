import React, { useEffect, useState } from "react";
import "./App.css";
import AlyssaModal from "./components/AlyssaModal";
import IssuesTable from "./components/IssuesTable";
import SmithNavigationBar from "./components/SmithNavigationBar";
import SmithWarningModal from "./components/SmithWarningModal";

const clientId = process.env.REACT_APP_CLIENT_ID;
let link = "";

// const postURL = "https://github.com/tts2610/group4-github-issue/issues";
// const postURL =
//   "https://api.github.com/repos/tts2610/group4-github-issue/issues";

function Home() {
  const [token, setToken] = useState(null);
  const [show, setShow] = useState(false);
  const [alyssaShow, setAlyssaShow] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [activePage, setactivePage] = useState(0);
  const handleAlyssaClose = () => setAlyssaShow(false);
  const handleAlyssaShow = () => setAlyssaShow(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [result, setResult] = useState([]);

  const [postUrl, setPostUrl] = useState(
    "https://api.github.com/repos/tts2610/group4-github-issue/issues"
  );

  const [duyShow, setDuyShow] = useState(false);
  const handleDuyClose = () => setDuyShow(false);
  const handleDuyShow = () => setDuyShow(true);
  // for filters
  const [authorList, setAuthorList] = useState([]);
  const [labelList, setLabelList] = useState([]);

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

  const getIssues = async (issues, event, page) => {
    if (issues.includes("https://github.com/")) {
      issues = issues.slice(19);
      console.log(issues);
      link = `https://api.github.com/repos/${issues}/issues?page=${page}`;
    } else {
      link = `https://api.github.com/repos/${issues}/issues?page=${page}`;
    }
    setactivePage(page);
    let data = await fetch(link);
    let result = await data.json();
    console.log("what is result", result);
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
    setactivePage(page)
    setPostUrl(issues);

    // get Author List
    let tempAuthorList = [];
    let tempLabelList = [];
    result.forEach((element) => {
      tempAuthorList.push(element.user);
      tempLabelList = [...tempLabelList, ...element.labels];
    });
    const uniqueAuthorList = Array.from(
      new Set(tempAuthorList.map((a) => a.login))
    ).map((login) => {
      return tempAuthorList.find((a) => a.login === login);
    });

    const uniqueLabelList = Array.from(
      new Set(tempLabelList.map((a) => a.id))
    ).map((id) => {
      return tempLabelList.find((a) => a.id === id);
    });

    // console.log(uniqueLabelList);

    setAuthorList(uniqueAuthorList);
    setLabelList(uniqueLabelList);
  };

  const postNewIssues = async (title, body) => {
    if (title === "" || body === "") {
      setWarningMessage("Your issue has no content.");
      handleShow();
      return;
    }
    const issue = { title: title, body: body };
    const url = `https://api.github.com/repos/${postUrl}/issues`; //thay postUrl = "https://api.github.com/repos/tts2610/group4-github-issue/issues"
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

    // rerender ui after posting
    getIssues(postUrl);
  };

  const getComment = async (issueNumber) => {
    let url = `https://api.github.com/repos/${postUrl}/issues/${issueNumber}/comments`;
    let data = await fetch(url);
    let result = await data.json();
    console.log("HEY GET COMMENT", result)
  };
  //post comment here
  const postNewComment = async (body) => {
    const issue = { body: body }; //input here
    const url = `https://api.github.com/repos/tts2610/group4-github-issue/issues/${postUrl}/comments`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `token ${token}`
      },
      body: JSON.stringify(issue),
    });
    console.log("what is response", response);
  };


  useEffect(() => {
    getToken();
    getIssues("facebook/react", "", 1);
  }, []);

  return (
    <div>
      {console.log("What is token", token)}
      <SmithNavigationBar
        getIssues={getIssues}
        input
        handleAlyssaShow={handleAlyssaShow}
      />
      <SmithWarningModal
        show={show}
        warningMessage={warningMessage}
        handleClose={handleClose}
        keyboard={false}
        onHide={handleClose}
      />
      <AlyssaModal
        postNewIssues={postNewIssues}
        alyssaShow={alyssaShow}
        handleAlyssaClose={handleAlyssaClose}
        handleAlyssaShow={handleAlyssaShow}
      />
      <IssuesTable
        result={result}
        getIssues={getIssues}
        url={postUrl}
        authorList={authorList}
        labelList={labelList}
      />
    </div>
  );
}

export default Home;
