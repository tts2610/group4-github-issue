import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import GithubLogo from "./github-logo.png";

export default function SmithNavigationBar(props) {
  let [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Navbar
        collapseOnSelect
        className="sticky top"
        expand="md"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img
            src={GithubLogo}
            width="30"
            height="30"
            className="smith d-inline-block align-top"
            id="logo-img"
            alt="Github logo"
            onClick="window.location.reload();"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Form
              inline
              onSubmit={(event) => {
                event.preventDefault();
                props.getIssues(
                  inputValue.toLowerCase().replace(/\s/g, ""),
                  event
                );
                setInputValue("");
              }}
            >
              {/* <FormControl id="search-bar" type="text"  placeholder="owner/repos" className="mr-sm-2" value={inputValue} onChange={event => setInputValue(event.target.value)} /> */}
              <input
                type="search"
                placeholder="Search or Jump to"
                className="mr-sm-2"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onClick={() => alert("aaa")}
              ></input>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
