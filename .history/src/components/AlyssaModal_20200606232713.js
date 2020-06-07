import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AlyssaModal(props) {
  const title = useRef();
  const body = useRef();
  return (
    <div>
      <Button
        variant="success"
        onClick={props.handleAlyssaShow}
        className="ml-5"
      >
        New Issue
      </Button>

      <Modal show={props.alyssaShow} onHide={props.handleAlyssaClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            ref={title}
            type="text"
            placeholder="Title"
            className="alySpacing"
          />
          <Form.Control
            ref={body}
            as="textarea"
            rows="3"
            placeholder="Leave a comment"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.handleAlyssaClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              props.postNewIssues(title.current.value, body.current.value);
            }}
          >
            Submit New Issue
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
