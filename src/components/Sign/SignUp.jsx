import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox, notification } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { withFirebase } from '../Firebase';
import { ROUTES } from '../../constants';
import BrowserHeader from '../BrowserHeader';
import BottomButton from '../BottomButton';
import "./Sign.scss";

const SignUp = ({ firebase }) => {
  const form = React.useRef();
  const [isLoading, setIsLoading] = React.useState();
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
      .then((user) => {
        setIsLoading(true);
        return firebase.signUp({
          ...parseUser(user),
          callback: () => setIsLoading(false)
        })
      })
      .catch(() => notification['error']({ message: 'Erro ao criar conta' }));

  return (
    <div className="Form-container">
      <img src="blob.svg" alt="blob" />
      <BrowserHeader title="Criar conta" />
      <Row justify="center">
        <h1>Criar conta</h1>
        <Col xs={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
          <Form ref={form}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
              hasFeedback
            >
              <Input
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
              <Input.Password
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
            <Form.Item className="btn-container">
              <span>Cadastrar</span>
              <Button type="primary" htmltype="submit" onClick={onSubmit} loading={isLoading}>
                {!isLoading && (<RightOutlined />)}
              </Button>
            </Form.Item>
            <BottomButton loading={isLoading} title="Cadastrar" />
            <a className="FormField__Link" href={ROUTES.SIGN_IN}>Log In</a>
          </Form>
        </Col>
      </Row>
    </div>
  );

}

export default withFirebase(SignUp);
