import React from 'react';
import { Row, Col } from 'antd';
import './BottomButton.scss';

const BottomButton = ({ title, bgColor }) => (
  <Row className="bottom-button-container">
    <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }} className={bgColor}>
      <div>{title}</div>
    </Col>
  </Row>
);

export default BottomButton;
