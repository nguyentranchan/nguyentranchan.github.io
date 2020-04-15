import React from 'react'
import { Intro } from '../../components/Intro'
import { Product } from '../product'
import { AboutUs } from '../about-us'

export function MainPage() {
  return (
    <React.Fragment>
      <Intro />
      <Product />
      <AboutUs />
    </React.Fragment>
  )
}
