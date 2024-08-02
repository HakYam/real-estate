'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Hero from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes'
import HomeProperties from '@/components/HomeProperties'

const Homepage = () => {
    
    const router = useRouter();

    

  return (
    <>
    <Hero/>
    <InfoBoxes />
    <HomeProperties />
    </>
  )
}

export default Homepage

