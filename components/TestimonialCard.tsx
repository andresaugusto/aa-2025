'use client'

import { motion } from 'framer-motion'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
}

export default function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg mb-4 mx-2"
    >
      <p className="text-gray-300 mb-4">"{content}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-primary rounded-full mr-4"></div>
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}