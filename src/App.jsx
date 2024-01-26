import React, { useEffect, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notiflix from 'notiflix';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";

function App() {
  const location = useLocation();

  window.swiffyslider = swiffyslider;

  window.addEventListener("load", () => {
      window.swiffyslider.init();
  });

  useEffect(() => {
    Notiflix.Notify.init({
      className: 'notiflix-notify',
      width: '380px',
      position: 'right-top',
      timeout: 6000,
      closeButton: true
    });
  })

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
    </>
  )
}

export default App
