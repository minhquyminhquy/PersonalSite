import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "IPM-Optimizer",
    description: "In PiMA mathematics summer camp 2024, my team (group 6) and I research Interior Point Method in solving Linear Programming problems in Convex Optimization. This project aimed to solve transportation problem, a popular example of linear programming problem, using Python from stratch. To visualize the results, we use matplotlib for contour plot.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Python", "Matplotlib", "Scipy", "LaTex"],
    takeaways: [
      "Learned how to read literatures on mathematics",
      "Improved team-work and communications skills",
      "Gained experience in implementing scientific research paper results from stratch"
    ],
    githubLink: "https://github.com/minhquyminhquy/PiMA-2024-Group-6"
  },
]

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="container mx-auto pt-24 px-4">
      <h1 className="text-3xl font-bold mb-6">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full max-w-3xl mx-auto rounded-lg mb-8"
      />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Description</h2>
        <p className="text-lightGray mb-6">{project.description}</p>

        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-800 text-lightGray px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
        <ul className="list-disc list-inside text-lightGray mb-6">
          {project.takeaways.map((takeaway, index) => (
            <li key={index}>{takeaway}</li>
          ))}
        </ul>

        <Link
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-accentBrown text-white py-2 px-4 rounded-md hover:bg-opacity-80 transition-colors"
        >
          <Github className="mr-2" />
          View on GitHub
        </Link>
      </div>
    </div>
  )
}
