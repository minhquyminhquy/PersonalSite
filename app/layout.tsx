import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quy Le',
  description: 'A Researcher & CS Freshman passionate about AI and Machine Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.className} bg-darkBase text-white`}>
        <Navbar />
        <main className="min-h-screen pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

