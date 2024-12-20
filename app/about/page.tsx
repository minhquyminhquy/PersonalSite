import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function About() {
  const skills = ['Python', 'C++', 'Matlab', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'PINNs']

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src="/images/about/quy-the-runner.jpg" 
            alt="Minh Quý at a running event"
            width={300}
            height={300}
            className="rounded-lg mx-auto object-cover"
            priority
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-lightGray mb-4">
            Hi, I'm Quy Le, a first-year student in CS&EE at Tampere University. My research interests include Physics-Informed Neural Networks and Computer Vision. I love drawing insights from data and powering it with Machine Learning and Deep Learning.
          </p>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-800 text-lightGray px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
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
      </div>
    </div>
  )
}

