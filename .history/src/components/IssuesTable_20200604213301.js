import React, { Component } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default class IssuesTable extends Component {
  componentDidMount() {
    this.fetchIssues();
  }

  fetchIssues() {
    axios
      .get(`https://api.github.com/repos/facebook/react/issues`)
      .then((res) => {
        const issues = res.data;
        console.log(issues);
      });
  }
  render() {
    return (
      <div className="issue-table">
        <Container>
          <ul className="list-group mb-3">
            <li className="list-group-item bg-light">
              {/* <div>
                <span>
                  <h6 className="my-0">502 Open</h6>
                </span>
                <span className="text-muted">8,716 Closed</span>
              </div> */}
              <Row>
                <Col sm={6}>
                  <i className="fal fa-exclamation-circle mr-5"></i>
                  <span>502 Open</span>
                  <span className="text-muted ml-4">8,716 Closed</span>
                </Col>
                <Col sm={6}>
                  <div className="filter text-muted">
                    <span className="">Author</span>
                    <span className="">Label</span>
                    <span className="">Projects</span>
                    <span className="">Milestones</span>
                    <span className="">Assignee</span>
                    <span>Sort</span>
                  </div>
                </Col>
              </Row>
            </li>
            <li className="list-group-item lh-condensed issue">
              <Row>
                <Col sm={1}>
                  <i className="fal fa-exclamation-circle mr-2"></i>
                </Col>
                <Col sm={10}>
                  <h6 className="my-0">
                    Bug: TypeError: Object(...) is not a function
                  </h6>
                  <small className="text-muted">
                    #19073 opened 3 hours ago by chwasiq0569
                  </small>
                </Col>
                <Col sm={1}>
                  <span className="text-muted commentIssue">
                    <i class="fal fa-comment-alt fa-sm-x2"></i>
                    <span className="issueCommentNumber">3</span>
                  </span>
                </Col>
              </Row>
              {/* <span className="text-muted">$8</span> */}
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}
