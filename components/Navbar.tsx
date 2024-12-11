'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black p-4 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-accentBrown text-2xl font-bold">Quy Le</h1>
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  )
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = `hover:text-accentBrown transition-colors ${mobile ? 'block py-2' : ''}`
  return (
    <>
      <Link href="/" className={linkClass}>Home</Link>
      <Link href="/about" className={linkClass}>About</Link>
      <Link href="/projects" className={linkClass}>Projects</Link>
      <Link href="/blog" className={linkClass}>Blog</Link>
      <Link href="/certifications" className={linkClass}>Certifications</Link>
    </>
  )
}

