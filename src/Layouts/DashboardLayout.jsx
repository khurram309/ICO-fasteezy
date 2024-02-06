import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { Col, Row } from 'react-bootstrap';

function DashboardLayout() {
  return (
    <>
      <Row className='m-0'>
        <Col xs={2} lg={2} xl={1} className='m-0 p-0'>
          <Sidebar />
        </Col>
        <Col xs={10} lg={10} xl={11} className='m-0 p-0'>
          <Outlet />
        </Col>
      </Row>
    </>
  )
}

export default DashboardLayout;