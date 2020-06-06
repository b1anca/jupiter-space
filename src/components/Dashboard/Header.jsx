import React from 'react';
import './Header.scss';

const studentCards = [
  { count: 3, text: 'quizzes respondidos' },
  { count: 21, text: 'pontos ganhos' },
  { count: 0, text: 'quizzes abertos' },
];

const teacherCards = [
  { count: 1, text: 'alunos' },
  { count: 10, text: 'pontos distribuidos' },
  { count: 3, text: 'quizzes abertos' },
];

const isStudent = true;

const Header = ({ cards = isStudent ? studentCards : teacherCards, name = 'john doe' }) => (
  <div className="dashboard-header">
    <div className="header">
      <h1>{name}</h1>
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
);

export default Header;