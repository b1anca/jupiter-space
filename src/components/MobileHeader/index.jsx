import React from 'react';
import { withRouter } from 'react-router-dom';
import './MobileHeader.scss';

const MobileHeader = ({ title, history, color }) => (
  <div className={`mobile-header-container ${color}`}>
    <i className=" back fas fa-chevron-left" onClick={() => history.goBack()} />
    <h1 className="title">{title}</h1>
    <span className="for-alignment" />
  </div>
);

export default withRouter(MobileHeader);
