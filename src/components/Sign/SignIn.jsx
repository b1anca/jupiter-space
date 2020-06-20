import React from 'react';
import { Row, Col, Form, Input, Button, notification } from 'antd';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';
import { withFirebase } from '../Firebase';
import { ROUTES } from '../../constants';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';
import "./Sign.scss";

const SignIn = ({ firebase }) => {
  const form = React.useRef();
  const [isLoading, setIsLoading] = React.useState();
  const fields = ['email', 'password'];

  const onSubmit = () =>
    form.current.validateFields(fields)
      .then(({ email, password }) => {
        setIsLoading(true);
        return firebase.signIn({
          email,
          password,
          callback: () => setIsLoading(false)
        });
      })
      .catch(() => notification['error']({ message: 'Erro ao fazer login' }));

  return (
    <div className="Form-container">
      <img src="blob.svg" alt="blob" />
      <Row justify="center">
        <h1>Bem vindo(a) de volta</h1>
        <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 14 }} lg={{ span: 8 }}>
          <BrowserHeader title="Log in" />
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
              <Button type="primary" htmltype="submit" onClick={onSubmit} loading={isLoading}>
                {!isLoading && (<RightOutlined />)}
              </Button>
            </Form.Item>
            <BottomButton loading={isLoading} title="Log In" onClick={onSubmit} />
            <Form.Item className="links">
              <Link to={ROUTES.SIGN_UP} className="FormField__Link">Criar Conta</Link>
              <Link to={ROUTES.SIGN_UP} className="FormField__Link">Esqueceu a Senha?</Link>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default withFirebase(SignIn);
