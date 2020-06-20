import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { withFirebase } from '../Firebase';
import { ROUTES } from '../../constants';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';
import "./Sign.scss";

const SignIn = ({ firebase }) => {
  const form = React.useRef();
  const fields = ['email', 'password'];

  const onSubmit = () =>
    form.current.validateFields(fields)
      .then(({ email, password }) => firebase.signIn({ email, password }));

  return (
    <div className="Form-container">
      <img src="blob.svg" alt="blob" />
      <BrowserHeader title="Log in" />
      <Row justify="center">
        <h1>Bem vindo(a) de volta</h1>
        <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <Form ref={form}>
            <Form.Item
              name="email"
              hasFeedback
              rules={[
                { type: 'email', message: 'Email inválido' },
                { required: true, message: 'Campo obrigatório' },
              ]}
            >
              <Input
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
              <Input.Password name="password" type="password" placeholder="Senha" />
            </Form.Item>
            <Form.Item className="btn-container">
              <span>Log In</span>
              <Button type="primary" htmltype="submit" onClick={onSubmit}>
                <RightOutlined />
              </Button>
            </Form.Item>
            <BottomButton title="Log In" />
            <Form.Item className="links">
              <a href={ROUTES.SIGN_UP} className="FormField__Link">Criar Conta</a>
              <a href={ROUTES.SIGN_UP} className="FormField__Link">Esqueceu a Senha?</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default withFirebase(SignIn);
