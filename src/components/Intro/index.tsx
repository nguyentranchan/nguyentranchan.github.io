import React from 'react'
import IntroBg from '../../images/intro.svg'
import Typewriter from 'typewriter-effect'

export function Intro() {
  return (
    <div className="intro relative">
      <div className="absolute text-white slogan md:slogan-md slogan-xs">
        <p className="lg:text-3xl md:text-xl">THINK GLOBALLY, ACT LOCALLY</p>
        <Typewriter
          options={{
            cursor: '_',
            delay: 20,
          }}
          onInit={(typewriter: any) => {
            typewriter.typeString('Deliver the high performance products and services').start()
          }}
        />
      </div>
      <img src={IntroBg} alt="" />
    </div>
  )
}
