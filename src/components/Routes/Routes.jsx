import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Ranking from '../Ranking';
import SignUpPage from '../Sign/SignUp';
import SignInPage from '../Sign/SignIn';
import ForgotPasswordPage from '../ForgotPassword';
import Dashboard from '../Dashboard';
import Subjects from '../Subjects/Subjects';
import CreateSubjectsForm from '../CreateSubject/CreateSubjectsForm'
import CreateQuiz from '../CreateQuiz';

import * as ROUTES from '../../constants/routes';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route exact path={ROUTES.RANKING} component={Ranking} />
    <Route exact path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
    <Route exact path={ROUTES.SUBJECTS} component={Subjects} />
    <Route exact path={ROUTES.SUBJECTS_NEW} component={CreateSubjectsForm} />
    <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
    <Route exact path={ROUTES.CREATE_QUIZ} component={CreateQuiz} />
    <Route path="/" component={Dashboard} />
  </Switch>
);

export default Routes;