import React from 'react'
import {Modal,Button} from 'react-bootstrap'


export default function SmithWarningModal(props) {

    return (
        <div>
        <Modal
        {...props}
        backdrop="static"
        autofocus
        >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {props.warningMessage}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
