import React, { useState, useEffect } from "react";
import SmithNavigationBar from "./components/SmithNavigationBar";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment";
const ReactMarkdown = require("react-markdown");


export default function IssueDetail(props) {
  // const [currentIssue, setCurrentIssue] = useState(null)
  const [comments, setComments] = useState([]);
  let { issue } = useLocation();

  const getIssue = () =>{
    console.log(issue )
    getComment(issue? issue.comments_url : "https://api.github.com/facebook/react/issues/19094")
  }

  const getComment = async (issue) => {
    if (issue === undefined){
      window.location.href = "/";
      return
    }
    let url = issue;
    let data = await fetch(url);
    let result = await data.json();
    console.log("HEY GET COMMENT", result);
    setComments(result);
  };

  const [token, setToken] = useState(null);

  const postNewComment = async (body) => {
    const issue = { body: body }; //input here
    const url = issue.comments_url;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `token ${token}`,
      },
      body: JSON.stringify(issue),
    });
    console.log("what is response", response);
  };

  const [] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    getIssue()
    }, []);

    if (issue !== undefined)
    return (
    <div>
      <SmithNavigationBar input />
      <div id="issue-big"><span className="issue-big-title">{issue.title}</span><span id="issue-big-number">#{issue.number}</span></div>
     <Container id="issueSection">
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
                    created this issue on <Moment fromNow>{issue.created_at}</Moment> - {issue.comments} comments.
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
                      <ReactMarkdown source={comment.body} escapeHtml={false} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
  else {
    window.location.href = "/";
    return
  }
}

{
  /* <h1>{issueId}</h1>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Link 1
        </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2  
        </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                

                Write
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                Review
                
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container> */
}
