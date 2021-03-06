import React from "react";
import { Row, Col } from "react-bootstrap";
import Moment from "react-moment";
import PopoverStickOnHover from "./PopoverStickOnHover";

const popOverStyling = {
  paddingLeft: "10px",
};
export default function Issue({ issue }) {
  const popover = (
    <div>
      <div className="overlay-header">facebook/react on June 4</div>
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <i className="fal fa-exclamation-circle mr-2"></i>
          </div>
          <div>
            <div>
              <span className="overlay-title">{issue.title}</span>
              <span className="overlay-number">#{issue.number}</span>
            </div>
            <div className="overlay-body mb-3">{issue.body}</div>
            <div>
              {issue.labels.map((x, index) => (
                <a
                  key={index}
                  className="d-inline-block issueLabel"
                  style={{
                    backgroundColor: `#${x.color}`,
                    color: "#000000",
                    textDecoration: "none",
                  }}
                  title={x.description}
                  href="/"
                >
                  {x.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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
                  <PopoverStickOnHover
                    component={popover}
                    placement="top"
                    onMouseEnter={() => {}}
                    delay={200}
                    style={popOverStyling}
                  >
                    <span className="issueTitle">{issue.title}</span>
                  </PopoverStickOnHover>
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
