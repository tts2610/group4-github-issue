/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import PupHubLogo from "./pup-hub-logo.png";

export default function SmithNavigationBar(props) {
  let [inputValue, setInputValue] = useState("");

  return (
    <Navbar
      collapseOnSelect
      className="sticky-top"
      expand="md"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <img
          src={PupHubLogo}
          width="30"
          height="30"
          className="smith d-inline-block align-top"
          id="logo-img"
          alt="Github logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Form
            inline
            onSubmit={(event) => {
              inputValue === "tts" &&
                setInputValue("tts2610/group4-github-issue");
              if (window.location.pathname === "/IssueDetail/") {
                event.preventDefault();
                setInputValue("");
                window.location.href = "/";
                return;
              } else if (window.location.pathname === "/") {
                alert(inputValue);
                {
                  event.preventDefault();
                  props.getIssues(
                    inputValue.toLowerCase().replace(/\s/g, ""),
                    event,
                    1
                  );
                  setInputValue("");
                }
              }
            }}
          >
            <input
              type="search"
              placeholder="Search or Jump to"
              className="mr-sm-2"
              value={inputValue}
              autoComplete="on"
              onChange={(event) => setInputValue(event.target.value)}
            ></input>
          </Form>
          <Nav.Link href="/">Issues</Nav.Link>
          <Nav.Link href="/IssueDetail">Comments</Nav.Link>
          <Nav.Link href="https://github.com/marketplace">Marketplace</Nav.Link>
          <Nav.Link href="https://github.com/explore">Explore</Nav.Link>
        </Nav>
        <Form inline>
          <Button
            variant="success"
            onClick={() => {
              if (window.location.pathname === "/IssueDetail") {
                window.location.href = "/";
              } else if (window.location.pathname === "/") {
                props.handleAlyssaShow();
              }
            }}
          >
            New Issue
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

{
  /* <input
                type="search"
                placeholder="Search or Jump to"
                className="mr-sm-2"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
              ></input> */
}
