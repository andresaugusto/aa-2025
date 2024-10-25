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
          <div className="container z-10 sticky top-md my-md mx-auto px-md sm:px-0 flex">
            <CardHeader className="py-md rounded-md bg-white bg-gradient-to-t from-black/30 to-white/80">
              <MotionH2 className={`${displayFont.className} text-[1.8rem] text-transparent bg-gradient-to-b from-black/70 to-black bg-clip-text`}>
                {title}
              </MotionH2>
            </CardHeader>
          </div>
      }
      <MotionDiv
        className="mx-md"
      >{children}</MotionDiv>
    </MotionSection>
  )
}