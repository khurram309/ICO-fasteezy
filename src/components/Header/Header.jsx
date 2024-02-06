import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import './Header.scss';

import { apiRequests } from '../../Common/apiRequests';

import { logout } from '../../Redux/actions/authActions';
import Login from '../Modals/Login/Login.jsx';
import GetStarted from '../Modals/GetStarted/GetStarted.jsx';
import Bell from '../../assets/images/bell.svg';
import Comment from '../../assets/images/comment.svg';
import logo from '../../assets/images/fasteezy_logo.png';
import MainLogo from '../../assets/images/fasteezy_clr.png';

function Header() {
  // const state = store.getState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);

  const handleLogout = async () => {
    const endPoint = `logout`;
    await apiRequests(endPoint, 'delete')
    .then((response) => {
      dispatch(logout());
      localStorage.clear();
      navigate('/');
    })
    .catch((err) => {
      Notiflix.Notify.failure(err.response.data);
    })
  }

  const handleSettings = () => {
    navigate('/settings/general');
  }

  return (
    <header className={`${userToken ? 'bg-blue fc-white pb-4' : 'pb-2'}`}>
      <Navbar expand="lg" className='topHeader mb-0 pb-3'>
        <div className={`${userToken ? 'd-flex justify-content-between px-sm-5 px-2 w-100 align-items-center' : 'container small-devices'}`}>
          <div className="logo">
            <NavLink to="/" className='p-0 d-flex w-100'>
              <img className={`${userToken ? 'd-none' : 'd-block'}`} src={ MainLogo } alt="Logo" />
              <img className={`${userToken ? 'd-block' : 'd-none'}`} src={ logo } alt="Logo" />
            </NavLink>
          </div>

          <div className='d-flex justify-content-end centerNav'>
            {/* {userToken && <div className='d-md-block d-lg-none me-4'>
              <div className="right-nav d-flex align-items-center">
                <div className=' d-flex align-items-center profile-dropdown'>
                  <div className="avatar">
                    <div className="dot"></div>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <span>
                        { `${user?.first_name} ${user?.last_name}` }
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleSettings}>Settings</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>} */}
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
            </Navbar.Collapse> */}
              {userToken ? (
              <Nav>
                {/* <div className='d-lg-block d-none'>
                  <div className="right-nav d-flex align-items-center">
                    <div className='d-flex align-items-center profile-dropdown'>
                      <div className="avatar">
                        <div className="dot"></div>
                      </div>
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          { `${user?.first_name} ${user?.last_name}` }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item onClick={handleSettings}>Settings</Dropdown.Item>
                          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div> */}
              </Nav>) : (
                <div className='d-flex'>
                  <Login className='m-0 p-0' />
                  <GetStarted className='m-0' />
                </div> 
            )}
            <div className={`${userToken ? 'd-block' : 'd-none'}`}>
              <div className='fw-500 user-details'>
                <div className='d-flex gap-3 mb-1'>
                  <img src={ Bell } alt="bell" />
                  <img src={ Comment } alt="bell" />
                  <p className="user-name m-0">Bob Smith</p>
                </div>
                <div className="available-bal">
                  <p className='m-0'>Account Balance $<span>43.43</span></p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </Navbar>
      <div className={`${userToken ? 'divider-lg mx-sm-5 mx-2' : ''}`}></div>
    </header>
  )
}

export default Header;
                                                