import React from 'react';

import { Nav, Navbar, NavLink } from 'react-bootstrap';
import './SettingsHeader.scss';

function SettingsHeader() {
  return (
    <>
      <div className="custom-container settingPage mt-4 pt-2">
        <h3 className='m-0'>Hey there, Brian Ford!</h3>
        <p className='gray85'>Welcome back, we're happy to have you here!</p>

        <Navbar bg="transparent" className="bg-transparent border-0 border-bottom rounded-0 p-0">
          <Nav className="mr-auto" activeKey="/settings/general">
            <NavLink href="/settings/general">General</NavLink>
            <NavLink href="/settings/billing">Billing</NavLink>
            <NavLink href="/settings/security">Security</NavLink>
          </Nav>
        </Navbar>
      </div>
    </>
  )
}

export default SettingsHeader;
