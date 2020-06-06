import React from 'react';
import './Top3.scss';

const defaultTop3 = [
  { name: 'Hanna Young', score: 1600, avatarUrl: 'http://placekitten.com/500/500' },
  { name: 'Barry B. Arroyo', score: 1324, avatarUrl: 'http://placekitten.com/600/600' },
  { name: 'James B. Guzman', score: 1024, avatarUrl: 'http://placekitten.com/800/700' },
];

const Top3 = ({ students = defaultTop3 }) => (
  <div className="top-3">
    {students.map((student, index) => (
      <div key={index} className="card">
        <span>1</span>
        <img src={student.avatarUrl} alt={student.name} />
        <span>{student.name}</span>
        <span>12321</span>
      </div>
    ))}
  </div>
);

export default Top3;
