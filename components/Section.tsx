import Baunk from 'next/font/local'
import { MotionH2, MotionSection, MotionDiv } from '@/components/Motion'
import { Card, CardHeader } from './ui/card'
const displayFont = Baunk({ src: '../app/fonts/Baunk.woff' })

interface SectionProps {
  children: React.ReactNode
  title: string
}

export default function Section({ children, title }: SectionProps)  {
  return (
    <MotionSection 
      className="w-svw mb-lg flex flex-col justify-center"
    >
      {
        title && 
          <Card className="z-10 sticky top-md m-md flex justify-end bg-transparent backdrop-blur-sm shadow-0">
            <CardHeader className="py-md">
              <MotionH2 className={`${displayFont.className} text-[1.8rem] text-transparent bg-gradient-to-b from-white/70 to-white bg-clip-text`}>
                {title}
              </MotionH2>
            </CardHeader>
          </Card>
      }
      <MotionDiv
        className="mx-md"
      >{children}</MotionDiv>
    </MotionSection>
  )
}