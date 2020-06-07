import React, { Component, useState } from "react";
import axios from "axios";
import { Dropdown, FormControl, Row, Col } from "react-bootstrap";
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    style={{ textDecoration: "none", color: "grey" }}
    href="/"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <i className="fas fa-sort-down ml-1"></i>
  </a>
));
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <div
          className="mx-2 mb-2 w-auto"
          style={{ fontSize: "15px", fontWeight: "500" }}
        >
          Filter by author
        </div>
        <FormControl
          autoFocus
          className="mb-3"
          placeholder="Filter users"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          style={{ width: "300px", marginLeft: "10px" }}
        />
        <ul
          className="list-unstyled"
          style={{ height: "150px", overflow: "auto" }}
        >
          {/* {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )} */}
          {children.map((x) => {
            return (
              <Row
                className="mx-2 authorRow"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottom: "1px solid lightgrey",
                  hover: "grey",
                }}
              >
                <Col
                  sm={3}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <img
                    src="https://avatars0.githubusercontent.com/u/19622784?s=40&v=4"
                    alt=""
                    width="20"
                    height="20"
                    style={{ marginRight: "-20px" }}
                  ></img>
                </Col>
                <Col sm={9}>{x}</Col>
              </Row>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default function AuthorDropdown({ authorList }) {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Author
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} style={{ width: "320px" }}>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
        <Dropdown.Item eventKey="3">Orange</Dropdown.Item>
        <Dropdown.Item eventKey="4">Red-Orange</Dropdown.Item>
        <Dropdown.Item eventKey="5">Blue</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
