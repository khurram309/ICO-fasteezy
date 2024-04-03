import React, { useState } from 'react';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import ResendIcon from 'mdi-react/AccountPlusIcon';
import MailIcon from 'mdi-react/MailOutlineIcon';
import PeerIcon from 'mdi-react/PostItNoteAddIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import { useSelector } from 'react-redux';
import ParticipantInfo from './ParticipantInfo';
import ParticipantCurrentPoints from './ParticipantCurrentPoints';

function ParticipantView(props) {
  console.log('props', props);
  const [show, setShow] = useState(props.show);
  const participants = props.participant;
  const program = useSelector((state) => state.auth.program);

  const handleClose = () => {
    setShow(false);
    props.setSelectedParticipant(false);
    props.setShowParticipantModal(false);
  }
  // const handleShow = () => setShow(true);

  return (
    <>
    <Modal show={show} onHide={handleClose} animation={false} size="xl" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static">
    <Modal.Header className='border-0' closeButton onClick={handleClose}></Modal.Header>
      <Modal.Body>
        <Container fluid>
          <Row>
            <Col md={12}>
              <h3>Participant Information</h3>
            </Col>
            <Col md={12}>
              <Button
                type="button"
                aria-label="button collapse"
                className="action-item template-button border-0 btn btn-secondary me-2"
                onClick={(e) => {
                  window.location.href = `mailto: ${participants.email}`;
                  e.preventDefault();
                }}
                // onClick={handleToggleCollapse}
              >
                <MailIcon />
                Email
              </Button>
              <span
                onClick={() => onClickAction("Resend Invite", participants)}
                type="button"
                aria-label="button collapse"
                className="action-item template-button border-0 btn btn-secondary me-2"
              >
                <ResendIcon />
                Resend Invite
              </span>
              {/* {program.uses_peer2peer && <Button
                onClick={() =>
                  onClickAction("Reclaim Peer Allocations", participants)
                }
                type="button"
                aria-label="button collapse"
                className="template-button border-0 btn btn-secondary me-2"
              >
                <PeerIcon />
                Reclaim Peer Allocations
              </Button>} */}
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <ParticipantInfo participant={participants} />
            </Col>
            <Col md={6}>
              {/* <Link className="text-right"  to={`/users/edit/${data.id}`}>Edit Participant</Link> */}
              <ParticipantCurrentPoints participant={participants} program={program} />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {/* <ParticipantGoalPlans participant={participants} /> */}
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {/* <ParticipantRewardHistory
                participant={participants}
              ></ParticipantRewardHistory> */}
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      {/* <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
    </>
  )
}

export default ParticipantView