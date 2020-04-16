import React from 'react'
import Particles from 'react-particles-js'
import IntroImageMobile from '../../images/intro-mobile.svg'
import IntroImage from '../../images/intro.svg'
import './intro.scss'
import params from './particles.json'

export class Intro extends React.Component<any, { width: number }> {
  constructor(props: any) {
    super(props)
    this.state = {
      width: 0,
    }
  }
  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener('resize', this.detectWindowSize)
    if (typeof window !== 'undefined') {
      ;(window as any).particlesJS.load('particles-js', params)
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.detectWindowSize)
  }
  detectWindowSize = () => {
    const { width } = this.state
    if ((width >= 768 && window.innerWidth < 768) || (width < 768 && window.innerWidth >= 768)) {
      this.setState({ width: window.innerWidth })
    }
  }
  render() {
    const { width } = this.state

    return (
      <div className="intro relative bg-gblue flex justify-center">
        <Particles className="absolute top-0 right-0 left-0 bottom-0 z-10" params={params} />
        <div className="relative gcontainer">
          <div className="absolute text-white slogan md:slogan-md slogan-xs gcontainer">
            <p className="block md:text-3xl lg:text-4xl text-2xl text-center md:text-left">
              Think Globally, Act Locally
            </p>
            <p className="text-center md:text-left">Deliver the high performance products and services</p>
          </div>
          {width >= 768 && <IntroImage className="w-full h-full hidden md:block gcontainer" />}
          {width < 768 && <IntroImageMobile className="w-full h-full block md:hidden gcontainer" />}
        </div>
      </div>
    )
  }
}
