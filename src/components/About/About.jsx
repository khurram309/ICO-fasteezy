import React from 'react';

import Button from 'react-bootstrap/Button';
import AboutCard from '../../assets/images/about-card.png';
import GetStarted from '../Modals/GetStarted/GetStarted';
import './About.scss';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  return (
    <div className="container-lg">
      <div className="about-assistant section-spacing pb-4 mt-md-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={AboutCard} alt="About" />
          </div>
          <div className="col-md-6 col-sm-12 text-center text-md-start">
            <h2>About <span>UVO Al assistant</span></h2>
            <h5 className="p-0 pe-lg-5">
              At UVO, we're dedicated to your health and well-being. We understand that navigating
              the world of healthcare can be complex and sometimes overwhelming. That's why we've
              created UVO - Your Personal Medical Guru.
            </h5>
            <div className="bnt-section mt-5">
              <Button variant="outline-primary me-1 small-btn" onClick={() => navigate('/chat')}>Try Demo</Button>{' '}
              <GetStarted source="home" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
