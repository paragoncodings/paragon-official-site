import React from 'react'
import Services from './Services/Services'
import FeatureSection from './FeatureSection/FeatureSection'
import Timeline from './Timeline/Timeline'
import MainSec from './Technology/MainSec'
import WhatsAppButton from './Home/WhatsAppButton'

import HeroSection from './Home/HeroSection'

import AboutSection from './Home/AboutSection'


const Home = () => {
  return (
    <div>
       <HeroSection/>
      <AboutSection/> 
       
        <Services/>
        <FeatureSection/>
        <Timeline/>
        <MainSec />

        <WhatsAppButton/>

        <WhatsAppButton /> 

    </div>
  )
}

export default Home