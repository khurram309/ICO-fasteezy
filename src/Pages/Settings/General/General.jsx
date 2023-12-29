import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button , Form } from 'react-bootstrap';
import Notiflix from 'notiflix';

import avatar from '../../../assets/images/avatar.png';
import { apiRequests } from '../../../Common/apiRequests';
import { updateUser } from '../../../Redux/actions/authActions';
import './General.scss';

function General() {
  const form  = useRef(null);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);
  const user = useSelector(state => state.auth.user);
  const [email, setEmail] = useState('');

  const updateUserData = async (e) => {
    e.preventDefault();
    const userForm = e.currentTarget;
    if(!userForm.checkValidity()) {
      setValidated(true);
      return;
    }
    const endPoint = `user/update_info`;
    const data = new FormData(form.current);
    const userData = {
      user: {
        first_name: data.get('first_name'),
        last_name: data.get('last_name'),
        phone: data.get('phone'),
      }
    }
    await apiRequests(endPoint, 'patch', userData)
    .then((response) => {
      if(response.status === 200) {
        dispatch(updateUser(response));
        Notiflix.Notify.success(response.data.status.message);
      }
    })
    .catch((err) => {
      Notiflix.Notify.failure(err.response.data.status.message);
    })
  }
  return (
    <div className="custom-container">
      <div className="general-page settings">
        <div className='d-flex align-content-center justify-content-between avatar-top pb-4 mb-4'>
          <div className="d-flex">
            <img src={avatar} alt="info" className="rounded-circle me-3 img-fluid" />
            <div className="d-flex flex-column justify-content-center">
              <div className="title fw-small fw-medium">Your avatar</div>
              <p className="fw-small-xs gray85 m-0">PNG or JPG no bigger than 580 px wide and tall.</p>
            </div>
          </div>
          <div>
            <Button variant="primary">Change Avatar</Button>{' '}
          </div>
        </div>

        <Form noValidate validated={validated} ref={form} onSubmit={updateUserData}>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="first_name" required placeholder="First Name" defaultValue={user.first_name} />
                <Form.Control.Feedback type="invalid">
                  First name is required!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name="last_name" required defaultValue={user.last_name} />
                <Form.Control.Feedback type="invalid">
                  Last name is required!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone" name="phone" defaultValue={user.phone} />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" required onChange={(e) => setEmail(e.target.value)} value={user.email} disabled />
                <Form.Control.Feedback type="invalid">
                {email === '' ? 'Email is required!' : 'Enter valid email address!'}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <div className='mb-3'>
              <Button variant="primary" type="submit">Update</Button>{' '}
            </div>
          </Row>
        </Form>
        <hr className="mt-0 mb-4" />

        <div className="news-letter">
          <div className="gray32 fw-semibold fw-small mb-1">Monthly Newsletters</div>
          <p className="fw-small-xs gray85 mb-2">If you would like to receive our monthly newsletter, toggle this button</p>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label=""
            />
          </Form>
        </div>

        <hr className="my-4" />

        <div className="news-letter">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="gray32 fw-semibold fw-small mb-1">Delete your account</div>
              <p className="fw-small-xs gray85 mb-0">If you'd like to permanently delete your account, please use the displayed button</p>
            </div>
            <Button variant="danger">Delete</Button>{' '}
          </div>
        </div>

      </div>
    </div>
  )
}

export default General;
