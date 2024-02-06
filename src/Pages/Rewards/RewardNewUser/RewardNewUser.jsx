import React from 'react';
import { Col, Form, Row } from "react-bootstrap";

import RewardSend from "../../../components/Modals/RewardSend/RewardSend";
import '../Rewards.scss';

function RewardNewUser() {
  return (
    <>
      <div className="card-shadow p-3 p-md-5">
        <Row>
          <Col xs={12} md={4}>
            <Form.Select className="py-2">
              <option>Select a Reward Type</option>
              <option value="1">Opt One</option>
              <option value="2">Opt Two</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="firstName">
              <Form.Label className='fs-small-xs'>first name</Form.Label>
              <Form.Control type="text" name="firstName" placeholder="Enter first name" required/>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="lastName">
              <Form.Label className='fs-small-xs'>last name</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Enter last name" required/>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="email">
              <Form.Label className='fs-small-xs'>Email Address</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Enter email address" required/>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="amount">
              <Form.Label className='fs-small-xs'>amount</Form.Label>
              <Form.Control type="number" name="amount" placeholder="Enter Amount" required/>
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
              <Form.Group className="mb-3 text-uppercase fs-small" controlId="points">
                <Form.Label className='fs-small-xs'>points</Form.Label>
                <Form.Control type="number" name="points" placeholder="Enter Points" required/>
              </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="message">
              <Form.Label className='fs-small-xs'>Message</Form.Label>
              <Form.Control 
                as='textarea'
                label='Your Thoughts'
                name="message"
                type="textarea"
                >
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="notes">
              <Form.Label className='fs-small-xs'>internal notes (optional)</Form.Label>
              <Form.Control 
                as='textarea'
                label='Your Thoughts'
                name="notes"
                type="textarea"
                >
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        
        <RewardSend />

      </div>
    </>
  )
}

export default RewardNewUser;