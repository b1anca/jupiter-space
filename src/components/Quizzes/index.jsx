import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import { AuthContext } from '../Session';
import BottomButton from '../BottomButton';
import { withFirebase } from '../Firebase';
import { ROUTES } from '../../constants';
import './QuizzesListing.scss';

const { Text } = Typography;

const parseQuizzes = (quizzes) =>
  Object.keys(quizzes).map((key) => {
    const quiz = quizzes[key];

    return {
      ...quiz,
      uid: key,
    }
  });

const Quiz = ({ firebase }) => {
  const { user } = React.useContext(AuthContext);
  const [quizzes, setQuizzes] = React.useState([]);

  React.useState(() => {
    firebase.getQuizzes().on('value', (quizzes) => quizzes.val() && setQuizzes(parseQuizzes(quizzes.val())))
  }, [firebase])

  return (
    <Layout className='layoutQuiz'>
      <MobileHeader title="Quizzes" color="white" />
      <BrowserHeader title="Quizzes" />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          {quizzes.map((quiz, index) => (
            <Link key={index} to={ROUTES.QUIZZES_QUESTIONS.replace(':quizUid', quiz.uid)}>
              <div className='button'>
                <Text className="quiz-name">{quiz.name}</Text>
                <span className="subject-name">{quiz.subject}</span>
                <span className="bonus">{quiz.bonusDescription}</span>
                {quiz.questions && <span className="data">{quiz.questions.length} perguntas</span>}
                {quiz.endDate && (<span className="data">{quiz.endDate}</span>)}
                <i className="icon fas fa-chevron-right" />
              </div>
            </Link>
          ))}
        </Col>
      </Row>
      {user.role === 'teacher' && (
        <Link to={ROUTES.CREATE_QUIZ}>
          <BottomButton title="Criar quiz" bgColor="orange-bg" />
        </Link>
      )}
    </Layout>
  )
};

export default withFirebase(Quiz);
