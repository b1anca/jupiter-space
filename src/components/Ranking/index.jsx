import React from 'react';
import { Row, Col } from 'antd';
import Top3 from './Top3';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';
import Item from './Item';
import { withFirebase } from '../Firebase';
import AuthContext from '../Session/context';
import './Ranking.scss';

const parseStudents = (students) =>
  Object.keys(students).map((key) => ({
    ...students[key],
    uid: key,
    avatarUrl: students[key].avatarUrl || '/avatar.svg'
  }));

const parseSubjects = (subjects) =>
  Object.keys(subjects).map((key) => ({
    ...subjects[key],
    uid: key,
  }));

const Ranking = ({ firebase }) => {
  const [students, setStudents] = React.useState([]);
  const [subjects, setSubjects] = React.useState([]);
  const { firebaseUser } = React.useContext(AuthContext);
  const enrolledSubjects = subjects.filter((subject) => subject.studentsIds.includes(firebaseUser.uid));
  const filteredStudents = students.filter((student) => enrolledSubjects.some((subject) => subject.studentsIds.includes(student.uid)))
  const sortedStudents = filteredStudents.sort((a, b) => b.score - a.score);
  const top3 = filteredStudents.length > 2 && [sortedStudents[1], sortedStudents[0], sortedStudents[2]];
  const remaining = sortedStudents.slice(3);

  React.useEffect(() => {
    firebase
      .getStudents()
      .on('value', (students) => setStudents(parseStudents(students.val())))

    firebase
      .getSubjects()
      .on('value', (subjects) => setSubjects(parseSubjects(subjects.val())))
  }, [firebase])

  return (
    <div className="ranking-container">
      <Row>
        <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <MobileHeader title="Ranking" />
          <BrowserHeader title="Ranking" />
          {filteredStudents.length > 3 ?
            (<>
              <Top3 students={top3} />
              {remaining.map((student, index) => (
                <Item key={index} rank={index + 4} {...student} />
              ))}
            </>) :
            (<div className="msg-text">
              Não há alunos suficientes para exibir ranking :(
            </div>)
          }
        </Col>
      </Row>
    </div>
  )
};

export default withFirebase(Ranking);
