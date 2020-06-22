import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';
import { AuthContext } from '../Session';
import { ROUTES } from '../../constants';
import './Subjects.scss'

const { Text } = Typography;

const defaultSubjects = [
  { name: 'Disciplina 1' },
  { name: 'Disciplina 2' },
  { name: 'Disciplina 4' },
  { name: 'Disciplina 5' },
  { name: 'Disciplina 6' },
];

const Subjects = ({ subjects = defaultSubjects, history }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Layout className='layoutSubject'>
      <MobileHeader title="Disciplinas" color="white" />
      <BrowserHeader title="Disciplinas" />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          {subjects.map((subject, index) => (
            <div key={index} className='button'>
              <Text className="subject-name">{subject.name}</Text>
              <i className="icon fas fa-chevron-right" />
            </div>
          ))}
        </Col>
      </Row>
      {user.role === 'teacher' && (
        <BottomButton title="Criar disciplina" onClick={() => history.push(ROUTES.SUBJECTS_NEW)} />
      )}
    </Layout>
  )
};

export default withRouter(Subjects);
