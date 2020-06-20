import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Session';
import { ROUTES } from '../../constants';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Route {...rest} render={props => (
      user && restricted ? <Redirect to={ROUTES.DASHBOARD} /> : <Component {...props} />
    )} />
  );
};

export default PublicRoute;
