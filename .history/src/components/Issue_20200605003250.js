import React from "react";
import { Row, Col, Popover, OverlayTrigger } from "react-bootstrap";
import Moment from "react-moment";

export default function Issue({ issue }) {
  const popover = (
    <Popover id="popover-basic">
      {/* <Popover.Title as="h3">Popover right</Popover.Title> */}
      <Popover.Content>
        <Row className="overlay-title">facebook/react on June 4</Row>
        <Row style={{ display: "flex" }}>
          <Col sm={1}>
            <i className="fal fa-exclamation-circle"></i>
          </Col>
          <Col sm={11}>
            <Row>
              {issue.title}#{issue.number}
            </Row>
            <Row className="overlay-body">{issue.body}</Row>
            <Row>
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
            </Row>
          </Col>
        </Row>
      </Popover.Content>
    </Popover>
  );
  return (
    <>
      <li className="list-group-item lh-condensed issue">
        <Row>
          <Col sm={8}>
            <span>
              <i className="fal fa-exclamation-circle mr-3"></i>
            </span>
            <span>
              <div>
                <h6 className="my-0">
                  <OverlayTrigger
                    trigger={["hover", "focus"]}
                    placement="top"
                    overlay={popover}
                  >
                    <span className="issueTitle"> {issue.title}</span>
                  </OverlayTrigger>
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
              <span className="issueCommentNumber ml-1">{issue.comments}</span>
            </span>
          </Col>
        </Row>
      </li>
    </>
  );
}
