import React from 'react';

import customer1 from '../../assets/images/customer1.png';
import customer2 from '../../assets/images/customer2.png';
import customer3 from '../../assets/images/customer3.png';
import "./WhatUsersSay.scss";

function WhatUsersSay() {
  return (
    <div className="whatusers section-spacing">
      <h2 className="text-white text-center">What <span className="text-white markerlight">Users Say</span></h2>
      <h5 className='text-white text-center'>Discover what our satisfied users have to say about their experiences with UVO</h5>
      <div className="users-grid">
        <div className='d-flex flex-column justify-content-between'>
          <div>
            <h4 className='text-white bold mb-4'>Reliable Health Companion</h4>
            <p>"I can't thank UVO enough for the peace of mind it's given me. Whenever I have a health question or concern, UVO is there with accurate information and reassuring guidance."</p>
          </div>
          <div className="d-flex mt-5">
            <div className="cust-pic me-3">
              <img className="img-fluid" src={customer1} alt="customer" />
            </div>
            <div>
              <div className="fw-bold text-white">Dianne Russell</div>
              <div className="name">Customer</div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column justify-content-between'>
          <div>
            <h4 className='text-white bold mb-4'>Invaluable for Busy Moms</h4>
            <p>"As a busy mom, UVO has been a lifesaver. It's like having a medical expert in my pocket. It helps me understand my family's health better and decide when to seek professional help."</p>
          </div>
          <div className="d-flex mt-5">
            <div className="cust-pic me-3">
              <img className="img-fluid" src={customer2} alt="customer" />
            </div>
            <div>
              <div className="fw-bold text-white">Theresa Webb</div>
              <div className="name">Customer</div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column justify-content-between'>
          <div>
            <h4 className='text-white bold mb-4'>Trusted Friend for Health Decisions</h4>
            <p>"UVO is my reliable buddy for health info. It's like having a knowledgeable friend to guide me, making informed decisions about my well-being a breeze."</p>
          </div>
          <div className="d-flex mt-5">
            <div className="cust-pic me-3">
              <img className="img-fluid" src={customer3} alt="customer" />
            </div>
            <div>
              <div className="fw-bold text-white">Alexander</div>
              <div className="name">Customer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatUsersSay;
