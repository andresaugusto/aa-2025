import { Assets } from '@/lib/data'
import Projects from '@/components/Project'
import Section from '@/components/Section'

export default function Work() {
  return (
   <Section title="Work">
     <div className="container carousel mx-auto">
       <div className="space-y-4">
         {Assets.map((item: Record<string, any>, index: any) => (
            <Projects index={index} title={item.title} description={item.description} image={item.image} />
         ))}
       </div>
     </div>
   </Section>
  )
}