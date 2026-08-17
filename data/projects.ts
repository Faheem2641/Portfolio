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
    description: "Built a web application to streamline <strong class=\"text-topping font-bold\">budget tracking and receipt management</strong> for our lab. Lab Ledger lets team members log purchases with cost and purchaser details, attach receipt images directly to transactions, and monitor <strong class=\"text-topping font-bold\">total allocated budget vs. remaining funds</strong> in real time with <strong class=\"text-topping font-bold\">category breakdowns and monthly expense trends</strong>. Replaced spreadsheet-based tracking with a <strong class=\"text-topping font-bold\">centralized, discrepancy-free system</strong> now used across the lab.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/Faheem2641/lab-ledger" }
    ]
  },
  {
    title: "Automated Irrigation System",
    date: "Apr 2026 – May 2026",
    association: "Academic Project",
    images: ["/images/Proteus.png"],
    description: "Designed and built an <strong class=\"text-topping font-bold\">ATmega328-based irrigation system</strong> that uses <strong class=\"text-topping font-bold\">soil moisture sensors</strong> to monitor real-time soil conditions and <strong class=\"text-topping font-bold\">automatically activates a water pump</strong> to deliver the right amount of water to plants, <strong class=\"text-topping font-bold\">optimizing water usage</strong> and reducing manual intervention.",
    links: [
      { label: "Proteus Simulation", url: "" },
      { label: "GitHub Repository", url: "https://github.com/Faheem2641/Irrigation-System" }
    ]
  },
  {
    title: "Design and fabrication of a Cantilever Storm Surge Gate",
    date: "May 2026",
    association: "Academic Project",
    images: ["/images/Truss 2.jpg", "/images/Truss 1.jpg"],
    description: "Designed a scaled cantilever storm surge gate using balsa wood, applying <strong class=\"text-topping font-bold\">Mechanics of Materials principles</strong> to optimize structural performance under a <strong class=\"text-topping font-bold\">50 N horizontal surge load</strong>. Designs were analytically evaluated using <strong class=\"text-topping font-bold\">Mathcad and SolidWorks</strong>; the final <strong class=\"text-topping font-bold\">Quad Arm Lattice structure</strong> not only met the design criteria but handled a <strong class=\"text-topping font-bold\">maximum load of 2,121 N</strong>.",
    links: [
      { label: "Side View", url: "" },
      { label: "Top View", url: "" }
    ]
  },
  {
    title: "Car Inventory & Recommendation System",
    date: null,
    association: "Academic Project",
    description: "Developed a <strong class=\"text-topping font-bold\">car inventory and recommendation system</strong> that accepts user requirements and processes them against a <strong class=\"text-topping font-bold\">comprehensive vehicle database</strong> to select <strong class=\"text-topping font-bold\">tailored car recommendations</strong>. The system streamlined the vehicle selection process by filtering and matching user preferences such as <strong class=\"text-topping font-bold\">color, brand, torque specs, and features</strong> to the most suitable available options.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/Faheem2641/Car-Inventory-System" }
    ]
  },
  {
    title: "Mousetrap-Powered Car",
    date: null,
    association: "Academic Project",
    images: ["/images/car.jpeg", "/images/car 2.jpeg"],
    description: "Built a mousetrap-powered car that converts the spring's <strong class=\"text-topping font-bold\">elastic energy into rotational motion</strong>, transferring it through a shaft to wheel bearings fitted with <strong class=\"text-topping font-bold\">CDs as wheels</strong>. Constructed using simple materials such as wood and CDs, the project demonstrated resourcefulness. One of the key challenges was <strong class=\"text-topping font-bold\">balancing the car frame</strong> to ensure straight, controlled movement.",
    links: [
      { label: "Project Car", url: "" }
    ]
  },
  {
    title: "Self-Balance Robot",
    date: null,
    association: "Personal Project",
    images: ["/images/Robort.jpeg"],
    description: "Designed and implemented a self-balancing robot using <strong class=\"text-topping font-bold\">PID control logic</strong> to maintain an upright position on two wheels. An <strong class=\"text-topping font-bold\">MPU-6050 gyroscope and accelerometer</strong> module processed <strong class=\"text-topping font-bold\">6-axis motion data</strong> to deliver real-time orientation feedback, while an <strong class=\"text-topping font-bold\">L298N H-Bridge motor driver</strong> transmitted control signals to regulate two DC motors for <strong class=\"text-topping font-bold\">autonomous balancing</strong>.",
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
    description: "Developed a <strong class=\"text-topping font-bold\">real-time data visualization system</strong> integrating an <strong class=\"text-topping font-bold\">ATmega328 microcontroller</strong> with a <strong class=\"text-topping font-bold\">servo motor and ultrasonic sensor</strong> to simulate radar functionality. The servo motor rotates the ultrasonic sensor across a 180-degree range while measuring object distances. Collected data is transmitted to <strong class=\"text-topping font-bold\">Processing IDE</strong>, rendering a <strong class=\"text-topping font-bold\">live graphical visualization</strong> of the scanned environment.",
    links: [
      { label: "GitHub Repository", url: "https://github.com/Faheem2641/Radar-System" }
    ]
  }
]
