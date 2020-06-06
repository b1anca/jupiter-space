import React from 'react';

const Header = ({title}) => (
  <div className="header-container">
    <i className="icon fas fa-chevron-left" />
    <span>{title}</span>
  </div>
);

export default Header;