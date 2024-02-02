import React from 'react';
import { Form, InputGroup, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

import '../Rewards.scss';

function RewardExistingUser() {
  return (
    <>
    <div className="card-shadow p-3 p-md-4 mb-4">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto">
          <Form.Group>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search here.."
                />
              <InputGroup.Text className="py-0">
                <svg viewBox="0 0 24 24" style={{ width: '30px' }}>
                  <path d="M0 0h24v24H0z" fill="none">
                  </path>
                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                  </path>
                </svg>
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <Table striped bordered responsive hover
          className="my-4 users-table">
          <thead className="bg-blue fc-white ">
            <tr>
              <th className="py-2">
                <Form.Group className='squared-check bg-transparent'
                controlId="">
                  <Form.Check 
                    type="checkbox" 
                    className='mt-1 check-primary' 
                    />
                </Form.Group>
              </th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Points Earned</th>
              <th className="py-2">View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">
                <Form.Group className='squared-check bg-transparent'
                controlId="">
                  <Form.Check 
                    type="checkbox" 
                    className='mt-1 check-primary' 
                    />
                </Form.Group>
              </td>
              <td className="py-2">Coley, Susan</td>
              <td className="py-2">Coley.Susan@gmail.xo</td>
              <td className="py-2">0</td>
              <td className="py-2">  
                <Link>
                  <svg viewBox="0 0 640 512">
                    <path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z">
                    </path>
                  </svg>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
    </>
  )
}

export default RewardExistingUser