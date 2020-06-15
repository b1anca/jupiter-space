import React from 'react';
import { Row, Col, Button } from 'antd';
import classNames from 'classnames';
import './BottomButton.scss';

const BottomButton = ({ title, bgColor, onClick, type = 'submit' }) => (
  <Row className="bottom-button-container">
    <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
      <Button
        type={type}
        onClick={onClick}
        className={classNames({ [bgColor]: bgColor })}
      >
        {title}
      </Button>
    </Col>
  </Row>
);

export default BottomButton;
