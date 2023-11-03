import React from 'react';
import Button from 'react-bootstrap/Button';

import AIchatbot from '../../assets/images/banner-img.png';
import './Home.scss';
import About from '../About/About';
import KeyFeature from '../KeyFeature/KeyFeature';
import HowItWorks from '../HowItWorks/HowItWorks';
import WhatUsersSay from '../WhatUsersSay/WhatUsersSay';
import Questions from '../Questions/Questions';

function Home() {
  return (
    <>
      <div className="main-banner">
        <div className="banner-inner d-flex justify-content-end align-items-center">
          <div className="banner-text">
            <h2>
              Empathetic Mental Health <span>AI Chatbot</span>
            </h2>
            <h5>Our AI assistant UVO is here to help you navigate the world of health and wellness.</h5>
            <div className="bnt-section mt-5">
              <Button variant="outline-primary me-1">Try Demo</Button>{' '}
              <Button variant="primary">Get Started</Button>{' '}
            </div>
          </div>
          <div className="AIchatbot-img">
            <img src={AIchatbot} alt="Logo" />
          </div>
        </div>
      </div>
      <About />
      <KeyFeature />
      <HowItWorks />
      <WhatUsersSay />
      <Questions />
    </>
  )
}

export default Home
