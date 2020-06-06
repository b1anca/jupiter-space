import React from 'react';
import Link from './Link';
import * as ROUTES from '../../constants/routes';
import './MenuOptions.scss';

const studentOptions = [
  { text: 'Quizzes abertos', url: ROUTES.QUIZZES_OPEN },
  { text: 'Quizzes respondidos', url: ROUTES.QUIZZES_ANSWERED },
  { text: 'Ranking', url: ROUTES.RANKING },
  { text: 'Disciplinas', url: ROUTES.SUBJECTS },
  { text: 'Bônus ganhos', url: ROUTES.BONUS },
  { text: 'Configurações', url: ROUTES.SETTINGS },
];

const teacherOptions = [
  { text: 'Disciplinas', url: ROUTES.SUBJECTS },
  { text: 'Quizzes', url: ROUTES.QUIZZES },
  { text: 'Ranking', url: ROUTES.RANKING },
  { text: 'Bônus disponíveis', url: ROUTES.BONUS },
  { text: 'Alunos', url: ROUTES.STUDENTS },
  { text: 'Configurações', url: ROUTES.SETTINGS },
];

const Menu = ({ isStudent = true }) => (
  <div className="menu">
    {(isStudent ? studentOptions : teacherOptions).map((option, index) => (
      <Link key={index} text={option.text} url={option.url} />
    ))}
  </div>
);

export default Menu;