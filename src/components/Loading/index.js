import React from 'react';
import { Spin } from 'antd';
import './Loading.scss';

const Loading = () => (
  <div className="loading">
    <Spin size="large" tip="Carregando..." />
  </div>
);

export default Loading;
