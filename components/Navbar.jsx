import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useRouter} from "next/router";

const Navbar = () => {
  const auth = false
  const router = useRouter()
  return (
    <Layout.Header>
      {auth ? null : (
        <Row justify='end'>
          <Menu theme='dark' mode='horizontal' selectable={false}>
            <Menu.Item key={1}>Логин</Menu.Item>
          </Menu>
        </Row>
      )}

    </Layout.Header>
  );
};

export default Navbar;
