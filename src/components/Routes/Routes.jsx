import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Ranking from  '../Ranking/Ranking';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import PasswordForgetPage from '../PasswordForget/PasswordForget';
import HomePage from '../Home/Home';
import AccountPage from '../Account/Account';
import Dashboard from '../Dashboard';

import * as ROUTES from '../../constants/routes';

const Routes = () => (
  <Router>
    <Route exact path={ROUTES.LANDING} component={SignUpPage} />
    {/* <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} /> */}
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.RANKING} component={Ranking} />
    <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route exact path={ROUTES.HOME} component={HomePage} />
    <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
  </Router>
  );

  export default Routes;