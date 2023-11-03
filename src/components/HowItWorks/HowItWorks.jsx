import React from 'react';

import './HowitWorks.scss';
import count1 from '../../assets/images/1-icon.svg';
import count2 from '../../assets/images/2-icon.svg';
import count3 from '../../assets/images/3-icon.svg';
import count4 from '../../assets/images/4-icon.svg';

function HowItWorks() {
  return (
    <div className="tile-block grayBg section-spacing">
      <div className="container-lg">
        <h2 className="text-center">How <span>it Works</span></h2>
        <h5 className="text-center">Discover how easy it is to get medical guidance and answers with UVO in just four simple steps</h5>
        <div className="key-grid mt-5">
          <div className="tile">
            <img src={count1} alt="icon" />
            <h5 className='mt-3'>Ask Your Question</h5>
            <p className="mb-0">Type or speak your detailed health question into the UVO interface.</p>
          </div>
          <div className="tile">
            <img src={count2} alt="icon" />
            <h5 className='mt-3'>UVO Analyzes Your Query</h5>
            <p className="mb-0">UVO's advanced AI algorithms analyze your question, considering symptoms, history, and trends.</p>
          </div>
          <div className="tile">
            <img src={count3} alt="icon" />
            <h5 className='mt-3'>Receive Personalized Guidance</h5>
            <p className="mb-0">Get instant, evidence-based responses with personalized recommendations.</p>
          </div>
          <div className="tile">
            <img src={count4} alt="icon" />
            <h5 className='mt-3'>Take Informed Action</h5>
            <p className="mb-0">Armed with UVO's insights, make informed health decisions and consult professionals if needed.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;
