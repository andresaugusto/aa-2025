'use client'

import { motion } from 'framer-motion'

interface SkillCardProps {
  key?: React.Key
  icon?: any
  title?: string
  description?: string
}

export default function SkillCard({ key, icon: Icon, title, description }: SkillCardProps) {
  return (
    <motion.div
      key={key}
      whileHover={{ scale: 1.02 }}
      className="w-full bg-gray-900 p-6 rounded-lg shadow-lg mb-4 mx-2"
    >
      <motion.div
        key={key}
        whileHover={{ scale: 1.02 }}
        className="w-12 h-12 text-primary mb-4 flex justify-stretch align-stretch"
      >
        <Icon />
      </motion.div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}