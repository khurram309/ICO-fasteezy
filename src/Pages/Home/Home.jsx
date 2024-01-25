import React from 'react';
import Button from 'react-bootstrap/Button';

import AIchatbot from '../../assets/images/banner-img.png';
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
      <div className="main-banner">
        <div className="banner-inner d-flex justify-content-end align-items-center">
          <div className="banner-text mt-4 mt-md-0">
            <h2>
              Have health questions? <span>Get answers now</span>
            </h2>
            <h5>No waiting for your doctor's office or guessing on the internet.</h5>
            <div className="bnt-section mt-5">
              <Button variant="outline-primary me-1 small-btn" onClick={() => navigate('/chat')}>Try Demo</Button>{' '}
              <GetStarted source="home" />
            </div>
          </div>
          <div className="AIchatbot-img">
            <img src={AIchatbot} alt="Logo" />
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
