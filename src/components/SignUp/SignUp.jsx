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
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

      const aux = {
        teste: "teste",
      }

      this.props.firebase
      .createSomething('batata')
      .set(aux);

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
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne === '' ||
      passwordTwo === '' ||
      email === '' ||
      name === '' ||
      nUSP === '';

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
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input 
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
                message: 'Please input your USP number!',
              },
            ]}
          >
            <Input
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
            type="email"
            placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            className="FormField"
            name="passwordOne"
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
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Senha"
                    
            />
          </Form.Item>

          <Form.Item
            className="FormField"
            name="passwordTwo"
            dependencies={['passwordOne']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('passwordOne') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input
            className = "FormField__Input"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirmar Senha"
            />
          </Form.Item>

          <Form.Item
            className='FormField__Checkbox'
            name="professor"
            valuePropName="checked"
            {...tailFormItemLayout}
          >
            <Checkbox >
              <span className='FormField__CheckboxLabel'>
              Professor(a)
              </span>
            </Checkbox>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmltype="submit" className = 'FormField__Button'>
              Register
            </Button>
          </Form.Item>
                
          <Form.Item className="FormField">
                  <Link to="/signin" className="FormField__Link">Log In</Link>
          </Form.Item>

            {error && <p>{error.message}</p>}
          </Form>
        </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };