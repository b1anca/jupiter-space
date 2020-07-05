import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './RecentQuizzes.scss';
import { ROUTES } from '../../constants';

const RecentQuizzes = ({ quizzes, user }) => (
  <div className="recent-quizzes">
    <div className="subtitle">Quizzes recentes</div>
    <div className="horizontal-scroll">{quizzes.map((quiz, index) => (
      <Link to={ROUTES.QUIZZES_QUESTIONS.replace(':quizUid', quiz.uid)}>
        <Card key={index} title={quiz.name}>
          {user.role === 'teacher' ?
            (<span>{(quiz.studentUids || []).length} respostas</span>) :
            (<span>{(quiz.questions || []).length} perguntas</span>)
          }
        </Card>
      </Link>
    ))}
    </div>
  </div>
);

export default RecentQuizzes;