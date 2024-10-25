import { skills } from '@/lib/data'
import Section from '@/components/Section'
import Offer from './Offer'

export default function Offers() {
  return (
    <Section title="Offers">
      <div className="container mx-auto">
        <div className="space-y-md overflow-visible">
          {skills.map((skill: Record<string, any>, index: any) => (
            <Offer icon={skill.icon} key={index} title={skill.title} description={skill.description} />
          ))}
        </div>
      </div>
    </Section>
  )
}