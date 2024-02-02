import React from 'react';

import './Dashboard.scss';
import User from '../../assets/images/user-icon.svg'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Dashboard() {
  const navigate = useNavigate();

  // const goToSettings = () => {
  //   navigate('/user/account-setting');
  // }

  return (
    <div className="dashboard-wrapper row px-4 pt-3">
      <div className="setting-sec col-12 col-md-5">
        <h4>Welcome, User</h4>
        <p className='fw-300'>View your referrals, leads, and feedback.</p>
        <div className="btn-wrapper mt-4">
          <Button variant='primary' onClick={() => { navigate('/user/account-setting'); }}>Account Settings</Button>
        </div>
        <div className="cards-wrapper d-flex gap-5 me-5 mt-5">
          <div className="card w-100 p-3 py-4 card-shadow">
            <div className="card-inner-wrapper">
              <h4 className='text-center'>Send a Reward</h4>
              <p className='fw-500'>Create your own offer or reward in points redeemable for valuable gift codes at the nations leading retailers</p>
              <div className="card-btn-wrapper d-flex justify-content-center">
                <Button 
                  variant='primary'
                >
                  Let's Go
                </Button>
              </div>
            </div>
          </div>
          <div className="card w-100 p-3 py-4 card-shadow">
            <div className="card-inner-wrapper">
              <h4 className='text-center'>Get Referrals, Leads & Reviews</h4>
              <p className='fw-500'>Try 5 useful tools to increase engagement</p>
              <div className="card-btn-wrapper d-flex justify-content-center">
                <Button 
                  variant='primary'
                >
                  Start Now
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="account-sec col-12 col-md-7">
        <h3>Account Balance</h3>
        <div className='bg-pill card-shadow p-4 m-auto px-5 mt-5'>
          <div className='d-flex align-items-center gap-4'>
            <h3 className='m-0'>$<span>43.43</span></h3>
            <Button variant='primary'>Add Funds</Button>
          </div>
        </div>

        <div className="bg-pill card-shadow m-auto mt-4 d-flex justify-content-center gap-3 text-uppercase fs-small p-4 px-5">
          <Link className='d-flex flex-column gap-1 fc-darkPrimary p-2 px-3 active'>
            <span className='fs-large-xl'>32</span>
            referrals
          </Link>
          <Link className='d-flex flex-column gap-1 fc-darkPrimary p-2 px-3'>
          <span className='fs-large-xl'>2</span>
            Leads
          </Link>
          <Link className='d-flex flex-column gap-1 fc-darkPrimary p-2 px-3'>
            <span className='fs-large-xl'>32</span>
            reviews
          </Link>
        </div>

        <div className='w-75 m-auto mt-5'>
          <ul className='accounts-list list-unstyled'>
            <li className='mb-3'>
              <div className='list-inner-wrapper d-flex justify-content-center align-items-center text-start gap-3 text-uppercase'>
                <div className="icon">
                  <img src={ User } alt="User Icon" height={40} />
                </div>
                <div className="content">
                  <p className='m-0 text-capitalize'>Cindy Sanders</p>
                  <p className='m-0 fc-gray92 fw-300'>cindysanders@gmail.xy</p>
                </div>
                <div className="create-date ms-5">
                  <p className='fs-small-xs m-0 fw-500'>created on:<span>11/01/23</span></p>
                </div>
              </div>
            </li>
            <li className='mb-3'>
              <div className='list-inner-wrapper d-flex justify-content-center align-items-center text-start gap-3 text-uppercase'>
                <div className="icon">
                  <img src={ User } alt="User Icon" height={40} />
                </div>
                <div className="content">
                  <p className='m-0 text-capitalize'>Cindy Sanders</p>
                  <p className='m-0 fc-gray92 fw-300'>cindysanders@gmail.xy</p>
                </div>
                <div className="create-date ms-5">
                  <p className='fs-small-xs m-0 fw-500'>created on:<span>11/01/23</span></p>
                </div>
              </div>
            </li>
            <li className='mb-3'>
              <div className='list-inner-wrapper d-flex justify-content-center align-items-center text-start gap-3 text-uppercase'>
                <div className="icon">
                  <img src={ User } alt="User Icon" height={40} />
                </div>
                <div className="content">
                  <p className='m-0 text-capitalize'>Cindy Sanders</p>
                  <p className='m-0 fc-gray92 fw-300'>cindysanders@gmail.xy</p>
                </div>
                <div className="create-date ms-5">
                  <p className='fs-small-xs m-0 fw-500'>created on:<span>11/01/23</span></p>
                </div>
              </div>
            </li>
            <li className='mb-3'>
              <div className='list-inner-wrapper d-flex justify-content-center align-items-center text-start gap-3 text-uppercase'>
                <div className="icon">
                  <img src={ User } alt="User Icon" height={40} />
                </div>
                <div className="content">
                  <p className='m-0 text-capitalize'>Cindy Sanders</p>
                  <p className='m-0 fc-gray92 fw-300'>cindysanders@gmail.xy</p>
                </div>
                <div className="create-date ms-5">
                  <p className='fs-small-xs m-0 fw-500'>created on:<span>11/01/23</span></p>
                </div>
              </div>
            </li>
          </ul>

            <div className='my-4'>
              <Button variant='outlined'>View All</Button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard