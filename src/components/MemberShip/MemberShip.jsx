import React from 'react';

import './MemberShip.scss';
import { Link } from 'react-router-dom';
import MemberShipImg from '../../assets/images/membershipimage.png';
import MobileView from '../../assets/images/mobile.png';

function MemberShip() {
  return (
    <div className="membership-wrapper p-3">
      <div className="container">
        <div className="top-wrapper d-flex">
          <div className="text-section">
            <div className="text-inner-wrapper w-65">
              <p className='fc-white fs-large-lg'>
                Customers are <span className='fc-orange'>4x more likely to buy</span> when they have a recommendation from a friend.
              </p>
              <p className='fc-white fs-large-lg'>
                - Nielson
              </p>
              <p className='fc-white fs-large-lg'>
                You can expect <span className='fc-orange'>16% more profits</span> from customers who have been referred to a business
              </p>
              <p className='fc-white fs-large-lg'>
                - Harvard Business Review
              </p>
            </div>
            <div className="btn-wrapper">
              <Link to="/" className='btn btn-light'>Start your 30 day free trial now!</Link>
            </div>
          </div>

          <div className="img-section">
            <h3>Grow your business by collecting high converting referrals.</h3>
            <div className="img-wrapper">
              <div className="desktopDevices">
                <img src={MemberShipImg} alt="Desktop" />
              </div>
            </div>
          </div>
        </div>
        <div className="membership-plan d-flex">
          <div className="mobile-img">
            <img src={MobileView} alt="Mobile" height={400} />
          </div>
          <div className="plans-wrapper">
            <h2 className='text-center mb-5'>Membership Plans</h2>
            <div className="plan">
              <h3>Monthly</h3>
              <p>Want to use Fasteezy month-to-month? No problem. Select our monthly plan. 30 day free trial included.</p>
            </div>
            <div className="plan">
              <h3>Annual</h3>
              <p>Unlock a year of exclusive benefits with our Annual Membership. This plan is perfect for those who prefer an upfront commitment and want to save on their membership.</p>
            </div>
            <div className="btn-wrapper d-flex justify-content-end mt-2">
              <Link to="/" className='btn btn-primary'>Learn More</Link>
            </div>
          </div>
        </div>
        <div className="border-behind"></div>
      </div>
    </div>
  )
}

export default MemberShip