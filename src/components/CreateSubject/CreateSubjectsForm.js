import React, { Component } from "react";
import { Input, Row, Col, Form, DatePicker, notification, Spin } from "antd";
import "antd/dist/antd.css";
import { withFirebase } from "../Firebase";
import "./CreateSubjectsForm.scss";
import moment from "moment";

import BottomButton from "../BottomButton";
import MobileHeader from "../MobileHeader";
import BrowserHeader from "../BrowserHeader";

moment.locale("pt-br");

const { TextArea } = Input;
const { RangePicker } = DatePicker;
const gutterSize = [0, { xs: 0, sm: 0, md: 0 }];

const fields = ["name", "code", "description", "studentsInput", "date-picker"];

class CreateSubjectsForm extends Component {
  formRef = React.createRef();

  state = {
    name: null,
    code: null,
    description: null,
    initDate: "",
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
    const { students, initDate, endDate } = this.state;
    const { firebase, history } = this.props;

    this.formRef.current.validateFields(fields).then((a) => {
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
        startDate: initDate,
        endDate: endDate,
        teacherId: firebase.auth.W,
        description: a.description,
        studentsIds: subjectStudentUids,
      };
      firebase
        .createSubject()
        .push(params)
        .then(() => {
          notification["success"]({
            message: "Disciplina criada!",
          });
          this.setState({ loading: false });
          history.push("/subjects");
        })
        .catch(
          () => notification["error"]({ message: "Erro ao criar disciplina" }),
          this.setState({ loading: false })
        );
    });
  };

  render() {
    const { initDate, endDate, loading } = this.state;

    return (
      <div className="CreateSubjectsForm">
        <MobileHeader title="Criar disciplina" color="white" />
        <BrowserHeader title="Criar disciplina" />
        <Spin spinning={loading}>
          <Form ref={this.formRef}>
            <Row gutter={gutterSize}>
              <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o nome da disciplina.",
                    },
                  ]}
                >
                  <Input
                    placeholder="Nome da disciplina"
                    type="text"
                    id="name"
                    onChange={this.handleChange}
                  />
                </Form.Item>

                <Form.Item
                  name="code"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira o código da disciplina.",
                    },
                  ]}
                >
                  <Input
                    placeholder="Código"
                    type="text"
                    id="code"
                    onChange={this.handleChange}
                  />
                </Form.Item>

                <Form.Item
                  name="description"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira a descrição da disciplina.",
                    },
                  ]}
                >
                  <TextArea
                    className="item-box"
                    placeholder="Descrição"
                    id="description"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    onChange={this.handleChange}
                  />
                </Form.Item>

                <Form.Item
                  name="date-picker"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, insira as datas do período.",
                    },
                  ]}
                >
                  <RangePicker
                    setfieldsvalue={
                      initDate && [
                        moment(initDate, "DD/MM/YYYY"),
                        moment(endDate, "DD/MM/YYYY"),
                      ]
                    }
                    format="DD/MM/YYYY"
                    placeholder={["Data de início", "Data de término"]}
                    onChange={(dates, dateStrings) =>
                      this.setState({
                        initDate: dateStrings[0],
                        endDate: dateStrings[1],
                      })
                    }
                  />
                </Form.Item>

                <Form.Item
                  name="studentsInput"
                  rules={[
                    {
                      required: true,
                      message:
                        "Por favor, insira uma lista com os números USP dos alunos, separados por vírgula.",
                    },
                    () => ({
                      validator(rule, value) {
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
                    className="item-box"
                    placeholder="Alunos"
                    id="studentsInput"
                    onChange={this.handleChange}
                    autoSize={{ minRows: 3, maxRows: 8 }}
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
