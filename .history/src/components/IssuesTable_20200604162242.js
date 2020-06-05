import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class IssuesTable extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="issue-table">
        <Container>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div>
                <h6 className="my-0">502 Open</h6>
                <span className="text-muted">8,716 Closed</span>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed issue">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed issue">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-condensed issue">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">-$5</span>
            </li>
          </ul>
        </Container>
      </div>
    );
  }
}
