import React from 'react';

import './DontTake.scss';

function DontTake() {
  return (
    <div className="bg-blue">
      <div className="container-lg">
        <div className="dntTake-wrapper">
          <div className="dntTake-inner-wrapper">
            <h2>Don't take it from us!</h2>
            <p>People love what we do and we want to let your know</p>
            <div className="reviews-wrapper d-flex gap-4 pt-3">
              <div className='review'>
                <p>"As a real estate agent, I was having trouble figuring out hot to get more leads from my network. Once i started using Fasteezy to reward refferals, I immediately saw an upstick in business. I set myself apart from the competition, and it's evident."</p>
                <p className="reviewer-name">Daniel J.</p>
                <p className="location">Orange Country, CA</p>
              </div>
              <div className='review'>
                <p>"As a real estate agent, I was having trouble figuring out hot to get more leads from my network. Once i started using Fasteezy to reward refferals, I immediately saw an upstick in business. I set myself apart from the competition, and it's evident."</p>
                <p className="reviewer-name">Daniel J.</p>
                <p className="location">Orange Country, CA</p>
              </div>
              <div className='review'>
                <p>"As a real estate agent, I was having trouble figuring out hot to get more leads from my network. Once i started using Fasteezy to reward refferals, I immediately saw an upstick in business. I set myself apart from the competition, and it's evident."</p>
                <p className="reviewer-name">Daniel J.</p>
                <p className="location">Orange Country, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DontTake