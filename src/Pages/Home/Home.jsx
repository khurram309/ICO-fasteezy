import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import './Home.scss';

import WebImg from '../../assets/images/banner.png';
import Amazon from '../../assets/images/amazon.png';
import Hulu from '../../assets/images/hulu.png';
import Delta from '../../assets/images/delta.png';
import Nike from '../../assets/images/nike.png';
import Visa from '../../assets/images/visa.png';

import HowItWorks from '../../components/HowItWorks/HowItWorks';
import MemberShip from '../../components/MemberShip/MemberShip';
import DontTake from '../../components/DontTake/DontTake';
// import SignUp from '../../components/Modals/GetStarted/GetStarted.jsx';


function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-blue">
        <div className="main-banner fc-white">
          <Container>
            <Row className='flex-md-reverse-column flex-row'>
              <Col xs={12} md={6}>
                <div className="banner-text mt-4 mt-md-0 pe-3">
                  <h4 className='fc-orange ff-primary'>
                    Free 30 DAY TRIAL
                    </h4>
                  <h1 className='w-50 w-md-100'>
                    Make collecting referrals <span className='fc-orange'>eezy!</span>
                  </h1>
                  <p className='fs-large'>Fasteezy is your all-in-one rewards platform designed to help small to medium sized businesses easily collect leads and referrals with the click of a button. Collecting referral information and storing it in one place has never been eezier!</p>
                  <div className="mt-5 d-flex justify-content-center btn-wrapper">
                    <Button variant="secondary" onClick={() => navigate('/chat')}>Try for free</Button>{' '}
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="WebView-img">
                  <img src={ WebImg } alt="Apps Img" />
                </div>
              </Col>
            </Row>

            <Row className='bottom-banner'>
              <Col xl={{ span: 7 , offset: 2}} xs={12}>
                <h3 className='ff-primary text-center'>
                  Over 75 gift card venders to redeem from!
                </h3>
                <Stack 
                  direction='horizontal'
                  gap={2}
                  className='mt-4 venders justify-content-center'
                >
                  <div className="amzn">
                    <img src={Amazon} alt="Amazon" />
                  </div>
                  <div className="hulu">
                    <img src={Hulu} alt="Hulu" />
                  </div>
                  <div className="delta">
                    <img src={Delta} alt="Delta" />
                  </div>
                  <div className="nike">
                    <img src={Nike} alt="Nike" />
                  </div>
                  <div className="visa">
                    <img src={Visa} alt="Visa" />
                  </div>
                </Stack>
              </Col>
            </Row>
          </Container>
        </div>
        <HowItWorks />
        <MemberShip />
        <DontTake />
      </div>
    </>
  )
}

export default Home;
