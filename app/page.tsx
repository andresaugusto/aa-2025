import { Metadata } from 'next'
import LandingPage from '@/components/pages/LandingPage'
import LenisEnvironment from '@/lenis/LenisEnvironment'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Andrés Augusto— Creative Developer',
  description: 'Intuitive and performant digital experiences',
  openGraph: {
    title: 'Andrés Augusto— Creative Developer',
    description: 'Intuitive and performant digital experiences',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrés Augusto— Creative Developer',
    description: 'Intuitive and performant digital experiences',
    images: ['/og-image.jpg'],
  },
}

export default function Home() {
  return (
    <LenisEnvironment>
      <LandingPage />
    </LenisEnvironment>
  )
}