import React from 'react';

import './KeyFeature.scss';
import instant from '../../assets/images/instant-icon.svg';
import symptom from '../../assets/images/symptom-icon.svg';
import lab from '../../assets/images/lab-icon.svg';
import heart from '../../assets/images/heart-icon.svg';

function KeyFeature() {
  return (
    <div className="tile-block grayBg section-spacing">
      <div className="container-lg">
        <h2 className="text-center">Key <span>Features</span></h2>
        <h5 className="text-center">Discover the powerful features that make UVO your ultimate healthcare companion:</h5>
        <div className="key-grid mt-5">
          <div className="tile">
            <img src={instant} alt="icon" />
            <h5 className='mt-3'>Instant Medical Answers</h5>
            <p className="mb-0">Get quick, accurate responses to your health questions, ensuring you have instant access to vital information.</p>
          </div>
          <div className="tile">
            <img src={symptom} alt="icon" />
            <h5 className='mt-3'>Symptom Assessment</h5>
            <p className="mb-0">Understand potential causes of your symptoms and receive preliminary diagnoses for a better grasp of your health.</p>
          </div>
          <div className="tile">
            <img src={lab} alt="icon" />
            <h5 className='mt-3'>Lab Result Summaries</h5>
            <p className="mb-0">Easily summarize complex lab test results, enabling you to track your health progress with simplified explanations.</p>
          </div>
          <div className="tile">
            <img src={heart} alt="icon" />
            <h5 className='mt-3'>Personalized Health Insights</h5>
            <p className="mb-0">Receive tailored recommendations based on your medical history, creating a personalized healthcare experience for improved well-being.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KeyFeature;
