import React from 'react'
import Layout from '../layout'
import { MainPage } from '../containers/main/main-page'

class IndexPage extends React.PureComponent {
  public render() {
    if (typeof window !== 'undefined' && window.location.pathname.includes('offline-plugin-app-shell-fallback'))
      return null
    return (
      <Layout>
        <MainPage />
      </Layout>
    )
  }
}

export default IndexPage
