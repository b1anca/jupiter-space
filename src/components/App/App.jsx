import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Routes from '../Routes/Routes';
import Nav from '../Nav';
import Sidenav from '../Sidenav';
import { withAuthentication } from '../Session';
import './App.scss';

const App = () => (
  <Router>
    <Layout>
      <Nav />
      <Layout>
        <Routes />
      </Layout>
      <Sidenav />
    </Layout>
  </Router>
);

export default withAuthentication(App);
