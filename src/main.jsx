import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Outlet } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Pricing from './Pages/Pricing/Pricing.jsx';
import Chatbot from './Pages/Chatbot/Chatbot.jsx';
import General from './Pages/Settings/General/General.jsx';
import SettingsLayout from './Layouts/SettingsLayout.jsx';
import Billing from './Pages/Settings/Billing/Billing.jsx';
import Security from './Pages/Settings/Security/Security.jsx';
import { useSelector } from 'react-redux';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy.jsx';

const PrivateRoute = () => {
  const auth = useSelector(state => state.auth.token);
  return auth ? <Outlet /> : <Navigate to="/" />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="chat" element={<Chatbot />} />
      <Route path="terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route exact path='/' element={<PrivateRoute/>}>
        <Route path="settings" element={<SettingsLayout /> }>
          <Route path="general" element={<General />} />
          <Route path="billing" element={<Billing />} />
          <Route path="security" element={<Security />} />
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
