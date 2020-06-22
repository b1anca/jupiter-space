import React from 'react';
import { Row, Col, Form, notification } from 'antd';
import { withFirebase } from '../Firebase';
import BrowserHeader from '../BrowserHeader';
import MobileHeader from '../MobileHeader';
import BottomButton from '../BottomButton';
import { TextArea, NumberField } from '../Input';
import './CreateQuestion.scss';

const openNotificationWithIcon = ({ type, message, description }) =>
  notification[type]({ message, description });

const CreateQuestion = ({ firebase }) => {
  const form = React.useRef();
  const fields = [
    'query',
    'rightAnswer',
    'wrongAnswer1',
    'wrongAnswer2',
    'wrongAnswer3',
    'wrongAnswer4',
    'score'
  ];

  const parseQuestion = (question) => ({
    ...question,
    wrongAnswer2: question.wrongAnswer2 || '',
    wrongAnswer3: question.wrongAnswer3 || '',
    wrongAnswer4: question.wrongAnswer4 || '',
    score: question.score || '',
  });

  const onSubmit = () => {
    form.current.validateFields(fields)
      .then((question) => firebase.db.ref('questions').push(parseQuestion(question)))
      .then(() => {
        openNotificationWithIcon({
          type: 'success',
          message: 'Pergunta criada!',
          description: 'Você pode adicionar mais perguntas ao se quiz!'
        });
        form.current.resetFields(fields);
      })
      .catch(() => openNotificationWithIcon({
        type: 'error',
        message: 'Erro ao criar a pergunta',
      }))
  };

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
              name="query"
            >
              <TextArea label="Pergunta" color="blue" required name="name" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
              name="rightAnswer"
            >
              <TextArea label="Alternativa correta" color="blue" required name="name" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
              name="wrongAnswer1"
            >
              <TextArea label="Alternativa incorreta" color="blue" required name="name" />
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
                  validator(_rule, value) {
                    return typeof value !== 'number' || value >= 0 ?
                      Promise.resolve() :
                      Promise.reject('Pontuação deve ser maior ou igual a 0')
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
