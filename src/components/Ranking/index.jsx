import React from 'react';
import Top3 from './Top3';
import Header from '../Header';
import Item from './Item';
import './Ranking.scss';

const defaultStudents = [
  { name: 'Armani Warner', score: 21323, avatarUrl: 'http://placekitten.com/400/400' },
  { name: 'Mariana Owens', score: 675623, avatarUrl: 'http://placekitten.com/500/500' },
  { name: 'Soren Orozco', score: 265, avatarUrl: 'http://placekitten.com/600/600' },
  { name: 'Tristen Erickson', score: 27523, avatarUrl: 'http://placekitten.com/700/700' },
  { name: 'Darian Fernandez', score: 25623, avatarUrl: 'http://placekitten.com/800/800' },
  { name: 'Avery Sloan Sloan Sloan Sloan', score: 213, avatarUrl: 'http://placekitten.com/900/900' },
  { name: 'Avery Sloan', score: 213, avatarUrl: 'http://placekitten.com/900/900' },
  { name: 'Avery Sloan', score: 213, avatarUrl: 'http://placekitten.com/900/900' },
  { name: 'Avery Sloan', score: 213, avatarUrl: 'http://placekitten.com/900/900' },
  { name: 'Avery Sloan', score: 213, avatarUrl: 'http://placekitten.com/900/900' },
  { name: 'Avery Sloan', score: 213, avatarUrl: 'http://placekitten.com/900/900' },
  { name: 'Avery Sloan', score: 213, avatarUrl: 'http://placekitten.com/900/900' },
];

const Ranking = ({ students = defaultStudents }) => {
  const sortedStudents = students.sort((a, b) => b.score - a.score);
  const top3 = [sortedStudents[1], sortedStudents[0], sortedStudents[2]];
  const remaining = sortedStudents.slice(3);

  return (
    <div className="ranking">
      <Header title="Ranking" />
      <Top3 students={top3} />
      {remaining.map((student, index) => (
        <Item key={index} rank={index + 4} {...student} />
      ))}
    </div>
  )
};

export default Ranking;