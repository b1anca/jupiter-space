import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Result.scss';

const NotFound = () => (
  <Result
    className="result-container"
    status="404"
    title="404"
    subTitle="Desculpe, esta página não existe"
    extra={<Link to="/" ><Button type="primary">Página inicial</Button></Link>}
  />
);

export default NotFound;
