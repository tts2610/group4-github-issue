import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const clientId = process.env.REACT_APP_CLIENT_ID;

export default class App extends Component {
  constructor(props) {
    super(props);
    const existingToken = sessionStorage.getItem("token");
    const accessToken =
      window.location.search.split("=")[0] === "?access_token"
        ? window.location.search.split("=")[1].split("&")[0]
        : null;

    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`
      );
    }

    if (accessToken) {
      console.log(`New accessToken: ${accessToken}`);

      sessionStorage.setItem("token", accessToken);
      this.state = {
        token: accessToken,
      };
    }

    if (existingToken) {
      this.state = {
        token: existingToken,
      };
    }
  }
  render() {
    return <div></div>;
  }
}
