import React, { Component } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import 'antd/dist/antd.css';

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

  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
    
    
  }

  handleSubmit = (values) => {
    // Para validação no servidor
    // if(this.state.code === 'teste'){
    //   this.setState({
    //     codeValidate: 'error',
    //     codeErrorMsg: 'Código de disciplina já existe'
    //   });
    // }
    
    console.log(this.state);
    console.log(values);    
  };

  render() {
    return (
      <div>
        <Row gutter={gutterSize}>
          <Col xs={{ span: 22, offset: 1 }} lg={{ span: 16, offset: 2 }}>
            <h2>Criar disciplina</h2>
          </Col>
        </Row>

        <Form ref={this.formRef} onFinish={this.handleSubmit}>
          <Row gutter={gutterSize}>
            <Col xs={{ span: 22, offset: 1 }} lg={{ span: 16, offset: 2 }}>
              <Form.Item name="name" rules={[{ required: true, message: 'Por favor, insira o nome da disciplina.' }]}>
                  <Input 
                  placeholder="Nome da disciplina" 
                  type="text" 
                  id="name"
                  onChange={this.handleChange}                  
                />
              </Form.Item>


              <Form.Item 
                name="code" 
                rules={[{ required: true, message: 'Por favor, insira o código da disciplina.' }]}
                validateStatus={this.state.codeValidate}
                help={this.state.codeErrorMsg}
              >
                <Input 
                  placeholder="Código" 
                  type="text" 
                  id="code"
                  onChange={this.handleChange}                  
                />
              </Form.Item>


              <Form.Item name="description" rules={[{ required: true, message: 'Por favor, insira a descrição da disciplina.' }]}>
                <TextArea 
                  placeholder="Descrição" 
                  type="text"
                  id="description"
                  onChange={this.handleChange} 
                  autoSize={{ minRows: 3, maxRows: 5 }}                     
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={gutterSize}>
            <Col xs={{ span: 22, offset: 1 }} sm={{ span: 10, offset: 7 }} lg={{ span: 8, offset: 2 }}>
              <Form.Item>            
                <Button type="primary" htmlType="submit" block>
                  Criar disciplina
                </Button>                 
              </Form.Item>
            </Col>
          </Row>

        </Form>
      </div>
    );
  }
}



export default CreateSubjectsForm

