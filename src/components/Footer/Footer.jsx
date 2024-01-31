import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import Logo from '../../assets/images/fasteezy_logo.png';
import { useSelector } from 'react-redux';

function Footer() {
  const userToken = useSelector(state => state.auth.token);

  return (
    <footer className={`${userToken ? 'bg-blue fc-white' : ''}`}>
      <div className={`${userToken ? 'w-100 px-5' : 'container'}`}>
        <div className={`${userToken ? 'divider-lg mb-2' : ''}`}></div>
        <div className="footer-wrapper d-flex align-items-center w-100 gap-5">
          <div className="logo">
            {userToken == null && <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>}
            <p className='fs-small m-0 mt-2'>
              Copyright &copy; Incento LLC <br></br> All Right Reserved
            </p>
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
