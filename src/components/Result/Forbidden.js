import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Result.scss';

const Forbidden = () => (
  <Result
    className="result-container"
    status="403"
    title="403"
    subTitle="Desculpe, você não está autorizado a acessar esta página"
    extra={<Link to="/"><Button type="primary">Página inicial</Button></Link>}
  />
);

export default Forbidden;
