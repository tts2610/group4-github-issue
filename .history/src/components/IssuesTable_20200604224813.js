import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Issue from "./Issue";

export default class IssuesTable extends Component {
  state = {
    issueList: [],
  };
  componentDidMount() {
    this.fetchIssues();
  }

  fetchIssues() {
    axios
      .get(`https://api.github.com/repos/facebook/react/issues`)
      .then((res) => {
        const issues = res.data;
        // console.log(issues);
        this.setState({
          issueList: issues,
        });
      });
  }
  render() {
    return (
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
            {this.state.issueList.map(function (issue, index) {
              return <Issue key={index} issue={issue} />;
            })}
          </ul>
        </Container>
      </div>
    );
  }
}
