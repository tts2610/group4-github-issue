import React from "react";
import { Row, Col } from "react-bootstrap";
import Moment from "react-moment";
export default function Issue({ issue }) {
  return (
    <>
      <li className="list-group-item lh-condensed issue">
        <Row>
          <Col sm={8} style={{ display: "flex" }}>
            <span>
              <i className="fal fa-exclamation-circle mr-3"></i>
            </span>
            <span>
              <div>
                <h6 className="my-0">
                  {issue.title}
                  <span>
                    {issue.labels.map((x, index) => (
                      <a
                        key={index}
                        className="d-inline-block issueLabel ml-2"
                        style={{
                          backgroundColor: `#${x.color}`,
                          color: "#000000",
                        }}
                        title={x.description}
                        href="/"
                      >
                        {x.name}
                      </a>
                    ))}
                  </span>
                </h6>
              </div>

              <small className="text-muted">
                #{issue.number} opened{" "}
                <Moment fromNow>{issue.created_at}</Moment> by{" "}
                {issue.user.login}
              </small>
            </span>
          </Col>
          <Col sm={4}>
            <span className="text-muted commentIssue">
              <i className="fal fa-comment-alt fa-sm-x2 issueCommentIcon"></i>
              <span className="issueCommentNumber ml-2">{issue.comments}</span>
            </span>
          </Col>
        </Row>
      </li>
    </>
  );
}
