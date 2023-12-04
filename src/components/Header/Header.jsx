import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import Login from '../Modals/Login/Login';
import GetStarted from '../Modals/GetStarted/GetStarted';
import './Header.scss';
import store from '../../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import dp from '../../assets/images/dp.jpg';
import bell from '../../assets/images/bell-icon.svg';
import { logout } from '../../Redux/actions/authActions';


function Header() {
  // const state = store.getState();
  const dispatch = useDispatch()
  const userToken = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
  }

  return (
    <Navbar expand="lg" className='py-4 mb-0'>
      <div className="container-lg">
        <div className="logo">
          <NavLink to="/" className='p-0 d-flex w-100'>
            <img src={logo} alt="Logo" />
          </NavLink>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto center-nav">
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/chat">Chatbot</NavLink>
          </Nav>
          {userToken ? (
          <Nav>
          <div className="right-nav d-flex align-items-center">
            <div className="bell me-3 d-flex align-items-center justify-content-center">
              <div className="notification"></div>
              <img src={bell} alt="Bell" />
            </div>
            <div className=' d-flex align-items-center profile-dropdown'>
              <div className="avatar">
                <div className="dot"></div>
                <img src={dp} alt="Dp" />
              </div>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  { `${user?.first_name} ${user?.last_name}` }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Nav>) : (
          <Nav>
            <Login />
            <GetStarted />
          </Nav>
        )}
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header;
                                                