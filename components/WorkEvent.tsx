'use client'

import { motion } from 'framer-motion'

interface WorkEventProps {
  year: string
  title: string
  description: string
}

export default function WorkEvent({ year, title, description }: WorkEventProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8 flex"
    >
      <div className="flex-shrink-0 w-24 text-right mr-8">
        <span className="text-primary font-semibold">{year}</span>
      </div>
      <div className="border-l-2 border-primary pl-8 pb-8">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  )
}