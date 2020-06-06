import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Link.scss';

const Link = ({ text, url }) => (
  <RouterLink to={url}>
    <div className="link">
      <span>{text}</span>
      <i className="icon fas fa-chevron-right" />
    </div>
  </RouterLink>
);

export default Link;
