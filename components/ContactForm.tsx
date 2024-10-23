'use client'

import { useState } from 'react'
import { motion } from  'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In a real-world scenario, you'd send this data to a backend service
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', projectDetails: '' })
    alert('Thank you for your message! I\'ll get back to you soon.')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-1">
          Project Details
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
        ></textarea>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300"
      >
        Send Message
      </motion.button>
    </form>
  )
}