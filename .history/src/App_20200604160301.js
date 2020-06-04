import React, { useEffect, useState } from "react";
import "./App.css";
import IssuesTable from "./components/IssuesTable";

const clientId = process.env.REACT_APP_CLIENT_ID;
const postURL = "https://github.com/tts2610/group4-github-issue/issues";

function App() {
  const [token, setToken] = useState(null);

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

  let getIssues = async () => {
    console.log("aas");
    let url = `https://api.github.com/repos/facebook/react/issues`;
    let data = await fetch(url);
    let result = await data.json();
    console.log("what is result", result);
  };

  const postNewIssues = async () => {
    const issue = { title: "here is the issue", body: "help me fix this" };
    const url = postURL;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(issue),
    });
    console.log("what is response", response);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div>
      {console.log("What is token", token)}
      <button onClick={() => getIssues()}>Search</button>
      <button onClick={() => postNewIssues()}>Post</button>
      <IssuesTable />
    </div>
  );
}

export default App;
