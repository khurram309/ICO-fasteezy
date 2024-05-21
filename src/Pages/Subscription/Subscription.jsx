import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Subscription.scss'
import { Link } from 'react-router-dom';

import MultiCards from '../../assets/images/multi-cards.png';
import PayPal from '../../assets/images/paypal.svg';
import ApplePay from '../../assets/images/apple-pay.svg';
import SubscribeSuccess from '../../components/Modals/SubscribeSuccess/SubscribeSuccess';
import SubcribeCancel from '../../components/Modals/SubcribeCancel/SubcribeCancel';

function Subscription() {
  const  subsMonthly = [
    {feat: 'View your referrals, reviews and leads', key: 0},
    {feat: 'Referral & engagement widget to place in your media', key: 1},
    {feat: 'Fund your account to issue point rewards', key: 2},
    {feat: 'Send your own custom reward', key: 3},
    {feat: 'View reports & more!', key: 4}
  ];

  const  subsYearly = [
    {feat: 'View your referrals, reviews and leads', key: 0},
    {feat: 'Referral & engagement widget to place in your media', key: 1},
    {feat: 'Fund your account to issue point rewards', key: 2},
    {feat: 'Send your own custom reward', key: 3},
    {feat: 'View reports & more!', key: 4}
  ];
  return (
    <>
      <div className="subscription-wrapper p-2 p-md-4">
        <Row>
          <Col xs={12} md={5}>
            <h4>Subscription</h4>
            <p>There is a minimal cost to use all of the great features of Fasteezy. You can select to pay monthly or annually. Please remember that this does NOT INCLUDE funding your rewards account which you can do in the "Fund Your Account" page.</p>
          </Col>
          <Col xs={12} md={6}>
            <Row className='justify-content-center'>
              <Col xs={12} md={5}>
                <div className="card card-shadow p-3 text-center">
                  <h3>Expiration Date</h3>
                  <p className='fc-alert'>Dec 30, 2023</p>
                  {/* <Button>Cancel Subscription</Button> */}
                  <SubcribeCancel />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col>
            <h3>Select a Payment Method:</h3>
          </Col>
        </Row>

        <Container className='mt-3'>
          <Row className='justify-content-center payment-methods'>
            <Col xs={12} md={4}>
              <div className="card-shadow p-3">
                <div className='text-center'>
                  <h3 className='fw-500'>Monthly</h3>
                  <h2 className='fc-primary fs-large-xxl fw-500'>FREE</h2>
                  <p className="fs-small">for 1 month. Then, starts at</p>
                  <h3 className='fw-500'>$<span>9.99</span>/mo</h3>
                </div>
                <ul className='list-unstyled'>
                  {subsMonthly.map((featList) => {
                    return (
                      <li className='mb-2' key={featList.key}>{featList.feat}</li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="card-shadow">
                <p className='bg-blue m-0 fs-large card-shadow py-2 d-flex justify-content-center gap-2 text-white align-items-center'>
                  <svg viewBox="0 0 448 512" fill='#ff9500' width={25}>
                    <path d="M323.5 51.25C302.8 70.5 284 90.75 267.4 111.1C240.1 73.62 206.2 35.5 168 0C69.75 91.12 0 210 0 281.6C0 408.9 100.2 512 224 512s224-103.1 224-230.4C448 228.4 396 118.5 323.5 51.25zM304.1 391.9C282.4 407 255.8 416 226.9 416c-72.13 0-130.9-47.73-130.9-125.2c0-38.63 24.24-72.64 72.74-130.8c7 8 98.88 125.4 98.88 125.4l58.63-66.88c4.125 6.75 7.867 13.52 11.24 19.9C364.9 290.6 353.4 357.4 304.1 391.9z">
                    </path>
                  </svg>
                  BEST VALUE
                </p>
                <div className="p-3">
                  <div className='text-center'>
                    <h3 className='fw-500'>Annually</h3>
                    <h2 className='fc-primary fs-large-xxl fw-500'>FREE</h2>
                    <p className="fs-small">for 1 month. Then, starts at</p>
                    <h3 className='fw-500'>$<span>99</span>/yr</h3>
                  </div>
                  <ul className='list-unstyled'>
                    {subsMonthly.map((subsYearly) => {
                      return (
                        <li className='mb-2' key={subsYearly.key}>{subsYearly.feat}</li>
                      );
                    })}
                  </ul>

                  <div className='d-flex gap-3 justify-content-center'>
                    <svg viewBox="0 0 24 24" width={30}>
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z">
                      </path>
                    </svg>
                    <p className='m-0 fc-primary fs-large'>** SAVE 17% **</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row className='justify-content-center mt-4'>
            <Col xs={12} md={8}>
              <Form.Group className='d-flex align-items-center'
              controlId="accurateBilling">
                <Form.Check type="radio" 
                  className='mt-1 check-primary'
                  label={
                    <span className='fw-normal'>
                    Automated Recurring Billing enables you to automatically process installment-based payments
                    </span>} 
                  required 
                  />
              </Form.Group>
            </Col>
          </Row>

          <Row className='justify-content-center mt-5'>
            <Col xs={12} md={8}>
              <div className="card-shadow p-3 fs-small text-uppercase">
                <Form.Group className='d-flex align-items-center'
                controlId="filedCard">
                  <Form.Check type="radio" 
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
                    <p className='m-0'>visa <span>****</span><span>1234</span> - Expires <span>01/2023</span></p>
                  </li>
                </ul>

                <Form.Group className='d-flex align-items-center'
                controlId="newCard">
                  <Form.Check type="radio" 
                    className='mt-1 check-primary'
                    label={
                      <span className='fw-normal'>
                        Use other credit card
                      </span>} 
                    required 
                    />
                </Form.Group>

                <Row className='other-cards mt-4 justify-content-center'>
                  <Col xs={12} md={3}>
                    <div className="card-shadow">
                      <Link className='d-flex justify-content-center align-items-center p-3'>
                        <img src={ MultiCards } alt="Other Cards" />
                      </Link>
                    </div>
                  </Col>

                  <Col xs={12} md={3}>
                    <div className="card-shadow">
                      <Link className='d-flex justify-content-center align-items-center'>
                        <img src={ PayPal } alt="Paypal" />
                      </Link>
                    </div>
                  </Col>

                  <Col xs={12} md={3}>
                    <div className="card-shadow">
                      <Link className='d-flex justify-content-center align-items-center'>
                        <img src={ ApplePay } alt="Apple Pay" />
                      </Link>
                    </div>
                  </Col>
                </Row>

                <Row className='mt-5'>
                  <Col xs={12} md={9} className='mx-auto'>
                    <Form>
                      <Row className='mb-3 text-uppercase fs-small'>
                        <Col md={9}>
                          <Form.Group controlId="formAmount">
                            <Form.Label className='fs-small-xs'>card number</Form.Label>
                            <Form.Control type="number" name="amount" placeholder="Enter card number" required/>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group controlId="formAmountReconfirm">
                            <Form.Label className='fs-small-xs'>exp date</Form.Label>
                            <Form.Control type="number" name="amount" required/>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className='mb-3 text-uppercase fs-small'>
                        <Col md={9}>
                          <Form.Group controlId="formAmount">
                            <Form.Label className='fs-small-xs'>name on card</Form.Label>
                            <Form.Control type="text" name="amount" placeholder="Enter name on card" required/>
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group controlId="formAmountReconfirm">
                            <Form.Label className='fs-small-xs'>CVV</Form.Label>
                            <Form.Control type="number" name="amount" required/>
                          </Form.Group>
                        </Col>
                      </Row>
                      
                      
                      <div className='d-flex gap-4'>
                      </div>
                    </Form>
                  </Col>
                </Row>

                <div className="d-flex justify-content-center mt-2">
                  <SubscribeSuccess />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Subscription