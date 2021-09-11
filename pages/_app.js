import '../styles/globals.css'
import MainFooter from "../components/MainFooter";
import Navbar from "../components/Navbar";
import {Layout} from "antd";

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <Component {...pageProps} />
      </Layout.Content>
      <Layout.Footer>
        <MainFooter/>
      </Layout.Footer>
    </Layout>
  )
}

export default MyApp
