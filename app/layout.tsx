import './globals.css'
// import { ReduxProvider } from '@/redux/features/provider'
import GeistMonoVF from 'next/font/local'

const geistMonoVF = GeistMonoVF({ src: './fonts/GeistMonoVF.woff' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistMonoVF.className} min-h-screen bg-black text-white`}>
        {/* <ReduxProvider> */}
          {children}
        {/* </ReduxProvider> */}
      </body>
    </html>
  )
}