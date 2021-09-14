import React, {useEffect, useState} from 'react';
import {Layout, Menu, Row} from "antd";
import {useRouter} from "next/router";

const Navbar = ({checkToken, checkSession}) => {
  const [state, setState] = useState();
  const router = useRouter()

  useEffect(() => {
    setState(checkToken || checkSession)
  }, [checkToken, checkSession])

  const handleExit = () => {
    localStorage.clear() || sessionStorage.clear()
    return router.push('/login')
  }

  return (
    <Layout.Header>
      <Row justify='end'>
        <Menu theme='dark' mode='horizontal' selectable={false}>
          {state ? (
            <>
              <Menu.Item key={1} onClick={() => router.push('/')}>Профиль</Menu.Item>
              <Menu.Item key={2} onClick={handleExit}>Выход</Menu.Item>
            </>
          ) : (
            <Menu.Item key={3} onClick={() => router.push('/login')}>Логин</Menu.Item>
          )}
        </Menu>
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
