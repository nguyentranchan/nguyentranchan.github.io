import React from 'react'
import { Intro } from '../../components/Intro'
import { Product } from '../product'
import { AboutUs } from '../about-us'
import { CompanyValue } from '../company-value'
import { Parter } from '../parter'
import { Career } from '../career'

export function MainPage() {
  return (
    <React.Fragment>
      <Intro />
      <Product />
      <AboutUs />
      <CompanyValue />
      <Parter />
      <Career />
    </React.Fragment>
  )
}
