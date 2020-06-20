import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import './QuizList.scss'
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';

const { Text } = Typography;

const defaultQuizNames = [
  { name: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat porta elementum' },
  { name: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat porta elementum' },
  { name: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat porta elementum' },
  { name: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat porta elementum' },
  { name: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat porta elementum' },
];

const QuizList = ({ quizNames = defaultQuizNames }) => (
  <Layout className='layoutQuizList'>
    <MobileHeader title="Perguntas" color="white" />
    <BrowserHeader title="Perguntas" />
    <Row>
      <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
        {quizNames.map((quiz, index) => (
          <div key={index} className="box">
            <div className="number">
              <Text className="number-text">{index + 1}</Text>
            </div>
            <div key={index} className='button'>
              <Text className="quiz-name">{quiz.name}</Text>
              <i className="icon fas fa-chevron-right" />
            </div>
          </div>
        ))}
      </Col>
    </Row>
    <BottomButton title="Criar pergunta" />
  </Layout>
);

export default QuizList;
