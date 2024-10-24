// reference: https://www.hemantasundaray.com/blog/use-framer-motion-with-nextjs-server-components
"use client"
 
import React from "react"
import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView  } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"
 
type MotionSectionProps = HTMLMotionProps<"section">
type MotionDivProps = HTMLMotionProps<"div">
type MotionButtonProps = HTMLMotionProps<"button">
type MotionH1Props = HTMLMotionProps<"h1">
type MotionH2Props = HTMLMotionProps<"h2">
type MotionPProps = HTMLMotionProps<"p">

const MotionSection = React.forwardRef<HTMLElement, MotionSectionProps>(
  function MotionSection({ children, ...props }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const controls = useAnimation()

    useEffect(() => {
      if (isInView) {
        controls.start('visible')
      }
    }, [isInView, controls])

    return (
      <motion.section ref={ref} {...props}>
        {children}
      </motion.section>
    )
  }
)
const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    )
  }
)
const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  function MotionButton({ children, ...props }, ref) {
    return (
      <motion.button ref={ref} {...props}>
        {children}
      </motion.button>
    )
  }
)
const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionH1Props>(
  function MotionH1({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    )
  }
)
const MotionH2 = React.forwardRef<HTMLHeadingElement, MotionH2Props>(
  function MotionH2({ children, ...props }, ref) {
    return (
      <motion.h2 ref={ref} {...props}>
        {children}
      </motion.h2>
    )
  }
)
const MotionP = React.forwardRef<HTMLParagraphElement, MotionPProps>(
  function MotionP({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    )
  }
)


export { 
  MotionSection,
  MotionDiv,
  MotionButton,
  MotionH1,
  MotionH2,
  MotionP
}