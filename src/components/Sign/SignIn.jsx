import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Row, Col, Form, Input, Button } from 'antd';
import { RightOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import "./Sign.scss";

const SignIn = () => (
    <div className="Form-container">
      <div className='FormTitle'  type="flex" justify="center" align="middle">
        <h1>Bem vindo(a) de volta</h1>
        <SignInForm />
      </div>
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

class SignInFormBase extends Component {
    constructor(props) {
      super(props);
  
      this.state = { ...INITIAL_STATE };
    }
  
    onSubmit = event => {
      const { email, password } = this.state;
   
      this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push(ROUTES.DASHBOARD);
        })
        .catch(error => {
          this.setState({ error });
        });
   
      event.preventDefault();
    };
  
    onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    render() {
      const {
        email,
        password,
        error,
      } = this.state;
  
      return (
        <div className="Form-container">
          <Row
          className = "FormCenter"
          align="middle"
          >
          <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
            <Form name="normal_login"
                  className = "FormMain"
                  initialValues={{
                  remember: true,
                  }}
                  >

            <Form.Item
              className="FormField"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'O e-mail inserido é invalido!',
                },
                {
                  required: true,
                  message: 'Insira um e-mail, por favor!',
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<MailOutlined/>}
                className = "FormField__Input"
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email"
              
              />
            </Form.Item>
  
            <Form.Item
              className="FormField"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Insira uma senha, por favor!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    // eslint-disable-next-line no-mixed-operators
                    if (!value || value.length >= 8) {
                      return Promise.resolve();
                    }
                    return Promise.reject('A senha inserida deve possuir mais de 8 caracteres!');
                  },
                }),
              ]}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            hasFeedback
            >
              <Input.Password
              prefix={ <LockOutlined
                />
              }  
              className = "FormField__Input"
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Senha"
                      
              />
            </Form.Item>

            
            <Form.Item className= 'FormField__ButtonLabel'>
            Log In
            <Button type="primary" htmltype="submit" className = 'FormField__Button' onClick={this.onSubmit}>
            <RightOutlined />
            </Button>
            </Form.Item>

            <Form.Item className="FormField">
              <Form.Item className='left'>
                <a href={ROUTES.USERS_SIGN_UP} className="FormField__Link">Criar Conta</a>
              </Form.Item>
              <Form.Item className='right'>
                <a href={ROUTES.USERS_SIGN_UP} className="FormField__Link">Esqueceu a Senha?</a>
              </Form.Item>
            </Form.Item>


            </Form>
            </Col>

  
              {error && <p>{error.message}</p>}
            
          </Row>
        </div>
      );
    }
  }

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignIn;