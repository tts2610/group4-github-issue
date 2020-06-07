import React, { Component, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Issue from "./Issue";
import Pagination from "react-js-pagination";
import AuthorDropdown from "./AuthorDropdown";

export default function IssuesTable({ result, getIssues, url, authorList }) {
  const [myResult, setMyResult] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  useEffect(() => {
    console.log(result);
    setMyResult(result);
  }, [result]);
  const [activePage, setactivePage] = useState(0);
  function handlePageChange(pageNumber) {
    setactivePage(pageNumber);
    console.log(pageNumber);
    getIssues(url, "", pageNumber);
  }

  function customizeResult(user) {
    setMyResult(
      myResult.filter((x) => {
        return x.user.login === user;
      })
    );
  }
  const filterTag = () =>{
    <div>filtering</div>
  }
  if (myResult != null)
    return (
      <div>
        {isFiltered?<filterTag/>:null}
      </div>
      
      <div className="issue-table">
        <Container>
          <ul className="list-group mb-3">
            <li className="list-group-item bg-light">
              <Row>
                <Col sm={6}>
                  <i className="fal fa-exclamation-circle mr-3"></i>
                  <span>502 Open</span>
                  <span className="text-muted ml-4">8,716 Closed</span>
                </Col>
                <Col sm={6}>
                  <div className="filter text-muted">
                    <span>
                      <AuthorDropdown
                        authorList={authorList}
                        customizeResult={customizeResult}
                      />
                    </span>

                    <span className="">Label</span>
                    <span className="">Projects</span>
                    <span className="">Milestones</span>
                    <span className="">Assignee</span>
                    <span>Sort</span>
                  </div>
                </Col>
              </Row>
            </li>
            {myResult.map(function (issue, index) {
              return <Issue key={index} issue={issue} />;
            })}
          </ul>
          <Pagination
            className="pagination"
            hideDisabled
            prevPageText="Prev"
            nextPageText="Next"
            firstPageText="First"
            lastPageText="Last"
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={1000}
            pageRangeDisplayed={5}
            onChange={handlePageChange.bind(this)}
            itemClass="page-item"
            linkClass="page-link"
          />
        </Container>
      </div>
    );
  else {
    return <div></div>;
  }
}
