
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext, withAuthorization } from '../Session';
import { ROUTES } from '../../constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Route {...rest} render={(props) => (
      user ? <Component {...props} /> : <Redirect to={ROUTES.SIGN_IN} />
    )} />
  );
};

export default withAuthorization(PrivateRoute);
