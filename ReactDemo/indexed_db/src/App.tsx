import * as React from "react"
import { Layout } from 'tdesign-react';

const { Header, Content, Footer, Aside } = Layout;

const App: React.FC = () => {
  return (
      <Layout>
        <Header>
          <h2>Indexed DB Demo</h2>
        </Header>
        <Content>

        </Content>
        <Footer>Copyright @ 2019-2021 AlanHuang. All Rights Reserved</Footer>
      </Layout>
  )
}
export default App
