import React from 'react'
import { Intro } from '../../components/Intro'
import { Product } from '../product'

export function MainPage() {
  return (
    <React.Fragment>
      <Intro />
      <Product />
    </React.Fragment>
  )
}
