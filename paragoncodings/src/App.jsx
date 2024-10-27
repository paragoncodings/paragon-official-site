import React, { Fragment } from 'react'
import img from '/assets/mobilepic.png'
import StatsSection from './Components/StatsSection'
import TechnologiesSlider from './Components/TechnologiesSlider'

function App() {
 

  return (
    <Fragment>
<div className='bg-[#37383C] w-full h-lvh'>
<div className='text-2xl text-center py-10 text-[#37383C] bg-[#7CFC0A] w-full h-[20%]'>
  <h1 className='text-2xl'>We are One Step Solution Providers</h1>
  <img src={img} alt="" />
  <StatsSection />
  <TechnologiesSlider />
</div>

</div>
    </Fragment>
  )
}

export default App
