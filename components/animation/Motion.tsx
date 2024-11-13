// reference: https://www.hemantasundaray.com/blog/use-framer-motion-with-nextjs-server-components
"use client"
 
import React from "react"
import { useRef, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { motion, useAnimation, useAnimationControls, useInView, useScroll, useTransform  } from "framer-motion"
import type { HTMLMotionProps } from "framer-motion"
import { updatePageRef } from "@/redux/features/motion-slice"
 
type MotionMainProps = HTMLMotionProps<"main">
type MotionSectionProps = HTMLMotionProps<"section">
type MotionDivProps = HTMLMotionProps<"div">
type MotionButtonProps = HTMLMotionProps<"button">
type MotionH1Props = HTMLMotionProps<"h1">
type MotionH2Props = HTMLMotionProps<"h2">
type MotionPProps = HTMLMotionProps<"p">

const containerVariants: Record<any, any> = {
  hidden: {
    opacity: 0
  }, 
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
}
const objectVariants: Record<any, any> = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1
  }
}
const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
}
const slideInVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
}

const MotionMain = React.forwardRef<HTMLElement, MotionMainProps>(

  function MotionMain({ children, ...props }) {
    const pageRef = useRef(null)
    const dispatch = useDispatch<AppDispatch>()
    const onRefUpdate = (pageRef: any) => {
      dispatch(updatePageRef(pageRef))
      console.log("onRefUpdate ran")
    }
    useEffect(() => {
      onRefUpdate(pageRef)
      console.log(`reference useEffect ran. pageRef: ${pageRef}`)
    }, [pageRef])
    return (
      <motion.main ref={pageRef} {...props}>
        {children}
      </motion.main>
    )
  }
)
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
const MotionDivVisible = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDivVisible({ children, ...props }, ref) {
    const divRef = useRef(null)
    const isInView = useInView((divRef), { once: true })
    const controls = useAnimationControls()

    const { scrollYProgress } = useScroll({
      target: divRef,
      offset: ["start start", "center end"],
    })
    const leftToCenter = useTransform(
      scrollYProgress,
      [0, 1],
      ["-100%", "0%"]
    )
    const fightCenterLeft = useTransform(
      scrollYProgress,
      [0, .1, .9, 1],
      ["-10%", "0%", "0%", "10%"]
    )
    const transOpaqueTrans = useTransform(
      scrollYProgress,
      [0, .05, .1, .9, .95, 1],
      [0, .1, 1, 1, .1, 0]
    )
    useEffect(() => {
      if (isInView) {
        controls.start('visible')
      }
    }, [isInView, controls])
    useEffect(() => {
      if (isInView) {
        controls.start('visible')
      }
    }, [isInView, controls])
    return (
      <motion.div 
        ref={ref || divRef}
        style={{
          translateX: fightCenterLeft,
          opacity: transOpaqueTrans,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div 
        ref={ref}
        {...props}
      >
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
  MotionMain,
  MotionSection,
  MotionDiv,
  MotionDivVisible,
  MotionButton,
  MotionH1,
  MotionH2,
  MotionP
}