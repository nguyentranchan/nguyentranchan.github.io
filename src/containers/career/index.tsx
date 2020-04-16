import React from 'react'
import JoinUs from '../../images/joinus.svg'
import ba from '../../images/career/ba.png'
import be from '../../images/career/be.png'
import fe from '../../images/career/fe.png'

export class Career extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="anchor" id="career" />
        <div className="flex justify-center">
          <div className="gcontainer mt-16 px-6 md:px-16 lg:px-18">
            <h1 className="text-4xl text-center text-blue-800">Early Career</h1>
            <div className="md:inline-flex pt-4">
              <div className="md:w-1/2 flex flex-col md:mr-4">
                <h2 className="text-2xl text-blue-800">We need people willing to learn, work and play</h2>
                <p className="pt-2 pb-4">
                  Aenean odio ex, aliquet id scelerisque finibus, luctus eu mi. Sed in erat sed dui faucibus suscipit ac
                  sit amet nisl. Ut non lacinia urna. Quisque id nulla quis mauris ultricies viverra.
                </p>
                <JoinUs className="w-full h-full" />
              </div>
              <div className="md:w-1/2 pt-4">
                <div className="job inline-flex">
                  <img src={ba} alt="" style={{ width: 120, height: 120 }} />
                  <div className="flex flex-col pl-4">
                    <h3 className="text-xl">Backend Developer</h3>
                    <p>
                      Vivamus a turpis non ligula scelerisque bibendum non et lectus. Quisque ullamcorper, purus sit
                      amet tempor tristique, mauris metus facilisis elit, at pulvinar magna orci in ex.{' '}
                    </p>
                  </div>
                </div>
                <div className="job inline-flex mt-4">
                  <img src={be} alt="" style={{ width: 120, height: 120 }} />
                  <div className="flex flex-col pl-4">
                    <h3 className="text-xl">Fontend Developer</h3>
                    <p>
                      Vivamus a turpis non ligula scelerisque bibendum non et lectus. Quisque ullamcorper, purus sit
                      amet tempor tristique, mauris metus facilisis elit, at pulvinar magna orci in ex.{' '}
                    </p>
                  </div>
                </div>
                <div className="job inline-flex mt-4">
                  <img src={fe} alt="" style={{ width: 120, height: 120 }} />
                  <div className="flex flex-col pl-4">
                    <h3 className="text-xl">Business Analyist</h3>
                    <p>
                      Vivamus a turpis non ligula scelerisque bibendum non et lectus. Quisque ullamcorper, purus sit
                      amet tempor tristique, mauris metus facilisis elit, at pulvinar magna orci in ex.{' '}
                    </p>
                  </div>
                </div>
                <button className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 mt-4" style={{ width: 120 }}>
                  See all
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
