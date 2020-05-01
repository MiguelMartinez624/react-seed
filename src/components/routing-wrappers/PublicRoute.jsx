import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Header } from '../layout/header/Header';

/**
 * A wrapper around @Route from @react-router to add a basic
 * layout as header and footer that are the main layout components of the app.
 */
export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <Fragment>
            <Header options={[{ component: () => { } }]}></Header>

            <Component {...props} />
        </Fragment>

    )} />
)
