import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout, Row, Dropdown } from 'antd';
import * as ROUTES from '../constants/routes'
import './Nav.scss';

const defaultUser = {
  name: 'john doe',
  avatarUrl: 'http://placekitten.com/300/300',
  email: 'john@email.com'
};

const NavDropdown = ({ user }) => (
  <Menu className="user-info-dropdown">
    <Menu.Item className="text email" key="0">{user.email}</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to={ROUTES.USERS_EDIT}>
        <span className="text">Editar cadastro</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to={ROUTES.USERS_SIGN_OUT}>
        <span className="text">Sair</span>
      </Link>
    </Menu.Item>
  </Menu>
);

const Nav = ({ user = defaultUser }) => (
  <Layout.Header className="navbar">
    <Row>
      <div className="text mr">Jupiter Space</div>
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1">
          <Link to={ROUTES.QUIZZES}>
            quizzes
            </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={ROUTES.SUBJECTS}>
            disciplinas
            </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={ROUTES.RANKING}>
            ranking
            </Link>
        </Menu.Item>
      </Menu>
    </Row>
    <Dropdown overlay={<NavDropdown user={user} />} placement="bottomRight" trigger={['click']}>
      <div className="user-info">
        <img src={user.avatarUrl} alt="user avatar" />
        <div className="text name">{user.name}</div>
        <i className="icon fas fa-chevron-down"></i>
      </div>
    </Dropdown>
  </Layout.Header>
);


export default Nav;