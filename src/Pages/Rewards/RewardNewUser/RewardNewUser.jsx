import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from "react-bootstrap";
import EVENT_TYPES from "../../../shared/json/eventTypes.json";

import RewardSend from "../../../components/Modals/RewardSend/RewardSend";
import '../Rewards.scss';
import { useSelector } from 'react-redux';
import { apiRequests } from '../../../Common/apiRequests';

function RewardNewUser() {
  const [events, setEvents] = useState([]);
  const authState = useSelector(state => state.auth);
  const organizationId = authState.user.organization_id
  const program = authState.program

  useEffect(() => {
    if (!organizationId || !program?.id) return;
    const getRewardType = async () => {
      let except_type = [
        EVENT_TYPES.find((type) => type.name === "peer2peer allocation")?.value,
        EVENT_TYPES.find((type) => type.name === "peer2peer")?.value,
        EVENT_TYPES.find((type) => type.name === "peer2peer badge")?.value,
      ];
      let paramStr = prepareRequestParams({except_type}, ['type', 'except_type', 'disabled']);
      const endPoint = `organization/${organizationId}/program/${program.id}/event?minimal=true&${paramStr}`
      apiRequests(endPoint, 'get')
      .then((response) => {
        setEvents(labelizeNamedData(response.data));
      }).catch((err) => {
        console.log(err);
      })
    }
    getRewardType()
  }, [organizationId, program]);

  const prepareRequestParams = (filter, fields) => {
    const params = []
    let paramStr = ''
    if (filter) {
      fields.map((field) => (filter[field] !== 'undefined' && filter[field]) ? params.push(field + `=${filter[field]}`) : null);
      paramStr = params.join('&')
    }
    return paramStr;
  }

  const labelizeNamedData = (data, fields = ["id", "name"]) => {
    if (!data) return null
    let newData = []
    for( var i in data) {
        newData.push({label: String(data[i][fields[1]]), value: String(data[i][fields[0]])})
    }
    return newData;
  }

  return (
    <>
      <div className="card-shadow p-3 p-md-5">
        <Row>
          <Col xs={12} md={4}>
            <Form.Select className="py-2">
              <option>Select a Reward Type</option>
              {events && events.map((event, index) => {
                return (
                  <option key={index} value={event.value}>{event.label}</option>
                )
              })}
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="firstName">
              <Form.Label className='fs-small-xs'>first name</Form.Label>
              <Form.Control type="text" name="firstName" placeholder="Enter first name" required/>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="lastName">
              <Form.Label className='fs-small-xs'>last name</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Enter last name" required/>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="email">
              <Form.Label className='fs-small-xs'>Email Address</Form.Label>
              <Form.Control type="text" name="lastName" placeholder="Enter email address" required/>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3 text-uppercase fs-small" controlId="amount">
              <Form.Label className='fs-small-xs'>amount</Form.Label>
              <Form.Control type="number" name="amount" placeholder="Enter Amount" required/>
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
              <Form.Group className="mb-3 text-uppercase fs-small" controlId="points">
                <Form.Label className='fs-small-xs'>points</Form.Label>
                <Form.Control type="number" name="points" placeholder="Enter Points" required/>
              </Form.Group>
          </Col>
        </Row>

        <Row>
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

        <Row>
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
        
        <RewardSend />

      </div>
    </>
  )
}

export default RewardNewUser;