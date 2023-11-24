import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/images/logo.png';
import twitter from '../../assets/images/twitter-icon.svg';
import fb from '../../assets/images/fb-icon.svg';
import instagram from '../../assets/images/instagram-icon.svg';
import github from '../../assets/images/github-icon.svg';

function Footer() {
  return (
    <footer>
      <div className="container-lg">
        <h2 className="text-center">Ready to <span>Get Started?</span></h2>
        <h5 className="text-center">Join the thousands who have already experienced the convenience and peace
          of mind that UVO brings to their healthcare journey. Sign up today and empower yourself
          with instant medical insights.
        </h5>
        <div className="d-flex justify-content-center mt-4 footer-signup">
          <Button variant="primary">Sign Up Now</Button>{' '}
        </div>
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className="f-logo">
            <img className="img-fluid " src={logo} alt="Logo" />
          </div>
          <div className="f-links">
            <Nav className="mx-auto center-nav">
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Features">Features</Nav.Link>
              <Nav.Link href="#Works">Works</Nav.Link>
              <Nav.Link href="#Support">Support</Nav.Link>
            </Nav>
          </div>
          <div className="f-social d-flex">
            <div className="mx-3">
              <Link to="#twitter"><img src={twitter} alt="twitter" /></Link>
            </div>
            <div className="mx-3">
              <Link to="#fb"><img src={fb} alt="fb" /></Link>
            </div>
            <div className="mx-3">
              <Link to="#instagram"><img src={instagram} alt="instagram" /></Link>
            </div>
            <div className="mx-3 me-0">
              <Link to="#github"><img src={github} alt="github" /></Link>
            </div>
          </div>
        </div>
        <div className="copyright d-flex justify-content-between align-items-center flex-column flex-md-row ">
          <div className="cr">© Copyright 2023, All Rights Reserved</div>
          <div className="quick-links">
            <Link to="pp">Privacy Policy</Link>
            <Link to="tc">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
