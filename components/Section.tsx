import Baunk from 'next/font/local'
import { MotionH2, MotionSection, MotionDiv } from '@/components/Motion'
const displayFont = Baunk({ src: '../app/fonts/Baunk.woff' })

interface SectionProps {
  children: React.ReactNode
  title: string
}

export default function Section({ children, title }: SectionProps) {
  return (
    <MotionSection 
      className="w-svw mb-xl"
    >
      {
        title && 
          <div className="z-10 top-0 sticky w-100 mx-md p-md mb-md">
            <MotionH2 className={`${displayFont.className} text-[1.8rem] p-sm leading-[1.8rem] text-transparent bg-gradient-to-r from-white to-white/40 bg-clip-text`}>
              {title}
            </MotionH2>
          </div>
      }
      <MotionDiv
        className="mx-md bg-black/50"
      >{children}</MotionDiv>
    </MotionSection>
  )
}