import React, { Component } from "react";
import { Input, Row, Col, DatePicker, Spin } from "antd";
import "antd/dist/antd.css";
import { withFirebase } from "../Firebase";
import "./SubjectsView.scss";
import moment from "moment";

import BottomButton from "../BottomButton";
import MobileHeader from "../MobileHeader";
import BrowserHeader from "../BrowserHeader";

moment.locale("pt-br");

const { TextArea } = Input;
const { RangePicker } = DatePicker;
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
        <MobileHeader title="Visualizar disciplina" color="white" />
        <BrowserHeader title="Visualizar disciplina" />
        <Spin spinning={loading}>
          <Row gutter={gutterSize}>
            <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
              <Input placeholder="Nome da disciplina" type="text" id="name" value={name} disabled/>
              <Input placeholder="Código" type="text" id="code" value={code} disabled/>
              <TextArea
                placeholder="Descrição"
                value={description}
                id="description"
                disabled
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
              <RangePicker
                value={
                  endDate && [
                    moment(initDate, "DD/MM/YYYY"),
                    moment(endDate, "DD/MM/YYYY"),
                  ]
                }
                disabled
                format="DD/MM/YYYY"
                placeholder={["Data de início", "Data de término"]}
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
