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
import Rewards from './Pages/Rewards/Rewards.jsx';
import Widget from './Pages/Widget/Widget.jsx';
import Redeem from './Pages/Redeem/Redeem.jsx';
import Reports from './Pages/Reports/Reports.jsx';
import Users from './Pages/Users/Users.jsx';
import Subscription from './Pages/Subscription/Subscription.jsx';
import ViewCart from './Pages/ViewCart/ViewCart.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';

const PrivateRoute = () => {
  const auth = useSelector(state => state.auth.token);
  return auth ? <Outlet /> : <Navigate to="/" />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route exact path='/' element={<PrivateRoute/>}>
        <Route path="user" element={<DashboardLayout /> }>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="funds" element={<Funds />} />
          <Route path="account-setting" element={<AccountSetting />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="widget" element={<Widget />} />
          <Route path="redeem" element={<Redeem />} />
          <Route path="reports" element={<Reports />} />
          <Route path="view-users" element={<Users />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="view-cart" element={<ViewCart />} />
          <Route path="checkout" element={<Checkout />} />
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
