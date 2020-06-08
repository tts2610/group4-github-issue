import React, { useState, useEffect } from "react";
import SmithNavigationBar from "./components/SmithNavigationBar";
import {
  Card,
  Container,
  Col,
  Row,
  Nav,
  Button,
  Form,
  Spinner,
} from "react-bootstrap";

import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment";
import axios from "axios";
const ReactMarkdown = require("react-markdown");

const clientId = process.env.REACT_APP_CLIENT_ID;

export default function IssueDetail(props) {
  // const [currentIssue, setCurrentIssue] = useState(null)
  const [comments, setComments] = useState([]);
  const [textArea, setTextArea] = useState("");
  const [token, setToken] = useState(null);
  const [isPosting, setIsPosting] = useState(false);
  let { issue } = useLocation();

  const getComment = async (thisIssue) => {
    if (thisIssue === undefined) {
      window.location.href = "/";
      return;
    }
    // let url = thisIssue;
    // let data = await fetch(url);
    // let result = await data.json();
    // console.log("HEY GET COMMENT", result);
    // setComments(result);
    console.log(thisIssue);
    axios
      .get(thisIssue)
      .then((res) => {
        const result = res.data;
        console.log(result);
        setComments(result);
      })
      .then(() => setIsPosting(false));
  };

  const getToken = () => {
    const existingToken = localStorage.getItem("token"); //if we already have token from localStorage just get that
    const accessToken =
      window.location.search.split("=")[0] === "?access_token"
        ? window.location.search.split("=")[1].split("&")[0]
        : null; //read token value from URL

    if (!accessToken && !existingToken) {
      window.location.replace(
        `https://github.com/login/oauth/authorize?scope=user:email,repo&client_id=${clientId}`
      );
    }

    if (accessToken) {
      //if you get token value from URL
      console.log(`New accessToken: ${accessToken}`);

      localStorage.setItem("token", accessToken); //save it to localstorage
      setToken(accessToken); //and set the state
    }

    if (existingToken) {
      //if you have token on your localstorage
      setToken(existingToken); //set the existing token
    }
  };

  const postNewComment = async () => {
    setIsPosting(true);
    setTextArea("");
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `token ${token}`,
    };

    const theIssue = { body: textArea }; //input here
    const url = issue.comments_url;
    axios
      .post(url, theIssue, { headers: headers })
      .then((res) => console.log(res));
    // const response = await fetch(url, {
    //   method: "POST",

    //   body: JSON.stringify(theIssue),
    // });
    // console.log("what is response", response);
    // getComment(issue.comments_url);
  };

  const handleChange = (e) => {
    setTextArea(e.target.value);
  };

  useEffect(() => {
    getToken();
    getComment(
      issue
        ? issue.comments_url
        : "https://api.github.com/tts2610/group4-github-issue/issues/30"
    );
  }, []);

  if (issue !== undefined)
    return (
      <div>
        <SmithNavigationBar input />
        <Container>
          <div id="issueSection">
            <Row>
              <Col sm={1}></Col>
              <Col sm={11}>
                <div id="issue-big">
                  <span className="issue-big-title">{issue.title}</span>
                  <span id="issue-big-number">#{issue.number}</span>
                </div>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col sm={1}></Col>
              <Col sm={11}>
                <Button className="mr-2" variant="success">
                  <i className="fal fa-exclamation-circle"></i> Open
                </Button>
                <span style={{ fontWeight: "bolder" }}>{issue.user.login}</span>{" "}
                created this issue <Moment fromNow>{issue.created_at}</Moment> -{" "}
                {issue.comments} comments.
              </Col>
            </Row>
            <hr />
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
                    commented <Moment fromNow>{issue.created_at}</Moment>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <ReactMarkdown source={issue.body} escapeHtml={false} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <div id="commentSection">
            {comments.map((comment, index) => {
              return (
                <Row className="mb-5" key={index}>
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
          </div>
          <div className="mb-5" id="postCommentSection">
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
                    <Form.Group controlId="commentTextArea">
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment"
                        rows="3"
                        onChange={handleChange}
                        value={textArea}
                      />
                    </Form.Group>
                    <Button variant="success" onClick={postNewComment}>
                      {isPosting && (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="mr-2"
                        />
                      )}
                      Comment
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  else {
    window.location.href = "/";
    return;
  }
}
