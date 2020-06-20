import React from 'react';
import { withFirebase } from '../Firebase';
import { Layout, Typography, Row, Col, message } from 'antd';
import './Subjects.scss'
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';

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
    //   var tifOptions = Object.keys(message).map((key) => {
    //     console.log(key)
    // });    
      var uids = Object.keys(message);
      const subjects = Object.values(message)
      for(let i in uids){
        aux.push({
          ...subjects[i],
          "code": uids[i],
        })
      }
      this.setState({ subjects })
    })
  }


  render() {
    const { subjects } = this.state;

    return (
      <Layout className='layoutSubject'>
      <MobileHeader title="Disciplinas" color="white" />
      <BrowserHeader title="Disciplinas" />
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          {subjects.map((subject, index) => (
            <div key={subjects.code} className='button'>
              <Text className="subject-name">{subject.code} - {subject.name}</Text>
              <i className="icon fas fa-chevron-right" />
            </div>
          ))}
        </Col>
      </Row>
      <BottomButton title="Criar disciplina" />
    </Layout>
    )
  }
}

export default withFirebase(Subjects);
