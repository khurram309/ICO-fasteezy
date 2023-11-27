import React, { useState } from 'react';
import { Nav, Button, Modal, Form } from 'react-bootstrap';


import './Login.scss';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link onClick={handleShow}>Login</Nav.Link>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered className="users-modal"
      >
        <Modal.Header closeButton className="d-flex flex-column-reverse pb-0">
          <Modal.Title>Let's Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-3">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address*</Form.Label>
            <Form.Control type="email" placeholder="Insert your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Insert your password" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Sign in
          </Button>
          <div className="text-center pt-4 gray85">
            Don't have an account? <a className="fw-semibold ms-2" href="#register">Register</a>
          </div>
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
