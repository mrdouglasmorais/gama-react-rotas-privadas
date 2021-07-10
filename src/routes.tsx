import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoutes from './private.routes'

import Login from './views/Login'
import Dash from './views/Dash'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoutes path="/dash" exact component={Dash} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

