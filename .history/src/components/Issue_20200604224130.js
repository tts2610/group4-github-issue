import React from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
export default function Issue({ issue }) {
  console.log(issue);
  return (
    <>
      <li className="list-group-item lh-condensed issue">
        <Row>
          <Col sm={11} style={{ display: "flex" }}>
            <span>
              <i className="fal fa-exclamation-circle mr-3"></i>
            </span>
            <span>
              <h6 className="my-0">{issue.title}</h6>
              <small className="text-muted">
                #{issue.number} opened by {issue.user.login}
              </small>
            </span>
          </Col>
          <Col sm={1}>
            <span className="text-muted commentIssue">
              <i class="fal fa-comment-alt fa-sm-x2 issueCommentIcon"></i>
              <span className="issueCommentNumber">{issue.comments}</span>
            </span>
          </Col>
        </Row>
      </li>
    </>
  );
}
