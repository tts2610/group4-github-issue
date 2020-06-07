import React, { useState } from "react";
import SmithNavigationBar from "./components/SmithNavigationBar";
import SmithWarningModal from "./components/SmithWarningModal";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useEffect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Tab, ListGroup, Sonnet } from "react-bootstrap";
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
              <a class="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content timeline-card js--fadeInRight">
              <div class="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div class="date">25 MAY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a class="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInLeft">
              <div class="date">3 JUN 2016</div>
              <h2>Quote</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                explicabo debitis omnis dolor iste fugit totam quasi inventore!
              </blockquote>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInRight">
              <h2>Title</h2>
              <div class="date">22 JUN 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a class="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content timeline-card js--fadeInLeft">
              <div class="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div class="date">10 JULY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a class="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content timeline-card js--fadeInRight">
              <div class="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div class="date">30 JULY 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a class="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInLeft">
              <div class="date">5 AUG 2016</div>
              <h2>Quote</h2>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
                explicabo debitis omnis dolor iste fugit totam quasi inventore!
              </blockquote>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content timeline-card js--fadeInRight">
              <div class="timeline-img-header">
                <h2>Card Title</h2>
              </div>
              <div class="date">19 AUG 2016</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a class="bnt-more" href="javascript:void(0)">
                More
              </a>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-img"></div>

            <div class="timeline-content js--fadeInLeft">
              <div class="date">1 SEP 2016</div>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
                ipsa ratione omnis alias cupiditate saepe atque totam aperiam
                sed nulla voluptatem recusandae dolor, nostrum excepturi amet in
                dolores. Alias, ullam.
              </p>
              <a class="bnt-more" href="javascript:void(0)">
                More
              </a>
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
