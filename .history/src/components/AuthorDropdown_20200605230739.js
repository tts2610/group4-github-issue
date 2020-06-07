import React, { Component, useState, useEffect } from "react";
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

export default class AuthorDropdown extends Component {
  constructor(props) {
    super(props);
    this.setState({ myList: this.props.authorList });
  }
  CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      console.log(this.state.myList);
      //   const [value, setValue] = useState("");
      //   console.log(authorList);
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
            onChange={this.handleOnChange}
            // value={value}
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
            {this.state.myList.map((x, index) => {
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
});

  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Author
        </Dropdown.Toggle>

        <Dropdown.Menu as={this.CustomMenu} style={{ width: "320px" }}>
          <Dropdown.Item eventKey="1">Red,blue</Dropdown.Item>
          <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="3">Orange</Dropdown.Item>
          <Dropdown.Item eventKey="4">Red-Orange</Dropdown.Item>
          <Dropdown.Item eventKey="5">Blue</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
