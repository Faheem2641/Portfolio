"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface EducationItem {
    number: string
    title: string
    description: string
    align: "left" | "right"
}

const educationData: EducationItem[] = [
    {
        number: "1",
        title: "Bachelor's of Mechanical Engineering",
        description: "Currently pursuing Bachelor's of Mechanical Engineering at National University of Science and Technology (NUST), Islamabad, Pakistan.\nExpected date of Graduation: September 2028",
        align: "right"
    },
    {
        number: "2",
        title: "Higher Secondary Education",
        description: "Studied Intermediate Pre-Engineering, with major's Physics, Chemistry, and Mathematics from Superior Group Of colleges, Sargodha, pakistan . ",
        align: "left"
    },
    {
        number: "3",
        title: "Secondary Education",
        description: "Completed high school with focus on computer sciences and mathematics, from Public Institution, Sargodha, pakistan .",
        align: "right"
    }
]

export default function EducationSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

    return (
        <section
            id="education"
            ref={sectionRef}
            className="relative bg-lorenzo-dark text-lorenzo-text-light py-24 md:py-32 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-balance leading-[1.1]">
                        <span className="text-lorenzo-accent font-brier">EDUCATION</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-lorenzo-accent/20 transform -translate-x-1/2 hidden md:block" />

                    {/* Education Items */}
                    <div className="space-y-16 md:space-y-24">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative"
                            >
                                {/* Number Circle - Absolutely positioned on center line (Desktop) */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                                        className="relative"
                                    >
                                        {/* Outer glow ring */}
                                        <div className="absolute inset-0 rounded-full bg-lorenzo-accent/20 blur-xl scale-150" />

                                        {/* Circle */}
                                        <div className="relative w-24 h-24 rounded-full bg-lorenzo-dark border-4 border-lorenzo-accent flex items-center justify-center">
                                            <span className="text-4xl font-black text-lorenzo-accent">
                                                {item.number}
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Mobile Number Circle */}
                                <div className="flex justify-center mb-4 md:hidden">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                                        className="relative"
                                    >
                                        {/* Outer glow ring */}
                                        <div className="absolute inset-0 rounded-full bg-lorenzo-accent/20 blur-xl scale-150" />

                                        {/* Circle */}
                                        <div className="relative w-20 h-20 rounded-full bg-lorenzo-dark border-4 border-lorenzo-accent flex items-center justify-center">
                                            <span className="text-3xl font-black text-lorenzo-accent">
                                                {item.number}
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                                    {/* Left Content */}
                                    <div className={item.align === "right" ? "md:block" : "md:flex md:justify-end"}>
                                        {item.align === "left" && (
                                            <div className="md:max-w-lg md:pr-8">
                                                <motion.div
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="bg-lorenzo-dark/50 border-2 border-lorenzo-accent/30 rounded-2xl p-8 backdrop-blur-sm hover:border-lorenzo-accent/60 transition-all duration-300"
                                                >
                                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-lorenzo-text-light text-right break-words">
                                                        {item.title === "Bachelor's of Mechanical Engineering" ? (
                                                            <>
                                                                Bachelor's of Mechanical{" "}
                                                                Engineering
                                                            </>
                                                        ) : item.title === "Higher Secondary Education" ? (
                                                            <>Higher Secondary Education</>
                                                        ) : item.title}
                                                    </h3>
                                                    <p className="text-lorenzo-text-light/80 text-base md:text-lg leading-relaxed text-justify whitespace-pre-line">
                                                        {item.description}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Content */}
                                    <div className={item.align === "left" ? "md:block" : "md:flex md:justify-start"}>
                                        {item.align === "right" && (
                                            <div className="md:max-w-lg md:pl-8">
                                                <motion.div
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="bg-lorenzo-dark/50 border-2 border-lorenzo-accent/30 rounded-2xl p-8 backdrop-blur-sm hover:border-lorenzo-accent/60 transition-all duration-300"
                                                >
                                                    <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 text-lorenzo-text-light break-words">
                                                        {item.title === "Bachelor's of Mechanical Engineering" ? (
                                                            <>
                                                                Bachelor's of Mechanical{" "}
                                                                Engineering
                                                            </>
                                                        ) : item.title === "Higher Secondary Education" ? (
                                                            <>Higher Secondary Education</>
                                                        ) : item.title}
                                                    </h3>
                                                    <p className="text-lorenzo-text-light/80 text-base md:text-lg leading-relaxed text-justify whitespace-pre-line">
                                                        {item.description}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Home Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 flex justify-center"
                >
                    <motion.a
                        href="/"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="bg-lorenzo-accent text-lorenzo-dark font-black uppercase px-8 py-4 rounded-[14px] text-sm tracking-wider hover:bg-white transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
                    >
                        HOME
                        <motion.svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            whileHover={{ x: 2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </motion.svg>
                    </motion.a>
                </motion.div>

            </div>
        </section>
    )
}
