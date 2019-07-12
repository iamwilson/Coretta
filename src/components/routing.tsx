// core
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ authenticated, component: Component, props: Props, ...misc }) => {
    return (
        <Route
            render={(props: any) => (authenticated) ? <Component {...props} {...Props} /> : <Redirect to='/login' />}
            {...misc}
        />
    );
};

export const PublicRoute = ({ component: Component, props: Props, ...misc }) => {
    return (
        <Route
            render={(props: any) => <Component {...props} {...Props} />}
            {...misc}
        />
    );
};
