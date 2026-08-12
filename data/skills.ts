export interface SkillItem {
  name: string
  categoryTag?: string
}

export interface SkillCategory {
  category: string
  iconName: "Settings" | "Cpu" | "Code2" | "Wrench" | "Activity"
  skills: SkillItem[]
}

export const skillsData: SkillCategory[] = [
  {
    category: "Mechanical & Manufacturing",
    iconName: "Wrench",
    skills: [
      { name: "SolidWorks & CAD/CAM" },
      { name: "Additive Manufacturing" },
      { name: "Manual Lathe & Milling" },
      { name: "Laser Engraving" },
      { name: "Thermal Systems & HX" },
      { name: "Tool Servicing" },
      { name: "Heat Treatment Basics" },
      { name: "DIY Fabrication" },
      { name: "Mechanical Diagnostics" }
    ]
  },
  {
    category: "Embedded Systems & Robotics",
    iconName: "Cpu",
    skills: [
      { name: "Internet of Things (IoT)" },
      { name: "PCB Chemical Etching" },
      { name: "PCB Design & Layout" },
      { name: "Hardware Integration" }
    ]
  },
  {
    category: "Other",
    iconName: "Code2",
    skills: [
      { name: "C++ & OOP Logic" },
      { name: "Research Methodologies" },
      { name: "Web Dev & Next.js" },
      { name: "User Interface Design" },
      { name: "Applied Research & R&D" },
      { name: "Technical Collaboration" }
    ]
  }
]
