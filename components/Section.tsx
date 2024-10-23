'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'


import Baunk from 'next/font/local'
const displayFont = Baunk({ src: '../app/fonts/Baunk.woff' })

interface SectionProps {
  children: React.ReactNode
  title: string
}

export default function Section({ children, title }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: .5 } },
      }}
      className="relative min-h-svh px-2"
    >
      {title && <h2 className={`${displayFont.className} text-[2em] font-thin mb-8 text-left sticky top-0 py-4 z-10 w-full tracking-tight`}>
        {title}
      </h2>}
      {children}
    </motion.section>
  )
}