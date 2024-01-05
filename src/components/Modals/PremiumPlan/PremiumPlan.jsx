import React, { useState } from 'react';
import { Modal, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'react-bootstrap';

import './PremiumPlan.scss';
import PaymentInformation from '../PaymentInformation/PaymentInformation';

function PremiumPlan(props) {
  const [show, setShow] = useState(props.showPremiumPlan);
  const [showPayment, setShowPayment] = useState(false);

  const handleClose = () => {
    setShow(false);
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
        <Modal.Body>
          <Modal.Header closeButton className='p-0 mb-3'>
          </Modal.Header>
          <Card className="h-100">
              <CardBody className="p-0">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <CardTitle>$4.99<span>/month</span></CardTitle>
                    <CardSubtitle className="py-2">Premium Plan</CardSubtitle>
                    <CardText className="pb-3">Upgrade to our Premium Plan for just $4.99 per month and enjoy unlimited access to our medical chat bot. Get answers to all your health questions, anytime you need them.</CardText>
                    <hr />
                    <div className="list-view">
                      <ul className="mt-3">
                        <li>Limited access to the medical chat bot.</li>
                        <li>Ask as many questions as you want.</li>
                        <li>Priority support for faster responses.</li>
                        <li>Cancel anytime.</li>
                      </ul>
                    </div>
                  </div>
                  <Button className="w-100 mt-3" onClick={() => {setShowPayment(true); setShow(false);}}>
                    Upgrade to Premium
                  </Button>
                </div>
              </CardBody>
            </Card>
        </Modal.Body>
      </Modal>
      {showPayment && <PaymentInformation showModal={showPayment} />}
    </>
  )
}

export default PremiumPlan;
