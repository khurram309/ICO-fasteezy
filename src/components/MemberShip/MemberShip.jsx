import React from 'react';

import './MemberShip.scss';
import { Link } from 'react-router-dom';
import Desktop2 from '../../assets/images/desktop2.png';
import Laptop from '../../assets/images/laptop.png';
import MobileView from '../../assets/images/mobile.png';

function MemberShip() {
  return (
    <div className="bg-blue p-3">
      <div className="membership-wrapper">
        <div className="container-lg">
          <div className="top-wrapper d-flex">
            <div className="text-section">
              <div className="text-inner-wrapper">
                <p>Customers are <span>4x more likely to buy</span> when they have a recommendation from a friend.</p>
                <p>- Nielson</p>
                <p>You can expect <span>16% more profits</span> from customers who have been referred to a business</p>
                <p>- Harvard Business Review</p>
              </div>
              <div className="btn-wrapper">
                <Link to="/" className='btn btn-light'>Start your 30 day free trial now!</Link>
              </div>
            </div>

            <div className="img-section">
              <h3>Grow your business by collecting high converting referrals.</h3>
              <div className="img-wrapper">
                <div className="desktop">
                  <img src={Desktop2} alt="Desktop" />
                </div>
                <div className="laptop">
                <img src={Laptop} alt="Laptop" />
                </div>
              </div>
            </div>
          </div>
          <div className="membership-plan d-flex">
            <div className="mobile-img">
              <img src={MobileView} alt="Mobile" height={400} />
            </div>
            <div className="plans-wrapper">
              <h3 className='title'>Membership Plans</h3>
              <div className="plan">
                <h3>Monthly</h3>
                <p>Want to use Fasteezy month-to-month? No problem. Select our monthly plan. 30 day free trial included.</p>
              </div>
              <div className="plan">
                <h3>Annual</h3>
                <p>Unlock a year of exclusive benefits with our Annual Membership. This plan is perfect for those who prefer an upfront commitment and want to save on their membership.</p>
              </div>
            </div>
          </div>
          <div className="border-behind"></div>
        </div>
      </div>
    </div>
  )
}

export default MemberShip