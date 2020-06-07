import React from 'react';
import './Item.scss';

const Item = ({ rank, avatarUrl, name, score }) => (
  <div className="ranking-item">
    <span className="rank">{rank}</span>
    <div className="card">
      <div className="horizontal">
        <img className="avatar" src={avatarUrl} alt={name} />
        <div className="name">{name}</div>
      </div>
      <span className="score">{score}</span>
    </div>
  </div>
);

export default Item;