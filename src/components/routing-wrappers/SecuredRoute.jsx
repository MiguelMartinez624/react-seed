import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { AuthService } from '../../../services/auth.service';

/**
 * A wrapper around @Route from @react-router to add a security
 * layer to certain routes. act like a Guard for routing.
 */
export const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={(props) => (
            //Check if the user its authenticated
            //if no will redirect to login page.
            rest.itsAuthenticated === true
                ? <Component  {...props} />
                : <Redirect to='/login' />
        )} />
    )
}
