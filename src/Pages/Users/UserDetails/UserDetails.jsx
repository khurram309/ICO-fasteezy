import React from 'react'
import { Col, Form, Row, Table } from 'react-bootstrap'

function UserDetails() {
  return (
    <>
      <div className="detail-wrapper card-shadow mt-5">
        <Row className='p-3'>
          <Col>
            <h4 className='text-center'>Susan Coley</h4>
            <Row className='justify-content-center'>
              <Col xs={12} md={6}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3 text-uppercase fs-small" controlId="userName">
                      <Form.Label className='fs-small-xs'>account name</Form.Label>
                      <Form.Control type="text" name="userName" required/>
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3 text-uppercase fs-small" controlId="userEmail">
                      <Form.Label className='fs-small-xs'>Email</Form.Label>
                      <Form.Control type="text" name="userEmail" required/>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-uppercase fs-small" controlId="joinedDate">
                      <Form.Label className='fs-small-xs'>create date</Form.Label>
                      <Form.Control type="text" name="joinedDate" required/>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-uppercase fs-small" controlId="acivationDate">
                      <Form.Label className='fs-small-xs'>Activation date</Form.Label>
                      <Form.Control type="text" name="acivationDate" required/>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={4}>
                    <Form.Group className="mb-3 text-uppercase fs-small" controlId="lastActivity">
                      <Form.Label className='fs-small-xs'>last activity </Form.Label>
                      <Form.Control type="text" name="lastActivity" required/>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} md={6}>
                <Row>
                  <Col md={{span: 9, offset: 3}}>
                    <Form.Group className="mb-3 text-uppercase fs-small" controlId="earnedPoints">
                      <Form.Label className='fs-small-xs'>total points rewarded</Form.Label>
                      <Form.Control type="text" name="earnedPoints" required/>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={{span: 9, offset: 3}}>
                    <Form.Group className="mb-3 text-uppercase fs-small" controlId="currentPoints">
                      <Form.Label className='fs-small-xs'>current points balance</Form.Label>
                      <Form.Control type="text" name="currentPoints" required/>
                    </Form.Group>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <p className='fs-large text-center mt-3'>Reward History</p>
              <Row className='m-0 p-0'>
                <Col>
                  <Table
                  bordered 
                  responsive 
                  hover
                  className="users-table"
                  >
                    <thead className="bg-blue fc-white">
                      <tr>
                        <th>Event</th>
                        <th>Notes</th>
                        <th>Referrer</th>
                        <th>Date</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>lorem</td>
                        <td>lorem ipsum</td>
                        <td>alexander</td>
                        <td>10/02/2022</td>
                        <td>1298</td>
                      </tr>
                    </tbody>

                  </Table>
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default UserDetails