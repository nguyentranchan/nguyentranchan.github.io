import React from 'react'
import Layout from '../layout'
import './indexPage.scss'
import { MainPage } from '../containers/main/main-page'

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <MainPage />
      </Layout>
    )
  }
}

export default IndexPage
