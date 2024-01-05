import React, { useRef, useState } from 'react';
import Notiflix from 'notiflix';

import './Security.scss';
import { Button, Row, Col, Form } from 'react-bootstrap';
import pc from '../../../assets/images/pc-icon.svg';
import itemplate from '../../../assets/images/itemplate-icon.svg';
import popular from '../../../assets/images/popular-icon.svg';
import { apiRequests } from '../../../Common/apiRequests';

function Security() {
  const form  = useRef(null);
  const [validated, setValidated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setPasswordsMatch(password === e.target.value);
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    const userForm = e.currentTarget;
    if(!userForm.checkValidity()) {
      setValidated(true);
      return;
    }
    const endPoint = `user/update_password`;
    const data = new FormData(form.current);
    const userData = {
      user: {
        current_password: data.get('current_password'),
        password: data.get('password'),
        password_confirmation: data.get('confirm_password'),
      }
    }
    await apiRequests(endPoint, 'patch', userData)
    .then((response) => {
      if(response.status === 200) {
        e.target.reset();
        Notiflix.Notify.success(response.data.status.message);
      }
    })
    .catch((err) => {
      Notiflix.Notify.failure(err.response.data.status.message);
    })
  }
  return (
    <div className="custom-container">
      <div className="security-page settings">
        <div className="d-none d-flex justify-content-between align-items-center mb-4">
          <div>
            <div className="fw-small fw-semibold mb-1">Two factor security</div>
            <div className="fw-small-xs gray85">Activate two-factor security authentication by using the button to the right</div>
          </div>
          <div>
            <Button variant="primary">Activate</Button>{' '}
          </div>
        </div>

        <div className="outer d-none">
          <div className="cards-bar">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-small fw-semibold">Authentification</div>
                <div className="fw-small gray85">Preview all of your Authentication related data.</div>
              </div>
              <div>
                <Button variant="default">Preview</Button>{' '}
              </div>
            </div>
          </div>
          <div className="cards-bar">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-small fw-semibold">Log In Information</div>
                <div className="fw-small gray85">Preview all of your Log In related data.</div>
              </div>
              <div>
                <Button variant="default">Preview</Button>{' '}
              </div>
            </div>
          </div>
          <div className="cards-bar">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-small fw-semibold">Saved SMS Recovery</div>
                <div className="fw-small gray85">Preview all of your Recovery related data.</div>
              </div>
              <div>
                <Button variant="default">Preview</Button>{' '}
              </div>
            </div>
          </div>
          <div className="cards-bar">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="fw-small fw-semibold">Password</div>
                <div className="fw-small gray85">Preview all of your Password related data.</div>
              </div>
              <div>
                <Button variant="default">Preview</Button>{' '}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 d-none">
          <hr className="m-0" />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4 pb-2">
          <div>
            <div className="fw-small fw-semibold mb-1">Change password</div>
            <div className="fw-small-xs gray85">Change your account password by using the button to the right or field below</div>
          </div>
          <div>
            {/* <Button variant="default">Change</Button>{' '} */}
          </div>
        </div>

        <div className="outer p-4">
          <Form noValidate validated={validated} ref={form} onSubmit={updatePassword}>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-4 form-group" controlId="formCurrentPassword">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="password" placeholder="Current Password" name="current_password" required />
                </Form.Group>
              </Col>
              {/* <Col lg={6}>
                <Form.Group className="mb-4 form-group" controlId="formEmail">
                  <Form.Label>Secret Word</Form.Label>
                  <Form.Control type="text" placeholder="Secret Word" />
                </Form.Group>
              </Col> */}
            </Row>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-4 form-group" controlId="formPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="New Password" name="password" required onChange={handlePasswordChange} />
                  <Form.Control.Feedback type="invalid">
                    Password is required!
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-4 form-group" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm Password" name="confirm_password" required onChange={handleConfirmPasswordChange}  />
                  <Form.Control.Feedback type="invalid">
                    Confirm Password is required!
                  </Form.Control.Feedback>
                  {passwordsMatch ? null : <Form.Text className="text-danger">Passwords do not match</Form.Text>}
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit">Update</Button>{' '}
          </Form>
        </div>

        <div className="mb-4 d-none">
          <hr className="m-0" />
        </div>

        <div className="d-none d-flex justify-content-between align-items-center mb-4 pb-2">
          <div>
            <div className="fw-small fw-semibold mb-1">Connected Devices</div>
            <div className="fw-small-xs gray85">If you'd like to disconnect certain devices of yours, use the functionality below</div>
          </div>
          <div>
            <Button variant="default">Change</Button>{' '}
          </div>
        </div>

        <div className="outer d-none">
          <div className="cards-bar">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <img src={pc} alt="PC" className="me-2" />
                </div>
                <div className="d-flex flex-column">
                  <div className="fw-small fw-semibold">Downloads 14</div>
                  <div className="fw-small gray85">19s Cobblestone Court</div>
                </div>
              </div>
              <div>
                <Button variant="default">Delete</Button>{' '}
              </div>
            </div>
          </div>
          <div className="cards-bar">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <img src={itemplate} alt="itemplate" className="me-2" />
                </div>
                <div className="d-flex flex-column">
                  <div className="fw-small fw-semibold">iTemplates 22</div>
                  <div className="fw-small gray85">58 Magnolia Court</div>
                </div>
              </div>
              <div>
                <Button variant="default">Delete</Button>{' '}
              </div>
            </div>
          </div>
          <div className="cards-bar">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div>
                  <img src={popular} alt="popular" className="me-2" />
                </div>
                <div className="d-flex flex-column">
                  <div className="fw-small fw-semibold">Most Popular</div>
                  <div className="fw-small gray85">97 Holly Drive</div>
                </div>
              </div>
              <div>
                <Button variant="default">Delete</Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security;
