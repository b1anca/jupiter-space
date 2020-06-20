import React, { Component } from 'react'
import { Form, Input, Row, Col, Select } from 'antd';
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
    codeValidate: null,
    codeErrorMsg: null,
    auxList: [],
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSelect = (e) => {
    const aux = listaMaterias.filter((v) => v.nome === e).map((v) => (v.alunos))[0]
    const auxDesc = listaMaterias.filter((v) => v.nome === e).map((v) => (v.desc))[0]
    const arrayAux = [];
    for(let i in aux){
      arrayAux.push(listaAlunos.filter(v => v.nusp === aux[i].nusp)[0]);
    }
    console.log(aux, arrayAux, auxDesc)
    this.setState({ name: e, auxList: arrayAux, description: auxDesc })
  }

  onClick = (values) => {
    console.log('oi');
    // Para validação no servidor
    // if(this.state.code === 'teste'){
    //   this.setState({
    //     codeValidate: 'error',
    //     codeErrorMsg: 'Código de disciplina já existe'
    //   });
    // }
     
  }

  changeState = (v) => {
    this.setState({ description: v })
  }

  render() {
  const { auxList, description } = this.state;
  const list = listaMaterias.map((v) => (<Option value={v.nome} key={v.cod}>{v.cod} - {v.nome}</Option>))
    return (
      <div className="CreateSubjectsForm">
        <MobileHeader title="Criar disciplina" color="white" />
        <BrowserHeader title="Criar disciplina" />

        

        <Form ref={this.formRef} onFinish={this.handleSubmit}>
          <Row gutter={gutterSize}>
            <Col sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
              <Form.Item rules={[{ required: true, message: 'Por favor, selecione a disciplina.' }]}>
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
              </Form.Item>

              <TextArea 
                className='item-box'
                placeholder="Descrição"
                id="description"
                autoSize={{ minRows: 3, maxRows: 5 }}
                value={description}            
                disabled       
              />


              <div className='item-box'>
                
                Alunos:
                {auxList.map(v => (
                  <div className="alunos">
                        {v.nome} - Número USP: {v.nusp}
                  </div>

                ))
                }
              </div>

            </Col>
          </Row>

          <Row gutter={gutterSize}>
            <Col xs={{ span: 22 }} lg={{ span: 16 }}>
              <Form.Item>    
                <BottomButton title="Criar disciplina" />        
               
              </Form.Item>
            </Col>
          </Row>

        </Form>
      </div>
    );
  }
}



export default CreateSubjectsForm

