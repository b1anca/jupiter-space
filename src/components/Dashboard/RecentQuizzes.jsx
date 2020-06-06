import React from 'react';
import { Card } from 'antd';
import './RecentQuizzes.scss';

const defaultQuizzes = [
  { id: 1, title: 'Estimativa de software', answersCount: 2 },
  { id: 2, title: 'Gerenciamento de riscos', answersCount: 20 },
  { id: 3, title: 'Validação de requisitos', answersCount: 24 },
];

const RecentQuizzes = ({ quizzes = defaultQuizzes }) => (
  <div className="recent-quizzes">
    <div className="subtitle">Quizzes recentes</div>
    <div className="horizontal-scroll">{quizzes.map((quiz, index) => (
      <Card key={index} title={quiz.title}>
        <span>{quiz.answersCount} respostas</span>
      </Card>
    ))}
    </div>
  </div>
);

export default RecentQuizzes;