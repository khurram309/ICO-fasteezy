import React from 'react';

import WhatUsersSay from '../../components/WhatUsersSay/WhatUsersSay';
import Questions from '../../components/Questions/Questions';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'react-bootstrap';

import './Pricing.scss';

function Pricing() {
  return (
    <>
      <Container fluid="lg">
        <Row className="justify-content-md-center my-5 pb-5">
          <Col sm={7} lg={6}>
            <h2 className="text-center">A quick look at our <span>Pricing</span> Options</h2>
          </Col>
          <Col lg="12">
            <h5 className="text-center">Explore UVO's Flexible Subscription Plans for Personalized Health Support and Guidance.</h5>
          </Col>
        </Row>
        <Row className="my-5 pb-3 pt-5">
        <Col lg={4}>
          <Card className="h-100">
            <CardBody className="p-0">
              <div className="d-flex flex-column justify-content-between h-100">
                <div>
                  <CardTitle>Free</CardTitle>
                  <CardSubtitle className="py-2">Basic Plan</CardSubtitle>
                  <CardText className="pb-3">Get started with our Basic Plan for free and access a limited number of medical questions and answers. Perfect for occasional health inquiries.  </CardText>
                  <hr />
                  <ul className="mt-3">
                    <li>Limited access to the medical chat bot.</li>
                    <li>Access to a limited number of Q&A</li>
                    <li>No commitment, cancel anytime.</li>
                    <li>Access to all features</li>
                  </ul>
                </div>
                <Button className="w-100 mt-3">Get Started for Free</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="h-100">
            <CardBody className="p-0">
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <CardTitle>$4.99<span>/month</span></CardTitle>
                <CardSubtitle className="py-2">Premium Plan</CardSubtitle>
                <CardText className="pb-3">Upgrade to our Premium Plan for just $4.99 per month and enjoy unlimited access to our medical chat bot. Get answers to all your health questions, anytime you need them.</CardText>
                <hr />
                <ul className="mt-3">
                  <li>Limited access to the medical chat bot.</li>
                  <li>Ask as many questions as you want.</li>
                  <li>Priority support for faster responses.</li>
                  <li>Cancel anytime.</li>
                </ul>
              </div>
              <Button className="w-100 mt-3">Upgrade to Premium</Button>
            </div>
            </CardBody>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="h-100">
            <CardBody className="p-0">
            <div className="d-flex flex-column justify-content-between h-100">
              <div>
                <CardTitle>$14.99<span>/month</span></CardTitle>
                <CardSubtitle className="py-2">Family Plan</CardSubtitle>
                <CardText className="pb-3">Share the benefits of our Premium Plan with your family. For just $14.99 per month, get unlimited access for up to 5 family members.</CardText>
                <hr />
                <ul className="mt-3">
                  <li>Unlimited access for up to 5 family members.</li>
                  <li>Access to premium features for all users.</li>
                  <li>Priority support for all family members.</li>
                  <li>Cancel anytime.</li>
                </ul>
              </div>
              <Button className="w-100 mt-3">Get Family Plan</Button>
            </div>
            </CardBody>
          </Card>
        </Col>
        </Row>
      </Container>
      <WhatUsersSay />
      <Questions />
    </>
  )
}

export default Pricing;
