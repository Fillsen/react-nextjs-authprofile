import '../styles/globals.css'
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import {Layout} from "antd";

function MyApp({Component, pageProps}) {
  const checkToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const checkSession = typeof window !== 'undefined' ? sessionStorage.getItem('stoken') : null
  return (
    <Layout>
      <Navbar checkToken={checkToken} checkSession={checkSession}/>
      <Layout.Content>
        <Component {...pageProps} checkToken={checkToken} checkSession={checkSession}/>
      </Layout.Content>
      <Layout.Footer>
        <MainFooter/>
      </Layout.Footer>
    </Layout>
  )
}

export default MyApp
