import React, { FC } from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Dashboard from "./components/dashboard/Dashboard"
import {
  BrowserRouter as Router,
  Switch,

} from "react-router-dom";

import { PublicRoute, PrivateRoute } from "./components/routing-wrappers"
import { Registration } from './components/authentication/registration/Registration';
import { Login } from './components/authentication/login/Login';

export const App: FC<any> = () => {
  return (
    <Router>

      <div className="h-12 col-12" style={{ overflow: 'hidden' }}>
        <Header></Header>
        <Switch>
          <PrivateRoute path="/secure" itsAuthenticated={true} component={Dashboard} />


          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Registration} />

        </Switch>
      </div>
    </Router>
  );
}


