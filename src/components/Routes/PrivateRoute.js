
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext, withAuthorization } from '../Session';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Route {...rest} render={(props) => (
      user ? <Component {...props} /> : <Redirect to="/sign-in" />
    )} />
  );
};

export default withAuthorization(PrivateRoute);
