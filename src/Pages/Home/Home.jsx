import React from 'react';
import Button from 'react-bootstrap/Button';

import WebView from '../../assets/images/web.png';
import Amazon from '../../assets/images/amazon.png';
import Hulu from '../../assets/images/hulu.png';
import Delta from '../../assets/images/delta.png';
import Nike from '../../assets/images/nike.png';
import Visa from '../../assets/images/visa.png';
import MobileView from '../../assets/images/mobile.png';
import './Home.scss';
import GetStarted from '../../components/Modals/GetStarted/GetStarted';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import { useNavigate } from 'react-router-dom';
import MemberShip from '../../components/MemberShip/MemberShip';
import DontTake from '../../components/DontTake/DontTake';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-banner bg-blue">
        <div className="container-lg">
          <div className="banner-inner d-flex justify-content-center">
            <div className="banner-text mt-4 mt-md-0">
              <h4>Free 30 DAY TRIAL</h4>
              <h2>
                Make collecting referrals <span>eezy!</span>
              </h2>
              <p className='pe-5'>Fasteezy is your all-in-one rewards platform designed to help small to medium sized businesses easily collect leads and referrals with the click of a button. Collecting referral information and storing it in one place has never been eezier!</p>
              <div className="mt-5 d-flex justify-content-center">
                <Button variant="light" onClick={() => navigate('/chat')}>Try for free</Button>{' '}
                {/* <GetStarted source="home" /> */}
              </div>
            </div>
            <div className="WebView-img">
              <img src={WebView} alt="Logo" />
            </div>
          </div>

          <div className="bottom-banner d-flex justify-content-center">
            <div className="venders">
              <h6>Over 75 gift card venders to redeem from!</h6>
              <div className="d-flex gap-3 justify-content-center mt-4">
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
            </div>
              </div>
            <div className="mobile-img">
              <img src={MobileView} alt="Mobile" />
            </div>
          </div>
        </div>
      </div>
      <HowItWorks />
      <MemberShip />
      <DontTake />
    </>
  )
}

export default Home;
