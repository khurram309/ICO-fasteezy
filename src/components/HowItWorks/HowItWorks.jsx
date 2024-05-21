import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HowItWorks.scss';

import Desktop from '../../assets/images/desktop.png';

function HowItWorks() {
  return (
    <>
    <div className='p-3'>
      <Container className='pt-9'>
        <Row className='howItWork-wrapper bg-white'>
          <Col xs={12} md={7} lg={6} className='signUp-screen'>
            <div className="desktop-img">
              <img src={Desktop} alt="Desktop" />
            </div>
            <div className="signUp-text">
              <h2 className='fc-primary'>
                How Fasteezy Works:
              </h2>
              <p>In fewer than 5 clicks, you can incentivize the business activity you're looking for!</p>
            </div>
            <div className="btn-wrapper d-flex justify-content-center my-4">
              <Link className='btn btn-primary'>Learn More</Link>
            </div>

            <div className="features d-flex fs-small">
              <Row className='align-items-center fc-primary'>
                <Col xs={6} lg={3}>
                  <Stack
                    direction='horizontal'
                    gap={2}
                  >
                    <svg viewBox="0 0 384 512" width={48} height={40} fill='#ffc14b'>
                      <path d="M381.2 172.8C377.1 164.9 368.9 160 360 160h-156.6l50.84-127.1c2.969-7.375 2.062-15.78-2.406-22.38S239.1 0 232 0h-176C43.97 0 33.81 8.906 32.22 20.84l-32 240C-.7179 267.7 1.376 274.6 5.938 279.8C10.5 285 17.09 288 24 288h146.3l-41.78 194.1c-2.406 11.22 3.469 22.56 14 27.09C145.6 511.4 148.8 512 152 512c7.719 0 15.22-3.75 19.81-10.44l208-304C384.8 190.2 385.4 180.7 381.2 172.8z">
                      </path>
                    </svg>
                    <p className='m-0 lh-normal w-100'>Speed & Simplicity</p>
                  </Stack>
                </Col>
                <Col xs={6} lg={5}>
                  <Stack
                    direction='horizontal'
                    gap={2}
                  >
                    <svg viewBox="0 0 24 24" width={48} height={57} fill='#ffc14b'>
                      <path d="M0 0h24v24H0z" fill="none">
                      </path>
                      <path d="m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z">
                      </path>
                    </svg>
                    <p className='m-0 lh-normal w-100'>Customer Retention & Expansion</p>
                  </Stack>
                </Col>
                <Col xs={6} lg={4}>
                  <Stack
                    direction='horizontal'
                    gap={2}
                  >
                    <svg viewBox="0 0 24 24" width={50} height={50} fill='#ffc14b'>
                      <path d="M0 0h24v24H0z" fill="none">
                      </path>
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z">
                      </path>
                    </svg>
                    <p className='m-0 lh-normal w-100'>Easy to Track Results</p>
                  </Stack>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={5} lg={6} className=''>
            <Stack
              direction='vertical'
              className='steps'
            >
              <div className="step">
                <h3>Step 1</h3>
                <p>Place your custom Fasteezy referral link directly on materials!</p>
              </div>
              <div className="step">
                <h3>Step 2</h3>
                <p>The user with a referral to give clicks your button(or scans your code).</p>
              </div>
              <div className="step">
                <h3>Step 3</h3>
                <p>User fills out your custom referral info form.</p>
              </div>
              <div className="step">
                <h3>Step 4</h3>
                <p>Send the user a reward for their referral.</p>
              </div>
            </Stack>
          </Col>
        </Row>
        <div className="border-behind"></div>
      </Container>
    </div>
    </>
  )
}

export default HowItWorks