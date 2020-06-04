import React, { Component } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class IssuesTable extends Component {
  componentDidMount() {}
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
                <Col sm={3}>
                  <span>
                    <i className="fal fa-exclamation-circle mr-2"></i>502 Open
                  </span>
                  <span className="ml-3 text-muted">8,716 Closed</span>
                </Col>
                <Col sm={9}>
                  <div className="filter text-muted">
                    <span className="mr-5">Author</span>
                    <span className="mr-5">Label</span>
                    <span className="mr-5">Projects</span>
                    <span className="mr-5">Milestones</span>
                    <span className="mr-5">Assignee</span>
                    <span>Sort</span>
                  </div>
                </Col>
              </Row>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed issue">
              <Row>
                <Col sm={1}>
                  <i className="fal fa-exclamation-circle mr-2"></i>
                </Col>
                <Col sm={11}>
                  <h6 className="my-0">
                    Bug: TypeError: Object(...) is not a function
                  </h6>
                  <small className="text-muted">
                    #19073 opened 3 hours ago by chwasiq0569
                  </small>
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
