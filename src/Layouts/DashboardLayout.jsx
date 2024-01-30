import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

function DashboardLayout() {
  return (
    <>
      <div className='row m-0'>
        <div className='col-1 p-0 bg-gray90'>
          <Sidebar />
        </div>
        <div className='col-11 p-0'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default DashboardLayout;