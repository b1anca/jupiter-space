import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './Sidenav.scss';

const SignOutButton = ( firebase ) => (
  firebase.doSignOut
);

const routesWithBlackTriggerIcon = [
  ROUTES.CREATE_QUIZ,
  ROUTES.USERS_SIGN_UP,
  ROUTES.USERS_SIGN_IN
];

const Sidenav = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const withBlackIcon = routesWithBlackTriggerIcon.includes(useLocation().pathname);

  return (
    <div className="sidenav">
      <i className={`trigger fas fa-bars ${withBlackIcon && 'black'}`} onClick={() => setCollapsed(!collapsed)} />
      <Layout.Sider
        breakpoint="md"
        collapsedWidth="0"
        collapsible
        collapsed={collapsed}
        trigger={null}
      >
        <Menu theme="dark" mode="inline">
          <Menu.Item>
            <Link to={ROUTES.DASHBOARD}>
              <div className="text name">Jupiter Space</div>
            </Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="1">
            <Link to={ROUTES.USERS_EDIT} >
              <span className="nav-text">Editar cadastro</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={'/'} onClick={SignOutButton}>
              <span className="text">Sair</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    </div>
  )
};

export default Sidenav;