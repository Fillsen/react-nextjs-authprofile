// Sys
import MainContainer from "../components/MainContainer";
// Ant
import {Card, Divider, Col, Row, Button} from 'antd';
// Components
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileSessions from "../components/Profile/ProfileSessions";
import ProfileInfo from "../components/Profile/ProfileInfo";
import '../styles/Profile.module.css'
import {useRouter} from "next/router";
import {useEffect, useState} from "react";


const Home = ({checkToken, checkSession}) => {
  const [state, setState] = useState();
  const router = useRouter()

  useEffect(() => {
    setState(checkToken || checkSession)
  }, [checkToken, checkSession])


  return (
    <MainContainer title={'Account'} description={'This is your account'}>
      {state ? (
        <Card>
          <Divider orientation="left">Мой профиль</Divider>
          <Row justify="center">
            <Col flex='none'>
              <ProfileCard
                firstName={'Макс'}
                secondName={'Филсонов'}
                avatarUrl={'https://avatars.githubusercontent.com/u/51379917?v=4'}
                metaDescription={'mymail@gmail.com'}
              />
            </Col>
            <Col flex='auto'>
              <ProfileSessions/>
            </Col>
          </Row>
          <Row justify="center">
            <Col flex='auto'>
              <ProfileInfo firstName='Макс' secondName='Филсонов' birthDay={'10.03.1994'}/>
            </Col>
          </Row>
        </Card>
      ) : (
        <div>Вы не авторизированы</div>
      )}
    </MainContainer>
  )
}

export default Home