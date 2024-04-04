import React, { useRef, useState } from 'react';
import { Nav, Button, Modal, Form, ModalFooter } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

import './Login.scss';
import { apiRequests } from '../../../Common/apiRequests';
import { setToken } from '../../../Redux/actions/authActions';
import GetStarted from '../GetStarted/GetStarted';
import ResetPassword from '../ResetPassword/ResetPassword.jsx';
import Google  from '../../../assets/images/g-logo.png';
import FB  from '../../../assets/images/fb-logo.png';
import Logo from '../../../assets/images/fasteezy_logo.png';
import LogoColored from '../../../assets/images/fasteezy_clr.png';
import Program from '../Program/Program.jsx';

function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(props.showLogin);
  const [showRegister, setShowRegister] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [showProgram, setShowProgram] = useState(false);
  const [response, setResponse] = useState();
  const form  = useRef(null);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setShowRegister(false);
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
      email: data.get('email'),
      password: data.get('password')
    }
    await apiRequests(endPoint, 'post', userData)
    .then((response) => {
      if(response.status === 200) {
        if(response.data.domain.programs.length > 1) {
          localStorage.setItem('accessToken', response.data.access_token);
          setResponse(response);
          setShowProgram(true);
        } else {
          dispatch(setToken(response));
          navigate('/user/dashboard');
        }
      }
    })
    .catch((err) => {
      Notiflix.Notify.failure(err.response.data);
    })
  }

  return (
    <>
      {!props.showLogin && <Nav.Link onClick={handleShow}>Login</Nav.Link>}

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
              Log in
            </h2>
            <p className='fs-small fc-gray93 fw-normal text-uppercase'>
              sign in to access your rewards and start collecting leads and referrals.
            </p>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0 px-5">
        <Form noValidate validated={validated} ref={form} onSubmit={handleSubmit}>
          <Form.Group className="mb-3 text-uppercase fs-small" controlId="formBasicEmail">
            <Form.Label className='fs-small-xs'>account name</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter your account name" required onChange={(e) => setEmail(e.target.value)} />
            <Form.Control.Feedback type="invalid">
            {email === '' ? 'Email is required!' : 'Enter valid email address!'}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='fs-small-xs'>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter your password" required />
            <Form.Control.Feedback type="invalid">
              Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <div className='d-flex justify-content-between align-items-center text-uppercase fs-small-xs my-3'>
            <div className='d-flex gap-2'>
              <Form.Group className='d-flex align-items-center'
                controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" 
                    className='mt-1'
                    label={
                    <span className='fw-normal fs-small-xs'>
                      Remember Me
                    </span>
                  } />
              </Form.Group>
            </div>
            <div>
              <a className="fw-500 ms-2 fc-darkPrimary" role='button' onClick={() => {
                setShowReset(!showReset)
                setShow(!show)
                }}>Reset Password</a>
            </div>
          </div>
          <Button className="w-100 rounded-pill" variant="primary" type="submit">
            Sign in
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
          <div className="signup-text text-center pt-2 gray85 text-uppercase fs-small fc-gray93">
            Don't have an account? 
            <a className="fw-500 ms-2 fc-darkPrimary" role='button' onClick={() => {
              setShowRegister(!showRegister)
              setShow(!show)
              }}>Sign Up</a>
          </div>
        </Form>
        </Modal.Body>
        <ModalFooter className='border-0 justify-content-center'>
          <Link>
            <img src={LogoColored} alt="Logo" height={60} />
          </Link>
        </ModalFooter>
      </Modal>
      {showRegister && <GetStarted showRegister={showRegister} />}
      {showReset && <ResetPassword showReset={showReset} />}
      {showProgram && <Program showProgram={showProgram} response={response} />}
    </>
  );
}

export default Login;
