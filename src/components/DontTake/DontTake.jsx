import React from 'react';

import './DontTake.scss';
import { Container } from 'react-bootstrap';
import Star from '../../assets/images/star.svg';

function DontTake() {
  return (
    <>
    <div className="dntTake-wrapper py-5">
      <Container>
        <div className="dntTake-inner-wrapper text-center fc-white">
          <h2 className='fc-orange'>
            Don't take it from us!
          </h2>
          <p className='fs-large-lg'>
            {`Here’s what our users have to say about Fasteezy`}
          </p>
          <div className="swiffy-slider">
            <ul className="slider-container slider-item-show3 slider-nav-outside ff-secondary fc-black reviews-wrapper">
              <li className='review bg-white p-4'>
                <p>“As a real estate agent, I was having trouble figuring out how to get more leads from my network. Once I started using Fasteezy to reward referrals, I immediately saw an uptick in business. I set myself apart from the competition, and it's evident.”</p>
                <p className="reviewer-name m-0">Daniel J.</p>
                <p className="location fs-small fc-gray92">Orange Country, CA</p>
                <ul className='d-flex p-0 m-0 justify-content-center list-inline gap-1'>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                </ul>
              </li>
              <li className='review bg-white p-4'>
                <p>“Owning a restaurant has its hurdles. Since COVID, we dealt with a lot of issues in regards to staffing. Since implementing Fasteezy's tools, we started collecting employee referrals and our workforce is stronger than ever. We rewarded the employees who pushed the referrals in and everyone is happy!”</p>
                <p className="reviewer-name m-0">Lisa P.</p>
                <p className="location fs-small fc-gray92">Pittsburgh, PA</p>
                <ul className='d-flex p-0 m-0 justify-content-center list-inline gap-1'>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                </ul>
              </li>
              <li className='review bg-white p-4'>
                <p>“I was really skeptical about trying to learn a software like this. I'm not great with technology. I was blown away with how simple Fasteezy was! We send rewards when our customers scan out QR codes and leave reviews. In just 6 months, reviews are up 240%!”</p>
                <p className="reviewer-name m-0">Christina K.</p>
                <p className="location fs-small fc-gray92">New York, NY</p>
                <ul className='d-flex p-0 m-0 justify-content-center list-inline gap-1'>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                </ul>
              </li>
              <li className='review bg-white p-4'>
                <p>“Owning a restaurant has its hurdles. Since COVID, we dealt with a lot of issues in regards to staffing. Since implementing Fasteezy's tools, we started collecting employee referrals and our workforce is stronger than ever. We rewarded the employees who pushed the referrals in and everyone is happy!”</p>
                <p className="reviewer-name m-0">Daniel J.</p>
                <p className="location fs-small fc-gray92">Orange Country, CA</p>
                <ul className='d-flex p-0 m-0 justify-content-center list-inline gap-1'>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                  <li><img className='starIcon' src={Star}  /></li>
                </ul>
              </li>
            </ul>
            <button type="button" className="slider-nav"></button>
            <button type="button" className="slider-nav slider-nav-next"></button>
          </div>
        </div>

      </Container>
    </div>
    </>
  )
}

export default DontTake