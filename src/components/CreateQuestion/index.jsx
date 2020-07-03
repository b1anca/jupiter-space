import React from 'react';
import { Row, Col, Form, notification } from 'antd';
import { withFirebase } from '../Firebase';
import BrowserHeader from '../BrowserHeader';
import MobileHeader from '../MobileHeader';
import BottomButton from '../BottomButton';
import { TextArea, NumberField } from '../Input';
import './CreateQuestion.scss';
import { ROUTES } from '../../constants';

const openNotificationWithIcon = ({ type, message, description }) =>
  notification[type]({ message, description });

const parseQuestion = (question) => {
  const answers = [
    { text: question.rightAnswer, isCorrect: true },
    { text: question.wrongAnswer1, isCorrect: false },
    { text: question.wrongAnswer2 || '', isCorrect: false },
    { text: question.wrongAnswer3 || '', isCorrect: false },
    { text: question.wrongAnswer4 || '', isCorrect: false }
  ];

  return {
    name: question.name,
    description: question.description,
    answers,
    score: question.score || 0,
  }
};

const parseQuiz = ({ question, quiz }) => ({
  ...quiz,
  questions: [
    ...(Array.isArray(quiz.questions) ? quiz.questions : []),
    parseQuestion(question)
  ]
});

const CreateQuestion = ({ firebase, match, history }) => {
  const form = React.useRef();
  const quizUid = match.params.quizUid;
  const [quiz, setQuiz] = React.useState({});

  const fields = [
    'name',
    'description',
    'rightAnswer',
    'wrongAnswer1',
    'wrongAnswer2',
    'wrongAnswer3',
    'wrongAnswer4',
    'score'
  ];

  const onSubmit = () => {
    form.current.validateFields(fields)
      .then((question) => firebase
        .getQuiz(quizUid)
        .set(parseQuiz({ question, quiz })))
      .then(() => {
        openNotificationWithIcon({
          type: 'success',
          message: 'Pergunta criada!',
          description: 'Você pode adicionar mais perguntas ao quiz!'
        });
        form.current.resetFields(fields);
        history.push(ROUTES.QUIZZES_QUESTIONS.replace(':quizUid', quizUid))
      })
      .catch(() => openNotificationWithIcon({
        type: 'error',
        message: 'Erro ao criar a pergunta',
      }))
  };

  React.useEffect(() => {
    firebase.getQuiz(quizUid).on('value', (quiz) => setQuiz(quiz.val()))
  }, [firebase, quizUid]);

  return (
    <div className="create-quiz-container">
      <BrowserHeader title="Criar pergunta" />
      <MobileHeader title="Criar pergunta" color="black" />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <Form ref={form}>
            <Form.Item
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
              name="name"
            >
              <TextArea label="Pergunta" color="blue" required name="name" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
              name="description"
            >
              <TextArea label="Descrição" color="blue" required name="description" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
              name="rightAnswer"
            >
              <TextArea
                label="Alternativa correta"
                color="blue"
                required name="rightAnswer" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
              name="wrongAnswer1"
            >
              <TextArea
                label="Alternativa incorreta"
                color="blue"
                required name="wrongAnswer1" />
            </Form.Item>
            <Form.Item name="wrongAnswer2" hasFeedback>
              <TextArea
                label="Alternativa incorreta"
                color="blue"
                name="wrongAnswer2"
              />
            </Form.Item>
            <Form.Item name="wrongAnswer3" hasFeedback>
              <TextArea
                label="Alternativa incorreta"
                color="blue"
                name="wrongAnswer3"
              />
            </Form.Item>
            <Form.Item name="wrongAnswer4" hasFeedback>
              <TextArea
                label="Alternativa incorreta"
                color="blue"
                name="wrongAnswer4"
              />
            </Form.Item>
            <Form.Item
              name="score"
              hasFeedback
              rules={[
                () => ({
                  validator2(_rule, value) {
                    return typeof value !== 'number' ?
                      Promise.resolve() :
                      Promise.reject()
                  },
                  validator(_rule, value) {
                    return value && value < 0 ?
                      Promise.reject('Pontuação deve ser um número e maior ou igual a 0') :
                      Promise.resolve()
                  }
                })
              ]}
            >
              <NumberField label="Pontuação" color="blue" name="score" />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <BottomButton title="Criar pergunta" bgColor="blue-bg" onClick={onSubmit} />
    </div>
  )
};

export default withFirebase(CreateQuestion);
