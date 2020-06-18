import React from 'react';
import { withFirebase } from '../Firebase';
import { ROUTES } from '../../constants';
import { Row, Col, Form, Input, Button } from 'antd';
import { RightOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import "./Sign.scss";

const SignIn = () => (
  <div className="Form-container">
    <div className='FormTitle' type="flex" justify="center" align="middle">
      <h1>Bem vindo(a) de volta</h1>
      <SignInForm />
    </div>
  </div>
);

const SignInFormBase = ({ firebase }) => {
  const form = React.useRef();
  const fields = ['email', 'password'];

  const onSubmit = () =>
    form.current.validateFields(fields)
      .then(({ email, password }) => firebase.signIn({ email, password }));

  return (
    <div className="Form-container">
      <Row align="middle">
        <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <Form ref={form}>
            <Form.Item
              name="email"
              hasFeedback
              rules={[
                { type: 'email', message: 'Email invalido' },
                { required: true, message: 'Campo obrigatório' },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                name="email"
                type="text"
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item
              hasFeedback
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Campo obrigatório',
                },
                () => ({
                  validator(_rule, value) {
                    if (!value || value.length >= 8) {
                      return Promise.resolve();
                    }
                    return Promise.reject('Senha deve possuir no mínimo 8 caracteres');
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />}
                name="password"
                type="password"
                placeholder="Senha"
              />
            </Form.Item>
            <Form.Item >
              Log In
            <Button type="primary" htmltype="submit" onClick={onSubmit}>
                <RightOutlined />
              </Button>
            </Form.Item>
            <Form.Item className="FormField">
              <Form.Item className='left'>
                <a href={ROUTES.SIGN_UP} className="FormField__Link">Criar Conta</a>
              </Form.Item>
              <Form.Item className='right'>
                <a href={ROUTES.SIGN_UP} className="FormField__Link">Esqueceu a Senha?</a>
              </Form.Item>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

const SignInForm = withFirebase(SignInFormBase);

export default SignIn;