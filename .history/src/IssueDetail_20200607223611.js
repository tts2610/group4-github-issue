import React, { useState, useEffect } from "react";
import SmithNavigationBar from "./components/SmithNavigationBar";
import { Card, Container, Col, Row, Nav, Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment";
const ReactMarkdown = require("react-markdown");

export default function IssueDetail(props) {
  // const [currentIssue, setCurrentIssue] = useState(null)
  const [comments, setComments] = useState([]);
  let { issue } = useLocation();

  const getComment = async (issue) => {
    if (issue === undefined) {
      window.location.href = "/";
      return;
    }
    let url = issue;
    let data = await fetch(url);
    let result = await data.json();
    console.log("HEY GET COMMENT", result);
    setComments(result);
  };

  // const postNewComment = async (body) => {
  //   const issue = { body: body }; //input here
  //   const url = issue.comments_url;
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Authorization: `token ${token}`,
  //     },
  //     body: JSON.stringify(issue),
  //   });
  //   console.log("what is response", response);
  // };

  useEffect(() => {
    console.log("aaa");
    getComment(
      issue
        ? issue.comments_url
        : "https://api.github.com/facebook/react/issues/19094"
    );
  }, []);

  if (issue !== undefined)
    return (
      <div>
        <SmithNavigationBar input />

        <Container id="issueSection">
          <Row>
            <Col>
              <div id="issue-big">
                <span className="issue-big-title">{issue.title}</span>
                <span id="issue-big-number">#{issue.number}</span>
              </div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col sm={1}>
              <img
                src={issue.user.avatar_url}
                alt=""
                width="50"
                height="50"
              ></img>
            </Col>
            <Col sm={11}>
              <Card>
                <Card.Header>
                  <span style={{ fontWeight: "bolder" }}>
                    {issue.user.login}
                  </span>{" "}
                  created this issue on{" "}
                  <Moment fromNow>{issue.created_at}</Moment> - {issue.comments}{" "}
                  comments.
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <ReactMarkdown source={issue.body} escapeHtml={false} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container id="commentSection">
          {comments.map((comment) => {
            return (
              <Row className="mb-5">
                <Col sm={1}>
                  <img
                    src={comment.user.avatar_url}
                    alt=""
                    width="50"
                    height="50"
                  ></img>
                </Col>
                <Col sm={11}>
                  <Card>
                    <Card.Header>
                      <span style={{ fontWeight: "bolder" }}>
                        {comment.user.login}
                      </span>{" "}
                      commented <Moment fromNow>{comment.created_at}</Moment>
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>
                        <ReactMarkdown
                          source={comment.body}
                          escapeHtml={false}
                        />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </Container>
        <Container id="postCommentSection">
          <Row>
            <Col sm={1}></Col>
            <Col sm={11}>
              <Card>
                <Card.Header>
                  <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                      <Nav.Link href="#first">Write</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#second" disabled>
                        Preview
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment"
                      rows="3"
                    />
                  </Form.Group>
                  <Button variant="success">Comment</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  else {
    window.location.href = "/";
    return;
  }
}
