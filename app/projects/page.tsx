import Link from 'next/link'
import Image from 'next/image'

const projects = [
  { id: 1, title: "MediCopter", description: "Automated drone for medical supply transportation in rural areas, featuring brushless motors, GPS, obstacle detection using MobileNetSSD, and precise PID tuning for flight stability"
    , image: "/images/projects/medicopter-img.jpg"},
  { id: 2, title: "What podcast Lex?", description: "Website to sugggest Lex Fridman podcast based on user preference",
     image: "/images/projects/whatpodcastlex-demo.png" },
  { id: 3, title: "My Personal Website", description: "Build my first personal website using TypeScript and React."
    , image: "/images/projects/personal-website.png" },
  { id: 4, title: "Thermal Energy Storage Modelling with Deep Learning", description: "Modelling thermal dynamics of charging phase in thermal energy storage using Deep Learning."
    , image: "/images/projects/thermalstoragedesign-result.png"},
  { id: 5, title: "Interior Point Optimizer", description: "Research project about Interior Point Method for solving Linear Programming problem."
    , image: "/images/projects/PiMA-IPM.png" },
  { id: 6, title: "League of Legends Match Predictor", description: "PyTorch model predict the outcome of LOL match based on match stats."
    , image: "/images/projects/PiMALOL-match-predictor.png" }
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

