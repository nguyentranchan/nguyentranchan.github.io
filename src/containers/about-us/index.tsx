import React from 'react'
import Vision from '../../images/icons/vision.png'
import Misison from '../../images/icons/mission.png'
import './about-us.scss'

export class AboutUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="anchor" id="about-us" />
        <div className="flex justify-center bg-gblue mt-16">
          <div className="container py-10 px-6 md:px-16 lg:px-18 text-white about-us-container">
            <h1 className="text-4xl">About Us</h1>
            <p className="pt-4">
              GGJungle is part of GogoJungle Japan. We are leading in the investment field in Japan. We provide
              technologies, solutions & utilities for the investors. We are expanding the market to South East Asia like
              Vietnam, Thailand, China.
            </p>
            <div className="flex flex-wrap flex-row">
              <div className="vision mt-10">
                <h2 className="text-2xl">Vision</h2>
                <div className="flex mt-4">
                  <img src={Vision} alt="" style={{ width: 60, height: 60 }} />
                  <p className="pl-4" style={{ width: 280 }}>
                    Become one of the best tech company in Vietnam.
                  </p>
                </div>
              </div>
              <div className="mission mt-10">
                <h2 className="text-2xl">Mission</h2>
                <div className="flex mt-4">
                  <img src={Misison} alt="" style={{ width: 60, height: 60 }} />
                  <p className="pl-4" style={{ width: 280 }}>
                    Build the great place for people to work and improve
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
