import React from 'react';
import './BrowserHeader.scss';

const BrowserHeader = ({ title, color }) => (
  <div className={`browser-header ${color}`}>{title}</div>
);

export default BrowserHeader;
