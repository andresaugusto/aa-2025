'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PortfolioItemProps {
  title: string
  description: string
  image: string
}

export default function PortfolioItem({ title, description, image }: PortfolioItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg mb-4 mx-2"
    >
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}