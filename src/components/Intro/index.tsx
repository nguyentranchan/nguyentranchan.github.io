import React from 'react'
import Typewriter from 'typewriter-effect'
import IntroImage from '../../images/intro.svg'
import './intro.scss'

export function Intro() {
  return (
    <div className="intro relative mt-20">
      <div className="absolute text-white slogan md:slogan-md slogan-xs">
        <p className="block md:text-2xl lg:text-4xl text-xl">
          THINK GLOBALLY <br /> ACT LOCALLY
        </p>
        <Typewriter
          options={{
            delay: 20,
            autoStart: true,
            wrapperClassName: 'typewriter-lg',
            cursorClassName: 'hidden',
          }}
          onInit={(typewriter: any) => {
            typewriter.typeString('Deliver the high performance products and services').start()
          }}
        />
        <Typewriter
          options={{
            delay: 20,
            autoStart: true,
            wrapperClassName: 'typewriter-md',
            cursorClassName: 'hidden',
          }}
          onInit={(typewriter: any) => {
            typewriter.typeString('Deliver the high <br/>').start()
            typewriter.typeString('performance products and services').start()
          }}
        />
        <Typewriter
          options={{
            delay: 20,
            autoStart: true,
            wrapperClassName: 'text-sm typewriter-sm',
            cursorClassName: 'hidden',
          }}
          onInit={(typewriter: any) => {
            typewriter.typeString('Deliver the high <br/>').start()
            typewriter.typeString('performance products <br/>').start()
            typewriter.typeString('and services').start()
          }}
        />
      </div>
      <IntroImage className="w-full h-full" />
    </div>
  )
}
