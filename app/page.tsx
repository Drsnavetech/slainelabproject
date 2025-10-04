import Footer from '@/components/footer'
import HeroWithNav from '@/components/HeroWithNav'
import StayInformed from '@/components/StayInformed'
import Timeline from '@/components/Timeline'
import React from 'react'

export default function Homepage() {
  return (
    <main>
      <HeroWithNav />
      <Timeline />
      <StayInformed />
      <Footer/>
    </main>
  )
}
