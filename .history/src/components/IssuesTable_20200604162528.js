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
            <li className="list-group-item d-flex justify-content-between bg-light">
              {/* <div>
                <span>
                  <h6 className="my-0">502 Open</h6>
                </span>
                <span className="text-muted">8,716 Closed</span>
              </div> */}
              <Row>
                <Col></Col>
              </Row>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed issue">
              <div>
                <h6 className="my-0">
                  Bug: TypeError: Object(...) is not a function
                </h6>
                <small className="text-muted">
                  #19073 opened 3 hours ago by chwasiq0569
                </small>
              </div>
              {/* <span className="text-muted">$8</span> */}
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}
