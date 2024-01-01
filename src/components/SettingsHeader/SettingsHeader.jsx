import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './SettingsHeader.scss';
import { useSelector } from 'react-redux';

function SettingsHeader() {
  const user = useSelector(state => state.auth.user);
  return (
    <>
      <div className="custom-container settingPage mt-4 pt-2">
        <h3 className='m-0'>{`Hey there, ${user.first_name} ${user.last_name}!`}</h3>
        <p className='gray85'>Welcome back, we're happy to have you here!</p>

        <Navbar bg="transparent" className="bg-transparent border-0 border-bottom rounded-0 p-0 mt-5">
          <Nav className="mr-auto" activeKey="/settings/general">
            <NavLink to="/settings/general">General</NavLink>
            <NavLink to="/settings/billing">Billing</NavLink>
            <NavLink to="/settings/security">Security</NavLink>
          </Nav>
        </Navbar>
      </div>
    </>
  )
}

export default SettingsHeader;
