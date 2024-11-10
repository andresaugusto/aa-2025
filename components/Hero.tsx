import { ChevronDown } from 'lucide-react'
import { MotionDiv, MotionDivVisible, MotionH1, MotionP } from '@/components/Motion'
import Section from '@/components/Section'

import Baunk from 'next/font/local'
const displayFont = Baunk({ src: '../app/fonts/Baunk.woff' })

export default function Hero() {
  return (
    <Section title="">
      <div className="text-center h-svh py-md flex flex-col align-center justify-end">
        <MotionH1
          initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: .7 }}
          className={`${displayFont.className} text-[3.52rem] leading-[5rem] ease-out text-white`}
        >
          ANDRÉS
        </MotionH1>
        <MotionH1
          initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
          animate={{ opacity: 1, y: -20, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: .7 }}
          className={`${displayFont.className} text-[3.05rem] leading-[2.7rem] ease-out text-transparent bg-gradient-to-b from-white to-white/50 bg-clip-text`}
        >
          AUGUSTO
        </MotionH1>
        <MotionDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.3 }}
        >
          <ChevronDown className="w-10 h-10 mx-auto text-green-400 animate-pulse" />
        </MotionDiv>
        <div className="grow" />
        <MotionH1
          initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
          animate={{ opacity: 1, y: 12, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: .9}}
          className={`${displayFont.className} text-[5.37rem] leading-[4.9rem] ease-out text-transparent bg-gradient-to-t from-white to-white/50 bg-clip-text`}
        >USER
        </MotionH1>
        <MotionH1
          initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: .9}}
          className={`${displayFont.className} text-[2.33rem] leading-[2.2rem] ease-out text-white`}
        >
          EXPERIENCE
        </MotionH1>
        <MotionH1
          initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
          animate={{ opacity: 1, y: -2, rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: .9}}
          className={`${displayFont.className} text-[2.95rem] leading-[2.6rem] ease-out text-transparent bg-gradient-to-b from-white to-green-500/50 bg-clip-text`}
        >
          ENGINEER
        </MotionH1>
      </div>
    </Section>
  )
}