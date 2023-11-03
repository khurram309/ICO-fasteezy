import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../assets/images/logo.png';
import Login from '../Modals/Login/Login';
import GetStarted from '../Modals/GetStarted/GetStarted';
import './Header.scss';

function Header() {
  return (
    <Navbar expand="lg" className='py-4'>
      <div className="container-lg">
        <div className="logo">
          <Navbar.Brand href="#home" className='p-0 d-flex w-100'>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto center-nav">
            <Nav.Link href="#home">Pricing</Nav.Link>
            <Nav.Link href="#link">Chatbot</Nav.Link>
          </Nav>
          <Nav>
            <Login />
            <GetStarted />
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Header;
                                                