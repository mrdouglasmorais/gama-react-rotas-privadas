import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './private.routes'

import Login from './views/Login'
import Dash from './views/Dash'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <PrivateRoutes path="/dash" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

