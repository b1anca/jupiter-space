import React from 'react';
import './Link.scss';

const Link = ({ text }) => (
  <div className="link">
    <span>{text}</span>
    <i className="icon fas fa-chevron-right" />
  </div>
);

export default Link;