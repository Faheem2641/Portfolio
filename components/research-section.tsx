"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface ResearchExperience {
    id: string
    title: string
    organization: string
    period: string
    duration: string
    location: string
    category: string
    description: string
    responsibilities: string[]
    imagePlaceholder: boolean
}

const researchExperiences: ResearchExperience[] = [
    {
        id: "volunteer-research",
        title: "Volunteer Research",
        organization: "NUST School of Mechanical and Manufacturing Engineering (SMME)",
        period: "Sep 2025 - Present",
        duration: "4 mos",
        location: "Islamabad, Pakistan · Hybrid",
        category: "Apprenticeship",
        description: "Working under the guidance of supervisor, Dr Abdullah Jamil, I'm contributing to a review paper. This role involves literature review, data interpretation and academic writing aimed at summarizing key research trends. Responsible for conducting detailed literature review, comparative analysis of recent studies, and organizing technical findings into coherent scientific writing.",
        responsibilities: [
            "Conducting comprehensive literature review and analysis",
            "Data interpretation and academic writing for review paper",
            "Comparative analysis of recent research studies",
            "Organizing technical findings into coherent scientific writing",
            "Collaborating with professors on research methodology"
        ],
        imagePlaceholder: true,
    },
]

export default function ResearchSection() {
    const [activeTab, setActiveTab] = useState(researchExperiences[0].id)

    const activeExperience = researchExperiences.find(exp => exp.id === activeTab) || researchExperiences[0]

    return (
        <section className="relative min-h-screen bg-lorenzo-dark text-lorenzo-text-light py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6"
                    >
                        Volunteer Research &{" "}
                        <span className="text-lorenzo-accent font-brier">Publications</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl md:text-2xl font-light opacity-80 max-w-3xl mx-auto whitespace-nowrap"
                    >
                        Contributing to academic knowledge through research and scholarly work
                    </motion.p>

                    {/* Tab Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-4 flex justify-center"
                    >
                        <button
                            onClick={() => setActiveTab(researchExperiences[0].id)}
                            className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === researchExperiences[0].id
                                ? 'bg-lorenzo-accent text-lorenzo-dark shadow-lg'
                                : 'bg-white/10 text-lorenzo-text-light hover:bg-white/20'
                                }`}
                        >
                            Review Paper
                        </button>
                    </motion.div>
                </div>

                {/* Content Area with rounded corners */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#162439] border-2 border-white/10 rounded-3xl p-8 md:p-12 relative pb-32 overflow-hidden"
                        >
                            {/* Cutout overlay for button area - matches background and has border */}
                            <div
                                className="absolute bottom-0 left-0 w-[200px] h-[80px] bg-lorenzo-dark border-t-2 border-r-2 border-white/10"
                                style={{
                                    borderTopRightRadius: '16px'
                                }}
                            />

                            <div className="relative z-10">
                                {/* Content - Full Width */}
                                <div className="space-y-6 mb-20">
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
                                            Flow field reconstruction with machine learning - a critical review
                                        </h2>
                                        <h3 className="text-2xl md:text-3xl font-bold text-lorenzo-accent mb-4">
                                            {activeExperience.organization}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            <span className="text-sm font-semibold whitespace-nowrap">{activeExperience.period}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            <span className="text-sm font-semibold whitespace-nowrap">{activeExperience.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            <span className="text-sm font-semibold whitespace-nowrap">{activeExperience.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            <span className="text-sm font-semibold whitespace-nowrap">{activeExperience.category}</span>
                                        </div>
                                    </div>

                                    <div className="h-1 w-20 bg-lorenzo-accent rounded-full" />

                                    <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 text-justify whitespace-pre-line">
                                        {activeExperience.description}
                                    </p>

                                    {/* Responsibilities Section with Vertical Cards */}
                                    <div className="mt-8">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                                            {/* Card 1 - Theme Color */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className="relative bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                                            >
                                                {/* Colored Top Section with Number */}
                                                <div className="bg-gradient-to-br from-lorenzo-accent to-lorenzo-accent h-20 flex items-center justify-center relative">
                                                    <span className="text-black text-6xl font-black opacity-50">01</span>
                                                </div>

                                                {/* Content Section */}
                                                <div className="p-6 bg-gradient-to-b from-white/5 to-transparent flex flex-col flex-1">
                                                    <div className="flex-grow space-y-3">
                                                        <h5 className="text-2xl md:text-3xl font-black uppercase text-lorenzo-accent tracking-wider text-center">
                                                            What
                                                        </h5>
                                                        <h6 className="text-xs font-semibold text-lorenzo-text-light/90 uppercase">

                                                        </h6>
                                                        <p className="text-sm md:text-base font-light leading-relaxed opacity-90 text-justify">
                                                            Some method for fluid visulization are very commmon like CFD(Comuputational Fluid Dynamics) and LES( Large Eddy Simulation) in the experimental analysis one of them is PIV(Particle Image Velocimetry) as they are use full so do they come with the problems of their own. Requiring a lot of resources and time.
                                                        </p>
                                                    </div>

                                                    {/* Icon */}
                                                    <div className="pt-4 flex justify-center">
                                                        <div className="bg-lorenzo-accent/20 p-3 rounded-full">
                                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-lorenzo-accent">
                                                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Card 2 - Theme Color Variant */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="relative bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                                            >
                                                {/* Colored Top Section with Number */}
                                                <div className="bg-gradient-to-br from-lorenzo-accent to-lorenzo-accent h-20 flex items-center justify-center relative">
                                                    <span className="text-black text-6xl font-black opacity-50">02</span>
                                                </div>

                                                {/* Content Section */}
                                                <div className="p-6 bg-gradient-to-b from-white/5 to-transparent flex flex-col flex-1">
                                                    <div className="flex-grow space-y-3">
                                                        <h5 className="text-2xl md:text-3xl font-black uppercase text-lorenzo-accent tracking-wider text-center">
                                                            How
                                                        </h5>
                                                        <h6 className="text-xs font-semibold text-lorenzo-text-light/90 uppercase">

                                                        </h6>
                                                        <p className="text-sm md:text-base font-light leading-relaxed opacity-90 text-justify">
                                                            Various machine learning models are trained and tested based on a experimental and DNS(Direct Numerical Simulation)
                                                            datasets and are utilized to predict the flow behavior. This eliminates the need of the generation of a new datasets for every new analysis. Machine learning models being effective once trained can be used for new senerios and conditions.
                                                        </p>
                                                    </div>

                                                    {/* Icon */}
                                                    <div className="pt-4 flex justify-center">
                                                        <div className="bg-lorenzo-accent/20 p-3 rounded-full">
                                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-lorenzo-accent">
                                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                                <circle cx="12" cy="7" r="4" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>

                                            {/* Card 3 - Theme Color */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                                className="relative bg-gradient-to-b from-white/5 to-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                                            >
                                                {/* Colored Top Section with Number */}
                                                <div className="bg-gradient-to-br from-lorenzo-accent to-lorenzo-accent h-20 flex items-center justify-center relative">
                                                    <span className="text-black text-6xl font-black opacity-50">03</span>
                                                </div>

                                                {/* Content Section */}
                                                <div className="p-6 bg-gradient-to-b from-white/5 to-transparent flex flex-col flex-1">
                                                    <div className="flex-grow space-y-3">
                                                        <h5 className="text-2xl md:text-3xl font-black uppercase text-lorenzo-accent tracking-wider text-center">
                                                            Results
                                                        </h5>
                                                        <h6 className="text-xs font-semibold text-lorenzo-text-light/90 uppercase">

                                                        </h6>
                                                        <p className="text-sm md:text-base font-light leading-relaxed opacity-90 text-justify">
                                                            The process for fluid analysis in modern development becomes comparatively easier, reducing costs significantly and making the overall workflow more efficient.
                                                            Moreover, this methodology helps improve the quality of fluid visualization by removing noise and accounting for additional influencing factors.
                                                            Therefore, this approach is a better option for fluid analysis, offering both accuracy and affordability.
                                                        </p>
                                                    </div>

                                                    {/* Icon */}
                                                    <div className="pt-4 flex justify-center">
                                                        <div className="bg-lorenzo-accent/20 p-3 rounded-full">
                                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-lorenzo-accent">
                                                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence >

                    {/* Back to Home Button - Centered in the cutout area */}
                    < motion.div
                        initial={{ opacity: 0, y: 20 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="absolute bottom-0 left-0 w-[200px] h-[80px] z-20 flex items-center justify-center"
                    >
                        <a
                            href="/"
                            className="inline-flex items-center gap-3 bg-lorenzo-accent text-lorenzo-dark font-bold uppercase tracking-wide px-6 py-3 rounded-lg hover:bg-lorenzo-accent/90 transition-all duration-300 shadow-lg"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            HOME
                        </a>
                    </motion.div >
                </div >
            </div >
        </section >
    )
} 
