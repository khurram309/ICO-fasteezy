import React, { useRef, useState } from 'react';
import { Button, Modal, Form, ModalFooter } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import './GetStarted.scss';
import Login from '../Login/Login';
import { apiRequests } from '../../../Common/apiRequests';
import { setSignUp } from '../../../Redux/actions/authActions';
import { deviceToken } from '../../../Common/deviceToken';
import { Link, useNavigate } from 'react-router-dom';
import  Google  from '../../../assets/images/g-logo.png'
import  FB  from '../../../assets/images/fb-logo.png'
import Logo from '../../../assets/images/fasteezy_logo.png';

function GetStarted(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector(state => state.auth);
  const { showPayment, user } = authState;
  const [email, setEmail] = useState('');
  const [showSignUp, setShowSignUp] = useState(props.showRegister);
  const [showLogin, setShowLogin] = useState(false);
  const form  = useRef(null);
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleClose = () => setShowSignUp(false);
  const handleShow = () => {
    if(user) {
      navigate('/chat');
    } else {
      setShowSignUp(true);
      setShowLogin(false);
    }
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
        password_confirmation: data.get('confirm_password'),
        device_token: deviceToken
      }
    }
    try {
      const response = await apiRequests(endPoint, 'post', userData);
      if (response.status === 200) {
        Notiflix.Notify.success(response.data.status.message);
        dispatch(setSignUp(response));
        setShowSignUp(false);
      }
    } catch (err) {
      Notiflix.Notify.failure(err.response.data.status.message);
    }
  }

  return (
    <>
      {props.source == 'home' ? (
        <Button variant="primary mt-lg-0" onClick={handleShow}>Try For Free</Button>
      ) : props.source == 'footer' ? (
        <Button variant="primary mt-lg-0" onClick={handleShow}>Sign Up Now</Button>
      ) : (
        !props.showRegister && <Button variant="primary my-lg-0 my-4 mx-3 mx-lg-0" onClick={handleShow}>Sign Up</Button>
      )}
      <Modal
        show={showSignUp}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered className="users-modal"
      >
        <Modal.Header closeButton className="d-flex flex-column-reverse pb-0 border-0">
          <Modal.Title className='text-center'>
            <h2>Sign Up</h2>
            <p>Start your 30-day free trial today!</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='fs-small text-uppercase px-5'>
        <Form noValidate validated={validated} ref={form} onSubmit={onNextClick}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" name="email" required onChange={(e) => setEmail(e.target.value)} />
            <Form.Control.Feedback type="invalid">
            {email === '' ? 'Email is required!' : 'Enter valid email address!'}
            </Form.Control.Feedback>
          </Form.Group>
          <div className='d-flex justify-content-between gap-3'>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name="First_name" required />
              <Form.Control.Feedback type="invalid">
                First name is required!
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" name="last_name" required />
              <Form.Control.Feedback type="invalid">
                Last name is required!
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>account name</Form.Label>
            <Form.Control type="text" placeholder="Create account name" name="accountName" required />
            {/* <Form.Control.Feedback type="invalid">
              First name is required!
            </Form.Control.Feedback> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Create a password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" name="password" required onChange={handlePasswordChange} />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4 pb-2 mt-3 fw-semibold" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label={
              <span className='fw-normal fs-small'>
                I agree to the Terms and Privacy Policy.
              </span>
            } required />
          </Form.Group>
          <Button className="w-100 rounded-pill" variant="primary" type="submit">
            Get Started
          </Button>
          
          <div className='another-login mt-4'>
            <div className='divider'></div>
            <p className="fs-small fc-gray93">OR</p>
            <div className="d-flex gap-3 justify-content-center my-2">
              <Link>
                <img src={Google} alt="Google" height={14} />
              </Link>
              <Link>
                <img src={FB} alt="Facebook" height={14} />
              </Link>
            </div>
          </div>

          <div className="text-center pt-4 gray85">
            Already have an account? 
            <a className="fw-normal fc-darkPrimary ps-2" role='button' onClick={() => {
              setShowLogin(true)
              setShowSignUp(false)
              }} >Log in</a>
          </div>
        </Form>
        </Modal.Body>
        <ModalFooter className='border-0 justify-content-center'>
          <Link>
            <img src={Logo} alt="Logo" height={60} />
          </Link>
        </ModalFooter>
      </Modal>
      { showLogin && <Login showLogin={showLogin} /> }
    </>
  )
}

export default GetStarted;
