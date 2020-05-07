import React from 'react';
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { config } from 'routes';
import Props from './Login.types';
import StyledWrapper from './Login.styles';

const { SIGN_UP_PATH } = config;

const Login = ({ onSubmit }: Props): JSX.Element => (
  <StyledWrapper>
    <Typography.Title>Log in</Typography.Title>
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Link to="#">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
        {' '}Or <Link to={SIGN_UP_PATH}>register now!</Link>
      </Form.Item>
    </Form>
  </StyledWrapper>
);

export default Login;
