import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Session';
import { ROUTES } from '../../constants';

const teacherOnlyRoutes = [
  ROUTES.CREATE_QUIZ,
  ROUTES.SUBJECTS_NEW,
];

const withAuthorization = (Component) => (props) => {
  const { user } = React.useContext(AuthContext);
  const { path } = props;

  if (user && user.role !== 'teacher' && teacherOnlyRoutes.includes(path)) {
    return (
      <Result
        status="403"
        title="403"
        subTitle="Desculpe, você não está autorizado a acessar esta página"
        extra={<Link to="/"><Button type="primary">Página inicial</Button></Link>}
      />
    );
  }

  return <Component {...props} />;
};

export default withAuthorization;
