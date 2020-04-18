import React from 'react'
import './partner.scss'
import logo1 from '../../images/partner/ggj.png'
import logo2 from '../../images/partner/gogojungle.png'

export class Parter extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="container mt-16 px-6 md:px-16 lg:px-18">
          <h1 className="text-center text-4xl text-blue-800">Our Partners</h1>
          <p className="text-center pb-6">
            Aenean odio ex, aliquet id scelerisque finibus, luctus eu mi. Sed in erat sed dui faucibus suscipit ac sit
            amet nisl.
          </p>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-xs parner">
              <img src={logo1} alt="" />
            </div>
            <div className="max-w-xs parner">
              <img src={logo2} alt="" />
            </div>
            <div className="max-w-xs parner">
              <img src={logo1} alt="" />
            </div>
            <div className="max-w-xs parner">
              <img src={logo2} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
