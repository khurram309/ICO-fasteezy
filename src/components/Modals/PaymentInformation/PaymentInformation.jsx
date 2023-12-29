import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Row, Col, Card } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';

import del from '../../../assets/images/del-icon.svg';
import './PaymentInformation.scss';
import Welcome from '../Welcome/Welcome';
import { Link } from 'react-router-dom';
import { apiRequests } from '../../../Common/apiRequests';

function PaymentInformation(props) {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
  const [show, setShow] = useState(props.showModal);
  const [showWelcome, setShowWelcome] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const handleClose = () => setShow(false);

  const CheckoutForm = () => {
    useEffect(() => {
      const checkoutSession = async () => {
        await apiRequests('user/create_checkout_session', 'post')
        .then((response) => {
          setClientSecret(response.data.data.clientSecret);
        })
        .catch((err) => {
          console.log('err', err)
        })
      }
      checkoutSession();
    }, []);
  
    return (
      <div id="checkout">
        {clientSecret && (
          <EmbeddedCheckoutProvider stripe={stripePromise} options={{clientSecret}}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        )}
      </div>
    )
  }
  
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
          { CheckoutForm() }
        </Modal.Body>
      </Modal>
      { showWelcome && <Welcome showWelcome={showWelcome} /> }
    </>
  )
}

export default PaymentInformation;
