import Baunk from 'next/font/local'
import { MotionH2, MotionSection, MotionDiv, MotionDivVisible } from '@/components/Motion'
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
          <MotionDiv className="container z-10 sticky top-md my-md mx-auto px-md sm:px-0 flex">
            <MotionH2 className={`${displayFont.className} text-[1.8rem] text-transparent bg-gradient-to-t from-white/70 to-white bg-clip-text`}>
              {title}
            </MotionH2>
          </MotionDiv>
      }
      <MotionDiv
        className="mx-md"
      >{children}</MotionDiv>
    </MotionSection>
  )
}