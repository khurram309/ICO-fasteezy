import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './Sidebar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/actions/authActions';

function Sidebar() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logout());
    localStorage.clear();
    navigate('/');
  }

  return (
    <>      
      {/* <div className="custom-container settingPage mt-4 pt-2">
        <h3 className='m-0'>hey there</h3>
        <p className='gray85'>Welcome back, we're happy to have you here!</p>

        <Navbar bg="transparent" className="bg-transparent border-0 border-bottom rounded-0 p-0 mt-5">
          <Nav className="mr-auto" activeKey="/settings/general">
            <NavLink to="/settings/general">General</NavLink>
            <NavLink to="/settings/billing">Billing</NavLink>
            <NavLink to="/settings/security">Security</NavLink>
          </Nav>
        </Navbar>
      </div> */}
      <Navbar className='sidebar px-md-2 px-0 bg-gray90 justify-content-center p-0'>
        <Nav className="d-flex flex-column align-items-center justify-content-between p-0 text-white h-100" activeKey="/user/dashboard">
          <ul className="nav nav-list flex-column mb-0 align-items-center w-100 text-uppercase" id="menu">
            <NavLink to="/user/dashboard" className="nav-item">
              <span className="nav-link align-middle px-0 d-flex align-items-center gap-2 flex-column fs-small fc-darkPrimary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.33 19.83">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M9.33,19.83v-7H14v7h5.83V10.5h3.5L11.67,0,0,10.5H3.5v9.33Z"/>
                    </g>
                  </g>
                </svg>
                <span className="ms-1 d-none d-sm-inline">Home</span>
              </span>
            </NavLink>
            <NavLink to="/user/funds" className="nav-item">
              <span className="nav-link align-middle px-0 d-flex align-items-center gap-2 flex-column fs-small fc-darkPrimary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.17 29.17">
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M14.58,0A14.59,14.59,0,1,0,29.17,14.58,14.58,14.58,0,0,0,14.58,0Zm2.06,23.46v2.79H12.75V23.44c-2.5-.53-4.61-2.13-4.77-5h2.86C11,20,12,21.2,14.7,21.2c2.86,0,3.5-1.42,3.5-2.31,0-1.21-.64-2.35-3.89-3.13-3.62-.87-6.1-2.36-6.1-5.35,0-2.51,2-4.14,4.54-4.68V2.92h3.89V5.76A5.16,5.16,0,0,1,20.8,10.7H17.94C17.86,9.09,17,8,14.7,8s-3.5,1-3.5,2.39c0,1.22,1,2,3.89,2.78s6.1,2,6.1,5.71C21.18,21.53,19.18,23,16.64,23.46Z"/>
                    </g>
                  </g>
                </svg>
                <span className="ms-1 d-none d-sm-inline">Funds</span>
              </span>
            </NavLink>
            <NavLink to="/user/rewards" className="nav-item">
              <span href="#" className="nav-link align-middle px-0 d-flex align-items-center gap-2 flex-column fs-small fc-darkPrimary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M26.67,3.33H23.33V0H6.67V3.33H3.33A3.34,3.34,0,0,0,0,6.67V8.33a8.33,8.33,0,0,0,7.32,8.24,8.35,8.35,0,0,0,6,4.93v5.17H6.67V30H23.33V26.67H16.67V21.5a8.35,8.35,0,0,0,6-4.93A8.33,8.33,0,0,0,30,8.33V6.67A3.34,3.34,0,0,0,26.67,3.33Zm-23.34,5V6.67H6.67V13A5,5,0,0,1,3.33,8.33Zm23.34,0A5,5,0,0,1,23.33,13V6.67h3.34Z"/>
                    </g>
                  </g>
                </svg>
                <span className="ms-1 d-none d-sm-inline">Rewards</span>
              </span>
            </NavLink>
            <NavLink to="widget" className="nav-item">
              <span href="#" className="nav-link align-middle px-0 d-flex align-items-center gap-2 flex-column fs-small fc-darkPrimary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.75 30.75">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M20.5,30.75H17.08V27.33H20.5Zm-3.42-12H13.67v8.54h3.41Zm13.67-3.41H27.33v6.83h3.42ZM27.33,12H23.92v3.42h3.41ZM6.83,15.38H3.42v3.41H6.83ZM3.42,12H0v3.42H3.42Zm12-8.54h3.41V0H15.38ZM2.56,2.56V7.69H7.69V2.56Zm7.69,7.69H0V0H10.25ZM2.56,23.06v5.13H7.69V23.06Zm7.69,7.69H0V20.5H10.25ZM23.06,2.56V7.69h5.13V2.56Zm7.69,7.69H20.5V0H30.75ZM27.33,27.33V22.21H20.5v3.42h3.42v5.12h6.83V27.33ZM23.92,15.38H17.08v3.41h6.84ZM17.08,12H6.83v3.42h3.42v3.41h3.42V15.38h3.41Zm1.71-1.71V6.83H15.38V3.42H12v6.83ZM6.41,3.84H3.84V6.41H6.41Zm0,20.5H3.84v2.57H6.41Zm20.5-20.5H24.34V6.41h2.57Z"/>
                    </g>
                  </g>
                </svg>
                <span className="ms-1 d-none d-sm-inline">Widget</span>
              </span>
            </NavLink>
            <NavLink to="/user/redeem" className="nav-item">
              <span href="#" className="nav-link align-middle px-0 d-flex align-items-center gap-2 flex-column fs-small fc-darkPrimary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M8.91,0H9a5.3,5.3,0,0,1,4.55,2.6L15,5,16.41,2.6A5.3,5.3,0,0,1,21,0h.13a5.16,5.16,0,0,1,5.16,5.16,5.44,5.44,0,0,1-.56,2.34h2.44A1.88,1.88,0,0,1,30,9.38v3.74A1.88,1.88,0,0,1,28.13,15H1.88A1.88,1.88,0,0,1,0,13.12V9.38A1.88,1.88,0,0,1,1.88,7.5H4.31a5.3,5.3,0,0,1-.56-2.34A5.16,5.16,0,0,1,8.91,0Zm2.25,4A2.47,2.47,0,0,0,9,2.81H8.91a2.35,2.35,0,1,0,0,4.69H13.2Zm9.93-1.22H21A2.47,2.47,0,0,0,18.84,4l-2,3.47h4.29a2.35,2.35,0,1,0,0-4.69ZM1.88,16.88H13.12V30H4.69a2.81,2.81,0,0,1-2.81-2.81ZM16.88,30V16.88H28.13V27.19A2.81,2.81,0,0,1,25.31,30Z"/>
                    </g>
                  </g>
                </svg>
                <span className="ms-1 d-none d-sm-inline">Redeem</span>
              </span>
            </NavLink>
            <NavLink to="/user/reports" className="nav-item">
              <span href="#" className="nav-link align-middle px-0 d-flex align-items-center gap-2 flex-column fs-small fc-darkPrimary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M24,0H3A3,3,0,0,0,0,3V24a3,3,0,0,0,3,3H24a3,3,0,0,0,3-3V3A3,3,0,0,0,24,0ZM9,21H6V10.5H9Zm6,0H12V6h3Zm6,0H18V15h3Z"/>
                    </g>
                  </g>
                </svg>
                <span className="ms-1 d-none d-sm-inline">Reports</span>
              </span>
            </NavLink>
            <NavLink to="/user/view-users" className="nav-item">
              <span href="#" className="nav-link align-middle px-0 d-flex align-items-center gap-2 flex-column fs-small fc-darkPrimary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.94 36">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path className="cls-1" d="M18,20.25A10.13,10.13,0,1,0,7.88,10.12,10.13,10.13,0,0,0,18,20.25Zm6.69,2.25H11.25A11.25,11.25,0,0,0,0,33.75,2.24,2.24,0,0,0,2.19,36H33.75a2.2,2.2,0,0,0,2.19-2.25A11.17,11.17,0,0,0,24.69,22.5Z"/>
                    </g>
                  </g>
                </svg>
                <span className="ms-1 d-none d-sm-inline">Users</span>
              </span>
            </NavLink>

          </ul>

          <div className="dropdown text-uppercase w-100">
            <span className="nav-link align-middle px-0 d-flex align-items-center gap-2 flex-column fs-small fc-darkPrimary" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.5 24.75">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path className="cls-1" d="M20.63,5.5,18.69,7.44,22.23,11h-14v2.75h14L18.69,17.3l1.94,1.95,6.87-6.87ZM2.75,2.75h11V0h-11A2.76,2.76,0,0,0,0,2.75V22a2.76,2.76,0,0,0,2.75,2.75h11V22h-11Z"/>
                  </g>
                </g>
              </svg>
              <span className="d-none d-sm-inline mx-1">Sign Out</span>
            </span>
          </div>
        </Nav>
      </Navbar>
    </>
  )
}

export default Sidebar;
