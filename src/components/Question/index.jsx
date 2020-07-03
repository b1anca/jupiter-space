import React from 'react';
import { Layout, Typography, Row, Col, notification } from 'antd';
import classNames from 'classnames';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import Loading from '../Loading';
import { ROUTES } from '../../constants';
import { withFirebase } from '../Firebase';
import { NotFound } from '../Result';
import AuthContext from '../Session/context';
import './Question.scss'

const { Text } = Typography;

const Question = ({ match, firebase, history }) => {
  const [selected, setSelected] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [quiz, setQuiz] = React.useState({});
  const { firebaseUser } = React.useContext(AuthContext);
  const { quizUid, questionId } = match.params;
  const question = quiz.questions && quiz.questions[questionId];
  const quizRoute = ROUTES.QUIZZES_QUESTION.replace(':quizUid', quizUid);

  const updateQuiz = ({ finished }) => {
    const updatedAnswers = question.answers.map((answer, i) => {
      const studentUids = selected === i ?
        (answer.studentUids || []).concat(firebaseUser.uid) :
        (answer.studentUids || []).filter((id) => id !== firebaseUser.uid);

      return { ...answer, studentUids };
    });

    const updatedQuiz = {
      ...quiz,
      questions: quiz.questions.map((q, i) => (i === parseInt(questionId) ? { ...q, answers: updatedAnswers } : q)),
      ...(finished ?
        { studentUids: (quiz.studentUids || []).concat(firebaseUser.uid) } :
        {}),
    };

    firebase.getQuiz(quizUid).set(updatedQuiz);
  }

  const handleClick = ({ next, finish }) => {
    const hasSelectedAnswer = (selected !== false) || (question.answers || []).some((a) => (a.studentUids || []).includes(firebaseUser.uid));
    if (!hasSelectedAnswer) {
      return notification['error']({ message: 'Selecione uma alternativa' })
    }

    updateQuiz({ finished: finish });
    if (finish) {
      notification['success']({ message: 'Quiz finalizado!' });
      return history.push(ROUTES.QUIZZES);
    }

    history.push(quizRoute.replace(':questionId', parseInt(questionId) + (next ? 1 : (-1))));
  }

  React.useEffect(() => {
    firebase.getQuiz(quizUid).on('value', (quiz) => {
      setQuiz(quiz.val());
      setLoading(false);
    });
  }, [firebase, quizUid]);

  if (loading) {
    return <Loading />;
  } else if (!question) {
    return <NotFound text="Pergunta não encontrada" />;
  }

  return (
    <Layout className='layoutQuestion'>
      <MobileHeader title={`Pergunta ${questionId}`} color="black" />
      <BrowserHeader title={`Pergunta ${questionId}`} />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <div className="question-title">
            <p>{question.name}</p>
          </div>
          {question.answers.map((answer, index) => {
            const showSelected = selected === index || (answer.studentUids || []).includes(firebaseUser.uid);

            return (
              <div key={index} className="box">
                <div
                  key={index}
                  className={classNames('answer-container', { 'selected': showSelected })}
                  onClick={() => setSelected(index)}
                >
                  <Text className="letter-text">{String.fromCharCode(index + 65)}</Text>
                  <Text className="answer-name">{answer.text}</Text>
                </div>
              </div>
            )
          })}
        </Col>
      </Row>
      <div className="bottom-buttons">
        {questionId > 0 && (<button onClick={handleClick} className="previous">Anterior</button>)}
        {questionId + 1 < quiz.questions.length ?
          <button onClick={() => handleClick({ next: true })}>Próximo</button> :
          <button onClick={() => handleClick({ finish: true })}>Finalizar</button>
        }
      </div>
    </Layout>
  )
};

export default withFirebase(Question);
