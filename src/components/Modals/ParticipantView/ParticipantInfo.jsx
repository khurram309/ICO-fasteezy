import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

function ParticipantInfo(props) {
  const [participant, setParticipant] = useState(props.participant);
  const fullName = `${participant.first_name} ${participant.last_name}`;

  return (
    // <div>ParticipantInfo</div>
    <>
    <Row>
      <Col md="6" lg="6" xl="6">
        <p>{fullName}</p>
        <span>{participant?.email}</span>
      </Col>
    </Row>
    <Row>
      <Col md="6" lg="6" xl="6" sm="12">
        Participant Since:
      </Col>
      <Col md="6" lg="6" xl="6" sm="12" >
        {participant?.created_at ? `${new Date(participant.created_at).toLocaleDateString("en-US", {})}` : ''}
      </Col>
    </Row>
    <Row>
      <Col md="6" lg="6" xl="6" sm="12">
        Last Activity:
      </Col>
      <Col md="6" lg="6" xl="6" sm="12">
        {/*TO DO last_login*/}
      </Col>
    </Row>
    <Row>
      <Col md="6" lg="6" xl="6" sm="12">
        Current Status:
      </Col>
      <Col md="6" lg="6" xl="6" sm="12">
        {participant.status?.status ? participant.status.status : ''}
      </Col>
    </Row>
    {/* <Row>
      <Col md="6" lg="6" xl="6" sm="12">
        External ID:
      </Col>
      <Col md="6" lg="6" xl="6" sm="12">
        {participant?.organization_id}
      </Col>
    </Row>
    <Row>
      <Col md="6" lg="6" xl="6" sm="12">
        Anniversary:
      </Col>
      <Col md="6" lg="6" xl="6" sm="12">
        { participant?.work_anniversary ? `${new Date(participant.work_anniversary).toLocaleDateString("en-US", {})}`: ''}
      </Col>
    </Row> */}
    <Row>
      <Col md="6" lg="6" xl="6" sm="12">
        Birthday:
      </Col>
      <Col md="6" lg="6" xl="6" sm="12">
        { participant?.dob ? `${new Date(participant.dob).toLocaleDateString("en-US", {})}`: ''}
      </Col>
    </Row>
    {/* <Row>
      <Col md="6" lg="6" xl="6" sm="12">
        Department / Team:
      </Col>
      <Col md="6" lg="6" xl="6" sm="12">
        {participant?.division}
      </Col>
    </Row> */}
    </>
  )
}

export default ParticipantInfo