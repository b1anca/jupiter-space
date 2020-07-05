import React from "react";
import { Row, Col } from 'antd';
import MenuOptions from './MenuOptions';
import RecentQuizzes from './RecentQuizzes';
import Header from './Header';
import { AuthContext } from '../Session';
import { withFirebase } from "../Firebase";
import './Dashboard.scss';

const parseQuizzes = (quizzes) =>
  Object.keys(quizzes).map((key) => ({
    ...quizzes[key],
    uid: key,
  }));

const Dashboard = ({ firebase }) => {
  const [quizzes, setQuizzes] = React.useState([]);
  const { user } = React.useContext(AuthContext);

  React.useEffect(() => {
    firebase.getQuizzes().on('value', (quizzes) => setQuizzes(parseQuizzes(quizzes.val())))
  }, [firebase]);

  return (
    <div className="dashboard-container">
      <Header user={user} quizzes={quizzes} />
      <Row>
        <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <div className="dashboard">
            <div className="white-bg">
              <RecentQuizzes quizzes={quizzes} user={user} />
              <MenuOptions isStudent={user.role === 'student'} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default withFirebase(Dashboard);
