import React from 'react';
import { Link } from 'react-router-dom';

import './HowItWorks.scss';
import Speed from '../../assets/images/bolt-lightning.svg';
import Trending from '../../assets/images/trending-up.svg';
import Poll from '../../assets/images/poll.svg';
import Desktop from '../../assets/images/desktop.png';

function HowItWorks() {
  return (
    <div className="container p-3 pt-9">
      <div className="howItWork-wrapper d-flex">
        <div className="signUp-screen w-100">
          <div className="desktop-img">
            <img src={Desktop} alt="Desktop" />
          </div>
          <div className="signUp-text w-80">
            <h2 className='fc-primary'>
              How Fasteezy Works:
            </h2>
            <p>In fewer than 5 clicks, you can incentivize the business activity you're looking for!</p>
          </div>
          <div className="btn-wrapper d-flex justify-content-center w-80 m-0 my-5">
            <Link className='btn btn-primary'>Learn More</Link>
          </div>
          <div className="features d-flex align-items-center fc-primary">
            <div className="d-flex gap-2">
              <img src={Speed} className='icon' alt="Lighting" />
              <p className='m-0'>
                Speed & Simplicity
              </p>
            </div>
            <div className="d-flex gap-2">
              <img src={Trending} className='icon' alt="Lighting" />
              <p className='m-0'>
                Customer Retention & Expansion
              </p>
            </div>
            <div className="d-flex gap-2">
              <img src={Poll} className='icon' alt="Lighting" />
              <p className='m-0'>
                Easy to Track Results
              </p>
            </div>
          </div>
        </div>

        <div className="steps ms-3 w-100">
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