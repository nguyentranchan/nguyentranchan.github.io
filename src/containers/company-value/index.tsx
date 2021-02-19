import React from 'react'
import './compay-value.scss'
import Invested from '../../images/icons/Invested.svg'
import Family from '../../images/icons/Family.svg'
import Reputation from '../../images/icons/Reputation.svg'
import TeamPlayers from '../../images/icons/TeamPlayers.svg'
import Innovative from '../../images/icons/Innovative.svg'

export class CompanyValue extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="container mt-16 px-6 md:px-16 lg:px-18">
          <h1 className="text-blue-800 text-4xl text-center mb-4">Why Choose Us</h1>
          <div className="text-white md:inline-flex">
            <div className="flex bg-gblue items-center p-4 md:w-1/2 mt-4 core-item">
              <div className="value-icon">
                <Reputation />
              </div>
              <p className="value-desc pl-4">
                <b>Reputation</b>
                <br />
                We believe in your integrity & honesty to make out great products
              </p>
            </div>
            <div className="flex bg-gblue items-center p-4 md:w-1/2 md:ml-6 mt-4 core-item">
              <div className="value-icon">
                <Invested />
              </div>
              <p className="value-desc pl-4">
                <b>Invested</b>
                <br />
                You deserve to invest in the success of both your peer & the company
              </p>
            </div>
          </div>
          <div className="text-white md:inline-flex">
            <div className="flex bg-gblue items-center p-4 md:w-1/2 mt-4 core-item">
              <div className="value-icon">
                <TeamPlayers />
              </div>
              <p className="value-desc pl-4">
                <b>Team Players</b>
                <br />
                With a positive attitude who are self-starters & peer leaders
              </p>
            </div>
            <div className="flex bg-gblue items-center p-4 md:w-1/2 md:ml-6 mt-4 core-item">
              <div className="value-icon">
                <Family />
              </div>
              <p className="value-desc pl-4">
                <b>Family</b>
                <br />
                We maintain a culture of respect, fun, listen & understand each other
              </p>
            </div>
          </div>
          <div className="text-white flex justify-center">
            <div className="flex bg-gblue items-center p-4 w-full md:w-1/2 mt-4 core-item">
              <div className="value-icon">
                <Innovative />
              </div>
              <p className="value-desc pl-4">
                <b>Innovative</b>
                <br />
                Let us fun with the new things
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
