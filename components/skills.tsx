import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Vue.js"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "Django", "Flask", "RESTful APIs", "GraphQL"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum", "Jira"],
  },
  {
    name: "Machine Learning",
    skills: ["PyTorch", "Tensorflow", "Scikit-learn"],
  },
]

export default function Skills() {
  return (
    <div className="space-y-6">
      {skillCategories.map((category) => (
        <div key={category.name}>
          <h3 className="text-lg font-medium mb-3">{category.name}</h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

