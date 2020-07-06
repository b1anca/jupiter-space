import React from 'react';
import moment from 'moment';
import './Header.scss';

const Header = ({ user, quizzes }) => {
  const openQuizzes = quizzes.filter((quiz) => {
    const startDate = moment(quiz.startDate, 'DD-MM-YYYY');
    const endDate = quiz.endDate ? moment(quiz.endDate, 'DD-MM-YYYY') : moment().add(1, 'day');

    return moment().isBetween(startDate, endDate);
  });
  const totalScore = quizzes.reduce((acc, quiz) => acc + parseInt(quiz.score || 0), 0);

  const cards = user.role === 'student' ?
    [
      { count: user.answeredQuizzes || 0, text: 'quizzes respondidos' },
      { count: user.score, text: 'pontos ganhos' },
      { count: openQuizzes.length, text: 'quizzes abertos' },
    ] :
    [
      { count: totalScore, text: 'pontos distribuidos' },
      { count: openQuizzes.length, text: 'quizzes abertos' },
    ];

  return (
    <div className="dashboard-header">
      <div className="header">
        <h1>{user.name}</h1>
      </div>
      <div className="info">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <span className="count">{card.count}</span>
            <span>{card.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Header;
