import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import './QuizzesListing.scss';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import { AuthContext } from '../Session';
import BottomButton from '../BottomButton';

const { Text } = Typography;

const defaultQuiz = [
  { name: 'Modelagem de processo de software', bonus: 'A pontuação desse quiz será convertida em bônus na p1', subject: 'Engenharia de Software', data: 'Finaliza em: 05/07/2020' },
  { name: 'Estrutura e arquitetura de redes', bonus: 'bonus: um ponto extra na média final', subject: 'Redes de Computadores', data: 'Finaliza em: 02/07/2020' },
  { name: 'Plano de recursos: programação linear', bonus: 'Atividades de aprendizado valem 10% da nota final', subject: 'Modelagem de Produção', data: '27/06/2020' },
  { name: 'Quiz 4', bonus: 'bonus: um ponto extra na média final', subject: 'Eng Soft', data: 'Finaliza em: 00/00/0000' },
  { name: 'Quiz 5', bonus: 'bonus: um ponto extra na média final', subject: 'Eng Soft', data: 'Finaliza em: 00/00/0000' },
];

const Quiz = ({ quiz = defaultQuiz }) => {
  const { user } = React.useContext(AuthContext);

  return (
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
              <span className="data">{quizx.data}</span>
              <i className="icon fas fa-chevron-right" />
            </div>
          ))}
        </Col>
      </Row>
      {user.role === 'teacher' && <BottomButton title="Criar quiz" bgColor="orange-bg" />}
    </Layout>
  )
};

export default Quiz;