import React from "react";
import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Tab,ListGroup,Sonnet } from "react-bootstrap";
export default function IssueDetail() {
  let { issueId } = useParams();
  return (
    // ve bang o day
    <div>
      <h1>{issueId}</h1>

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
                {/* <Sonnet /> */}

                Write
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                Review
                {/* <Sonnet /> */}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
