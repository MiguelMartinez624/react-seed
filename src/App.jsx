import React from 'react';
import './App.css';
import Header from './components/layout/header/Header';
import Main from "./components/main/Main";
import Dashboard from "./components/dashboard/Dashboard"
import {
  BrowserRouter as Router,
  Switch,

} from "react-router-dom";

import { PublicRoute ,PrivateRoute} from "./components/routing-wrappers"
import Registration from './components/authentication/registration/Registration';

function App() {
  return (
    <Router>

      <div className="h-12 col-12" style={{overflow:'hidden'}}>
        <Header></Header>
        <Switch>
        <PrivateRoute path="/secure" itsAuthenticated={true} component={Dashboard} />

     
          <PublicRoute path="/login" component={Main} />
          <PublicRoute path="/register" component={Registration} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
