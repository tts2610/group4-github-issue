import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Dropdown, FormControl, Row, Col } from "react-bootstrap";

export default function AuthorDropdown({ authorList }) {
  const [value, setValue] = useState("");
  const [myList, setMyList] = useState([]);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="/"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));
  useEffect(() => {
    setMyList(authorList);
  }, [authorList]);
  const handleOnChange = (e) => {
    setValue(e.target.value);
    authorList = authorList.filter((x) => x.login.includes(e.target.value));
    setMyList(authorList);
    // console.log(e.target.value);
  };

  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
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
            onChange={handleOnChange}
            value={value}
            style={{ width: "300px", marginLeft: "10px" }}
          />
          <ul
            className="list-unstyled"
            style={{ height: "150px", overflow: "auto" }}
          >
            {myList.map((x, index) => {
              return (
                <Row
                  className="mx-2 authorRow"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottom: "1px solid rgba(236, 236, 236, 1)",
                    hover: "grey",
                  }}
                  key={index}
                >
                  <Col
                    sm={3}
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <img
                      src={x.avatar_url}
                      alt=""
                      width="20"
                      height="20"
                      style={{ marginRight: "-20px" }}
                    ></img>
                  </Col>
                  <Col sm={9}>{x.login}</Col>
                </Row>
              );
            })}
          </ul>
        </div>
      );
    }
  );

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Custom toggle
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Orange
        </Dropdown.Item>
        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
