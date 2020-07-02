import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import classNames from 'classnames';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import './Question.scss'

const { Text } = Typography;

const defaultQuestion = {
  id: 1,
  name: 'Lorem ipsum dolor sit amet consectetur adipiscing elit erat porta elementum?',
  answers: [
    { text: 'Texto alternativa 1', correct: false },
    { text: 'Texto alternativa 2', correct: false },
    { text: 'Texto alternativa 3', correct: false },
    { text: 'Texto alternativa 4', correct: false },
    { text: 'Texto alternativa 5', correct: false },
  ]
};

const Question = ({ question = defaultQuestion }) => {
  const [selected, setSelected] = React.useState();

  return (
    <Layout className='layoutQuestion'>
      <MobileHeader title="Pergunta 1" color="black" />
      <BrowserHeader title={`Pergunta ${question.id}`} />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <div className="question-title">
            <p>{question.name}</p>
          </div>
          {question.answers.map((answer, index) => (
            <div key={index} className="box">
              <div
                key={index}
                className={classNames('answer-container', { 'selected': selected === index })}
                onClick={() => setSelected(index)}
              >
                <Text className="letter-text">{String.fromCharCode(index + 65)}</Text>
                <Text className="answer-name">{answer.text}</Text>
              </div>
            </div>
          ))}
        </Col>
      </Row>
      <div className="bottom-buttons">
        <button><span>Anterior</span></button>
        <button><span>Próximo</span></button>
      </div>
    </Layout>
  )
};

export default Question;
