import React from 'react'
import IntroImage from '../../images/intro.svg'
import './intro.scss'
import params from './particles.json'
import Particles from 'react-particles-js'
import IntroImageMobile from '../../images/intro-mobile.png'

export function Intro() {
  if (typeof window !== 'undefined') {
    ;(window as any).particlesJS.load('particles-js', params)
  }

  return (
    <div className="intro relative bg-gblue">
      <Particles className="absolute top-0 right-0 left-0 bottom-0" params={params} />
      <div className="absolute text-white slogan md:slogan-md slogan-xs">
        <p className="block md:text-3xl lg:text-4xl text-2xl text-center md:text-left">Think Globally, Act Locally</p>
        <p className="text-center md:text-left">Deliver the high performance products and services</p>
      </div>
      <IntroImage className="w-full h-full hidden md:block" />
      <img src={IntroImageMobile} alt="" className="w-full h-full block md:hidden" />
    </div>
  )
}
