export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  date: string | null
  association: string | null
  description: string
  images?: string[]
  skills?: string[]
  links: ProjectLink[]
}

export const projectsData: Project[] = [
  {
    title: "Lab-Ledger",
    date: "Jul 2026",
    association: "Smart Agri Tech Lab",
    description: "Built a web application to streamline budget tracking and receipt management for our lab. Lab Ledger lets team members log purchases with cost and purchaser details, attach receipt images directly to transactions, and monitor total allocated budget vs. remaining funds in real time with category breakdowns and monthly expense trends. Replaced spreadsheet-based tracking with a centralized, discrepancy-free system now used across the lab.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/Faheem2641/lab-ledger" }
    ]
  },
  {
    title: "Automated Irrigation System",
    date: "Apr 2026 – May 2026",
    association: "Academic Project",
    images: ["/images/Proteus.png"],
    description: "Designed and built an ATmega328-based irrigation system that uses soil moisture sensors to monitor real-time soil conditions and automatically activates a water pump to deliver the right amount of water to plants, optimizing water usage and reducing manual intervention.",
    links: [
      { label: "Proteus Simulation", url: "" },
      { label: "GitHub Repository", url: "https://github.com/Faheem2641/Irrigation-System" }
    ]
  },
  {
    title: "Design and Structural Analysis of a Cantilever Storm Surge Gate",
    date: "May 2026",
    association: "Academic Project",
    images: ["/images/Truss 2.jpg", "/images/Truss 1.jpg"],
    description: "Designed a scaled cantilever storm surge gate using balsa wood, applying Mechanics of Materials principles to optimize structural performance under a 50 N horizontal surge load. Designs were analytically evaluated using Mathcad and SolidWorks; the final Quad Arm Lattice structure not only met the design criteria but handled a maximum load of 2,121 N.",
    links: [
      { label: "Side View", url: "" },
      { label: "Top View", url: "" }
    ]
  },
  {
    title: "Car Inventory & Recommendation System",
    date: null,
    association: "Academic Project",
    description: "Developed a car inventory and recommendation system that accepts user requirements and processes them against a comprehensive vehicle database to select tailored car recommendations. The system streamlined the vehicle selection process by filtering and matching user preferences such as color, brand, torque specs, and features to the most suitable and relevant available options. This project showcased the integration of inventory data and logical decision-making to build a practical, real-world solution for automated vehicle selection.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/Faheem2641/Car-Inventory-System" }
    ]
  },
  {
    title: "Mousetrap-Powered Car",
    date: null,
    association: "Academic Project",
    images: ["/images/car.jpeg", "/images/car 2.jpeg"],
    description: "Built a mousetrap-powered car that converts the spring's elastic energy into rotational motion, transferring it through a shaft to wheel bearings fitted with CDs as wheels. Constructed using simple materials such as wood and CDs, the project demonstrated resourcefulness. One of the key challenges was balancing the car to ensure it moved in a straight, controlled direction, solved by carefully balancing the frame through added counterweights.",
    links: [
      { label: "Project Car", url: "" }
    ]
  },
  {
    title: "Self-Balance Robot",
    date: null,
    association: "Personal Project",
    images: ["/images/Robort.jpeg"],
    description: "Designed and implemented a self-balancing robot using PID control logic to maintain an upright position on two wheels. An MPU-6050 gyroscope and accelerometer module processed 6-axis motion data to deliver real-time orientation feedback, while an L298N H-Bridge motor driver transmitted control signals to regulate two DC motors accordingly. Experimental results confirmed successful autonomous balancing under various disturbances, demonstrating how control logic can be effectively integrated with electronic hardware to achieve stable, autonomous operation in bi-wheeled vehicles.",
    links: [
      { label: "Technical Report", url: "https://drive.google.com/file/d/1_WcDgskrdinHJ4zmTuJ5_u0G29f3OZTa/view?usp=sharing" },
      { label: "Robot", url: "" },
      { label: "GitHub Repository", url: "https://github.com/Faheem2641/Self-Balance-Robot" }
    ]
  },
  {
    title: "Ultrasonic Radar System",
    date: null,
    association: "Personal Project",
    description: "Developed a real-time data visualization system integrating an ATmega328 microcontroller with a servo motor and ultrasonic sensor to simulate radar functionality. The servo motor rotates the ultrasonic sensor across a 180-degree range, while the sensor continuously maps the surrounding area by emitting and receiving ultrasound waves to measure object distances. The collected data is transmitted to Processing IDE, which renders a live graphical visualization of the scanned environment, replicating the appearance and behavior of a real radar display. This project serves as a small-scale implementation of radar systems as used in aviation and military applications.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/Faheem2641/Radar-System" }
    ]
  }
]
