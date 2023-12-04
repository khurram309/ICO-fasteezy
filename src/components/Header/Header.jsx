import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Dropdown, NavLink } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import Login from '../Modals/Login/Login';
import GetStarted from '../Modals/GetStarted/GetStarted';
import './Header.scss';
import store from '../../Redux/store';
import { useSelector } from 'react-redux';
import dp from '../../assets/images/dp.jpg';
import bell from '../../assets/images/bell-icon.svg';


function Header() {
  // const state = store.getState();
  const userToken = useSelector(state => state.auth.token);

  return (
    <Navbar expand="lg" className='py-4 mb-0'>
      <div className="container-lg">
        <div className="logo">
          <Navbar.Brand href="#home" className='p-0 d-flex w-100'>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
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
                  Jene Smith
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
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
                                                