import { timelineItems } from '@/lib/data'
import Section from '@/components/Section'
import WorkEvent from '@/components/WorkEvent'

export default function WorkTimeline() {
  return (
    <Section title="Experience">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          {timelineItems.map((item: Record<string, any>, index: any) => (
            <WorkEvent key={index} year={item.year} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </Section>
  )
}