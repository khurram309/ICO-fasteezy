import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import Notiflix from 'notiflix';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(() => {
    Notiflix.Notify.init({
      className: 'notiflix-notify',
      width: '380px',
      position: 'right-top',
      timeout: 6000,
      closeButton: true
    });
  })

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
