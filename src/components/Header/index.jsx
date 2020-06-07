import React from 'react';
import { withRouter } from 'react-router-dom';
import './Header.scss';

const Header = ({ title, history }) => (
  <div className="header-container">
    <i className=" back fas fa-chevron-left" onClick={() => history.goBack()} />
    <h1 className="title">{title}</h1>
    <span className="for-alignment" />
  </div>
);

export default withRouter(Header);
