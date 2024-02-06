import React from 'react'
import { Accordion, Col, Form, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../Reports.scss'


function ReportDeposit() {
  return (
    <>
      <Row className='mt-3'>
        <Col xs={12} md={10} className='mx-auto'>
          <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <span>
                    Deposit Balance Report
                  </span>
                  </Accordion.Header>
                <Accordion.Body>
                  <p className='m-0 text-uppercase fs-small fw-500'>Current deposited, and available funds for use for each Program and sub-program selected.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        </Col>
      </Row>
      
      <Row className='mt-5'>
        <div className="card-shadow">
          <Row>
            <Col xs={10} md={8} className='mx-auto'>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="from">
                    <Form.Label className='fs-small-xs'>from:</Form.Label>
                    <Form.Control type="date" name="from" required/>
                  </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="to">
                    <Form.Label className='fs-small-xs'>to:</Form.Label>
                    <Form.Control type="date" name="to" required/>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col xs={2} md={2}>
              <div className="d-flex gap-2 mt-2 mt-md-4">
                <Link>
                  <svg  viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0z">
                    </path>
                    <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z">
                    </path>
                  </svg>
                </Link>

                <Link>
                  <svg viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none">
                    </path>
                    <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z">
                    </path>
                  </svg>
                </Link>
              </div>
            </Col>
          </Row>

          <Row className='mt-5 justify-content-center'>
            <Col xs={12} md={10}>
              <Table  
                bordered 
                responsive 
                hover
                className="my-4 users-table"
              >
                <thead className="bg-blue fc-white">
                  <tr className="py-2">
                    <th>Program Name</th>
                    <th>Beginning Balance</th>
                    <th>Total Deposits</th>
                    <th>Ending Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Program 1</td>
                    <td>$<span>50.00</span></td>
                    <td>$<span>500.00</span></td>
                    <td>$<span>0.00</span></td>
                  </tr>
                  <tr>
                    <td>Program 2</td>
                    <td>$<span>50.00</span></td>
                    <td>$<span>500.00</span></td>
                    <td>$<span>0.00</span></td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Row>
    </>
  )
}

export default ReportDeposit