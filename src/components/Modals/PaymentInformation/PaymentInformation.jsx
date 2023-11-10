import React, { useState } from 'react';
import { Button, Modal, Form, Row, Col, Card } from 'react-bootstrap';

import del from '../../../assets/images/del-icon.svg';
import './PaymentInformation.scss';
import Welcome from '../Welcome/Welcome';
import { Link } from 'react-router-dom';

function PaymentInformation(props) {
  const [show, setShow] = useState(props.showModal);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleClose = () => setShow(false);
  
  const checkout = () => {
    setShowWelcome(true);
    setShow(false);
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered className="users-modal PaymentInformation"
      >
        <Modal.Header closeButton className="d-flex flex-column-reverse pb-0">
          <Modal.Title>Payment Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Card>
            {['radio'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`Credit or Debit Card ${type}`}
                />
              </div>
            ))}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Card Number <span className="text-danger">*</span></Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Expiration date <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="Month / Year" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>CVV / CVC <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="password" placeholder="" />
                </Form.Group>
              </Col>
            </Row>
          </Card>
          
          <div className="fw-semibold py-3">Selected Plan</div>
          <Form.Label>Coupon Code</Form.Label>
          <div className="coupon-grid mb-4">
            <Form.Group controlId="formEmail">
              <Form.Control type="text" placeholder="Coupon Code " />
            </Form.Group>
            <Button variant="primary" onClick={checkout}>
              Submit
            </Button>
          </div>

          <div className="premium-plan">
            <h6>Premium Plan</h6>
            <p>Enjoy unlimited access to our medical chat bot. Get answers to all your health questions, anytime you need them.</p>
            <div className="price-grid d-flex justify-content-between align-items-center">
              <div className="card-title">
                $4.99 <span>/month</span>
              </div>
              <div>
                <Link><img src={del} alt="Logo" /></Link>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center flex-column align-items-center pt-2 pb-4 gray85">
            By completing your purchase, you agree to
            <Link className="fw-semibold">Terms and Conditions</Link>
          </div>

          <div className="d-flex">
            <Button className="flex-grow-1" variant="outline-secondary me-1" onClick={checkout}>
              Back
            </Button>
            <Button className="flex-grow-1" variant="primary ms-1" onClick={checkout}>
              Checkout
            </Button>
          </div>
        </Form>
        </Modal.Body>
      </Modal>
      { showWelcome && <Welcome showWelcome={showWelcome} /> }
    </>
  )
}

export default PaymentInformation;
