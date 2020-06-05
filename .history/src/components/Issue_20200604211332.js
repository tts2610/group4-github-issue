import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";

export default function Issue({ issue }) {
  return (
    <div>
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
    </div>
  );
}
