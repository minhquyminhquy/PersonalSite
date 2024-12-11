import Link from 'next/link'
import Image from 'next/image'

const projects = [
  { id: 1, title: "Project 1", description: "Description of Project 1", image: "/images/projects/project1.jpg" },
  { id: 2, title: "Project 2", description: "Description of Project 2", image: "/images/projects/project2.jpg" },
  { id: 3, title: "Project 3", description: "Description of Project 3", image: "/images/projects/project3.jpg" },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="group">
            <div className="bg-gray-800 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-accentBrown transition-colors">{project.title}</h2>
                <p className="text-lightGray">{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

