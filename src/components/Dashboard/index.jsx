import React from "react";
import { Row, Col } from 'antd';
import MenuOptions from './MenuOptions';
import RecentQuizzes from './RecentQuizzes';
import Header from './Header';
import './Dashboard.scss';

const Dashboard = () => (
  <div className="dashboard-container">
    <Header />
    <Row>
      <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
        <div className="dashboard">
          <div className="white-bg">
            <RecentQuizzes />
            <MenuOptions />
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Dashboard;
