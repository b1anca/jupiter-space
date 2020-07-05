import React, { Component } from "react";
import { Row, Col, Spin } from "antd";
import moment from "moment";
import BottomButton from "../BottomButton";
import MobileHeader from "../MobileHeader";
import BrowserHeader from "../BrowserHeader";
import { withFirebase } from "../Firebase";
import { TextField, TextArea, DatePicker } from '../Input';
import "./SubjectsView.scss";

moment.locale("pt-br");

const gutterSize = [0, { xs: 0, sm: 0, md: 0 }];

class SubjectsView extends Component {
  state = {
    name: null,
    code: null,
    description: null,
    initDate: "",
    endDate: "",
    studentsInput: "",
    loading: false,
  };

  componentDidMount() {
    const { match, firebase } = this.props;
    const uid = match.params.subjectId;

    firebase
      .getSubject(uid)
      .once("value")
      .then((snapshot) => {
        const data = snapshot.val();

        this.setState({
          name: data.name,
          code: data.code,
          description: data.description,
          initDate: data.startDate,
          endDate: data.endDate,
        });
      });
  }

  render() {
    const { initDate, endDate, name, description, code, loading } = this.state;
    const { history } = this.props;

    return (
      <div className="SubjectsView">
        <MobileHeader title={name} color="black" />
        <BrowserHeader title={name} />
        <Spin spinning={loading}>
          <Row gutter={gutterSize}>
            <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
              <TextField label="Nome" disabled value={name} />
              <TextField label="Código" disabled value={code} />
              <TextArea
                label="Descrição"
                value={description}
                disabled
              />
              <DatePicker
              label="Início"
                disabled
                value={moment(initDate, 'DD/MM/YYYY')}
              />
              <DatePicker
              label="Fim"
                disabled
                value={moment(endDate, 'DD/MM/YYYY')}
              />
            </Col>
          </Row>
          <Row gutter={gutterSize}>
            <Col xs={{ span: 22 }} lg={{ span: 16 }}>
              <BottomButton title="Retornar" onClick={() => history.push('/subjects')} />
            </Col>
          </Row>
        </Spin>
      </div>
    );
  }
}

export default withFirebase(SubjectsView);
