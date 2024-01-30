import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

function DashboardLayout() {
  return (
    <>
      <div className='row'>
        <div className='col-1'>
          <Sidebar />
        </div>
        <div className='col-11'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default DashboardLayout;