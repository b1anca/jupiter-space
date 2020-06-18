import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import * as ROUTES from '../../constants/routes';
import './Sidenav.scss';
import { withFirebase } from '../Firebase';

const routesWithBlackTriggerIcon = [
  ROUTES.CREATE_QUIZ,
  ROUTES.SIGN_UP,
  ROUTES.SIGN_IN
];

const Sidenav = ({ firebase }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const withBlackIcon = routesWithBlackTriggerIcon.includes(useLocation().pathname);

  return (
    <div className="sidenav">
      <i
        className={classNames('trigger fas fa-bars', { 'black': withBlackIcon })}
        onClick={() => setCollapsed(!collapsed)}
      />
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
            <Link to={'/'} onClick={firebase.signOut}>
              <span className="text">Sair</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    </div>
  )
};

export default withFirebase(Sidenav);