import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';
import { withFirebase } from '../Firebase';
import { NotFound } from '../Result';
import Loading from '../Loading';
import { ROUTES } from '../../constants';
import './Questions.scss'
import { AuthContext } from '../Session';

const { Text } = Typography;

const Questions = ({ match, firebase }) => {
  const quizUid = match.params.quizUid;
  const [quiz, setQuiz] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const { user, firebaseUser } = React.useContext(AuthContext);
  const quizAlreadyAnswered = quiz && (quiz.studentUids || []).includes(firebaseUser.uid);

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
            quiz.questions.map((question, index) => {
              const questionRoute = ROUTES.QUIZZES_QUESTION
                .replace(':questionId', index)
                .replace(':quizUid', quizUid);
              const answeredCorrectly = question.answers
                .some((a) => a.isCorrect && (a.studentUids || []).includes(firebaseUser.uid)) ? 'correct' : 'incorrect';

              return (
                <Link to={questionRoute} key={index} >
                  <div className="box">
                    <div className={classNames('number', { [answeredCorrectly]: quizAlreadyAnswered })}>
                      <Text className="number-text">{index + 1}</Text>
                    </div>
                    <div key={index} className='button'>
                      <Text className="question-name">{question.name}</Text>
                      <i className="icon fas fa-chevron-right" />
                    </div>
                  </div>
                </Link>
              )
            }) :
            <Text className="no-questions">
              Este quiz ainda não possui nenhuma pergunta :(
            </Text>
          }
        </Col>
      </Row>
      <div className="space"></div>
      {user.role === 'teacher' && (
        <Link to={ROUTES.CREATE_QUESTION.replace(':quizUid', quizUid)}>
          <BottomButton title="Criar pergunta" />
        </Link>
      )}
    </Layout>
  )
};

export default withFirebase(Questions);
