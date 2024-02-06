import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import MultiCards from '../../assets/images/multi-cards.png';
import PayPal from '../../assets/images/paypal.svg';
import ApplePay from '../../assets/images/apple-pay.svg';

import './Funds.scss';
import { Link } from 'react-router-dom';

function Funds() {
  return (
    <>
      <div className="funds-wrapper p-4">
        <Row>
          <Col xs={12} md={5}>
            <div className="funds-section">
              <h4 className='fw-500'>Add Funds</h4>
              <p className='fw-300'>Keep your account funded so you can issue reward points anytime you'd like. Reward points are redeemable for gift codes to be used at participating program merchants.</p>
              <div>
                <h3>Select a Method:</h3>
                <Form.Group className='d-flex align-items-center'
                  controlId="cardSelection">
                    <Form.Check type="checkbox" 
                      className='mt-1 check-primary'
                      label={
                      <span className='fw-normal'>
                        Credit/Debit Card
                      </span>
                    } required />
                </Form.Group>
                <Form.Group className='d-flex align-items-center'
                  controlId="achTransfer">
                    <Form.Check type="checkbox" 
                      className='mt-1 check-primary'
                      label={
                      <span className='fw-normal'>
                        ACH Transfer
                      </span>
                    } required />
                </Form.Group>
              </div>
            </div>
          </Col>

          <Col xs={12} md={7} className='text-center'>
            <h3>Account Balance</h3>
            <Row className='mt-3'>
              <Col xs={12} md={3} className='mx-auto'>
                <div className="card-shadow">
                  <h3 className='p-4 px-5'>$<span>43.43</span></h3>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="card-shadow p-4 mx-1 mt-5 mx-md-5">
          <Row>
            <Col xs={12} md={7} className='mx-auto'>
              <p className='text-center text-uppercase fs-small fw-500'>Enter your deposit amount. An invoice will be automatically created which you can download and print. Once the payment has been received, the balance will be shown on your manager dashboard.</p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={7} className='mx-auto'>
              <Form>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3 text-uppercase fs-small" controlId="formAmount">
                      <Form.Label className='fs-small-xs'>amount</Form.Label>
                      <Form.Control type="number" name="amount" placeholder="Ener amount" required/>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3 text-uppercase fs-small" controlId="formAmountReconfirm">
                      <Form.Label className='fs-small-xs'>confirm amount</Form.Label>
                      <Form.Control type="number" name="amount" placeholder="Ener amount" required/>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className='d-flex align-items-center'
                controlId="filedCard">
                  <Form.Check type="checkbox" 
                    className='mt-1 check-primary'
                    label={
                    <span className='fw-normal'>
                      card on file
                    </span>} 
                    required 
                  />
                </Form.Group>

                <ul className='list-unstyled filed-cards mt-3'>
                  <li className='d-flex align-items-center gap-2'>
                    <svg enableBackground="new 0 0 780 500" height="30" viewBox="0 0 780 500" width="40" xmlns="http://www.w3.org/2000/svg">
                      <path d="m53.487 14h673.524c21.257 0 38.488 16.816 38.488 37.559v394.38c0 20.744-17.231 37.561-38.488 37.561h-673.524c-21.256 0-38.487-16.816-38.487-37.561v-394.38c0-20.743 17.231-37.559 38.487-37.559z" fill="none" stroke="#393939" strokeWidth="30"/>
                      <g fill="#393939">
                        <path d="m296.86 342.7 32.099-183.82h51.344l-32.123 183.82zm236.8-179.86c-10.172-3.724-26.108-7.721-46.014-7.721-50.731 0-86.466 24.931-86.77 60.662-.287 26.414 25.511 41.149 44.984 49.941 19.985 9.01 26.703 14.755 26.608 22.801-.127 12.322-15.96 17.952-30.715 17.952-20.549 0-31.467-2.786-48.327-9.65l-6.616-2.921-7.207 41.149c11.993 5.132 34.168 9.578 57.191 9.808 53.967 0 89.002-24.646 89.401-62.801.193-20.912-13.484-36.826-43.105-49.945-17.945-8.502-28.936-14.178-28.818-22.788 0-7.64 9.301-15.812 29.399-15.812 16.791-.254 28.951 3.319 38.427 7.043l4.601 2.122 6.96-39.843m132.12-3.963h-39.671c-12.29 0-21.487 3.274-26.886 15.245l-76.245 168.46h53.91s8.815-22.653 10.81-27.625c5.892 0 58.264.079 65.752.079 1.535 6.436 6.245 27.546 6.245 27.546h47.641l-41.556-183.71zm-62.943 118.7c4.246-10.591 20.455-51.385 20.455-51.385-.303.491 4.215-10.643 6.81-17.543l3.468 15.849s9.831 43.878 11.886 53.079zm-349.55-118.7-50.264 125.35-5.356-25.476c-9.357-29.366-38.511-61.182-71.103-77.11l45.959 160.76 54.32-.061 80.827-183.47h-54.383"/>
                        <path d="m156.11 158.88h-82.787l-.655 3.825c64.406 15.216 107.02 51.984 124.72 96.166l-18.002-84.473c-3.108-11.638-12.121-15.111-23.272-15.518"/>
                      </g>
                    </svg>
                    <p className='m-0 text-uppercase'>visa <span>****</span><span>1234</span> - Expires <span>01/2023</span></p>
                  </li>
                </ul>

                <Form.Group className='d-flex align-items-center'
                controlId="newCard">
                  <Form.Check type="checkbox" 
                    className='mt-1 check-primary'
                    label={
                    <span className='fw-normal'>
                      Use other credit card
                    </span>} 
                    required 
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>

          <Row className='other-cards mt-4 justify-content-center gap-5'>
            <Col xs={12} md={2}>
              <div className="card-shadow">
                <Link className='d-flex justify-content-center align-items-center p-3'>
                  <img src={ MultiCards } alt="Other Cards" />
                </Link>
              </div>
            </Col>

            <Col xs={12} md={2}>
              <div className="card-shadow">
                <Link className='d-flex justify-content-center align-items-center'>
                  <img src={ PayPal } alt="Paypal" />
                </Link>
              </div>
            </Col>

            <Col xs={12} md={2}>
              <div className="card-shadow">
                <Link className='d-flex justify-content-center align-items-center'>
                  <img src={ ApplePay } alt="Apple Pay" />
                </Link>
              </div>
            </Col>
          </Row>

          <Row className='mt-5'>
            <Col xs={12} md={7} className='mx-auto'>
              <Form>
                <div className='d-flex gap-4'>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="formAmount">
                    <Form.Label className='fs-small-xs'>card number</Form.Label>
                    <Form.Control type="number" name="amount" placeholder="Enter card number" required/>
                  </Form.Group>
                  <Form.Group className="mb-3 w-25 text-uppercase fs-small" controlId="formAmountReconfirm">
                    <Form.Label className='fs-small-xs'>exp date</Form.Label>
                    <Form.Control type="number" name="amount" required/>
                  </Form.Group>
                </div>
                
                <div className='d-flex gap-4'>
                  <Form.Group className="mb-3 w-100 text-uppercase fs-small" controlId="formAmount">
                    <Form.Label className='fs-small-xs'>name on card</Form.Label>
                    <Form.Control type="text" name="amount" placeholder="Enter name on card" required/>
                  </Form.Group>
                  <Form.Group className="mb-3 w-25 text-uppercase fs-small" controlId="formAmountReconfirm">
                    <Form.Label className='fs-small-xs'>CVV</Form.Label>
                    <Form.Control type="number" name="amount" required/>
                  </Form.Group>
                </div>

                <div className="d-flex justify-content-center">
                  <Button variant='primary'>Make Deposit</Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>

        <div className="card-shadow p-3 mt-4">
          <Row className='align-items-center'>
            <Col xs={2} md={1}>
              <div className='mx-0 mx-md-5'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" width="40" height="40" fill="none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="40" height="40" fill="#fc0" x="0" y="0" opacity="100%">
                    <path d="M506.3 417l-213.3-364c-16.33-28-57.54-28-73.98 0l-213.2 364C-10.59 444.9 9.849 480 42.74 480h426.6C502.1 480 522.6 445 506.3 417zM232 168c0-13.25 10.75-24 24-24S280 154.8 280 168v128c0 13.25-10.75 24-23.1 24S232 309.3 232 296V168zM256 416c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 401.9 273.4 416 256 416z">
                    </path>
                  </svg>
                </svg>
              </div>
            </Col>
            <Col>
              <p className='fs-small m-0 text-uppercase fw-500'>Keep in mind that 40 points = $1 when making point rewards. Point rewards in the amount of $10 or more are common. You may consider creating a cumulative program using lower reward amounts so recipients can earn more frequently and save up to redeem when they’ve accumulated more points.</p> 
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Funds