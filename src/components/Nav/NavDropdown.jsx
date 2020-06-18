import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { ROUTES } from '../../constants'

const NavDropdown = ({ user, firebase }) => (
  <Menu className="user-info-dropdown">
    <Menu.Item className="text email" key="0">{user.email}</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to={ROUTES.USERS_EDIT}>
        <span className="text">Editar cadastro</span>
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/" onClick={firebase.signOut}>
        <span className="text">Sair</span>
      </Link>
    </Menu.Item>
  </Menu>
);

export default NavDropdown;