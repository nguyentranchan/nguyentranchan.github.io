import React from 'react'
import { Logo } from '../Logo'
import './footer.scss'

export function Footer() {
  return (
    <React.Fragment>
      <div
        id="footer"
        className="bg-gblue mt-16 flex flex-wrap justify-around text-white w-full p-6 md:p-16 lg:18 md:inline-fex"
      >
        <Logo textColor="white" fill="#ffffff" className="footer-logo max-w-xs" />
        <div className="contact pl-6 flex flex-col text-center md:text-left pt-10 md:pt-0 max-w-xs w-full">
          <h2 className="text-xl pb-4">Products</h2>
          <a className="leading-8" href="https://fx-on.com">
            FX-ON
          </a>
          <a className="leading-8" href="https://labo.gogojungle.co.jp/">
            Labo
          </a>
          <a className="leading-8" href="https://www.gogojungle.co.jp/crowdsourcing">
            Crowdsourcing
          </a>
          <a className="leading-8" href="https://real-trade.tech/">
            Real Trade
          </a>
          <a className="leading-8" href="https://blog.gogojungle.co.jp/">
            Blog
          </a>
        </div>
        <div className="contact pl-6 text-center md:text-left pt-10 md:pt-0 max-w-xs w-full">
          <h2 className="text-xl pb-4">Contact</h2>
          <p className="leading-8">
            <a href="mailto:hr@gogojungle.vn">hr@gogojungle.vn</a>
          </p>
          <p className="leading-8">0919 742 472</p>
          <p>3rd Floor, Green Phil Building, 8/1 - 8/3 Nguyen Huy Tuong, Ward 6, Binh Thanh District</p>
        </div>
      </div>
      <footer className="container-lg flex justify-center items-center bg-gray-200 h-12 text-sm">
        Copyright © {new Date().getFullYear()}. GGJungle Ltd. All Rights Reserved.
      </footer>
    </React.Fragment>
  )
}
