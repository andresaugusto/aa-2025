import { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'UI/UX Engineer & Digital Asset Developer',
  description: 'Crafting beautiful, intuitive, and performant digital experiences',
  openGraph: {
    title: 'UI/UX Engineer & Digital Asset Developer',
    description: 'Crafting beautiful, intuitive, and performant digital experiences',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Engineer & Digital Asset Developer',
    description: 'Crafting beautiful, intuitive, and performant digital experiences',
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <LandingPage />
  )
}