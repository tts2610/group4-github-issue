import React, { useState, useEffect } from "react";
import SmithNavigationBar from "./components/SmithNavigationBar";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from "react-moment";
const ReactMarkdown = require("react-markdown");
export default function IssueDetail() {
  let { issueId } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComment(issueId);
  }, []);

  const getComment = async (issueId) => {
    let url = `https://api.github.com/repos/facebook/react/issues/${issueId}/comments`;
    let data = await fetch(url);
    let result = await data.json();
    console.log("HEY GET COMMENT", result);
    setComments(result);
  };

  const [token, setToken] = useState(null);
  const postNewComment = async (body) => {
    const issue = { body: body }; //input here
    const url = `https://api.github.com/repos/tts2610/group4-github-issue/issues/${issueId}/comments`;
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

  return (
    // ve bang o day
    <div>
      <SmithNavigationBar input />
      <h1>{issueId}</h1>
      <section class="timeline">
        <div class="container">
          {comments.map((x, index) => {
            if (index % 2 === 0) {
              return (
                <div class="timeline-item">
                  <div class="timeline-img"></div>
                  <div class="timeline-content timeline-card js--fadeInLeft">
                    <div
                      class="timeline-img-header"
                      style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${x.user.avatar_url}) center center no-repeat`,
                      }}
                    >
                      <h2>{x.user.login}</h2>
                    </div>
                    <div class="date">
                      <Moment fromNow>{x.created_at}</Moment>
                    </div>

                    {/* {x.body.replace(/```js((.|\n)*)```\n/, (match) => {
                        console.log("aaa");
                        return (
                          <div style={{ backgroundColor: "#f6f8fa" }}>
                            {console.log(match[1])}
                          </div>
                        );
                      })} */}
                    <ReactMarkdown source={x.body} />
                  </div>
                </div>
              );
            } else {
              return (
                <div class="timeline-item">
                  <div class="timeline-img"></div>

                  <div class="timeline-content timeline-card js--fadeInRight">
                    <div
                      class="timeline-img-header"
                      style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${x.user.avatar_url}) center center no-repeat`,
                      }}
                    >
                      <h2>{x.user.login}</h2>
                    </div>
                    <div class="date">
                      <Moment fromNow>{x.created_at}</Moment>
                    </div>
                    <p>{x.body}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
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
