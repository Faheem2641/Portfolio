"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Disc, Settings, Circle, Component, Wrench, Layers, Zap, ClipboardCheck } from "lucide-react"

// Define custom Icon component if Layers is not working or needs specific style, 
// otherwise we can try importing Layers from lucide-react if available, 
// but for safety I will keep the helper or use the imported standard one if I am sure.
// Lucide React usually has 'Layers'. Let's trust it or fallback safely.
// Actually, earlier I used a helper for LayersIcon. I will keep it to be safe 
// but I will name it consistently.

const projects = [
    {
        id: 1,
        title: "CNC Lathe",
        subtitle: "Production",
        description: "High-precision turning operations for cylindrical components.",
        icon: Disc,
        image: "/images/5_12_2024.jpg",
        color: "#e8e8e3",
        details: {
            material: "Aluminium 7075-T6",
            tolerance: "±0.005mm",
            machine: "Haas ST-20",
            runTime: "4h 30m"
        },
        stats: [
            { label: "Precision", value: "99.9%" },
            { label: "Efficiency", value: "High" }
        ]
    },
    {
        id: 2,
        title: "3-Axis Milling",
        subtitle: "Machining",
        description: "Complex prismatic parts machined with tight tolerances.",
        icon: Settings,
        image: "/images/download (1).jpg",
        color: "#e8e8e3",
        details: {
            material: "Stainless 316L",
            tolerance: "±0.01mm",
            machine: "DMG Mori",
            runTime: "6h 15m"
        },
        stats: [
            { label: "Complexity", value: "High" },
            { label: "Surface", value: "Ra 0.8" }
        ]
    },
    {
        id: 3,
        title: "Manual Turning",
        subtitle: "Fabrication",
        description: "Custom prototypes and one-off parts created on manual lathes.",
        icon: Circle,
        image: "/images/aaa.png",
        color: "#ff3e3e",
        details: {
            material: "Brass C360",
            tolerance: "±0.05mm",
            machine: "Clausing",
            runTime: "2h 00m"
        },
        stats: [
            { label: "Custom", value: "100%" },
            { label: "Hands-on", value: "Yes" }
        ]
    },
    {
        id: 4,
        title: "Drilling & Tapping",
        subtitle: "Operations",
        description: "Precision hole making and thread creation for assembly.",
        icon: Component,
        image: "/images/faheem-ali-box.png",
        color: "#00d1ff",
        details: {
            material: "Mild Steel",
            tolerance: "H7 Fit",
            machine: "Drill Press",
            runTime: "1h 30m"
        },
        stats: [
            { label: "Threads", value: "M6-M12" },
            { label: "Accuracy", value: "H7" }
        ]
    },
    {
        id: 5,
        title: "Surface Grinding",
        subtitle: "Finishing",
        description: "Achieving superior surface finishes and flatnesses.",
        icon: Layers, // Trying standard Layers first, if it fails I'll use the helper logic below
        image: "/images/faheem-ali-box2.png",
        color: "#e8e8e3",
        details: {
            material: "Tool Steel D2",
            tolerance: "±0.002mm",
            machine: "Okamoto",
            runTime: "3h 45m"
        },
        stats: [
            { label: "Flatness", value: "2µm" },
            { label: "Finish", value: "Mirror" }
        ]
    },
    {
        id: 6,
        title: "Assembly & Fit",
        subtitle: "Integration",
        description: "Final assembly and tolerance checking of machined components.",
        icon: Wrench,
        image: "/images/faheem-ali-box3.png",
        color: "#e8e8e3",
        details: {
            material: "Various",
            tolerance: "Fit Check",
            machine: "Workbench",
            runTime: "5h 00m"
        },
        stats: [
            { label: "Parts", value: "50+" },
            { label: "Check", value: "Pass" }
        ]
    },
    {
        id: 7,
        title: "Wire EDM",
        subtitle: "Precision",
        description: "High-precision cutting for conductive materials using electrical discharge.",
        icon: Zap,
        image: "/images/wire-edm.jpg", // Placeholder
        color: "#ff00ff", // Neon Purple/Pink vibe
        details: {
            material: "Titanium",
            tolerance: "±0.001mm",
            machine: "Sodick",
            runTime: "12h 00m"
        },
        stats: [
            { label: "Kerf", value: "0.2mm" },
            { label: "Accuracy", value: "Ultra" }
        ]
    },
    {
        id: 8,
        title: "Quality Control",
        subtitle: "Inspection",
        description: "Rigorous inspection and CMM validation of final parts.",
        icon: ClipboardCheck,
        image: "/images/qc.jpg", // Placeholder
        color: "#00ff00", // Green for Pass
        details: {
            method: "CMM",
            standard: "ISO 9001",
            machine: "Zeiss",
            runTime: "1h 00m"
        },
        stats: [
            { label: "Pass Rate", value: "100%" },
            { label: "Report", value: "PDF" }
        ]
    },
]

export default function MachiningSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [activeIndex, setActiveIndex] = useState(0)

    // Track scroll progress of the section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Map scroll progress to rotation (0 to 360 degrees)
    // We rotate backwards to make it feel like we are scrolling through the items
    // Using full range [0, 1] to ensure all 8 items are comfortably reachable
    const rotation = useTransform(scrollYProgress, [0, 1], [0, -360])

    // Add spring physics for smoother rotation
    const smoothRotation = useSpring(rotation, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Calculate active index based on rotation
    useEffect(() => {
        const unsubscribe = smoothRotation.on("change", (latest) => {
            // Normalize rotation to positive 0-360
            let normalizedRotation = Math.abs(latest) % 360

            // Calculate segment size (360 / number of items)
            const segmentSize = 360 / projects.length

            // Determine active index (adjusting for offset if needed)
            // Providing a small buffer for snapping feel
            const index = Math.round(normalizedRotation / segmentSize) % projects.length
            setActiveIndex(index)
        })
        return () => unsubscribe()
    }, [smoothRotation])

    return (
        <section
            ref={containerRef}
            className="relative h-[700vh] z-10 bg-lorenzo-dark"
        >
            {/* Sticky Container - UNIFIED CANVAS */}
            <div className="sticky top-0 left-0 h-screen w-full flex overflow-hidden bg-lorenzo-dark perspective-1000 z-0">

                {/* Unified Atmospheric Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(232,232,227,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent,rgba(0,0,0,0.8))]" />

                {/* Global Grid Decoration */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }}
                />

                <div className="relative w-full h-full max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-24 scale-95 lg:scale-[0.9] origin-center">

                    {/* LEFT SIDE: THE MACHINE DIAL (Immersive & Large) */}
                    <div className="relative w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center md:justify-start order-2 md:order-1 z-10">
                        <div className="relative w-[90vw] h-[90vw] md:w-[800px] md:h-[800px] flex items-center justify-center -ml-[20vw] md:-ml-[300px]">

                            {/* Rotating Ring */}
                            <motion.div
                                style={{ rotate: smoothRotation }}
                                className="absolute w-full h-full rounded-full border-2 border-[#e8e8e3]/30"
                            >
                                {projects.map((project, index) => {
                                    const angle = (index * 360) / projects.length
                                    const isActive = activeIndex === index

                                    return (
                                        <div
                                            key={project.id}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            // Define custom property for responsive radius
                                            style={{
                                                "--radius": "40vw", // Default (Mobile)
                                            } as React.CSSProperties}
                                        >
                                            {/* We use a span or div to handle the desktop override via className since inline style overrides class usually, 
                                                but for CSS vars we can use a class to override if we structure it right or just use media query in style if possible? 
                                                Actually, safer and cleaner: just put the variable on the parent or handle it here with `md`.
                                                Tailwind arbitrary values for vars work great: `md:[--radius:340px]`
                                            */}
                                            <div
                                                className="absolute top-0 left-0 md:[--radius:340px] transition-transform duration-300"
                                                style={{
                                                    transform: `rotate(${angle}deg) translate(var(--radius)) rotate(-${angle}deg)`
                                                }}
                                            >
                                                {/* Item Container */}
                                                <div className="relative flex items-center items-center justify-center -translate-x-1/2 -translate-y-1/2">

                                                    {/* The Node */}
                                                    <motion.div
                                                        className={`
                                                            relative w-12 h-12 md:w-16 md:h-16 rounded-full 
                                                            flex items-center justify-center
                                                            backdrop-blur-md transition-all duration-500
                                                            border z-20
                                                            cursor-pointer
                                                        `}
                                                        onClick={() => {
                                                            // Optional: Scroll to this item?
                                                            // For now just visual
                                                        }}
                                                        style={{
                                                            backgroundColor: isActive ? 'rgba(232, 232, 227, 0.1)' : 'rgba(0, 0, 0, 0.5)',
                                                            borderColor: isActive ? '#e8e8e3' : 'rgba(255, 255, 255, 0.1)',
                                                            boxShadow: isActive ? '0 0 30px rgba(232, 232, 227, 0.3)' : 'none',
                                                            scale: isActive ? 1.5 : 1
                                                        }}
                                                    >
                                                        <project.icon
                                                            className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300`}
                                                            style={{ color: isActive ? '#e8e8e3' : 'rgba(255, 255, 255, 0.4)' }}
                                                        />
                                                    </motion.div>


                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </motion.div>

                            {/* Static Decoration Rings */}
                            <svg className="absolute w-[140%] h-[140%] pointer-events-none opacity-30 animate-[spin_60s_linear_infinite]">
                                <circle cx="50%" cy="50%" r="49%" stroke="#e8e8e3" strokeWidth="1" strokeDasharray="20 20" fill="none" />
                            </svg>
                            <svg className="absolute w-[60%] h-[60%] pointer-events-none opacity-40">
                                <circle cx="50%" cy="50%" r="48%" stroke="#e8e8e3" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                    </div>

                    {/* RIGHT SIDE: FLOATING TECH HUD */}
                    <div className="relative w-full md:w-1/2 h-full flex flex-col justify-center order-1 md:order-2 pointer-events-none">
                        <div className="pointer-events-auto pl-4 md:pl-12 lg:pl-20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        hidden: { opacity: 0, x: 50, filter: "blur(10px)" },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            filter: "blur(0px)",
                                            transition: {
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 20,
                                                staggerChildren: 0.05
                                            }
                                        },
                                        exit: {
                                            opacity: 0,
                                            x: -20,
                                            filter: "blur(10px)",
                                            transition: { duration: 0.2 }
                                        }
                                    }}
                                    className="relative z-20"
                                >


                                    {/* Number / ID */}
                                    <motion.span variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="text-lorenzo-accent/50 font-mono text-8xl md:text-[10rem] lg:text-[12rem] font-black absolute -top-20 md:-top-32 -left-8 md:-left-20 -z-10 select-none opacity-20">
                                        0{projects[activeIndex].id}
                                    </motion.span>

                                    {/* Titles */}
                                    <div className="mb-8">
                                        <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-3 mb-2">
                                            <div className="h-[2px] w-8 bg-lorenzo-accent" />
                                            <span className="text-lorenzo-accent font-mono text-sm uppercase tracking-[0.3em]">
                                                {projects[activeIndex].subtitle}
                                            </span>
                                        </motion.div>
                                        <motion.h2 variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter">
                                            {projects[activeIndex].title}
                                        </motion.h2>
                                    </div>

                                    {/* Glass Panel Content */}
                                    {/* Tech Panel Content */}
                                    {/* Open Spec Sheet Design */}
                                    <motion.div
                                        variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                                        className="relative max-w-xl"
                                    >
                                        {/* Vertical Anchor Line */}
                                        <div className="absolute top-0 left-0 w-[2px] h-full bg-[#e8e8e3]/10">
                                            <motion.div
                                                className="absolute top-0 left-0 w-full bg-[#e8e8e3]"
                                                initial={{ height: 0 }}
                                                animate={{ height: "100%" }}
                                                transition={{ duration: 0.8, ease: "circOut" }}
                                            />
                                        </div>

                                        <div className="pl-10 py-2">
                                            {/* Description - Large & Clean */}
                                            <p className="text-2xl text-white/90 font-light leading-relaxed mb-10">
                                                {projects[activeIndex].description}
                                            </p>

                                            {/* Technical Details Grid */}
                                            <div className="mb-10">
                                                <div className="h-[1px] w-full bg-[#e8e8e3]/10 mb-6" />

                                                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                                                    {(() => {
                                                        const details = Object.entries(projects[activeIndex].details)
                                                        const half = Math.ceil(details.length / 2)
                                                        return (
                                                            <>
                                                                <div className="space-y-6">
                                                                    {details.slice(0, half).map(([key, value]) => (
                                                                        <div key={key} className="flex flex-col">
                                                                            <span className="text-[10px] text-[#e8e8e3]/50 uppercase tracking-[0.2em] mb-1">{key}</span>
                                                                            <span className="font-mono text-[#e8e8e3] text-xl">{value}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                                <div className="space-y-6">
                                                                    {details.slice(half).map(([key, value]) => (
                                                                        <div key={key} className="flex flex-col">
                                                                            <span className="text-[10px] text-[#e8e8e3]/50 uppercase tracking-[0.2em] mb-1">{key}</span>
                                                                            <span className="font-mono text-white text-xl">{value}</span>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        )
                                                    })()}
                                                </div>
                                            </div>

                                            {/* Key Stats - Horizontal Highlight */}
                                            <div className="flex items-center gap-8">
                                                {projects[activeIndex].stats.map((stat, i) => (
                                                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                                                        <div className="w-12 h-12 rounded-full border border-[#e8e8e3]/20 flex items-center justify-center bg-[#e8e8e3]/5 group-hover:bg-[#e8e8e3] group-hover:text-black transition-all duration-300">
                                                            <span className="font-mono text-xs">{i + 1}</span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-2xl font-bold text-white group-hover:text-[#e8e8e3] transition-colors">{stat.value}</span>
                                                            <span className="text-[10px] text-[#e8e8e3]/40 uppercase tracking-widest">{stat.label}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

                {/* Footer Gradient Fade */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-lorenzo-dark to-transparent pointer-events-none" />

                {/* Scroll Prompt */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll to Rotate</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-lorenzo-accent to-transparent opacity-50" />
                </motion.div>

            </div>

            {/* Content for Scrolling Height */}
            <div className="absolute top-0 w-full h-full pointer-events-none" />

            {/* Custom Animations */}
            <style jsx global>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(400px); opacity: 0; }
                }
            `}</style>
        </section>
    )
}
