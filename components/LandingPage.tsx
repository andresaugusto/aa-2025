'use client'
import Background from '@/components/Background'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'
import { useEffect } from 'react'
import Lenis from 'lenis'
// import Menu from '@/components/Menu'
// import MotionModules from './MotionModules'
// import WorkTimeline from '@/components/WorkTimeline'
// import Inquire from '@/components/Inquire'
// import Testimonials from '@/components/Testimonials'

export default function LandingPage() {
  // return <MotionModules />
  useEffect(() =>{
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <>
      <Background />
      {/* <Menu /> */}
      <Hero />
      <Services />
      <Work />
      {/* <WorkTimeline /> */}
      {/* <Testimonials /> */}
      {/* <Inquire /> */}
    </>
  )
}