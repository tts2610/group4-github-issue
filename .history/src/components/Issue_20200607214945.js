import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Moment from "react-moment";
import PopoverStickOnHover from "./PopoverStickOnHover";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssueDetail from "../IssueDetail";
import ReactMarkdown from "react-markdown";

const popOverStyling = {
  paddingLeft: "10px",
};
export default function Issue({ issue }) {
  let t = 0;
  const popover = (
    <div>
      <div className="overlay-header">
        {/repos\/(.*)/g.exec(issue.repository_url)[1]} on{" "}
        <Moment format="MMM D">{issue.created_at}</Moment>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div>
            <i className="fal fa-exclamation-circle mr-2"></i>
          </div>
          <div>
            <div>
              {" "}
              <span className="overlay-title">
                {issue.title.includes("_")
                  ? issue.title.replace(/_/g, function (match) {
                      t++;
                      return t === 4 ? "-" : match;
                    })
                  : issue.title}
              </span>{" "}
              <span className="overlay-number">#{issue.number}</span>
            </div>
            <div>
              <ReactMarkdown
                escapeHtml="true"
                skipHtml="false"
                rawSourcePos="true"
                className="markdown-body"
                source={issue.body}
              />
            </div>
            {/* <div className="mt-3">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <li className="list-group-item lh-condensed issue">
        <Row>
          <Col sm={9} style={{ display: "flex" }}>
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
                    <span className="issueTitle">
                      {/* DUY RESEARCH */}
                      <Link
                        to={{
                          pathname: "/IssueDetail/",
                          issue: issue,
                        }}
                      >
                        {" "}
                        {issue.title}
                      </Link>
                    </span>
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
          <Col
            sm={3}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <span>
              {issue.assignee != null && (
                <img
                  width={50}
                  height={50}
                  src={issue.assignee.avatar_url}
                  alt=""
                ></img>
              )}
            </span>

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
