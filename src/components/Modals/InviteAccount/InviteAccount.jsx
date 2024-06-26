import React, { useState } from 'react';
import './InviteAccount.scss'
import { Button, Modal, ModalBody, ModalHeader, Form } from "react-bootstrap";

function InviteAccount(props) {
  const [show, setShow] = useState(props.showSuccess);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    // setShowRegister(false);
  };

  return (
    <>
      {!props.showSuccess && <Button onClick={handleShow} >Invite Account Manager</Button>}

      <Modal
      show={show}
      onHide={handleClose}
      // backdrop="static"
      keyboard={false}
      centered 
      className="users-modal blue-modal"
      >
        <ModalHeader closeButton className='py-2'>
          <svg viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none">
            </path>
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
            </path>
          </svg>
          <h4 className='m-0 fw-normal'>Invite an Account Manager</h4>
        </ModalHeader>
        <ModalBody className='text-center'>
          <p>Enter the email address of the person you would like to invite. 
            This email will expire after 3 days.</p>
            
            <Form.Group className="mb-3 w-75 mx-auto text-uppercase fs-small" controlId="formAmount">
              <Form.Control type="number" name="amount" placeholder="Enter email address" required/>
            </Form.Group>

          <Button variant='light' className='px-5 py-2' onClick={handleClose}>Invite</Button>
        </ModalBody>
      </Modal>
    </>
  )
}

export default InviteAccount