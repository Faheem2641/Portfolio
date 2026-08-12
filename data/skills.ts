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
      { name: "Additive Manufacturing & 3D Printing" },
      { name: "Precision Laser Cutting & Profiling" },
      { name: "Manual Lathe & Mill Operation" },
      { name: "Laser Engraving & Marking" },
      { name: "Force Structure Analysis" },
      { name: "Cutting Speeds and Feeds" },
      { name: "Thermal Systems & Heat Exchangers" },
      { name: "Precision Measuring Tools" },
      { name: "Structural Design" },
      { name: "Tool Reconditioning" },
      { name: "Basic HVAC Principles" },
      { name: "Cutting Tool Geometry" },
      { name: "Heat Treatment Basics" },
      { name: "DIY Fabrication & Milling" },
      { name: "Tool Life Optimization" },
      { name: "Mechanical Troubleshooting" },
      { name: "Edge Preparation Techniques" },
      { name: "Fundamentals of Heating and Cooling" },
      { name: "Dimensional Management" }
    ]
  },
  {
    category: "Embedded Systems & Robotics",
    iconName: "Cpu",
    skills: [
      { name: "Control Systems Design" },
      { name: "Internet of Things (IoT)" },
      { name: "PCB Chemical Etching & Fabrication" },
      { name: "Printed Circuit Board (PCB) Design" },
      { name: "Electrical Systems & Harness Assembly" },
      { name: "Automation" },
      { name: "Electrical Troubleshooting" },
      { name: "Electronics Hardware Design" },
      { name: "Logic Design & Digital Systems" },
      { name: "Electronic Prototyping" },
      { name: "Electronics & Hardware Integration" },
      { name: "Data Visualization & Telemetry" }
    ]
  },
  {
    category: "Software",
    iconName: "Code2",
    skills: [
      { name: "C++ & Object-Oriented Programming (O.O.P)" },
      { name: "Research Methodologies (Qual/Quant)" },
      { name: "Web Development & Next.js" },
      { name: "Engineering Management" },
      { name: "User Interface Design" },
      { name: "Data Collection & Analysis" },
      { name: "Time & Resource Management" },
      { name: "Ethical Research Practices" },
      { name: "Networking & Relationship Building" },
      { name: "Organization Skills" },
      { name: "Adaptability & Flexibility" },
      { name: "Workplace Safety Standards" }
    ]
  }
]
