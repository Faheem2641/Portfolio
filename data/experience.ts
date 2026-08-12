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
  subtitle?: string | null
  company?: string | null
  type?: string | null
  workType?: string | null
  duration?: string | null
  location?: string | null
  description?: string | null
  roles?: ExperienceRole[]
}

export const experiencesData: ExperienceEntry[] = [
  {
    organization: "Smart Agri Tech Lab",
    subtitle: "Embedded AI IoT",
    type: "Internship",
    duration: "3 mos",
    location: "Islamabad, Pakistan · On site",
    roles: [
      {
        title: "Research & Development (R&D) Engineering Intern",
        type: "Full time",
        duration: "Jun 2026 – Present · 3 mos",
        location: "Islamabad, Pakistan",
        description: "Worked across diverse engineering projects, mastering design iteration and rapid prototyping. Gained hands-on experience in manufacturing processes—including 3D printing, laser cutting, and engraving—alongside IoT systems integration, PCB design, and etching. Applied analytical problem-solving throughout the prototyping lifecycle to deliver designs optimized for local market availability and manufacturing constraints."
      }
    ]
  },
  {
    organization: "School of Mechanical and Manufacturing Engineering (SMME)",
    subtitle: "National University of Sciences & Technology (NUST)",
    type: "Apprenticeship",
    duration: "1 yr",
    location: "Islamabad, Pakistan · Hybrid",
    roles: [
      {
        title: "Volunteer Research",
        type: "Part time",
        duration: "Sep 2025 – Present · 1 yr",
        location: "Hybrid",
        description: "Researching machine learning approaches for flow reconstruction, evaluating how data-driven models predict and reconstruct complex fluid flow patterns from sparse measurement data for aerodynamic and fluid dynamics applications."
      },
      {
        title: "FYP Collaborator",
        type: "Part time",
        duration: "Mar 2026 – May 2026 · 3 mos",
        location: "On site",
        description: "Collaborated with final year students on an FYP focused on enhancing PV solar panel efficiency through the integration of a chevron type heat exchanger. Played a primary role in the fabrication process."
      }
    ]
  },
  {
    organization: "Manufacturing Resource Center (MRC)",
    type: "Internship",
    duration: "3 mos",
    location: "Islamabad, Pakistan · On site",
    roles: [
      {
        title: "Precision Machining Tool Manufacturing Trainee",
        type: "Part time",
        duration: "Jul 2025 – Aug 2025 · 2 mos",
        location: "Islamabad, Pakistan",
        description: "Specialized in precision cutting tool manufacturing, transforming raw materials including steel bars and carbide blanks into high-performance cutting tools through comprehensive machining processes."
      },
      {
        title: "Production Machining Trainee",
        type: "Full time",
        duration: "Jun 2025 – Aug 2025 · 3 mos",
        location: "Islamabad, Pakistan",
        description: "Developed foundational machining skills through hands-on training in precision manufacturing operations. Gained practical experience in manual lathe and mill operations while building proficiency with precision tools."
      }
    ]
  }
]
