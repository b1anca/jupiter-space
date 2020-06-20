import React from 'react';
import { AuthContext } from '../Session';
import { ROUTES } from '../../constants';
import { Forbidden } from '../Result';

const teacherOnlyRoutes = [
  ROUTES.CREATE_QUIZ,
  ROUTES.SUBJECTS_NEW,
];

const withAuthorization = (Component) => (props) => {
  const { user } = React.useContext(AuthContext);
  const { path } = props;

  if (user && user.role !== 'teacher' && teacherOnlyRoutes.includes(path)) {
    return (<Forbidden />);
  }

  return <Component {...props} />;
};

export default withAuthorization;
