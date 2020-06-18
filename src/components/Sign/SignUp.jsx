import React from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { ROUTES } from '../../constants';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { RightOutlined, MailOutlined, LockOutlined, UserOutlined, FieldNumberOutlined } from '@ant-design/icons';
import "./Sign.scss";

const SignUpPage = () => (
  <div className="Form-container">
    <div className='FormTitle' type="flex" justify="center" align="middle">
      <h1>Criar conta</h1>
      <SignUpForm />
    </div>
  </div>
);

const SignUp = ({ firebase }) => {
  const form = React.useRef();
  const fields = [
    'name',
    'USPN',
    'email',
    'password',
    'passwordConfirmation',
    'role'
  ];

  const parseUser = (user) => ({ ...user, role: user.role ? 'teacher' : 'student' });

  const onSubmit = () =>
    form.current.validateFields(fields)
      .then((user) => firebase.signUp(parseUser(user)));

  return (
    <div className="Form-container">
      <Row justify="center">
        <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <Form ref={form}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
            >
              <Input
                prefix={<UserOutlined />}
                name="name"
                type="text"
                placeholder="Nome completo"
              />
            </Form.Item>
            <Form.Item
              name="USPN"
              hasFeedback
              rules={[
                { required: true, message: 'Campo obrigatório' },
                () => ({
                  validator(_rule, value) {
                    return (value && (value.length < 7 || value.length > 8)) ?
                      Promise.reject('Número USP inválido') :
                      Promise.resolve()
                  }
                })
              ]}
            >
              <Input
                prefix={<FieldNumberOutlined />}
                name="USPN"
                type="number"
                placeholder="Número USP"
              />
            </Form.Item>
            <Form.Item
              name="email"
              hasFeedback
              rules={[
                { type: 'email', message: 'Email inválido' },
                { required: true, message: 'Campo obrigatório' },
              ]}
            >
              <Input
                prefix={<MailOutlined />}
                name="email"
                type="email"
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              rules={[
                { required: true, message: 'Campo obrigatório' },
                () => ({
                  validator(_rule, value) {
                    return value && value.length < 8 ?
                      Promise.reject('Senha deve possuir no mínimo 8 caracteres') :
                      Promise.resolve();
                  }
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                name="password"
                type="password"
                placeholder="Senha"
              />
            </Form.Item>
            <Form.Item
              name="passwordConfirmation"
              hasFeedback
              rules={[
                { required: true, message: 'Campo obrigatório' },
                ({ getFieldValue }) => ({
                  validator(_rule, value) {
                    return value && getFieldValue('password') !== value ?
                      Promise.reject('As senhas inseridas não correspondem') :
                      Promise.resolve()
                  }
                })
              ]}
            >
              <Input.Password prefix={<LockOutlined />}
                name="passwordConfirmation"
                type="password"
                placeholder="Confirmar Senha"
              />
            </Form.Item>
            <Form.Item
              name="role"
              valuePropName="checked"
            >
              <Checkbox name="role">Professor(a)</Checkbox>
            </Form.Item>
            <Form.Item>
              <a href={ROUTES.SIGN_IN}>Log In</a>
            </Form.Item>
            <Form.Item >
              <Form.Item className='left'>Cadastrar</Form.Item>
              <Form.Item className='right'>
                <Button type="primary" htmltype="submit" className='FormField__Button' onClick={onSubmit}>
                  <RightOutlined />
                </Button>
              </Form.Item>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );

}

const SignUpForm = withRouter(withFirebase(SignUp));

export default SignUpPage;
