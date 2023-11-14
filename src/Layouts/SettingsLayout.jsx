import React from 'react';
import { Outlet } from 'react-router-dom';
import SettingsHeader from '../components/SettingsHeader/SettingsHeader';

function SettingsLayout() {
  return (
    <>
    <SettingsHeader />
    <Outlet />
    </>
  )
}

export default SettingsLayout;