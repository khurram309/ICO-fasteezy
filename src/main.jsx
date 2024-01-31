import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Home from './Pages/Home/Home.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Funds from './Pages/Funds/Funds.jsx';
import DashboardLayout from './Layouts/DashboardLayout.jsx';
import AccountSetting from './Pages/AccountSetting/AccountSetting.jsx';

const PrivateRoute = () => {
  const auth = useSelector(state => state.auth.token);
  return auth ? <Outlet /> : <Navigate to="/" />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      {/* <Route path="pricing" element={<Pricing />} />
      <Route path="chat" element={<Chatbot />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
    <Route path="privacy-policy" element={<PrivacyPolicy />} /> */}
      <Route exact path='/' element={<PrivateRoute/>}>
        <Route path="user" element={<DashboardLayout /> }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="funds" element={<Funds />} />
          <Route path="account-setting" element={<AccountSetting />} />
          {/* <Route path="general" element={<General />} />
          <Route path="billing" element={<Billing />} />
          <Route path="security" element={<Security />} /> */}
        </Route>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
