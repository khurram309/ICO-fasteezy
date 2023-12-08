import React, { useRef, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';

import './GetStarted.scss';
import PaymentInformation from '../PaymentInformation/PaymentInformation';
import Login from '../Login/Login';
import { apiRequests } from '../../../Common/apiRequests';
import { setSignUp } from '../../../Redux/actions/authActions';

function GetStarted(props) {
  const dispatch = useDispatch();
  const [showSignUp, setShowSignUp] = useState(props.showRegister);
  const [showLogin, setShowLogin] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const form  = useRef(null);
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleClose = () => setShowSignUp(false);
  const handleShow = () => {
    setShowSignUp(true);
    setShowPayment(false);
    setShowLogin(false);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setPasswordsMatch(password === e.target.value);
  };

  const onNextClick = async (e) => {
    e.preventDefault();
    const signupForm = e.currentTarget;
    if(!signupForm.checkValidity()) {
      setValidated(true);
      return;
    }
    const endPoint = `signup`;
    const data = new FormData(form.current);
    const userData = {
      user: {
        first_name: data.get('first_name'),
        last_name: data.get('last_name'),
        email: data.get('email'),
        password: data.get('password'),
        password_confirmation: data.get('confirm_password')
      }
    }
    await apiRequests(endPoint, 'post', userData)
    .then((response) => {
      if(response.status === 200) {
        dispatch(setSignUp(response));
        setShowPayment(true);
        setShowSignUp(false);
      }
    })
    .catch((err) => {
      Notiflix.Notify.failure(err.response.data.status.message);
    })
  }

  return (
    <>
      {props.source == 'home' ? (
        <Button variant="primary mt-lg-0 mt-5" onClick={handleShow}>Get Started</Button>
      ) : props.source == 'footer' ? (
        <Button variant="primary mt-lg-0 mt-5" onClick={handleShow}>Sign Up Now</Button>
      ) : (
        !props.showRegister && <Button variant="primary mt-lg-0 mt-5" onClick={handleShow}>Get Started Free</Button>
      )}

      <Modal
        show={showSignUp}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered className="users-modal"
      >
        <Modal.Header closeButton className="d-flex flex-column-reverse pb-0">
          <Modal.Title>Create Your UVO Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated} ref={form} onSubmit={onNextClick}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Insert first name" name="first_name" required />
            <Form.Control.Feedback type="invalid">
              First name is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Insert last name" name="last_name" required />
            <Form.Control.Feedback type="invalid">
              Last name is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email Address*</Form.Label>
            <Form.Control type="email" placeholder="Insert your email" name="email" required />
            <Form.Control.Feedback type="invalid">
              Email is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Insert your password" name="password" required onChange={handlePasswordChange} />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm your password" name="confirm_password" required onChange={handleConfirmPasswordChange} />
            <Form.Control.Feedback type="invalid">
              Your name is required!
            </Form.Control.Feedback>
            {passwordsMatch ? null : <Form.Text className="text-danger">Passwords do not match</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-4 pb-2 mt-3 fw-semibold" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree to Terms and Conditions" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Next
          </Button>
          {/* <PaymentInformation onClick={buttonClick} /> */}
          <div className="text-center pt-4 gray85">
            Already have an account? <a className="fw-medium ms-2" role='button' onClick={() => {
              setShowLogin(true)
              setShowSignUp(false)
              }} >Log in</a>
          </div>
        </Form>
        </Modal.Body>
      </Modal>
      { showPayment && <PaymentInformation showModal={showPayment} /> }
      { showLogin && <Login showLogin={showLogin} /> }
    </>
  )
}

export default GetStarted;
