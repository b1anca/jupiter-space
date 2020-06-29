import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import './QuizzesListing.scss';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';

const { Text } = Typography;

const defaultQuiz = [
  { name: 'Programação de atividades: Implementação computacional', bonus:'Atividades de aprendizado valem 10% da nota final', subject: 'Modelagem de Produção', answers: '5 Respostas'},
  { name: 'MRP - Estrutura do produto', bonus:'Atividades de aprendizado valem 10% da nota final', subject: 'Modelagem de Produção', answers: '7 Respostas'},
  { name: 'Plano de recursos: programação linear', bonus:'Atividades de aprendizado valem 10% da nota final', subject: 'Modelagem de Produção', answers: '3 Respostas'},
  { name: 'Quiz 4', bonus:'Atividades de aprendizado valem 10% da nota final', subject: 'Modelagem de Produção', answers: '1 Resposta'},
  { name: 'Quiz 5', bonus:'Atividades de aprendizado valem 10% da nota final', subject: 'Modelagem de Produção', answers: '1 Resposta'},
];

const Quiz = ({ quiz = defaultQuiz }) => (
  <Layout className='layoutQuiz'>
    <MobileHeader title="Quizzes" color="white" />
    <BrowserHeader title="Quizzes" />
    <Row>
      <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
        {quiz.map((quizx, index) => (
          <div key={index} className='button'>
            <Text className="quizx-name">{quizx.name}</Text>
            <span className="subject-name">{quizx.subject}</span>
            <span className="bonus">{quizx.bonus}</span>
            <span className="answers">{quizx.answers}</span>
            <i className="icon fas fa-chevron-right" />
          </div>
        ))}
      </Col>
    </Row>
    <BottomButton title="Criar Quiz" />
  </Layout>
);

export default Quiz;