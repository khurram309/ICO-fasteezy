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
        centered className="users-modal welcomModal"
      >
        <Modal.Header closeButton className="d-flex flex-column-reverse pb-0">
          <Modal.Title>Welcome to UVO!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="gray85">Congratulations, you've successfully signed up for UVO! Your subscription includes:</div>
          <div className="list-view">
            <ul className="mt-3">
              <li>Limited access to the medical chat bot.</li>
              <li>Access to a limited number of Q&A</li>
              <li>No commitment, cancel anytime.</li>
              <li>Access to all features</li>
            </ul>
          </div>
          <div className="welcom-info mt-2">
            Additional Information:
            <ul>
              <li>You can manage your subscription and account settings on the Account page.</li>
              <li>Need assistance? Contact our support team at [support@email.com].</li>
            </ul>
          </div>
          <Button className="w-100" variant="primary">
            Start Using UVO
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Welcome;
