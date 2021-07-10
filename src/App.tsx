import React from 'react';

import Routes from './routes';
import GlobalStyles from './Global';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
