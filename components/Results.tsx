import { portfolioItems } from '@/lib/data'
import { MotionDiv } from '@/components/Motion'
import Result from '@/components/Result'
import Section from '@/components/Section'

export default function Results() {
  return (
   <Section title="Results">
     <div className="container mx-auto">
       <div className="space-y-4">
         {portfolioItems.map((item: Record<string, any>, index: any) => (
            <Result index={index} title={item.title} description={item.description} image={item.image} />
         ))}
       </div>
     </div>
   </Section>
  )
}