'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Section from './Section'
import SkillCard from './SkillCard'
import PortfolioItem from './PortfolioItem'
import TimelineItem from './TimelineItem'
import TestimonialCard from './TestimonialCard'
import ContactForm from './ContactForm'
import { skills, portfolioItems, timelineItems, testimonials } from '@/lib/data'
import { MotionDiv } from '@/components/Motion'
import Background from '@/components/Background'

import Baunk from 'next/font/local'
const displayFont = Baunk({ src: '../app/fonts/Baunk.woff' })

export default function LandingPage() {
  return (
    <div className="">
      <Background />
      {/* Hero Section */}
      <Section title="">
        <div className="container h-svh w-svw flex flex-col justify-end">
          <motion.h1
            initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: .7 }}
            className={`${displayFont.className} text-[3rem] leading-[4rem] ease-out text-transparent bg-gradient-to-r from-green-400 to-white bg-clip-text`}
          >
            ANDRÉS
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: .7 }}
            className={`${displayFont.className} text-[3rem] leading-[2.7rem] ease-out text-transparent bg-gradient-to-r from-green-400 to-white bg-clip-text`}
          >
            AUGUSTO
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: .9}}
            className={`${displayFont.className} text-[2.1rem] leading-[1.8rem] ease-out text-transparent bg-gradient-to-r from-white to-white/40 bg-clip-text`}
          >
            USER INTERFACE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: .9}}
            className={`${displayFont.className} text-[2.1rem] leading-[1.8rem] ease-out text-transparent bg-gradient-to-r from-white to-white/40 bg-clip-text`}
          >
           +  EXPERIENCE ENGINEERING
          </motion.h1>
          <div className="flex wrap-none">
            <motion.p
              initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 1.1}}
              className="text-sm text-gray-300 leading-normal font-light mr-md"
            >
              Intuitive and performant digital confections
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1.3 }}
              className="mt-auto"
            >
              <ChevronDown className="w-12 h-6 mx-auto text-green-400 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Deliverable Services">
        <div className="container mx-auto">
          <div className="space-y-md">
            {skills.map((skill: Record<string, any>, index: any) => (
              <MotionDiv
                initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
                transition={{ duration: .75, delay: index*.5}}
              >
                <SkillCard icon={skill.icon} key={index} title={skill.title} description={skill.description} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio Section */}
      <Section title="Portfolio">
        <div className="container mx-auto">
          <div className="space-y-4">
            {portfolioItems.map((item: Record<string, any>, index: any) => (
              <MotionDiv
                initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: index}}
              >
                <PortfolioItem key={index} title={item.title} description={item.description} image={item.image} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section title="Experience">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            {timelineItems.map((item: Record<string, any>, index: any) => (
              <TimelineItem key={index} year={item.year} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section title="Testimonials">
        <div className="container mx-auto">
          <div className="space-y-4">
            {testimonials.map((testimonial: Record<string, any>, index: any) => (
              <TestimonialCard key={index} name={testimonial.name} role={testimonial.role} content={testimonial.content} />
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section title="Contact">
        <div className="container mx-auto">
          <ContactForm />
        </div>
      </Section>
    </div>
  )
}