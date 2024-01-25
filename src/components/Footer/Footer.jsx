import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import Logo from '../../assets/images/fasteezy_logo.png';
import { useSelector } from 'react-redux';

function Footer() {
  const userToken = useSelector(state => state.auth.token);

  return (
    <footer>
      <div className="container-lg">
        <div className="footer-wrapper d-flex align-items-center gap-5">
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <p>Copyright &copy; Incento LLC <br></br> All Right Reserved</p>
          </div>
          <div className="links-wrapper d-flex justify-content-evenly w-100">
            <Link to="/">About Us</Link>
            <Link to="/">Terms Of Services</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
