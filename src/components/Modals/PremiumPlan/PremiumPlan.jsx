import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import './PremiumPlan.scss';

function PremiumPlan(props) {
  const [show, setShow] = useState(props.showPremiumPlan);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered className="users-modal"
      >
        <Modal.Header closeButton className="d-flex flex-column-reverse pb-0">
          <Modal.Title>You have exceeded the free usage. Upgrade to have unlimited acces</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button className="w-100" variant="primary">
            Upgrade to Premiun
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default PremiumPlan;
