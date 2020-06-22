import React from "react";
import { Row, Col } from 'antd';
import MenuOptions from './MenuOptions';
import RecentQuizzes from './RecentQuizzes';
import Header from './Header';
import { AuthContext } from '../Session';
import './Dashboard.scss';

const Dashboard = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <Header isStudent={user.role === 'student'} name={user.name} />
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <div className="dashboard">
            <div className="white-bg">
              <RecentQuizzes />
              <MenuOptions isStudent={user.role === 'student'} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default Dashboard;
