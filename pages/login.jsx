import React from 'react';
import {Form, Input, Button, Checkbox, Typography} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import styles from '../styles/Login.module.css'
import MainContainer from "../components/MainContainer";
import {LoginRules} from "../utils/LoginRules";
import {useRouter} from "next/router";


const Login = () => {
  const router = useRouter()
  // Handlers
  const handleSubmit = (values) => {
    if (values.username === 'admin@test.ru' && values.password === '12345678qwe)') {
      values.remember === true ? localStorage.setItem('token', 'mockToken') : sessionStorage.setItem('stoken', 'mockToken')
      console.log('Success!:', values);
      return router.push('/')
    }
  };
  const handleSubmitError = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <MainContainer title={'Login'} description={'First you need login'}>
      <div className={styles.loginWrapper}>
        <Typography.Title>Sign In</Typography.Title>
        <Form
          className={styles.loginForm}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          onFinishFailed={handleSubmitError}
        >
          <Form.Item
            name="username"
            rules={[LoginRules.login('Please input admin@test.ru')]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[LoginRules.password('Please input 12345678qwe)')]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MainContainer>
  );
};

export default Login;
