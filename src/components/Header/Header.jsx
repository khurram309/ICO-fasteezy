import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/images/logo.png';
import Login from '../Modals/Login/Login';
import GetStarted from '../Modals/GetStarted/GetStarted';
import './Header.scss';
import store from '../../Redux/store';
import { useSelector } from 'react-redux';

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
          <p>User Login</p>
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
                                                