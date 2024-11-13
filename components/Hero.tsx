'use client'

import { ChevronDown } from 'lucide-react'
import { MotionButton, MotionDiv, MotionH1 } from '@/components/animation/Motion'
import Section from '@/components/Section'
import Nav from '@/components/Nav'

import Baunk from 'next/font/local'
import { motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
const displayFont = Baunk({ src: '../app/fonts/Baunk.woff' })
import { personalProjects } from '@/lib/data'

const SECTION_HEIGHT = 1500
export default function Hero() {
  return (
    <div
      id="aa"
      className="relative w-full"
      style={{
        height: `calc(${SECTION_HEIGHT}px + 100vh)`
      }}
    >

      <div className="sticky w-full top-0 h-0 overflow-visible">
        <MotionDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.3 }}
          className="flex justify-center"
        >
          <ChevronDown className="size-[2rem] text-yellow-400 animate-pulse" />
        </MotionDiv>
      </div>
      <CenterContent />
      <ParallaxContent />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black/0 to-black" />
    </div>
  )
}
const CenterContent = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(
    scrollY,
    [0, SECTION_HEIGHT],
    [25, 0]
  )
  const clip2 = useTransform(
    scrollY,
    [0, SECTION_HEIGHT],
    [75, 100]
  )
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  )
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  )
  return (
      <div className="sticky top-0 h-screen w-full">
        <motion.div
          className=""
          style={{
            opacity,
            backgroundSize,
            clipPath,
            backgroundImage: `url(${personalProjects.aa.genMedia.videos.mainWide1080pFiltered.poster})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <Section title=""> */}
          <div className="w-full absolute z-30 text-center h-svh py-md flex flex-col align-center justify-end">
            {/* <div style={{ transform: "rotateZ(180deg) translateY(1.85rem)"}}> */}
              <MotionH1
                initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: .7 }}
                className={`${displayFont.className} text-[3.52rem] leading-[5rem] ease-out text-white`}
              >
                ANDRÉS
              </MotionH1>
              <MotionH1
                initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
                animate={{ opacity: 1, y: -20, rotateY: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: .7 }}
                className={`${displayFont.className} text-[3.05rem] leading-[2.7rem] ease-out text-transparent bg-gradient-to-b from-white to-white/50 bg-clip-text`}
              >
                AUGUSTO
              </MotionH1>
            {/* </div> */}
            <div className="grow" />
            <MotionH1
              initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: .9}}
              className={`${displayFont.className} text-[2.99rem] leading-[2.7rem] ease-out text-transparent bg-gradient-to-b from-white/50 to-white bg-clip-text`}
            >
              CREATIVE
            </MotionH1>
            <MotionH1
              initial={{ opacity: 0, y: 10, rotateY: -5, rotateX: -90 }}
              animate={{ opacity: 1, y: -2, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: .9}}
              className={`${displayFont.className} text-[2.36rem] leading-[1.9rem] ease-out text-white`}
            >
              DEVELOPER
            </MotionH1>
          </div>
          {/* </Section> */}
          <video
            autoPlay
            muted
            loop
            poster={personalProjects.aa.genMedia.videos.mainWide1080pFiltered.poster}
            className="relative object-cover h-[100svh] w-[100svw]"
            >
            <source
              src={personalProjects.aa.genMedia.videos.mainWide1080p.mp4}
              type="video/mp4"
              />
          </video>
        </motion.div>
      </div>
  )
}
const ParallaxContent = () => {
  return(
    <div
      className="z-10 mx-auto align-center max-w-5xl px-sm py-[200px]"
    >
      <ParallaxItem
        title={personalProjects.avtc.title}
        link={`/${personalProjects.avtc.id}`}
        poster={personalProjects.avtc.genMedia.videos.mainWide1080pFiltered.poster}
        video={personalProjects.avtc.genMedia.videos.mainWide1080p.mp4}
        start={-200}
        end={200}
        className="w-1/2"
      />
      <ParallaxItem
        title={personalProjects.wip.title}
        link={`/${personalProjects.wip.id}`}
        poster={personalProjects.wip.genMedia.videos.mainWide1080pFiltered.poster}
        video={personalProjects.wip.genMedia.videos.mainWide1080p.mp4}
        start={200}
        end={-250}
        className="w-3/4 transform translate-x-[30svw]"
      />
      <ParallaxItem
        title={personalProjects.fire.title}
        link={`/${personalProjects.fire.id}`}
        poster={personalProjects.fire.genMedia.videos.mainWide1080pFiltered.poster}
        video={personalProjects.fire.genMedia.videos.mainWide1080p.mp4}
        start={-100}
        end={125}
        className="w-2/3 transform -translate-x-[20svw]"
      />
      <ParallaxItem
        title={personalProjects.br.title}
        link={`/${personalProjects.br.id}`}
        poster={personalProjects.br.genMedia.videos.mainWide1080pFiltered.poster}
        video={personalProjects.br.genMedia.videos.mainWide1080p.mp4}
        start={-50}
        end={50}
        className="w-1/3 transform translate-x-[25svw]"
      />
      <ParallaxItem
        title={personalProjects.simon.title}
        link={`/${personalProjects.simon.id}`}
        poster={personalProjects.simon.genMedia.videos.mainWide1080pFiltered.poster}
        video={personalProjects.simon.genMedia.videos.mainWide1080p.mp4}
        start={200}
        end={-250}
        className="w-3/4 transform -translate-x-[10svw]"
      />
    </div>
  )
}
interface ParallaxItemProps {
  className?: string
  title: string,
  link: string,
  poster: string
  video: string
  start: number
  end: number
}
const ParallaxItem = ({ className, title, link, poster, video, start, end }: ParallaxItemProps) => {
  const ref = useRef(null)
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`] 
  })
  const clip1 = useTransform(
    scrollY,
    [0, SECTION_HEIGHT],
    [20, 0]
  )
  const clip2 = useTransform(
    scrollY,
    [0, SECTION_HEIGHT],
    [80, 100]
  )
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`
  const opacity = useTransform(
    scrollYProgress,
    [0.75, 1],
    [1, 0]
  )
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [start, end]
  )
  const scale = useTransform(
    scrollYProgress,
    [0.75, 1],
    [1, 0.85]
  )
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`

  return (
    <motion.div
      ref={ref}
      style={{
        // y,
        // scale,
        transform,
        opacity,
        clipPath,
      }}
      className={`mx-auto rounded-md overflow-hidden`}
    >
      <motion.div
        ref={ref}
        style={{
          clipPath,
          backgroundImage: `url(${poster})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`mx-auto ${className}`}
      >
        <video
          webkit-playsInline 
          playsInline
          autoPlay
          muted
          loop
          poster={poster}
          className="object-cover h-[33svh]"
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>
      </motion.div>
    </motion.div>
  )
}