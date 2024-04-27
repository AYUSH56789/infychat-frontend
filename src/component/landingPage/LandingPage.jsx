import React from 'react'
import HeroSection from './bodyContainer/herosection/HeroSection'
import Feature from './bodyContainer/featureContainer/Feature'
import GetStarted from './bodyContainer/getStart/GetStarted'
import FeedBack from './bodyContainer/feedbackContainer/FeedBack'

export default function LandingPage() {
  return (
    <div className='landing-page'>
        <HeroSection/>
        <Feature/>
        <GetStarted/>
        <FeedBack/>
    </div>
  )
}
