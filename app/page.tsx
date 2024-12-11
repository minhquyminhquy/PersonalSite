import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Hi, I'm Quy Le</h1>
      <p className="text-xl md:text-2xl text-lightGray mb-8 text-center">A Runner & CS Freshman</p>
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Link href="/projects" className="bg-accentBrown text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition-colors text-center">
          View Projects
        </Link>
        <Link href="/blog" className="bg-accentBrown text-white py-2 px-6 rounded-md hover:bg-opacity-80 transition-colors text-center">
          View Blog
        </Link>
      </div>
      <p className="text-lightGray mb-8 text-center max-w-2xl">
        I'm passionate about Machine Learning and Signal Processing.   
      </p>
    </div>
  )
}

