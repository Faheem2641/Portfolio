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
    company: "National University of Sciences & Technology (NUST)",
    type: "Internship",
    duration: "3 mos",
    location: "Islamabad, Pakistan · On site",
    roles: [
      {
        title: "Research & Development (R&D) Engineering Intern",
        type: "Full time",
        duration: "Jun 2026 – Present · 3 mos",
        location: "Islamabad, Pakistan",
        description: 'Worked across diverse engineering projects, mastering <strong class="text-topping font-bold">design iteration and rapid prototyping</strong>. Gained hands-on experience in manufacturing processes, including <strong class="text-topping font-bold">3D printing, laser cutting, and engraving</strong>, alongside <strong class="text-topping font-bold">IoT systems integration, PCB design, and chemical etching</strong>. Applied analytical problem-solving throughout the prototyping lifecycle to deliver designs optimized for manufacturing constraints.'
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
        description: 'Researching <strong class="text-topping font-bold">Machine Learning approaches for Fluid Flow reconstruction</strong>, evaluating how data-driven models predict and reconstruct complex flow patterns from sparse measurement data for <strong class="text-topping font-bold">aerodynamic and fluid dynamics applications</strong>.'
      },
      {
        title: "FYP Collaborator",
        type: "Part time",
        duration: "Mar 2026 – May 2026 · 3 mos",
        location: "On site",
        description: 'Collaborated with final year students on an FYP focused on enhancing <strong class="text-topping font-bold">PV solar panel efficiency</strong> through the integration of a <strong class="text-topping font-bold">chevron type heat exchanger</strong>. Played a primary role in the <strong class="text-topping font-bold">fabrication process</strong>.'
      }
    ]
  },
  {
    organization: "Manufacturing Resource Center (MRC)",
    subtitle: "National University of Sciences & Technology (NUST)",
    type: "Internship",
    duration: "3 mos",
    location: "Islamabad, Pakistan · On site",
    roles: [
      {
        title: "Precision Machining Tool Manufacturing Trainee",
        type: "Part time",
        duration: "Jul 2025 – Aug 2025 · 2 mos",
        location: "Islamabad, Pakistan",
        description: 'Specialized in <strong class="text-topping font-bold">precision cutting tool manufacturing</strong>, transforming raw materials including <strong class="text-topping font-bold">steel bars and carbide blanks</strong> into high-performance cutting tools through <strong class="text-topping font-bold">comprehensive machining processes</strong>.'
      },
      {
        title: "Production Machining Trainee",
        type: "Full time",
        duration: "Jun 2025 – Aug 2025 · 3 mos",
        location: "Islamabad, Pakistan",
        description: 'Developed foundational machining skills through hands-on training in <strong class="text-topping font-bold">precision manufacturing operations</strong>. Gained practical experience in <strong class="text-topping font-bold">manual lathe and mill operations</strong> while building proficiency with <strong class="text-topping font-bold">precision tools</strong>.'
      }
    ]
  }
]
