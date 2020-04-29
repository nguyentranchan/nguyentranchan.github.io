import React from 'react'
import JoinUs from '../../images/joinus.svg'
export class Career extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="anchor" id="career" />
        <div className="flex justify-center">
          <div className="container mt-16 px-6 md:px-16 lg:px-18">
            <h1 className="text-4xl text-center text-blue-800">Early Career</h1>
            <div className="md:inline-flex pt-4">
              <div className="md:w-1/2 flex flex-col md:mr-4">
                <h2 className="text-2xl text-blue-800 pb-2">
                  We are looking for people willing to learn, work and play
                </h2>
                <JoinUs className="w-full h-full" />
              </div>
              <div className="md:w-1/2 pt-4 md:pt-0 border-0 md:border-l-2 border-none md:border-solid">
                <div className="job inline-flex">
                  <div className="flex flex-col pl-4">
                    <h2 className="text-xl">
                      <a href="/career?job=Back-end%20Developer">Back-end Developer</a>
                    </h2>
                    <p>
                      We are looking for an experienced back-end developer to join our team! As a back-end developer,
                      you will be responsible for the server-side web application logic as well as for the integration
                      of the front-end part.
                    </p>
                  </div>
                </div>
                <div className="job inline-flex mt-4 mb-6">
                  <div className="flex flex-col pl-4">
                    <h2 className="text-xl">
                      <a href="/career?job=Front-end%20Developer">Front-end Developer</a>
                    </h2>
                    <p>
                      We are looking for an ambitious and self-driven front-end developer to join our team. As a
                      front-end developer, you will be responsible for implementing visual elements that users see and
                      interact within a web application, which makes your role crucial for the success of our business.
                    </p>
                  </div>
                </div>
                <a className="text-blue-700 md:pl-4 text-xl hover:underline inline flex items-center" href="/career">
                  Take your first step to a career with us ➔
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
