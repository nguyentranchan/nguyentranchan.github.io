import React from 'react'
import './compay-value.scss'
import Team from '../../images/icons/team.svg'

export class CompanyValue extends React.Component {
  render() {
    return (
      <div className="container-lg mt-16 px-6 md:px-16 lg:px-18">
        <h1 className="text-blue-800 text-4xl text-center mb-4">Why Choose Us</h1>
        <div className="text-white md:inline-flex">
          <div className="flex bg-gblue items-center p-4 md:w-1/2 mt-4 core-item">
            <div className="value-icon">
              <Team />
            </div>
            <p className="value-desc pl-4">
              Aenean odio ex, aliquet id scelerisque finibus, luctus eu mi. Sed in erat sed dui faucibus suscipit ac sit
              amet nisl. Ut non lacinia urna.
            </p>
          </div>
          <div className="flex bg-gblue items-center p-4 md:w-1/2 md:ml-6 mt-4 core-item">
            <div className="value-icon">
              <Team />
            </div>
            <p className="value-desc pl-4">
              Aenean odio ex, aliquet id scelerisque finibus, luctus eu mi. Sed in erat sed dui faucibus suscipit ac sit
              amet nisl. Ut non lacinia urna.
            </p>
          </div>
        </div>
        <div className="text-white md:inline-flex">
          <div className="flex bg-gblue items-center p-4 md:w-1/2 mt-4 core-item">
            <div className="value-icon">
              <Team />
            </div>
            <p className="value-desc pl-4">
              Aenean odio ex, aliquet id scelerisque finibus, luctus eu mi. Sed in erat sed dui faucibus suscipit ac sit
              amet nisl. Ut non lacinia urna.
            </p>
          </div>
          <div className="flex bg-gblue items-center p-4 md:w-1/2 md:ml-6 mt-4 core-item">
            <div className="value-icon">
              <Team />
            </div>
            <p className="value-desc pl-4">
              Aenean odio ex, aliquet id scelerisque finibus, luctus eu mi. Sed in erat sed dui faucibus suscipit ac sit
              amet nisl. Ut non lacinia urna.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
