import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: 1,
    title: "SWE Meeting Assistant",
    description:
      "A web application that transcribes SWE meetings, extract key decisions, and generates structured summaries from meeting recordings.",
    image: "/images/projects/swe-meeting-assistant-cover.png",
    technologies: ["Flask", "HTML/CSS", "JavaScript", "OpenAI", "SQLAlchemy"],
    github: "https://github.com/minhquyminhquy/SWE-Meeting-Assistant",
    demo: null,
  },
  {
    id: 2,
    title: "Personal Website",
    description:
      "A personal website where I showcase what I have done, what I am doing, and what I want to achieve.",
    image: "/images/projects/personal-website-cover.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/minhquyminhquy/PersonalSite",
    demo: "https://quyle.dev",
  },
  {
    id: 3,
    title: "What Podcast Lex?",
    description:
      "A web application that suggest Lex Fridman Podcast based on user interest.",
    image: "/images/projects/whatpodcastlex-cover.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Flask", "Sklearn"],
    github: "https://github.com/minhquyminhquy/What-Podcast-Lex",
    demo: null,
  },
  {
    id: 4,
    title: "MediCopter",
    description:
      "Au automated drone for medical supply transportation in rural areas.",
    image: "/images/projects/medicopter-cover.jpg",
    technologies: ["Raspberry Pi", "Pixhawk","DroneKit", "Flask","PyMAVLink","Tensorflow"],
    github: "",
    demo: null,
  },
  {
    id: 5,
    title: "Hike n Seek",
    description:
      "A geospatial data engine for outdoor navigation systems, combining hierarchical area management with route optimization algorithms. Built as part of the Tampere University's Data Structures and Algorithms course.",
    image: "/images/projects/hike-n-seek-cover.jpeg",
    technologies: ["C++", "QtCreator"],
    github: "https://github.com/minhquyminhquy/Hike-n-Seek",
    demo: null,
  },
  {
    id: 6,
    title: "Thermal Energy Storage Charging Phase Modeling via Deep Learning",
    description:
      "The goal of this project is to leverage PINNs to solve the reaction-convection-diffusion equation during the charging phase of a TES system. TES systems are integral to solar power plants, storing thermal energy during charging phases and releasing it for electricity generation during discharging phases.",
    image: "/images/projects/thermal-storage-cover.png",
    technologies: ["PyTorch"],
    github: "https://github.com/minhquyminhquy/Model-Thermal-Storage-Design",
    demo: null,
  },
]

