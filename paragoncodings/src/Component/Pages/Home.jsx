import React from 'react'
import Services from './Services/Services'
import FeatureSection from './FeatureSection/FeatureSection'
import Timeline from './Timeline/Timeline'
import MainSec from './Technology/MainSec'

const Home = () => {
  return (
    <div>
        <Services/>
        <FeatureSection/>
        <Timeline/>
        <MainSec />
    </div>
  )
}

export default Home