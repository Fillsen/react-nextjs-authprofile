import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useRouter} from "next/router";

const Navbar = () => {
  const router = useRouter()
  return (
    <Layout.Header>
      <Row justify='end'>
        <Menu theme='dark' mode='horizontal' selectable={false}>
          <Menu.Item key={1} onClick={() => router.push('/')}>Главная</Menu.Item>
          <Menu.Item key={2} onClick={() => router.push('/login')}>Логин</Menu.Item>
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
