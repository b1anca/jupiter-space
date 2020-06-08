import React from 'react';
import './Top3.scss';

const Top3 = ({ students }) => (
  <div className="top-3">
    {students.map((student, index) => (
      <div key={index} className="card">
        <i className="crown fas fa-crown" />
        <span className="rank">{[2, 1, 3][index]}</span>
        <img className="avatar" src={student.avatarUrl} alt={student.name} />
        <span className="name">{student.name}</span>
        <span className="score">{student.score}</span>
      </div>
    ))}
  </div>
);

export default Top3;
