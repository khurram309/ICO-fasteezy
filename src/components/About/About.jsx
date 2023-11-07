import React from 'react';

import Button from 'react-bootstrap/Button';
import AboutCard from '../../assets/images/about-card.png';
import './About.scss';

function About() {
  return (
    <div className="container-lg">
      <div className="about-assistant section-spacing pb-4 mt-5">
        <div className="row">
          <div className="col-6">
            <img src={AboutCard} alt="Logo" />
          </div>
          <div className="col-6">
            <h2>About <span>UVO Al assistant</span></h2>
            <h5 className="pe-5">
              At UVO, we're dedicated to your health and well-being. We understand that navigating
              the world of healthcare can be complex and sometimes overwhelming. That's why we've
              created UVO - Your Personal Medical Guru.
            </h5>
            <div className="bnt-section mt-5">
              <Button variant="outline-primary me-1 small-btn">Try Demo</Button>{' '}
              <Button variant="primary small-btn">Get Started</Button>{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;