import React from 'react'
import FxOn from '../../images/icons/fx-on.svg'
import Labo from '../../images/icons/labo.svg'
import CrowdSourcing from '../../images/icons/crowdsourcing.svg'
import RealTrade from '../../images/icons/realtrade.svg'
import Blog from '../../images/icons/blog.svg'

const ProductItem = (props: any) => {
  const { Icon, className = '', title = '', url, desc, styleIcon } = props
  return (
    <div className="roduct-item flex flex-col max-w-xs h-56 items-center px-4 mt-16">
      <div className="product-icon">
        <Icon className={className || 'w-20'} style={styleIcon} />
      </div>
      <h2 className="text-blue-800 text-xl font-bold mt-2">
        <a href={url} target={'_blank'}>
          {title}
        </a>
      </h2>
      <p className="text-center pt-4">{desc}</p>
    </div>
  )
}

export class Product extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="anchor" id="products" />
        <div className="flex justify-center">
          <div className="container mt-16 product-container px-6 flex flex-col items-center lg:px-18 md:px-16">
            <h1 className="text-4xl text-center text-blue-800">
              Provide innovative solutions, quality products & responsive services
            </h1>
            <div className="flex justify-center flex-row flex-wrap">
              <ProductItem
                Icon={FxOn}
                title="GogoJungle"
                url="https://www.gogojungle.co.jp"
                desc="The E-Commerce to exchange Trade Systems, Expert Advisors (EAs), FX E-books, etc."
              />
              <ProductItem
                Icon={RealTrade}
                className="w-16"
                title="Real Trade"
                url="https://real-trade.tech"
                desc="A new service that collects transaction information from the MT4 platform."
              />
              <ProductItem
                Icon={Labo}
                title="Labo"
                url="https://labo.gogojungle.co.jp"
                desc="The forex specialized question and answer site for beginner and expert traders smoothly."
              />
              <ProductItem
                Icon={CrowdSourcing}
                styleIcon={{ width: 70 }}
                title="Crowdsourcing"
                url="https://www.gogojungle.co.jp/crowdsourcing"
                desc="Freelancer marketplace - an easy approach to get a job or find suitable talent for your projects."
              />
              <ProductItem
                Icon={Blog}
                title="Blog"
                url="https://blog.gogojungle.co.jp"
                desc="An informational or discussion website to share experiences and broaden knowledge from the community."
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
