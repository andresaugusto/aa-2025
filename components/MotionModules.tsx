"use client"

import { motion, useAnimationControls, useInView, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

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

export default function MotionModules() {
  const {scrollYProgress: completionProgress} = useScroll()

  const containerRef = useRef(null)

  const isInView = useInView(containerRef, { once: true })
  const mainControls = useAnimationControls()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })
  const paragraphOneValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  )
  const paragraphTwoValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["200%", "0%"]
  )
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        {/* Fade Ins */}
        <motion.div
          variants={objectVariants}
          className="bg-slate-800 aspect-square rounded-sm justify-center flex items-center gap-10"
          >
          {/* Fade Up */}
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-sm"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          />
          {/* Fade Down */}
          <motion.div
            className="w-20 h-20 bg-stone-100 rounded-full"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          />
        </motion.div>
        {/* Autonomous Shape Shifting */}
        <motion.div
          variants={objectVariants}
          className="bg-slate-800 aspect-square rounded-sm justify-center flex items-center gap-10"
        >
          <motion.div
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="w-1/3 h-1/3 shadow-md bg-rose-400"
          />
        </motion.div>
        {/* Button Push */}
        <motion.div
          variants={objectVariants}
          className="bg-slate-800 aspect-square rounded-sm justify-center flex items-center gap-10"
        >
          <motion.button
            whileTap={{
              scale: 0.4
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "white",
              color: "black" 
            }}
            transition={{
              balanceDamping: 10,
              bounceStiffness: 900,
            }}
            className="bg-emerald-900 w-1/2 py-4 rounded-sm text-2xl text-gray-100 font-light tracking-wide"
          >
            dímelo
          </motion.button>
        </motion.div>
        {/* Drag Objects */}
        <motion.div
          variants={objectVariants}
          className="z-10 bg-slate-800 aspect-square rounded-sm justify-center flex items-center gap-10"
        >
          <motion.div
            className="w-1/3 h-1/3 bg-orange-500 rounded-md cursor-grab"
            drag
            dragConstraints={{
              top: -125,
              right: 125,
              bottom: 125,
              left: -125,
            }}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 6,
            }}
          />
        </motion.div>
        {/* Scroll Progression */}
        <motion.div
          variants={objectVariants}
          className="bg-slate-800 aspect-square rounded-sm justify-center flex items-center gap-10"
        >
          <motion.div className= "w-40 aspect-square bg-gray-50/20 rounded-md">
            <motion.div
              className="w-full bg-gray-400 rounded-md h-full origin-bottom"
              style={{
                scaleY: completionProgress
              }}  
            ></motion.div>
          </motion.div>
        </motion.div>
        {/* Animated SVG */}
        <motion.div
          variants={objectVariants}
          className="bg-slate-800 aspect-square rounded-sm justify-center flex items-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/200/svg"
            viewBox="0 0 24 24"
            className="w-1/2 stroke-amber-500 stroke-[0.5]"
          >
            <motion.path 
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              variants={svgIconVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: {
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                },
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  delay: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.section>
      {/* Appearance Triggers */}
      <section 
        ref={containerRef} // MotionMain.tsx => setState to redux
        className="flex flex-col gap-10 mb-10"
      >
        <motion.h1 
          variants={slideInVariants}
          initial="hidden"
          animate={mainControls}
          transition={{ delay: 0.3 }}
          className="text-5xl tracking-wide text-slate-100 text-center"
        >
          Scroll along b, trust ;)
        </motion.h1>
        <motion.p // Animated.tsx => state from redux
          // style={{ translateX: paragraphOneValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
        >
          GET / 500 in 16ms 
          ✓ Compiled in 1246ms (1367 modules) 
          ⚠ Fast Refresh had to perform a full reload due to a runtime error.
        </motion.p>
        <motion.p
          // style={{ translateX: paragraphTwoValue }}
          className="text-slate-100 font-thin text-4xl w-1/2 mx-auto"
        >
          GET /favicon.ico 200 in 140ms
          ✓ Compiled in 396ms (1412 modules)
          ✓ Compiled in 276ms (1412 modules)
          ✓ Compiled in 220ms (1412 modules)
          ✓ Compiled in 273ms (1412 modules)
          ✓ Compiled in 268ms (1412 modules)
          ✓ Compiled in 181ms (1412 modules)
          ✓ Compiled in 177ms (1412 modules)
        </motion.p>
      </section>
    </div>
  )
}