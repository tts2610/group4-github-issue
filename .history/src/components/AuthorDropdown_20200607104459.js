import React, { useState, useEffect } from "react";
import { Dropdown, FormControl, Row, Col } from "react-bootstrap";
export default function AuthorDropdown({ authorList, customizeResult }) {
  const [value, setValue] = useState("");
  const [myList, setMyList] = useState([]);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="/"
      ref={ref}
      style={{ color: "grey", textDecoration: "none" }}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <i className="fas fa-sort-down ml-1"></i>
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
  const handleOnClick = (user) => {
    setValue("");
    setMyList(authorList);
    customizeResult(user);
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
            className="mx-3 my-2"
            placeholder="Type to filter..."
            onChange={handleOnChange}
            value={value}
            style={{ width: "320px", marginLeft: "10px" }}
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
                  onClick={() => handleOnClick(x.login)}
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
        Author
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} style={{ width: "350px" }}></Dropdown.Menu>
    </Dropdown>
  );
}
