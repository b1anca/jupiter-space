import React from 'react';
import { Menu, Layout,Row } from 'antd';
import './Nav.scss';

const Nav = ({ name = 'john doe' }) => (
  <Layout.Header className="navbar">
    <Row>
      <div className="text mr">Jupiter Space</div>
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1">quizzes</Menu.Item>
        <Menu.Item key="2">disciplinas</Menu.Item>
        <Menu.Item key="3">ranking</Menu.Item>
      </Menu>
    </Row>
    <div className="text name">{name}</div>
  </Layout.Header>
);


export default Nav;