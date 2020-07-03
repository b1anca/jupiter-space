import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Result.scss';

const NotFound = ({ text }) => (
  <Result
    className="result-container"
    status="404"
    title="404"
    subTitle={text}
    extra={<Link to="/" ><Button type="primary">Página inicial</Button></Link>}
  />
);

NotFound.defaultProps = {
  text: "Desculpe, esta página não existe"
}

export default NotFound;
