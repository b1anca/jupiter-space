import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';
import { withFirebase } from '../Firebase';
import { NotFound } from '../Result';
import Loading from '../Loading';
import './Questions.scss'

const { Text } = Typography;

const Questions = ({ match, firebase }) => {
  const quizUid = match.params.quizUid;
  const [quiz, setQuiz] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    firebase.getQuiz(quizUid).on('value', (quiz) => {
      setQuiz(quiz.val());
      setLoading(false);
    })
  }, [firebase, quizUid]);

  if (loading) {
    return <Loading />
  } else if (!quiz) {
    return <NotFound text="Quiz não encontrado" />
  }

  return (
    <Layout className='questions-container'>
      <MobileHeader title="Perguntas" color="white" />
      <BrowserHeader title="Perguntas" />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <Text className="quiz-name">{quiz.name}</Text>
          {quiz.questions && quiz.questions.length ?
            quiz.questions.map((question, index) => (
              <div key={index} className="box">
                <div className="number">
                  <Text className="number-text">{index + 1}</Text>
                </div>
                <div key={index} className='button'>
                  <Text className="question-name">{question.name}</Text>
                  <i className="icon fas fa-chevron-right" />
                </div>
              </div>
            )) :
            <Text className="no-questions">
              Este quiz ainda não possui nenhuma pergunta :(
            </Text>
          }
        </Col>
      </Row>
      <div className="space"></div>
      <BottomButton title="Criar pergunta" />
    </Layout>
  )
};

export default withFirebase(Questions);
