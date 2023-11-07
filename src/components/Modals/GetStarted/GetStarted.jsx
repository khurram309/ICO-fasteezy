import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import './GetStarted.scss';
import PaymentInformation from '../PaymentInformation/PaymentInformation';

function GetStarted() {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onNextClick = () => {
    console.log('hasdf');
    setShowModal(true);
    setShow(false);
    // return(
    // )
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Get Started Free</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered className="users-modal"
      >
        <Modal.Header closeButton className="d-flex flex-column-reverse pb-0">
          <Modal.Title>Create Your UVO Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="email" placeholder="Insert name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address*</Form.Label>
            <Form.Control type="email" placeholder="Insert your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Insert your password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm your password" />
          </Form.Group>
          <Form.Group className="mb-4 pb-2 mt-3 fw-semibold" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
          </Form.Group>
          <Button className="w-100" variant="primary" onClick={onNextClick}>
            Next
          </Button>
          {/* <PaymentInformation onClick={buttonClick} /> */}
          <div className="text-center pt-4">
            Already have an account? <a className="fw-medium ms-2" href="#register">Log in</a>
          </div>
        </Form>
        </Modal.Body>
      </Modal>
      { showModal && <PaymentInformation showModal={showModal} /> }
    </>
  )
}

export default GetStarted;
