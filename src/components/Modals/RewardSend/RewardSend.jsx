import React, { useState } from 'react';
import './RewardSend.scss'
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";

function RewardSend(props) {
  const [show, setShow] = useState(props.showSuccess);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setShowRegister(false);
  };

  return (
    <>
      {!props.showSuccess && <Button onClick={handleShow}>Send Reward</Button>}

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered 
      className="users-modal blue-modal"
      >
        <ModalHeader closeButton className='py-2'>
          <svg viewBox="0 0 24 24">
            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none">
            </path>
            <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
            </path>
          </svg>
          <h4 className='m-0'>success</h4>
        </ModalHeader>
        <ModalBody className='text-center'>
          <p>Your settings have been changed.</p>
          <Button variant='light' className='px-5 py-2'>OK</Button>
        </ModalBody>
      </Modal>
    </>
  )
}

export default RewardSend