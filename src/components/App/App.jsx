import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../Routes/Routes';
import Nav from '../Nav';

const App = () => (
  <Router>
    <Nav />
    <Routes />
  </Router>
);

export default App;