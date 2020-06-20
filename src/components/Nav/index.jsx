import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout, Row, Dropdown } from 'antd';
import { ROUTES } from '../../constants'
import { AuthContext } from '../Session';
import { withFirebase } from '../Firebase';
import NavDropdown from './NavDropdown';
import './Nav.scss';

const Nav = ({ firebase }) => {
  const { user } = React.useContext(AuthContext);

  return (
    <Layout.Header className="navbar">
      <Row>
        <a href="/" className="text mr">Jupiter Space</a>
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
      {user && (
        <Dropdown
          overlay={<NavDropdown user={user} firebase={firebase} />}
          placement="bottomRight"
          trigger={['click']}
        >
          <div className="user-info">
            <img src={user.avatarUrl || '/avatar.svg'} alt="user avatar" />
            <div className="text name">{user.name}</div>
            <i className="icon fas fa-chevron-down"></i>
          </div>
        </Dropdown>
      )}
    </Layout.Header>
  )
};


export default withFirebase(Nav);