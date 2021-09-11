import MainContainer from "../components/MainContainer";
import {Button} from "antd";
import {useRouter} from "next/router";

const Home = () => {
  const router = useRouter()
  return (
    <MainContainer title={'Account'} description={'This is your account'}>
      <Button onClick={() => router.push('/login')}>Test auth</Button>
      My Profile
    </MainContainer>
  )
}

export default Home