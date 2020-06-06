import React from 'react';
import Top3 from './Top3';
import Header from '../Header';
import './Ranking.scss';

const Ranking = () => (
  <div className="ranking">
    <Header title="Ranking" />
    <Top3 />
    <div>alunos restantes</div>
  </div>
);

export default Ranking;