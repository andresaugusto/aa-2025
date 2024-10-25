import Background from '@/components/Background'
import Hero from '@/components/Hero'
import Offers from '@/components/Offers'
import Results from '@/components/Results'
import WorkTimeline from '@/components/WorkTimeline'
import Inquire from '@/components/Inquire'
import Testimonials from '@/components/Testimonials'

export default function LandingPage() {
  return (
    <div className="bg-white">
      <Background />
      <Hero />
      <div className="py-lg backdrop-invert backdrop-blur-lg backdrop-saturate-0">
        <Offers />
        <Results />
        <WorkTimeline />
      {/* <Testimonials /> */}
      </div>
      <div className="py-lg">
        <Inquire />
      </div>
    </div>
  )
}