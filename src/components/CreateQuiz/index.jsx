import React from 'react';
import { Row, Col, Form, notification } from 'antd';
import { withFirebase } from '../Firebase';
import BrowserHeader from '../BrowserHeader';
import MobileHeader from '../MobileHeader';
import BottomButton from '../BottomButton';
import { TextField, TextArea, DatePicker, NumberField, SelectField } from '../Input';
import './CreateQuiz.scss';

const defaultSubjects = [
  { label: 'Disciplina 1', value: 1 },
  { label: 'Disciplina 2', value: 2 },
  { label: 'Disciplina 3', value: 3 },
  { label: 'Disciplina 4', value: 4 },
  { label: 'Disciplina 5', value: 5 },
  { label: 'Disciplina 6', value: 6 },
];

const CreateQuiz = ({ subjects = defaultSubjects, firebase }) => {
  const form = React.useRef();
  const fields = [
    'name',
    'subjectId',
    'startDate',
    'endDate',
    'score',
    'bonusDescription'
  ];

  const parseQuiz = (quiz) => ({
    ...quiz,
    startDate: quiz.startDate ? quiz.startDate.format('DD/MM/YYYY') : '',
    endDate: quiz.endDate ? quiz.endDate.format('DD/MM/YYYY') : '',
    bonusDescription: quiz.bonusDescription || '',
    score: quiz.score || '',
  });

  const onSubmit = () => {
    form.current.validateFields(fields)
      .then((quiz) => firebase.db.ref('quizzes').push(parseQuiz(quiz)))
      .then(() => {
        notification['success']({
          message: 'Quiz criado!',
          description: 'Adicione perguntas ao seu novo quiz!'
        });
        form.current.resetFields(fields);
      })
      .catch(() => notification['error']({ message: 'Erro ao criar quiz' }))
  };

  return (
    <div className="create-quiz-container">
      <BrowserHeader title="Criar quiz" />
      <MobileHeader title="Criar quiz" color="black" />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <Form ref={form}>
            <Form.Item
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
              name="name"
            >
              <TextField label="Nome" color="orange" required name="name" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
              name="subjectId"
            >
              <SelectField
                label="Disciplina"
                color="orange"
                options={subjects}
                name="subjectId"
                required
              />
            </Form.Item>
            <Form.Item name="bonusDescription" hasFeedback>
              <TextArea
                label="Descrição do bônus"
                color="orange"
                name="bonusDescription"
              />
            </Form.Item>
            <Form.Item
              rules={[
                { required: true, message: 'Campo obrigatório' },
                ({ validateFields }) => ({
                  validator(_rule, _value) {
                    validateFields(['endDate']);
                    return Promise.resolve();
                  }
                })
              ]}
              name="startDate"
              hasFeedback
            >
              <DatePicker
                label="Data de início"
                color="orange"
                required
                name="startDate"
              />
            </Form.Item>
            <Form.Item
              name="endDate"
              hasFeedback
              rules={[
                ({ getFieldValue }) => {
                  const startDate = getFieldValue('startDate');
                  return {
                    validator(_rule, value) {
                      return value && value.isBefore(startDate) ?
                        Promise.reject('Data de término deve ser após data de ínicio') :
                        Promise.resolve();
                    }
                  }
                }]}
            >
              <DatePicker label="Data de término" color="orange" name="endDate" />
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
              <NumberField label="Pontuação" color="orange" name="score" />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <BottomButton title="Criar quiz" bgColor="orange-bg" onClick={onSubmit} />
    </div>
  )
};

export default withFirebase(CreateQuiz);
