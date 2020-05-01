import React, { FC } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PublicRoute, PrivateRoute } from "./components/routing-wrappers"
import { Login, AuthSelector, Registration } from './components/authentication/components';
import Dashboard from './components/dashboard/Dashboard';

export const App: FC<any> = () => {
  return (
    <Router>

      <div className="h-12 col-12" style={{ overflow: 'hidden' }}>
        <Switch>
          <PrivateRoute path="/secure" itsAuthenticated={true} component={Dashboard} />


          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/auth-method" component={AuthSelector} />
          <PublicRoute path="/signup" component={Registration} />

        </Switch>
      </div>
    </Router>
  );
}


