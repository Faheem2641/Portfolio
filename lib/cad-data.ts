import { Thermometer, Activity, Wind, Waves, Radio, Cpu, Zap, TrendingUp, Settings, Disc, Box, Component, Ruler, Grid, Workflow } from "lucide-react"

export const ansysProjects = [
    {
        id: 1,
        title: "Thermal Analysis",
        subtitle: "CFD",
        emoji: "heating", // Placeholder for icon logic if needed
        description: "Advanced heat transfer simulation to optimize thermal management systems. This project involved simulating steady-state thermal loads on high-performance electronics to ensure clear heat dissipation pathways.",
        image: "/images/aaa.png",
        details: {
            method: "Steady State",
            mesh: "Polyhedral",
            nodes: "2.5M",
            solveTime: "4h 20m"
        },
        slug: "thermal-analysis",
        stats: [
            { label: "Accuracy", value: "98%" },
            { label: "Delta T", value: "-15°C" }
        ]
    },
    {
        id: 2,
        title: "Structural Analysis",
        subtitle: "Structural",
        description: "Comprehensive stress and strain modeling for structural integrity verification. Focused on critical load-bearing components under maximum operational stress.",
        image: "/images/5_12_2024.jpg",
        details: {
            solver: "Mechanical",
            material: "Steel 4340",
            elements: "Tetrahedrons",
            safetyFactor: "2.1"
        },
        slug: "structural-analysis",
        stats: [
            { label: "Max Stress", value: "250MPa" },
            { label: "Deflection", value: "0.5mm" }
        ]
    },
    {
        id: 3,
        title: "Fluid Dynamics",
        subtitle: "CFD",
        description: "Computational fluid dynamics study of internal and external flows. Analyzed aerodynamic drag and potential lift coefficients for automotive components.",
        image: "/images/faheem-ali-box.png",
        details: {
            turbulence: "k-epsilon",
            domain: "External",
            velocity: "Mach 0.3",
            iterations: "5000"
        },
        slug: "fluid-dynamics",
        stats: [
            { label: "Drag", value: "-12%" },
            { label: "Lift", value: "+5%" }
        ]
    },
    {
        id: 4,
        title: "Modal Analysis",
        subtitle: "Dynamic",
        description: "Vibration and frequency analysis to prevent resonance failures. identified natural frequencies to detune structures from operating ranges.",
        image: "/images/download (1).jpg",
        details: {
            modes: "First 6",
            range: "0-2000Hz",
            damping: "2%",
            mass: "Distributed"
        },
        slug: "modal-analysis",
        stats: [
            { label: "Resonance", value: "Avoided" },
            { label: "Stiffness", value: "High" }
        ]
    },
    {
        id: 5,
        title: "Electromagnetics",
        subtitle: "Maxwell",
        description: "EM field simulation for motor and actuator performance optimization. Mapped magnetic flux density to improve torque output.",
        image: "/images/faheem-ali-box2.png",
        details: {
            solver: "Maxwell 3D",
            mesh: "Adaptive",
            current: "50A",
            torque: "12Nm"
        },
        slug: "electromagnetics",
        stats: [
            { label: "Efficiency", value: "94%" },
            { label: "Losses", value: "Low" }
        ]
    },
    {
        id: 6,
        title: "Fatigue Study",
        subtitle: "Durability",
        description: "Material fatigue life prediction under cyclic loading conditions. Estimated service life using stress-life (S-N) approaches.",
        image: "/images/faheem-ali-box3.png",
        details: {
            cycle: "High Cycle",
            theory: "Goodman",
            life: "1e6 Cycles",
            prob: "99.9%"
        },
        slug: "fatigue-study",
        stats: [
            { label: "Life", value: "Infinite" },
            { label: "Damage", value: "0.2" }
        ]
    }
]

export const inventorProjects = [
    {
        id: 1,
        title: "Mechanical Assembly",
        subtitle: "Autodesk Inventor",
        description: "Complex mechanical assembly with over 500 parts, fully constrained and simulated. Validated clearances and interferences in a digital prototype.",
        image: "/images/aaa.png",
        category: "Assembly",
        slug: "mechanical-assembly",
        details: {
            parts: "500+",
            constraints: "Fully Defined",
            type: "Assembly",
            version: "2025"
        },
        stats: [
            { label: "Complexity", value: "High" },
            { label: "Simulation", value: "Yes" }
        ]
    },
    {
        id: 2,
        title: "Sheet Metal Design",
        subtitle: "Fabrication",
        description: "Precision sheet metal enclosure design with flat pattern generation. Optimized for CNC laser cutting and press brake forming.",
        image: "/images/5_12_2024.jpg",
        category: "Fabrication",
        slug: "sheet-metal",
        details: {
            material: "Al 5052",
            thickness: "2mm",
            bends: "12",
            kFactor: "0.44"
        },
        stats: [
            { label: "Flat Pattern", value: "Ready" },
            { label: "DXF Export", value: "Yes" }
        ]
    },
    {
        id: 3,
        title: "CNC Machining",
        subtitle: "Production",
        description: "5-axis CNC machining path optimization and tooling setup. Generated efficient toolpaths to reduce cycle time and improve surface finish.",
        image: "/images/download (1).jpg",
        category: "Production",
        slug: "cnc-machining",
        details: {
            operation: "Milling",
            axis: "5-Axis",
            toolpath: "High Speed",
            stock: "Billet"
        },
        stats: [
            { label: "Time Save", value: "40%" },
            { label: "Finish", value: "Ra 0.4" }
        ]
    },
    {
        id: 4,
        title: "Finite Element",
        subtitle: "Analysis",
        description: "Stress analysis and safety factor calculation for critical components directly within the CAD environment.",
        image: "/images/faheem-ali-box.png",
        category: "Analysis",
        slug: "finite-element",
        details: {
            study: "Static Stress",
            mesh: "Fine",
            safetyFactor: "2.5",
            load: "5000N"
        },
        stats: [
            { label: "Max Stress", value: "120MPa" },
            { label: "Safety", value: "Pass" }
        ]
    },
    {
        id: 5,
        title: "Parametric Model",
        subtitle: "Design Automation",
        description: "iLogic integration for automated design configuration and updates. Created a master model that updates automatically based on input parameters.",
        image: "/images/faheem-ali-box2.png",
        category: "Design Auto",
        slug: "parametric-model",
        details: {
            logic: "iLogic",
            params: "Size, Matl",
            config: "Auto",
            update: "Real-time"
        },
        stats: [
            { label: "Efficiency", value: "300%" },
            { label: "Errors", value: "0" }
        ]
    },
    {
        id: 6,
        title: "Mold Design",
        subtitle: "Manufacturing",
        description: "Injection mold core and cavity design with cooling channel analysis. Designed robust parting lines and slide mechanisms.",
        image: "/images/faheem-ali-box3.png",
        category: "Manufacturing",
        slug: "mold-design",
        details: {
            type: "Injection",
            cavities: "4",
            cooling: "Conformal",
            material: "P20"
        },
        stats: [
            { label: "Cycle", value: "12s" },
            { label: "Draft", value: "1.5°" }
        ]
    },
    {
        id: 7,
        title: "Frame Generator",
        subtitle: "Structure",
        description: "Rapid creation and analysis of structural steel frames and trusses. Utilized standard libraries to quickly build and trim skeleton structures.",
        image: "/images/frame.png", // Verify if exists, else generic
        category: "Structure",
        slug: "frame-generator",
        details: {
            standard: "ANSI/ISO",
            profile: "I-Beam",
            miters: "Auto",
            joints: "Welded"
        },
        stats: [
            { label: "Speed", value: "Fast" },
            { label: "BOM", value: "Auto" }
        ]
    },
    {
        id: 8,
        title: "Tube & Pipe",
        subtitle: "Routing",
        description: "3D routing of rigid pipes, bent tubes, and flexible hoses. Ensured minimum bend radii and proper fitting clearance.",
        image: "/images/pipe.png", // Verify if exists, else generic
        category: "Routing",
        slug: "tube-pipe",
        details: {
            style: "Rigid",
            fitting: "Flanged",
            route: "Auto",
            run: "B31.3"
        },
        stats: [
            { label: "Length", value: "Calc" },
            { label: "Bend Table", value: "Yes" }
        ]
    },
]
