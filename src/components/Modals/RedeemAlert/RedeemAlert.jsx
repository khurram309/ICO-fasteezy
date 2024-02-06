import React, { useState } from 'react';
import { Button, Col, FigureCaption, Modal, ModalBody, ModalHeader, Row } from "react-bootstrap";
import './RedeemAlert.scss';

import Amazon from '../../../assets/images/amazon.png';

function RedeemAlert(props) {
  const [show, setShow] = useState(props.showRedeem);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    // setShowRegister(false);
  };

  return (
    <>
      {!props.showRedeem && <Button onClick={handleShow} variant='outlined'>Redeem</Button>}

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered 
      size='lg'
      className="users-modal blue-modal"
      >
        <ModalHeader 
          closeButton
          className='border-0'
        >
        </ModalHeader>
        <ModalBody className='text-center'>
          <div className="cardshadow">
            <Row className='bg-white mx-2 px-3 mb-5 text-center modal-inner py-3'>
              <Col md={4}>
                <img src={ Amazon } alt="amazon" height={130} />
                <FigureCaption>Visit Merchant Website</FigureCaption>
              </Col>
              <Col md={8} className='fc-darkPrimary'>
                <h4>Amazon</h4>
                <p>Save Big with Amazon — Enjoy Low Prices on Earth's Biggest Selection of Books, Electronics, Home, Apparel & More. The Best Shopping & Entertainment with Prime. Free, Easy Returns on Millions of Items.</p>
                <div className="d-flex justify-content-center gap-3">
                  <Button variant='outlined'>$10.00 = 100 points</Button>
                  <Button variant='primary'>Add to Cart</Button>
                </div>
              </Col>
            </Row>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default RedeemAlert