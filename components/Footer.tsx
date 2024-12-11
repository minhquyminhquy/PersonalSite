import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-accentBrown">Quy Le</h2>
            <p className="text-sm mt-2">Researcher & CS Freshman</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://github.com/minhquyminhquy" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-accentBrown transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/quy-m-le/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-accentBrown transition-colors" />
            </Link>
            <Link href="mailto:quylm.work@gmail.com">
              <Mail className="w-6 h-6 hover:text-accentBrown transition-colors" />
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Quy Le. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

