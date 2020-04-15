import React from 'react'
import FxOn from '../../images/icons/fx-on.svg'
import Labo from '../../images/icons/labo.svg'
import CrowdSourcing from '../../images/icons/crowdsourcing.svg'
import RealTrade from '../../images/icons/realtrade.svg'
import Blog from '../../images/icons/blog.svg'

const ProductItem = (props: any) => {
  const { Icon, className = '', title = '', url, desc } = props
  return (
    <div className="roduct-item flex flex-col max-w-xs h-56 items-center px-4 mt-10">
      <div className="product-icon">
        <Icon className={className || 'w-20'} />
      </div>
      <h2 className="text-blue-800 text-xl font-bold mt-2">
        <a href={url}>{title}</a>
      </h2>
      <p className="text-center pt-4">{desc}</p>
    </div>
  )
}

export class Product extends React.Component {
  render() {
    return (
      <div className="container-lg pt-10 product-container px-6 flex flex-col items-center lg:px-18 md:px-16">
        <h1 className="text-4xl flex justify-center text-blue-800">What We Do</h1>
        <p className="text-center">
          We build, launch business that helpful. In hac habitasse platea dictumst. Proin at ultricies neque, nec tempus
          mauris. Ut id leo ut nibh tincidunt congue nec ut ipsum. Etiam non lacinia est, vel imperdiet velit. Etiam
          placerat viverra mauris, ac lobortis tellus bibendum tempus.
        </p>
        <div className="flex justify-center flex-row flex-wrap">
          <ProductItem
            Icon={FxOn}
            title="FX-ON"
            url="https://fx-on.com"
            desc="The E-Commerce and C2C market to exchange Trade Systems, Expert Advisors (EAs), FX E-books, etc."
          />
          <ProductItem
            Icon={Labo}
            title="LABO"
            url="https://labo.gogojungle.co.jp/"
            desc="The forex specialized question and answer site for beginner and expert traders smoothly."
          />
          <ProductItem
            Icon={CrowdSourcing}
            className="w-16"
            title="Crowdsourcing"
            url="https://www.gogojungle.co.jp/crowdsourcing"
            desc="Freelancer marketplace - an easy approach to get a job or find suitable talent for your projects."
          />
          <ProductItem
            Icon={RealTrade}
            className="w-16"
            title="Real Trade"
            url="https://real-trade.tech/"
            desc="A new service that collects transaction information from the MT4 platform."
          />
          <ProductItem
            Icon={Blog}
            title="Blog"
            url="https://blog.gogojungle.co.jp/"
            desc="An informational or discussion website to share and enhance knowledge of the community."
          />
        </div>
      </div>
    )
  }
}
