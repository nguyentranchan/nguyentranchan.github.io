import React from 'react'
import Particles from 'react-particles-js'
import IntroImageMobile from '../../images/intro-mobile.svg'
import IntroImage from '../../images/intro.svg'
import './intro.scss'
import params from './particles.json'

interface IntroProps {
  title: string
  description?: string
  displayParticle?: boolean
  titleClass?: string
}

export class Intro extends React.Component<IntroProps, { width: number; rendered: boolean }> {
  constructor(props: IntroProps) {
    super(props)
    this.state = {
      width: 0,
      rendered: false,
    }
  }
  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener('resize', this.detectWindowSize)
    if (typeof window !== 'undefined' && this.props.displayParticle) {
      ;(window as any).particlesJS.load('particles-js', params)
    }

    this.setState({ rendered: true })
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

    const { title, description, displayParticle, titleClass = '' } = this.props

    return (
      <div className="intro relative bg-gblue flex justify-center">
        {displayParticle && <Particles className="absolute top-0 right-0 left-0 bottom-0 z-10" params={params} />}
        <div className="relative gcontainer">
          {this.state.rendered && (
            <React.Fragment>
              <div className="absolute text-white slogan md:slogan-md slogan-xs gcontainer">
                <p className={`block md:text-3xl lg:text-4xl text-2xl text-center md:text-left ${titleClass}`}>
                  {title}
                </p>
                {description && <p className="text-center md:text-left">{description}</p>}
              </div>
              {width >= 768 && <IntroImage className="w-full h-full gcontainer" />}
              {width < 768 && <IntroImageMobile className="w-full h-full block" />}
            </React.Fragment>
          )}
        </div>
      </div>
    )
  }
}
