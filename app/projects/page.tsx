import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      <h1 className="text-4xl font-bold mb-6">My Projects</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        Here are some of the projects I've worked on. Each project has helped me develop different skills and tackle
        unique challenges, even on different fields!
      </p>

      <div className="space-y-16">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted h-64 md:h-auto">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex mt-6">
                  {project.github && (
                    <Button size="sm" asChild>
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

