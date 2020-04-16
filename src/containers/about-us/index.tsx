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
          <div className="gcontainer py-10 px-6 md:px-16 lg:px-18 text-white about-us-container">
            <h1 className="text-4xl">About Us</h1>
            <p className="pt-4">
              GoGoJungle Japan has over 10 years' experience of the foreign exchange market. The company continues using
              the advance technology to provide each clients the awesome and beneficial services.
            </p>
            <p className="pt-4">
              GGJungle Co. Ltd is an information technology company established in 2016 July in Ho Chi Minh City by
              GoGoJungle Inc. (Japan).
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
