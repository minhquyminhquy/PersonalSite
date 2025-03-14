import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Briefcase, GraduationCap, Award } from "lucide-react"
import Skills from "@/components/skills"
// Import the certifications data
import { certifications } from "@/data/certifications"

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <Button asChild>
          <Link href="/resume/Quy-Le-Resume.pdf" target="_blank" download>
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">Quy Le</h1>
          <p className="text-lg text-muted-foreground">Computer Science Student | Software Engineer</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="mailto:quylm.work@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
            quylm.work@gmail.com
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="https://github.com/minhquyminhquy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              github.com/minhquyminhquy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="https://linkedin.com/in/quy-m-le"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              linkedin.com/in/quy-m-le
            </Link>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Briefcase className="mr-2 h-5 w-5" /> Experience
          </h2>
          <div className="space-y-6">
            <div className="border-l-2 pl-4 py-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Undergraduate Research Trainee</h3>
                  <p className="text-muted-foreground">Predictive Society and Data Analytics Lab, Tampere University</p>
                </div>
                <p className="text-sm text-muted-foreground">Jan 2025 - Present</p>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Research project: "Physics-Informed Neural Networks: Parameter estimation of dynamical systems using
                Deep Learning," supervised by Prof. Frank Emmert-Streib.</li>
                <li>Appling principles of Computational Physics to solve and model differential equations for simulating physical phenomena.</li>
                <li>Developing and optimizing PINN models in PyTorch to enhance accuracy in dynamic system predictions.</li>
                <li>Conducteing literature reviews on computational methods in physics-informed AI, synthesizing insights to guide model development.</li>
              </ul>
            </div>

            <div className="border-l-2 pl-4 py-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">CRM Data Scientist Intern</h3>
                  <p className="text-muted-foreground">Abbott GmbH</p>
                </div>
                <p className="text-sm text-muted-foreground">July 2023 - August 2023</p>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                <li>Preprocessed over 80,000 data points of e-commerce sales transaction from company’s Salesforce CRM database.</li>
                <li>Developed and deployed regression models to forecast sales trends for Q4 2023, achieved a 35% improvement in
                RMSE from the baseline regressor.</li>
                <li>Built insightful dynamic dashboards using PowerBI to track annual sales trends across 5 main products.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5" /> Education
          </h2>
          <div className="border-l-2 pl-4 py-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">Tampere University</h3>
                <p className="text-muted-foreground">B.S. Computing Sciences and Electrical Engineering</p>
              </div>
              <p className="text-sm text-muted-foreground">Expected May 2027</p>
            </div>
            <p className="mt-2 text-sm">GPA: 4.9/5.0</p>
            <div className="mt-2">
              <p className="text-sm font-medium">Relevant Coursework:</p>
              <p className="text-sm text-muted-foreground">
                Data Structures & Algorithms, Database Systems, Web Development, Machine Learning,
                Software Engineering, Data Analysis, Fine-Tuning LLM, Computer Vision
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <Skills />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Award className="mr-2 h-5 w-5" /> Awards & Certifications
          </h2>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert.id} className="flex justify-between items-center">
                <Link
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary"
                >
                  {cert.title}
                </Link>
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

