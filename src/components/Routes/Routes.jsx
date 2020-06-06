import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Ranking from '../Ranking/Ranking';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import ForgotPasswordPage from '../ForgotPassword';
import AccountPage from '../Account/Account';
import Dashboard from '../Dashboard';
import Subjects from '../Subjects/Subjects';
import CreateSubjectsForm from '../CreateSubject/CreateSubjectsForm'

import * as ROUTES from '../../constants/routes';

const Routes = () => (
  <Router>
    <Route exact path={ROUTES.LANDING} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.RANKING} component={Ranking} />
    <Route exact path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
    <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route exact path={ROUTES.SUBJECTS} component={Subjects} />
    <Route exact path={ROUTES.CREATE_SUBJECTS} component={CreateSubjectsForm} />
    <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
  </Router>
);

export default Routes;