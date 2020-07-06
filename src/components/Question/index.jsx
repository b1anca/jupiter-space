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

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Question = ({ match, firebase, history }) => {
  const [selected, setSelected] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [quiz, setQuiz] = React.useState({});
  const { user, firebaseUser } = React.useContext(AuthContext);
  const { quizUid, questionId } = match.params;
  const question = quiz.questions && quiz.questions[questionId];
  const quizRoute = ROUTES.QUIZZES_QUESTION.replace(':quizUid', quizUid);
  const quizAlreadyAnswered = (quiz.studentUids || []).includes(firebaseUser.uid);

  const shuffledAnswers = React.useMemo(() => {
    const filteredAnswers = question && question.answers.filter((a) => a.text);
    return filteredAnswers && shuffle(filteredAnswers);
  }, [question]);

  const updateQuiz = ({ finished }) => {
    const updatedAnswers = question.answers.map((answer) => {
      const studentUids = selected === answer.text ?
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

    if (finished) {
      const questionsAnsweredCorrecly = updatedQuiz.questions
        .filter((question) => question.answers.some((a) => a.isCorrect && (a.studentUids || []).includes(firebaseUser.uid)))
      const score = questionsAnsweredCorrecly.reduce((acc, q) => acc + parseInt(q.score), 0)

      firebase
        .getUser(firebaseUser.uid)
        .set({
          ...user,
          answeredQuizzes: (parseInt(user.answeredQuizzes) || 0) + 1,
          score: parseInt(user.score) + score
        })
    }

    firebase.getQuiz(quizUid).set(updatedQuiz);
  }

  const handleClick = ({ next, finish, back }) => {
    if (back) {
      return history.push(ROUTES.QUIZZES_QUESTIONS.replace(':quizUid', quizUid));
    }

    const hasSelectedAnswer = (selected !== false) || (question.answers || [])
      .some((a) => (a.studentUids || []).includes(firebaseUser.uid));
    if (!hasSelectedAnswer) {
      return notification['error']({ message: 'Selecione uma alternativa' })
    }

    updateQuiz({ finished: finish });
    if (finish) {
      notification['success']({ message: 'Quiz finalizado!' });
      return history.push(ROUTES.QUIZZES);
    }

    setSelected(false);
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
      <MobileHeader title={`Pergunta ${parseInt(questionId) + 1}`} color="black" />
      <BrowserHeader title={`Pergunta ${parseInt(questionId) + 1}`} />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <div className="question-title">
            <p>{question.name}</p>
          </div>
          {shuffledAnswers.map((answer, index) => {
            const hasUserAnswer = (answer.studentUids || []).includes(firebaseUser.uid);
            const showSelected = selected === answer.text || (hasUserAnswer && selected === false);
            const isCorrect = quizAlreadyAnswered && hasUserAnswer && answer.isCorrect ? 'correct' : 'incorrect';
            const showAsCorrect = quizAlreadyAnswered && answer.isCorrect;

            return (
              <div key={index} className="box">
                <div
                  key={index}
                  className={
                    classNames(
                      'answer-container',
                      {
                        'selected': showSelected,
                        [isCorrect]: hasUserAnswer,
                        'correct': showAsCorrect
                      }
                    )}
                  onClick={() => setSelected(answer.text)}
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
        {parseInt(questionId) > 0 && (<button onClick={handleClick} className="previous">Anterior</button>)}
        {parseInt(questionId) + 1 < quiz.questions.length ?
          <button onClick={() => handleClick({ next: true })}>Próximo</button> :
          <button
            onClick={() => handleClick(quizAlreadyAnswered ? { back: true } : { finish: true })}
          >
            {quizAlreadyAnswered ? 'Voltar ao quiz' : 'Finalizar'}
          </button>
        }
      </div>
    </Layout>
  )
};

export default withFirebase(Question);
