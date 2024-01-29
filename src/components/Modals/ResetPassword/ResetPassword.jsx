import React, { useRef, useState } from 'react';
import { Nav, Button, Modal, Form, ModalFooter } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

import './ResetPassword.scss';
import { apiRequests } from '../../../Common/apiRequests';
import { setToken } from '../../../Redux/actions/authActions';
import { deviceToken } from '../../../Common/deviceToken';
import Login from '../Login/Login.jsx';
import Logo from '../../../assets/images/fasteezy_logo.png';

function ResetPassword(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(props.showReset);
  const [showLogin, setShowLogin] = useState(false);
  const form  = useRef(null);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setShowLogin(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginForm = e.currentTarget;
    if(!loginForm.checkValidity()) {
      setValidated(true);
      return;
    }
    const endPoint = `login`;
    const data = new FormData(form.current);
    const userData = {
      user : {
        email: data.get('email'),
        password: data.get('password'),
        device_token: deviceToken
      }
    }
    await apiRequests(endPoint, 'post', userData)
    .then((response) => {
      if(response.status === 200) {
        dispatch(setToken(response));
        navigate('/chat');
      }
    })
    .catch((err) => {
      Notiflix.Notify.failure(err.response.data);
    })
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered className="users-modal"
      >
        <Modal.Header closeButton className="d-flex flex-column-reverse pb-0 border-0">
          <Modal.Title className='text-center px-4'>
            <h2 className='fw-700'>
              Forgot Password
            </h2>
            <p className='fs-small fc-gray93 fw-normal text-uppercase'>
              please enter the email you would like your password reset information sent to.
            </p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0 px-5 text-uppercase fs-small">
        <Form noValidate validated={validated} ref={form} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>enter your email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" name="email" required onChange={(e) => setEmail(e.target.value)} />
            <Form.Control.Feedback type="invalid">
            {email === '' ? 'Email is required!' : 'Enter valid email address!'}
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="w-100 rounded-pill" variant="primary" type="submit">
            Reset Your Password
          </Button>
          <div className="d-flex signup-text justify-content-center pt-4 gray85 text-uppercase fs-small fc-gray93">
            <a className="fw-normal fc-darkPrimary ps-2" role='button' onClick={() => {
              setShowLogin(true)
              setShow(false)
              }} >Back to Login</a>
          </div>
        </Form>
        </Modal.Body> 
        <ModalFooter className='border-0 justify-content-center'>
          <Link>
            <img src={Logo} alt="Logo" height={60} />
          </Link>
        </ModalFooter>
      </Modal>
      {showLogin && <Login showLogin={showLogin} />}
    </>
  );
}

export default ResetPassword;
