import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { RightOutlined, MailOutlined, LockOutlined, UserOutlined, FieldNumberOutlined } from '@ant-design/icons';
import "./Sign.scss";

const SignUpPage = () => (
  <div className='FormTitle'type="flex" justify="center" align="middle">
    <h1>Criar conta</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  name: '',
  nUSP: '',
  email: '',
  password: '',
  confirm: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
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
      name,
      nUSP,
      email,
      password,
      confirm,
      error,
    } = this.state;

    return (
      <Row
      className = "FormCenter"
      align="middle"
      >
      <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <Form name="normal_login"
                className="login-form"
                onFinish={this.onFinish}
                initialValues={{
                remember: true,
                }}
                onSubmit={this.onSubmit}
                >

            <Form.Item
            className="FormField"
            name="name"
            rules={[
              {
                required: true,
                message: 'Insira seu nome, por favor!',
              },
            ]}
            hasFeedback
          >
            <Input
            prefix={ <UserOutlined
              />
            } 
            className = "FormField__Input"
            name="name"
            value={name}
            onChange={this.onChange}
            type="text"
            placeholder="Nome completo"
            />
          </Form.Item>

          <Form.Item
            className="FormField"
            name="nUSP"
            rules={[
              {
                required: true,
                message: 'Insira seu número USP, por favor!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  // eslint-disable-next-line no-mixed-operators
                  if (!value || value.length >= 7 && value.length <= 8) {
                    return Promise.resolve();
                  }
                  return Promise.reject('O número USP deve ter entre 7 e 8 caracteres!');
                },
              }),
            ]}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          hasFeedback
          >
            <Input
            prefix={ <FieldNumberOutlined 
              />
            } 
            className = "FormField__Input"
            name="nUSP"
            value={nUSP}
            onChange={this.onChange}
            type="number"
            placeholder="Número USP"
            />
          </Form.Item>

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
            prefix={ <MailOutlined
              />
            } 
            className = "FormField__Input"
            name="email"
            value={email}
            onChange={this.onChange}
            type="email"
            placeholder="Email"
            />
          </Form.Item>


          <Form.Item
          name="password"
          hasFeedback
          className="FormField"
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
          ><Input.Password
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


        <Form.Item
        name="confirm"
        hasFeedback
        className="FormField"
        dependencies={['password']}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Confirme sua senha, por favor!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              // eslint-disable-next-line no-mixed-operators
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('As senhas insiridas não correspondem!');
            },
          }),
        ]}
      >
        <Input.Password
            prefix={ <LockOutlined
              />
            } 
            className = "FormField__Input"
            name="confirm"
            value={confirm}
            onBlur={this.handleConfirmBlur}
            onChange={this.onChange}
            type="password"
            placeholder="Confirmar Senha"
            />
        </Form.Item>

          <Form.Item
            className='FormField__Checkbox'
            name="professor"
            valuePropName="checked"
          >
            <Checkbox className='FormField__CheckboxLabel'>
              Professor(a)
            </Checkbox>
          </Form.Item>

          <Form.Item >
            <Form.Item className='left'>
              <a href={ROUTES.USERS_SIGN_IN} className="FormField__Link">Log In</a>
            </Form.Item>            
            <Form.Item className='right'>
              <Button type="primary" htmltype="submit" className = 'FormField__Button' onClick={this.onSubmit}>
              <RightOutlined />
              </Button>
            </Form.Item> 
          </Form.Item>

            {error && <p>{error.message}</p>}
          </Form>
        </Col>
      </Row>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.USERS_SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };