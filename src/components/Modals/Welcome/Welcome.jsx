import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import './Welcome.scss';

function Welcome(props) {
  const [show, setShow] = useState(props.showWelcome);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered className="users-modal"
      >
        <Modal.Header closeButton className="d-flex flex-column-reverse pb-0">
          <Modal.Title>Welcome to UVO!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Welcome;