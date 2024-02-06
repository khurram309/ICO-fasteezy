import React, { useState } from 'react';
import { Badge, Button, Col, Form, Modal, ModalBody, ModalHeader, Row } from "react-bootstrap";
import './SendReward.scss'

function SendReward(props) {
  const [show, setShow] = useState(props.showSuccess);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    setShowRegister(false);
  };


  return (
    <>
      {!props.showSuccess && <Badge onClick={handleShow} bg='light' text='dark' >Reward</Badge>}

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size='lg'
      centered 
      className="users-modal blue-modal"
      >
        <ModalHeader closeButton className='py-2'>
          <div className="d-flex w-100 justify-content-center gap-2">
          <svg viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z">
            </path>
            <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z">
            </path>
          </svg>
            <h4 className='m-0'>Send Reward</h4>
          </div>
        </ModalHeader>
        <ModalBody>
          <Form className='w-100'>
          <div className="card-shadow bg-white p-3 rounded">
            <Row>
              <Col md={4}>
                <Form.Select>
                  <option value="Reward in Points">Reward in Points</option>
                  <option value="Custom Reward">Custom Reward</option>
                </Form.Select>
              </Col>
              <Col md={4}>
                <Form.Select>
                  <option value="Select Message">Select Message</option>
                  <option value="Select Message">Select Message</option>
                </Form.Select>
              </Col>
              <Col md={4}>
                <Form.Select>
                  <option value="Select a Restriction">Select a Restriction</option>
                  <option value="Select a Restriction">Select a Restriction</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className='fc-darkPrimary'>
              <Col md={6}>
                <Form.Group className="mb-3 text-uppercase fs-small" controlId="amount">
                  <Form.Label className='fs-small-xs'>amount</Form.Label>
                  <Form.Control type="text" name="amount" placeholder="Enter an Amount" required/>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3 text-uppercase fs-small" controlId="points">
                  <Form.Label className='fs-small-xs'>points</Form.Label>
                  <Form.Control type="text" name="points" required/>
                </Form.Group>
              </Col>
            </Row>

            <Row className='fc-darkPrimary'>
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

            <Row className='fc-darkPrimary'>
              <Col>
                <Form.Group className="mb-3 text-uppercase fs-small" controlId="restrictions">
                  <Form.Label className='fs-small-xs'>restrictions</Form.Label>
                  <Form.Control 
                    as='textarea'
                    label='Your Thoughts'
                    name="restrictions"
                    type="textarea"
                    >
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row className='fc-darkPrimary'>
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
          </div>
          </Form>
          <div className="d-flex justify-content-center mt-3">
            <Button variant='light' className='px-5 py-2'>Send Reward</Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
  }
  
  export default SendReward
