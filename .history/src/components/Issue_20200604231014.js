import React from "react";
import { Row, Col } from "react-bootstrap";
import Moment from "react-moment";
export default function Issue({ issue }) {
    const labelStyling = 
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
              <a class="d-inline-block IssueLabel" style={
        backgroundColor: issue.labels.color,
        color: '#000000'
    } title="A potential issue that we haven't yet confirmed as a bug" href="/facebook/react/issues?q=is%3Aissue+is%3Aopen+label%3A%22Status%3A+Unconfirmed%22">Status: Unconfirmed</a>
              <small className="text-muted">
                #{issue.number} opened{" "}
                <Moment fromNow>{issue.created_at}</Moment> by{" "}
                {issue.user.login}
              </small>
            </span>
          </Col>
          <Col sm={1}>
            <span className="text-muted commentIssue">
              <i className="fal fa-comment-alt fa-sm-x2 issueCommentIcon"></i>
              <span className="issueCommentNumber">{issue.comments}</span>
            </span>
          </Col>
        </Row>
      </li>
    </>
  );
}
