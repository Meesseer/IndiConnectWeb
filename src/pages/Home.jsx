import React from 'react'
import Hero from '../sections/Hero'
import Mission from '../sections/Mission'
import Sectors from '../sections/Sectors'
import Journey from '../sections/Journey'
import Indsights from '../sections/IndSights'
import Contact from '../sections/Contact'

function Home() {
  return (
    <div>
      <Hero />
      <Mission />
      <Sectors />
      <Journey />
      <Indsights />
      <Contact />
    </div>
  )
}

export default Home