export interface SkillItem {
  name: string
  level: string
  levelText: string
  desc: string
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
      {
        name: "CAD/CAM & Structural Analysis",
        level: "92%",
        levelText: "Advanced",
        desc: "SolidWorks, Mathcad analysis, balsa & steel structural optimization under heavy static loads."
      },
      {
        name: "Precision Machining & Fabrication",
        level: "95%",
        levelText: "Expert",
        desc: "Manual lathe & mill operation, cutting tool geometry, carbide blank tooling, precision measurement."
      },
      {
        name: "Thermal Systems & Heat Transfer",
        level: "88%",
        levelText: "Advanced",
        desc: "Chevron-type heat exchangers, PV solar panel thermal efficiency enhancement, fluid/thermal analytics."
      },
      {
        name: "Mechanical Design & Prototyping",
        level: "90%",
        levelText: "Advanced",
        desc: "Force distribution analysis, counterweight balancing, DIY mechanical assembly & stress evaluation."
      }
    ]
  },
  {
    category: "Embedded Systems & Robotics",
    iconName: "Cpu",
    skills: [
      {
        name: "Microcontrollers & Embedded C/C++",
        level: "92%",
        levelText: "Advanced",
        desc: "ATmega328 microcontrollers, firmware logic, sensor integration, serial data communication."
      },
      {
        name: "PID Control Systems & Autonomous Balancing",
        level: "88%",
        levelText: "Advanced",
        desc: "PID tuning, MPU-6050 6-axis motion processing, L298N H-Bridge motor drivers, bi-wheeled balance."
      },
      {
        name: "IoT Sensors, Actuators & Automation",
        level: "90%",
        levelText: "Advanced",
        desc: "Soil moisture sensors, ultrasonic distance mapping, servo motors, automated water pump systems."
      },
      {
        name: "Circuit Simulation & Hardware Debugging",
        level: "86%",
        levelText: "Intermediate",
        desc: "Proteus circuit simulation, electrical signal troubleshooting, hardware wiring & schematic layout."
      }
    ]
  },
  {
    category: "Software & Data Engineering",
    iconName: "Code2",
    skills: [
      {
        name: "C++ & Object-Oriented Programming",
        level: "90%",
        levelText: "Advanced",
        desc: "OOP design principles, memory management, vehicle database filtering & decision-making logic."
      },
      {
        name: "Web Development & UI Design",
        level: "88%",
        levelText: "Advanced",
        desc: "Responsive web interfaces, lab budget tracking systems, receipt management, modern web UI."
      },
      {
        name: "Data Visualization & Processing IDE",
        level: "85%",
        levelText: "Intermediate",
        desc: "Processing IDE graphics rendering, live radar GUI simulation, real-time telemetry streams."
      },
      {
        name: "R&D & Engineering Analytics",
        level: "92%",
        levelText: "Advanced",
        desc: "Technical reporting, spreadsheet-to-web system migration, lab budget discrepancy audits."
      }
    ]
  }
]
