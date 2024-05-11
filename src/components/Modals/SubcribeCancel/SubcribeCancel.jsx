import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import './SubcribeCancel.scss'


function SubcribeCancel(props) {
  const [show, setShow] = useState(props.showSuccess);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    // setShowRegister(false);
  };

  return (
    <>
      {!props.showSuccess && <Button onClick={handleShow}>Cancel Subscription</Button>}

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered 
      className="users-modal blue-modal"
      >
        <ModalHeader closeButton className='py-2'>
          <div className="d-flex w-100 justify-content-center gap-2">
            <svg viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z">
              </path>
              <path d="M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2z">
              </path>
              <path d="M13 16h-2v2h2zm0-6h-2v5h2z">
              </path>
            </svg>
            <h4 className='m-0'>We're sorry to see you go!</h4>
          </div>
        </ModalHeader>
        <ModalBody className='text-center'>
          <p>Your subscription is paid until December 30, 2023. If you would like to proceed with cancelling your subscription, please select "Cancel Subscription" below.</p>
          <Button variant='light' className='px-5 py-2'>Cancel Subscription</Button>
        </ModalBody>
      </Modal>
    </>
  )
}

export default SubcribeCancel