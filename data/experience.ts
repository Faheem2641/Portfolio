export interface ExperienceRole {
  title: string
  type?: string | null
  duration?: string | null
  location?: string | null
  description?: string | null
  skills?: string[]
  attachments?: string[]
}

export interface ExperienceEntry {
  organization: string
  company?: string | null
  type?: string | null
  duration?: string | null
  location?: string | null
  description?: string | null
  roles?: ExperienceRole[]
}

export const experiencesData: ExperienceEntry[] = [
  {
    organization: "NUST School of Mechanical and Manufacturing Engineering (SMME)",
    type: "Apprenticeship",
    duration: "1 yr",
    location: "Islamabad, Pakistan",
    roles: [
      {
        title: "Volunteer Research",
        duration: "Sep 2025 – Present · 1 yr",
        location: "Hybrid",
        description: null
      },
      {
        title: "FYP Collaborator",
        duration: "Mar 2026 – May 2026 · 3 mos",
        location: "On site",
        description: "Collaborated with final year students on an FYP focused on enhancing PV solar panel efficiency through the integration of a chevron type heat exchanger. Played a primary role in the fabrication process.",
        skills: ["Thermal Systems", "Heat Exchangers"]
      }
    ]
  },
  {
    organization: "Research & Development (R&D) Engineering Intern",
    company: "Smart Agri Tech Lab",
    type: "Internship",
    duration: "Jun 2026 – Present · 3 mos",
    location: "Islamabad, Pakistan · On site",
    description: null
  },
  {
    organization: "Manufacturing Resource Center (SMME)",
    duration: "3 mos",
    location: "On site",
    roles: [
      {
        title: "Precision Machining Tool Manufacturing Trainee",
        type: "Part time",
        duration: "Jul 2025 – Aug 2025 · 2 mos",
        location: "Islamabad, Pakistan",
        description: "Specialized in precision cutting tool manufacturing, transforming raw materials including steel bars and carbide blanks into high-performance cutting tools through comprehensive machining processes.",
        skills: ["Cutting Tool Geometry", "Tool Life Optimization"]
      },
      {
        title: "Production Machining Trainee",
        type: "Full time",
        duration: "Jun 2025 – Aug 2025 · 3 mos",
        location: "Islamabad, Pakistan",
        description: "Developed foundational machining skills through hands-on training in precision manufacturing operations. Gained practical experience in manual lathe and mill operations while building proficiency with precision tools.",
        attachments: ["Machining Certificate"],
        skills: ["Manual lathe and mill operation", "Precision measuring tools"]
      }
    ]
  }
]
