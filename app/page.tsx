import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Skills from "@/components/skills"
import ProjectPreview from "@/components/project-preview"
import { projects } from "@/data/projects"
// Import the certifications data
import { certifications } from "@/data/certifications"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between py-10 md:py-20">
        <div className="md:w-3/5">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Quy Le</span>
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">Computer Science student and aspiring Software Engineer</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/resume">
                Resume <Download className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <Link href="https://github.com/minhquyminhquy" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/quy-m-le" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:quylm.work@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 mb-8 md:mb-0">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-primary/10"></div>
            <img
              src="/images/projects/quy-abt2.png"
              alt="Quy Le"
              className="rounded-full object-cover border-4 border-background"
              width={256}
              height={256}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 md:py-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              I'm a Computer Science student at Tampere University with a passion for
              building innovative software solutions powered by AI. My interests lie in full-stack development, machine learning, and
              data science.
            </p>
            <p className="text-lg mb-4">
              Currently, I'm seeking a Summer 2025 software engineering or data science traineeship where I can apply my skills, learn
              from experienced professionals, and contribute to meaningful projects.
            </p>
            <p className="text-lg">
            When I'm not coding, you can find me hitting the trails for a run or relaxing in the soothing embrace of a sauna.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="mb-4">
              <h4 className="font-medium">Tampere University</h4>
              <p className="text-muted-foreground">B.S. Computing Sciences and Electrical Engineering, Expected May 2027</p>
              <p>GPA: 4.9/5.0</p>
            </div>
            <h3 className="text-xl font-semibold mb-4">Relevant Coursework</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Data Structures & Algorithms</li>
              <li>Database Systems</li>
              <li>Web Development</li>
              <li>Software Engineering</li>
              <li>Machine Learning</li>
              <li>Data Analytics</li>
              <li>Fine-Tuning LLM</li>
              <li>Computer Vision</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10 md:py-16">
        <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
        <Skills />
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-10 md:py-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Button variant="outline" asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Awards & Certifications */}
      <section id="awards" className="py-10 md:py-16">
        <h2 className="text-3xl font-bold mb-6">Awards & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Link
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border rounded-lg p-6 transition-colors hover:border-primary hover:bg-primary/5"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-10 md:py-16">
        <div className="bg-primary/5 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            I'm currently looking for Summer 2025 software engineering or data science/AI traineeship opportunities. Feel free to reach out
            if you'd like to discuss potential opportunities or just yap about tech!
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

