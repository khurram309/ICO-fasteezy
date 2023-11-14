import React from 'react';

import { Row, Col, Button, Tab, Tabs, Form } from 'react-bootstrap';
import avatar from '../../../assets/images/avatar.png';
import './General.scss';

function General() {
  return (
    <div className="custom-container settingPage mt-4 pt-2">
      {/* <h3 className='m-0'>Hey there, Brian Ford!</h3>
      <p className='gray85'>Welcome back, we're happy to have you here!</p> */}

      <Tabs
        defaultActiveKey="general"
        id="uncontrolled-tab-example"
        className="bg-transparent border-0 border-bottom rounded-0 p-0"
      >
      <Tab eventKey="general" title="General">
        <div className="general-tab">
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

          <Row>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Month / Year" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Month / Year" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
            </Col>
          </Row>
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
      </Tab>
      <Tab eventKey="profile" title="Billing">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Members">
        Tab content for Contact
      </Tab>
      <Tab eventKey="security" title="Security">
        Tab content for Security
      </Tab>
    </Tabs>
    </div>
  )
}

export default General;
