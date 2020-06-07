import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Form, Input, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import "./Sign.scss";

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
          <div
          className = "FormCenter"
          >
            <Form name="normal_login"
                  className="login-form"
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
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
              hasFeedback
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
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    // eslint-disable-next-line no-mixed-operators
                    if (!value || value.length >= 8) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The password must be more than 8 characters!');
                  },
                }),
              ]}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            hasFeedback
            >
              <Input
              className = "FormField__Input"
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Senha"
                      
              />
            </Form.Item>
  
            <Form.Item >
            <Button type="primary" htmltype="submit" className = 'FormField__Button' onClick={this.onSubmit}>
            <RightOutlined />
            </Button>
            <Link to={ROUTES.USERS_SIGN_UP} className="FormField__Link">Criar Conta</Link>
          </Form.Item>
  
              {error && <p>{error.message}</p>}
            </Form>
          </div>
      );
    }
  }

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignIn;