import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { ROUTES } from '../../constants';
import './Sidenav.scss';
import { withFirebase } from '../Firebase';
import { AuthContext } from '../Session';

const routesWithBlackTriggerIcon = [
  ROUTES.CREATE_QUIZ,
  ROUTES.QUIZZES_QUESTION,
];

const Sidenav = ({ firebase }) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const { user } = React.useContext(AuthContext);
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
          {user && (
            <Menu.Item key="1">
              <span className="text">{user.email} - {user.role === 'student' ? 'aluno' : 'professor'}</span>
            </Menu.Item>
          )}
          {user && (
            <Menu.Item key="2">
              <Link to="/" onClick={firebase.signOut}>
                <span className="text">Sair</span>
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Layout.Sider>
    </div>
  )
};

export default withFirebase(Sidenav);