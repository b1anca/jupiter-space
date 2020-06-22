import React, { Component } from 'react'
import { Input, Row, Col, Select } from 'antd';
import 'antd/dist/antd.css';
import './CreateSubjectsForm.scss'
import listaAlunos from './listaAlunos';

import listaMaterias from './listaMaterias';
import BottomButton from '../BottomButton';
import MobileHeader from '../MobileHeader';
import BrowserHeader from '../BrowserHeader';

const { Option } = Select;
const { TextArea } = Input;
const gutterSize = [0, { xs: 0, sm: 0, md: 0 }];


class CreateSubjectsForm extends Component {
  formRef = React.createRef();
  
  state = {
    name: null,
    code: null,
    description: null,
    auxList: [],
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSelect = (e) => {
    const aux = listaMaterias.filter((v) => v.name === e).map((v) => (v.alunos))[0]
    const auxDesc = listaMaterias.filter((v) => v.name === e).map((v) => (v.description))[0]
    const arrayAux = [];
    for(let i in aux){
      arrayAux.push(listaAlunos.filter(v => v.USPN === aux[i].USPN)[0]);
    }
    
    this.setState({ name: e, auxList: arrayAux, description: auxDesc })
  }

  handleSubmit = (values) => {  

     
  }

  changeState = (v) => {
    this.setState({ description: v })
  }

  render() {
  const { auxList, description } = this.state;
  const list = listaMaterias.map((v) => (<Option value={v.name} key={v.cod}>{v.cod} - {v.name}</Option>))
    return (
      <div className="CreateSubjectsForm">
        <MobileHeader title="Criar disciplina" color="white" />
        <BrowserHeader title="Criar disciplina" />
          <Row gutter={gutterSize}>
            <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
              <Select 
                placeholder="Nome da disciplina" 
                type="text" 
                id="name"       
                onChange={this.handleSelect}          
              >
              {  
                list
              }    
              </Select>

              <TextArea 
                className='item-box'
                placeholder="Descrição"
                id="description"
                autoSize={{ minRows: 3, maxRows: 5 }}
                value={description}            
                disabled       
              />

              <TextArea 
                className='item-box'
                placeholder="Alunos"
                id="students"
                autoSize={{ minRows: 3, maxRows: 8 }}
                value={auxList.map(v => (
                  
                    v.name + '- Número USP: ' + v.USPN + '\n'
                 
                )).join('')}           
                disabled       
              />
            </Col>
          </Row>

          <Row gutter={gutterSize}>
            <Col xs={{ span: 22 }} lg={{ span: 16 }}>
              <BottomButton title="Criar disciplina" onClick={this.handleSubmit}/>     
            </Col>
          </Row>
      </div>
    );
  }
}



export default CreateSubjectsForm

