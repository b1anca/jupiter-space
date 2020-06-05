import React from 'react';
import Link from './Link';
import './MenuOptions.scss';

const studentOptions = [
  { text: 'Quizzes abertos', url: '/quizzes/open' },
  { text: 'Quizzes respondidos', url: '/quizzes/answered' },
  { text: 'Ranking', url: '/ranking' },
  { text: 'Disciplinas', url: '/subjects' },
  { text: 'Bônus ganhos', url: '/bonus' },
  { text: 'Configurações', url: '/settings' },
];

const teacherOptions = [
  { text: 'Disciplinas', url: '/subjects' },
  { text: 'Quizzes', url: '/quizzes/open' },
  { text: 'Ranking', url: '/ranking' },
  { text: 'Bônus disponíveis', url: '/available-bonus' },
  { text: 'Alunos', url: '/students' },
  { text: 'Configurações', url: '/settings' },
];

const Menu = ({ isStudent = true }) => (
  <div className="menu">
    {(isStudent ? studentOptions : teacherOptions).map((option, index) => (
      <Link key={index} text={option.text} />
    ))}
  </div>
);

export default Menu;