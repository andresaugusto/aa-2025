import { skills, portfolioItems, timelineItems, testimonials } from '@/lib/data'
import Background from '@/components/Background'
import Hero from '@/components/Hero'
import Offers from '@/components/Offers'
import Results from '@/components/Results'
import WorkTimeline from '@/components/WorkTimeline'
import Section from './Section'
import Testimonial from './Testimonial'

export default function LandingPage() {
  return (
    <Section title="Testimonials">
      <div className="container mx-auto">
        <div className="space-y-4">
          {testimonials.map((testimonial: Record<string, any>, index: any) => (
            <Testimonial key={index} name={testimonial.name} role={testimonial.role} content={testimonial.content} />
          ))}
        </div>
      </div>
    </Section>
  )
}

{/* Testimonials Section */}