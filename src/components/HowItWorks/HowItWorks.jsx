import React from 'react';
import { Link } from 'react-router-dom';

import './HowItWorks.scss';
import Speed from '../../assets/images/bolt-lightning.png';
import Trending from '../../assets/images/trending-up.png';
import Poll from '../../assets/images/poll.png';
import Desktop from '../../assets/images/desktop.png';

function HowItWorks() {
  return (
    <div className="bg-blue p-3 pt-9">
      <div className="howItWork-wrapper d-flex">

        <div className="signUp-screen">
          <div className="desktop-img">
            <img src={Desktop} alt="Desktop" />
          </div>
          <div className="signUp-text me-7">
            <h3>How Fasteezy Works:</h3>
            <p>In fewer than 5 clicks, you can incentivize the business activity you're looking for!</p>
          </div>
          <div className="btn-wrapper d-flex justify-content-center">
            <Link className='btn btn-primary'>Learn More</Link>
          </div>
          <div className="features d-flex align-items-center">
            <div className="d-flex gap-2">
              <img src={Speed} alt="Lighting" />
              <p>Speed & Simplicity</p>
            </div>
            <div className="d-flex gap-2">
              <img src={Trending} alt="Lighting" />
              <p>Customer Retention & Expansion</p>
            </div>
            <div className="d-flex gap-2">
              <img src={Poll} alt="Lighting" />
              <p>Easy to Track Results</p>
            </div>
          </div>
        </div>

        <div className="steps ms-3">
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
        </div>
      </div>
        <div className="border-behind"></div>
    </div>
  )
}

export default HowItWorks