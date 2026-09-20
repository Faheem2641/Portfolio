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
    category: "Technical Skills",
    iconName: "Wrench",
    skills: [
      { name: "Control Engineering" },
      { name: "3D Printing" },
      { name: "Laser Cutting" },
      { name: "Research Skills" },
      { name: "LaTeX" },
      { name: "Next.js" },
      { name: "Web Development" },
      { name: "Thermal Systems" },
      { name: "Heat Exchangers" },
      { name: "CAD/CAM" },
      { name: "Internet of Things (IoT)" },
      { name: "Automation" },
      { name: "Data Visualization" },
      { name: "C++" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Electrical Troubleshooting" },
      { name: "Mechanical Troubleshooting" },
      { name: "DIY Fabrication" },
      { name: "Cutting Tool Geometry" },
      { name: "Tool Reconditioning" },
      { name: "Workplace Safety" },
      { name: "Manual Lathe and Mill Operation" },
      { name: "Basic HVAC Principles" },
      { name: "Fundamentals of Heating and Cooling" },
      { name: "Ethical Research Practices" }
    ]
  }
]




