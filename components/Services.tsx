import { services } from '@/lib/data'
import Section from '@/components/Section'
import Service from './Service'

export default function Services() {
  return (
    <Section title="Services">
      <div className="container mx-auto">
        <div className="space-y-md overflow-visible">
          {services.map((service: Record<string, any>, index: any) => (
            <Service icon={service.icon} key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </Section>
  )
}