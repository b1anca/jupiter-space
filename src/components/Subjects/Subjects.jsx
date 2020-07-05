import React from 'react';
import { withFirebase } from '../Firebase';
import { Layout, Typography, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';
import { AuthContext } from '../Session';
import { ROUTES } from '../../constants';
import './Subjects.scss'

const { Text } = Typography;

class Subjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: [],
    };
  }

  componentDidMount() {
    const { firebase } = this.props;

    var aux = [];
    firebase.getSubjects().on('value', snapshot => {
      const message = snapshot.val();
      var uids = Object.keys(message);
      const subjects = Object.values(message)
      for (let i in uids) {
        aux.push({
          ...subjects[i],
          "code": uids[i],
        })
      }
      this.setState({ subjects: aux })
    })
  }


  render() {
    const { subjects } = this.state;
    const { history } = this.props;

    return (
      <Layout className='layoutSubject'>
        <MobileHeader title="Disciplinas" color="white" />
        <BrowserHeader title="Disciplinas" />
        <Row>
          <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
            {subjects.map((subject, index) => (
              <div key={index} className='button' onClick={() => history.push(`subjects/${subject.code}`)}>
                <Text className="subject-name">{subject.name}</Text>
                <i className="icon fas fa-chevron-right" />
              </div>
            ))}
          </Col>
        </Row>
        <AuthContext.Consumer>
          {({ user }) => user.role === 'teacher' && (
            <Link to={ROUTES.SUBJECTS_NEW}><BottomButton title="Criar disciplina" /></Link>
          )}
        </AuthContext.Consumer>
      </Layout>
    )
  }
};

export default withFirebase(Subjects);
