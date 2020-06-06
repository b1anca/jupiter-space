import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Ranking from '../Ranking';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
import ForgotPasswordPage from '../ForgotPassword';
import Dashboard from '../Dashboard';
import Subjects from '../Subjects/Subjects';
import CreateSubjectsForm from '../CreateSubject/CreateSubjectsForm'

import * as ROUTES from '../../constants/routes';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.USERS_SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.USERS_SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.RANKING} component={Ranking} />
      <Route exact path={ROUTES.USERS_FORGOT_PASSWORD} component={ForgotPasswordPage} />
      <Route exact path={ROUTES.SUBJECTS} component={Subjects} />
      <Route exact path={ROUTES.SUBJECTS_NEW} component={CreateSubjectsForm} />
      <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </Router>
);

export default Routes;