import React, { useState } from 'react';

import './Dashboard.scss';
import User from '../../assets/images/user-icon.svg'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';

function Dashboard() {
  const navigate = useNavigate();
  const [showReferrals, setShowReferrals] = useState(false);

  // const goToSettings = () => {
  //   navigate('/user/account-setting');
  // }

  return (
    <>
      <div className="dashboard-wrapper px-4 pt-3">
        <Row>
          <Col xs={12} md={5}>
            <div className="setting-sec">
              <Row>
                <Col>
                  <h4>Welcome, User</h4>
                  <p className='fw-300'>View your referrals, leads, and feedback.</p>
                  <div className="btn-wrapper mt-4">
                    <Button 
                      variant='primary' 
                      onClick={() => { navigate('/user/account-setting'); }}
                    >
                      Account Settings
                    </Button>
                  </div>
                </Col>
              </Row>

              <Row className='mt-5'>
                <Col xs={12} xl={5} lg={6}>
                  <div className="card p-3 py-4 card-shadow">
                    <Col xs={12} md={10} className='mx-auto'>
                      <h4 className='text-center'>Send a Reward</h4>
                      <p className='fw-500'>Create your own offer or reward in points redeemable for valuable gift codes at the nations leading retailers</p>
                      <div className="card-btn-wrapper d-flex justify-content-center">
                        <Button 
                          variant='primary'
                        >
                          Let's Go
                        </Button>
                      </div>
                    </Col>
                  </div>
                </Col>
                <Col xs={12} xl={5} lg={6}>
                  <div className="card p-3 py-4 card-shadow">
                    <Col xs={12} md={10} className='mx-auto'>
                      <h4 className='text-center'>Get Referrals, Leads & Reviews</h4>
                      <p className='fw-500'>Try 5 useful tools to increase engagement</p>
                      <div className="card-btn-wrapper d-flex justify-content-center">
                        <Button 
                          variant='primary'
                        >
                          Start Now
                        </Button>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>

            </div>
          </Col>

          <Col xs={12} md={7}>
            <div className="account-sec">
              <Row>
                <Col xs={12} xl={4} lg={7} className='mx-auto'>
                  <h3>Account Balance</h3>
                  <div className='bg-pill card-shadow p-4 m-auto p-3 mt-5'>
                    <div className='d-flex align-items-center gap-4 justify-content-center'>
                      <h3 className='m-0'>$<span>43.43</span></h3>
                      <Button variant='primary'>Add Funds</Button>
                    </div>
                  </div>
                </Col>
              </Row>
              
              <Row className='mt-2 mt-md-4'>
                <Col xs={12} xl={5} lg={9} className='mx-auto'>
                  <div className="bg-pill card-shadow d-flex justify-content-center gap-3 text-uppercase fs-small p-3 p-md-4 px-md-5 px-2">
                    <Link className='d-flex flex-column gap-1 fc-darkPrimary p-2 px-3'>
                      <span className='fs-large-xl'>32</span>
                      referrals
                    </Link>
                    <Link className={`d-flex flex-column gap-1 fc-darkPrimary p-2 px-3 ${setShowReferrals && 'active'}`}>
                    <span className='fs-large-xl'>2</span>
                      Leads
                    </Link>
                    <Link className='d-flex flex-column gap-1 fc-darkPrimary p-2 px-3'>
                      <span className='fs-large-xl'>32</span>
                      reviews
                    </Link>
                  </div>
                </Col>
              </Row>

              <Row className='mt-5'>
                <Col xs={12} md={9} className='mx-auto'>
                  <ul className='accounts-list list-unstyled'>
                    <li className='mb-3'>
                      <Row>
                        <Col md={1} xs={2}>
                          <div className="icon">
                            <img src={ User } alt="User Icon" height={40} />
                          </div>
                        </Col>
                        <Col md={4} xs={6} className='text-start'>
                          <p className='m-0 text-capitalize'>Cindy Sanders</p>
                          <p className='m-0 fc-gray92 fw-300'>cindysanders@gmail.xy</p>
                        </Col>
                        <Col xd={3} xs={4}>
                          <p 
                            className='fs-small-xs m-0 fw-500'
                          >
                            created on:
                            <span>11/01/23</span>
                          </p>
                        </Col>
                      </Row>
                    </li>

                    <li className='mb-3'>
                      <Row>
                        <Col md={1} xs={2}>
                          <div className="icon">
                            <img src={ User } alt="User Icon" height={40} />
                          </div>
                        </Col>
                        <Col md={4} xs={6} className='text-start'>
                          <p className='m-0 text-capitalize'>Cindy Sanders</p>
                          <p className='m-0 fc-gray92 fw-300'>cindysanders@gmail.xy</p>
                        </Col>
                        <Col xd={3} xs={4}>
                          <p 
                            className='fs-small-xs m-0 fw-500'
                          >
                            created on:
                            <span>11/01/23</span>
                          </p>
                        </Col>
                      </Row>
                    </li>
                  </ul>

                  <div className='my-4'>
                    <Button variant='outlined'>View All</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard