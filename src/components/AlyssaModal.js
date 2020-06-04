import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AlyssaModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="success" onClick={handleShow}>
                New Issue
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Issue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="email" placeholder="Title" className="alySpacing"/>
                    <Form.Control as="textarea" rows="3" placeholder="Leave a comment"/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="success" onClick={props.postNewIssues}>
                        Submit New Issue
          </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
