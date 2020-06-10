import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import './Subjects.scss'
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';

const { Text } = Typography;
const { Content } = Layout;

const defaultSubjects = [
  { name: 'Disciplina 1' },
  { name: 'Disciplina 2' },
  { name: 'Disciplina 4' },
  { name: 'Disciplina 5' },
  { name: 'Disciplina 6' },
];

const Subjects = ({ subjects = defaultSubjects }) => (
  <Layout className='layoutSubject'>
    <MobileHeader title="Disciplinas" color="white" />
    <BrowserHeader title="Disciplinas" />
    <Row>
      <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
        {subjects.map((subject, index) => (
          <div className='button'>
            <Text className="subject-name">{subject.name}</Text>
            <i className="icon fas fa-chevron-right" />
          </div>
        ))}
      </Col>
    </Row>
  </Layout>
);

export default Subjects;
