import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Form, Input, Button, Checkbox } from 'antd';
import "./Sign.scss";

const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

const SignIn = () => (
    <div className='FormTitle'type="flex" justify="center" align="middle">
    <h1>Bem vindo(a) </h1>
    <SignInForm />
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
  
      const isInvalid =
        password === '' ||
        email === '' ;
  
      return (
          <div
          className = "FormCenter"
          >
            <Form name="normal_login"
                  className="login-form"
                  initialValues={{
                  remember: true,
                  }}
                  onSubmit={this.onSubmit}
                  >

            <Form.Item
              className="FormField"
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input
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
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input
              className = "FormField__Input"
              name="passwordOne"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Senha"
                      
              />
            </Form.Item>
  
             <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmltype="submit" className = 'FormField__Button'>
                Login
              </Button>
            </Form.Item>
                  
            <Form.Item className="FormField">
                    <Link to="/" className="FormField__Link">Criar Conta</Link>
            </Form.Item>
  
              {error && <p>{error.message}</p>}
            </Form>
          </div>
      );
    }
  }

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignIn;