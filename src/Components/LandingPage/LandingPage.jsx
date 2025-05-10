import React from 'react'
import Home from '../Pages/Home'
import { Services } from '../ServicesSection/Services'
import WomennBrands from '../BiggestLabels/WomennBrands'
import MensBrands from '../BiggestLabels/MensBarnds'

const LandingPage = () => {
  return (
    <div>
        <Home />
        <Services />
        <WomennBrands />
        <MensBrands />
    </div>
  )
}

export default LandingPage