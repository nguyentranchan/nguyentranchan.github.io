import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../components/Header'
import './layout.scss'
import { Footer } from '../components/Footer'

interface LayoutProps {
  className?: string
  children: any
}

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

class Layout extends React.Component<LayoutProps, {}> {
  public render() {
    if (typeof window !== 'undefined' && window.location.pathname.includes('offline-plugin-app-shell-fallback'))
      return null
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={(data: StaticQueryProps) => {
          const { siteMetadata } = data.site
          const { children } = this.props

          return (
            <>
              <Helmet
                title={siteMetadata.title}
                meta={[
                  {
                    name: 'description',
                    content: 'GGJungle VN - Provide innovative solutions, quality products & responsive services',
                  },
                  {
                    name: 'keywords',
                    content:
                      'Product, FX, forex learning, system forex, trade, automatic trading, trade, trader, copy trading, stock, investment',
                  },
                ]}
              >
                <html lang="en" />
              </Helmet>
              <Header siteTitle={siteMetadata.title} />
              <div className="m-0 p-0">{children}</div>
              <Footer />
            </>
          )
        }}
      />
    )
  }
}

export default Layout
