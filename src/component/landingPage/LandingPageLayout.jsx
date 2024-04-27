import React from 'react'
import LandingHeader from './landingHeader/LandingHeader'
import LandingFooter from './bodyContainer/footer/LandingFooter'
import { Outlet } from 'react-router-dom'

export default function LandingPageLayout() {
  return (
    <div >
      <LandingHeader/>
      <Outlet/>
      <LandingFooter />
    </div>
  )
}
