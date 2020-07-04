import React from 'react';
import { Card } from 'antd';
import './RecentQuizzes.scss';

const RecentQuizzes = ({ quizzes, user }) => (
  <div className="recent-quizzes">
    <div className="subtitle">Quizzes recentes</div>
    <div className="horizontal-scroll">{quizzes.map((quiz, index) => (
      <Card key={index} title={quiz.name}>
        {user.role === 'teacher' ?
          (<span>{(quiz.studentUids || []).length} respostas</span>) :
          (<span>{(quiz.questions || []).length} perguntas</span>)
        }
      </Card>
    ))}
    </div>
  </div>
);

export default RecentQuizzes;