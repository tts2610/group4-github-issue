import React, { useState, useEffect } from "react";
import SmithNavigationBar from "./components/SmithNavigationBar";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function IssueDetail() {
  let { issueId } = useParams();
  useEffect(() => {
    getComment(issueId);
  }, []);

  const getComment = async (issueId) => {
    let url = `https://api.github.com/repos/facebook/react/issues/${issueId}/comments`;
    let data = await fetch(url);
    let result = await data.json();
    console.log("HEY GET COMMENT", result);
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
          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInLeft">
              <h2>Title</h2>
              <div class="date">1 MAY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
            </div>
          </div>
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
