import React, { Component } from "react";
import moment from "moment";
import { Row, Col, Form, notification, Spin } from "antd";
import { TextField, TextArea, DatePicker } from '../Input';
import { withFirebase } from "../Firebase";
import BottomButton from "../BottomButton";
import MobileHeader from "../MobileHeader";
import BrowserHeader from "../BrowserHeader";
import "./CreateSubjectsForm.scss";

moment.locale("pt-br");

const gutterSize = [0, { xs: 0, sm: 0, md: 0 }];

const fields = ["name", "code", "description", "studentsInput", "startDate", "endDate"];

class CreateSubjectsForm extends Component {
  formRef = React.createRef();

  state = {
    name: null,
    code: null,
    description: null,
    startDate: "",
    endDate: "",
    students: [],
    studentsInput: "",
    loading: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  componentDidMount() {
    const students = [];

    this.props.firebase
      .getStudents()
      .once("value")
      .then((snapshot) => {
        const message = snapshot.val();
        var uids = Object.keys(message);
        const data = Object.values(message);
        for (let i in uids) {
          students.push({
            uid: uids[i],
            ...data[i],
          });
        }
      });

    this.setState({ students });
  }

  handleSubmit = () => {
    const { students } = this.state;
    const { firebase, history } = this.props;

    this.formRef.current.validateFields(fields)
      .then((a) => {
        this.setState({ loading: true });
        var temp = a.studentsInput.replace(/ /g, "");
        temp = temp.replace(".", "");
        temp = temp.split(",");
        const uniqueArray = Array.from(new Set(temp));
        const subjectStudent = [];
        const subjectStudentUids = [];

        for (let j in students) {
          if (uniqueArray.includes(students[j].USPN.toString())) {
            subjectStudent.push({
              ...students[j],
            });
            subjectStudentUids.push(students[j].uid);
          }
        }

        const params = {
          name: a.name,
          startDate: a.startDate.format('DD/MM/YYYY'),
          endDate: a.endDate.format('DD/MM/YYYY'),
          teacherId: firebase.auth.W,
          description: a.description,
          code: a.code,
          studentsIds: subjectStudentUids,
        };

        firebase
          .createSubject()
          .push(params)
          .then(() => {
            notification["success"]({message: "Disciplina criada!"});
            this.setState({ loading: false });
            history.push("/subjects");
          })
          .catch(
            () => notification["error"]({ message: "Erro ao criar disciplina" }),
            this.setState({ loading: false })
          );
      })
      .catch(() => notification['error']({ message: 'Erro ao criar disciplina' }));
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="CreateSubjectsForm">
        <MobileHeader title="Criar disciplina" color="black" />
        <BrowserHeader title="Criar disciplina" />
        <Spin spinning={loading}>
          <Form ref={this.formRef}>
            <Row gutter={gutterSize}>
              <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
                <Form.Item
                  name="name"
                  hasFeedback
                  rules={[{ required: true, message: "Campo obrigatório" }]}
                >
                  <TextField
                    label="Nome"
                    type="text"
                    required
                    name="name"
                  />
                </Form.Item>
                <Form.Item
                  name="code"
                  hasFeedback
                  rules={[{ required: true, message: "Campo obrigatório" }]}
                >
                  <TextField
                    label="Código"
                    name="code"
                    required
                  />
                </Form.Item>
                <Form.Item
                  name="description"
                  hasFeedback
                  rules={[{ required: true, message: "Campo obrigatório" }]}
                >
                  <TextArea
                    label="Descrição"
                    name="description"
                    required
                  />
                </Form.Item>
                <Form.Item
                  rules={[{ required: true, message: 'Campo obrigatório' }]}
                  name="startDate"
                  hasFeedback
                >
                  <DatePicker
                    label="Data de início"
                    required
                    name="startDate"
                  />
                </Form.Item>
                <Form.Item
                  name="endDate"
                  hasFeedback
                  rules={[
                    { required: true, message: 'Campo obrigatório' },
                    ({ getFieldValue }) => {
                      const startDate = getFieldValue('startDate');
                      return {
                        validator(_rule, value) {
                          return value && value.isBefore(startDate) ?
                            Promise.reject('Data de término deve ser após data de ínicio') :
                            Promise.resolve();
                        }
                      }
                    }]}
                >
                  <DatePicker required label="Data de término" name="endDate" />
                </Form.Item>
                <Form.Item
                  name="studentsInput"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message:
                        "Por favor, insira uma lista com os números USP dos alunos, separados por vírgula.",
                    },
                    () => ({
                      validator(_rule, value) {
                        var re = /^([0-9]{7,10}(,( )*))*([0-9]{7,10}(.|))$/;
                        if (!value || re.test(value) === true) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "Por favor, insira a lista com números USP válidos, separados por vírgula."
                        );
                      },
                    }),
                  ]}
                >
                  <TextArea
                    label="Alunos"
                    name="studentsInput"
                    required
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Row gutter={gutterSize}>
            <Col xs={{ span: 22 }} lg={{ span: 16 }}>
              <BottomButton
                title="Criar disciplina"
                onClick={this.handleSubmit}
              />
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

export default withFirebase(CreateSubjectsForm);
