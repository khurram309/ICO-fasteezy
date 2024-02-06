import React from 'react'
import { Col, Row, Table, Form, InputGroup, Badge, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SendReward from '../../components/Modals/SendReward/SendReward'
import UserDetails from './UserDetails/UserDetails'

function Users() {
  return (
    <div className="users-wrapper p-2 p-md-4">
      <Row>
        <Col xs={12} md={5}>
          <h4>View Users</h4>
          <p>To view user details, search for users in the search box below. When search results are shown, select a user by clicking on the name or icon.</p>
        </Col>
      </Row>

      <Container>
        <Row className='mt-5'>
          <Col>
            <h4 className="fw-600 text-center">Select Users</h4>
            <Row className='mt-3'>
              <Col xs={12} className='mx-auto'>
                <div className="card-shadow p-3">
                  <Row>
                    <Col xs={12} md={5} className='mx-auto'>
                      <Form.Group>
                        <InputGroup>
                          <Form.Control
                            type="text"
                            placeholder="Search users..."
                            />
                          <InputGroup.Text className="py-0">
                            <Link>
                              <svg viewBox="0 0 24 24" style={{ width: '30px' }}>
                                <path d="M0 0h24v24H0z" fill="none">
                                </path>
                                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                </path>
                              </svg>
                            </Link>
                          </InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Table 
                    bordered 
                    responsive 
                    hover
                    className="my-4 users-table"
                  >
                    <thead className="bg-blue fc-white">
                      <tr className="py-2">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Account Name</th>
                        <th>Reward</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className='d-flex align-items-center gap-1'>
                            <span>
                              <svg viewBox="0 0 24 24" style={{ width: '30px' }}>
                                <path fill="none" d="M0 0h24v24H0z">
                                </path>
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z">
                                </path>
                              </svg>
                            </span> 
                            <span>Coley, Susan</span>
                          </div>
                        </td>
                        <td>Coley.Susan@gmail.xo</td>
                        <td>susan.coley1234</td>
                        <td>
                          <SendReward />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <UserDetails />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Users