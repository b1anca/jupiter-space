import React from 'react';
import { Row, Col } from 'antd';
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
  const [quiz, setQuiz] = React.useState({ name: '', startDate: '' });
  const [errors, setErrors] = React.useState({});
  // const requiredFields = ['name', ]

  const validate = (field) => {
    console.log('validate', 'field', field, quiz[field]);
    const required = (f) => !quiz[f] && { [f]: 'Campo obrigatório' };
    return setErrors(field ? { ...errors, ...required(field) }
      : () => Object.keys(quiz).reduce((acc, k) => {
        return { ...acc, ...required(k) }
      }, {}));
  };

  const onSubmit = () => {
    const vErrors = validate();
    console.log('error', vErrors);
    setErrors(vErrors);
    // firebase.db.ref('quizzes').push(quiz);
  };

  return (
    <div className="create-quiz-container">
      <BrowserHeader title="Criar quiz" />
      <MobileHeader title="Criar quiz" color="black" />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <TextField
            label="Nome"
            color="orange"
            required
            name="name"
            onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}
            error={errors.name}
            onBlur={validate}
          />
          <SelectField
            label="Disciplina"
            color="orange"
            options={subjects}
            onChange={(subjectId) => setQuiz({ ...quiz, subjectId })}
          />
          <TextArea
            label="Descrição do bônus"
            color="orange"
            onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
          />
          <DatePicker
            label="Data de início"
            color="orange"
            onChange={(date) => setQuiz({ ...quiz, startDate: date.format('L') })}
            required
            onBlur={validate}
          />
          <DatePicker
            label="Data de término"
            color="orange"
            onChange={(date) => setQuiz({ ...quiz, endDate: date.format('L') })}
          />
          <TextArea
            label="Descrição"
            color="orange"
            onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
          />
          <NumberField
            label="Pontuação"
            color="orange"
            onChange={(score) => setQuiz({ ...quiz, score: score })}
          />
        </Col>
      </Row>
      <BottomButton title="Criar quiz" bgColor="orange-bg" onClick={onSubmit} />
    </div>
  )
};

export default withFirebase(CreateQuiz);
