"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface VolunteerExperience {
    id: string
    role: string
    organization: string
    period: string
    duration: string
    category: string
    description: string
    certificatePlaceholder: boolean
    imagePath?: string
}

const volunteerExperiences: VolunteerExperience[] = [
    {
        id: "teacher",
        role: "Teacher",
        organization: "HSF Welfare, Islamabad, Pakistan.",
        period: "Sep 2025 - Nov 2025",
        duration: "3 mos",
        category: "Education",
        description: "I taught underprivileged children at HSF Welfare, helping them build confidence and essential skills. Alongside this, I contributed through monetary donations to support their daily needs and education.",
        certificatePlaceholder: false,
        imagePath: "/images/Volunteering/HSF certificate.jpg"
    },
    {
        id: "social-welfare",
        role: "Social Welfare Volunteer",
        organization: "Alkhidmat Foundation, Islamabad, Pakistan.",
        period: "Aug 2025 - Sep 2025",
        duration: "2 mos",
        category: "Social Services",
        description: "As a Welfare Intern, I contributed to community development initiatives focused on improving lives and promoting social well-being.",
        certificatePlaceholder: false,
        imagePath: "/images/Volunteering/Artboard 11_page-0001.jpg"
    },
    {
        id: "coordination",
        role: "Coordination Volunteer",
        organization: "AIAA (NUST).",
        period: "Aug 2025",
        duration: "1 mo",
        category: "Science and Technology",
        description: "Volunteered in organizing and facilitating an educational event for students from Grade 6 to 12, introducing them to the fundamentals of flight, rocketry, and aerospace science. Assisted in coordinating activities, managing schedules, and ensuring smooth communication between participants, instructors, and organizers. Contributed to creating an engaging learning environment that combined theory with hands-on demonstrations to inspire interest in STEM fields.",
        certificatePlaceholder: false,
        imagePath: "/images/Volunteering/1760364498164_page-0001.jpg"
    },
    {
        id: "blood-donation",
        role: "Blood Donation ",
        organization: "NUST Character Building Society, (NCSC).",
        period: "Oct 2025",
        duration: "",
        category: "Healthcare & Community",
        description: "I donated blood during my campus drive to support patients who rely on emergency healthcare. This meaningful experience allowed me to contribute directly to a life-saving cause. It also strengthened my sense of responsibility toward community welfare.",
        certificatePlaceholder: false,
        imagePath: "/images/Volunteering/Blood Donation certificate .jpg"
    },
]

export default function VolunteerSection() {
    const [activeTab, setActiveTab] = useState(volunteerExperiences[0].id)

    const activeExperience = volunteerExperiences.find(exp => exp.id === activeTab) || volunteerExperiences[0]

    return (
        <section className="relative min-h-screen bg-lorenzo-dark text-lorenzo-text-light py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-3"
                    >
                        Making a{" "}
                        <span className="text-lorenzo-accent font-brier">Difference</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl md:text-2xl font-light opacity-80 max-w-3xl mx-auto"
                    >
                        Contributing to communities and causes that matter
                    </motion.p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {volunteerExperiences.map((experience, index) => (
                        <motion.button
                            key={experience.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                            onClick={() => setActiveTab(experience.id)}
                            className={`px-6 py-3 rounded-lg font-bold uppercase tracking-wide text-sm transition-all duration-300 whitespace-nowrap ${activeTab === experience.id
                                ? "bg-lorenzo-accent text-lorenzo-dark shadow-lg shadow-lorenzo-accent/30"
                                : "bg-lorenzo-accent/70 text-lorenzo-dark/80 hover:bg-lorenzo-accent hover:text-lorenzo-dark"
                                }`}
                        >
                            {experience.role}
                        </motion.button>
                    ))}
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

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                                {/* Left Column - Details */}
                                <div className="space-y-6 mb-20">
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
                                            {activeExperience.role}
                                        </h2>
                                        <h3 className="text-2xl md:text-3xl font-bold text-lorenzo-accent mb-4">
                                            {activeExperience.organization}
                                        </h3>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            <span className="text-sm font-semibold">{activeExperience.period}</span>
                                        </div>


                                        {activeExperience.duration && (
                                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                                <span className="text-sm font-semibold">{activeExperience.duration}</span>
                                            </div>
                                        )}


                                        <div className="flex items-center gap-2 bg-lorenzo-accent/20 px-4 py-2 rounded-full border-2 border-lorenzo-accent/50">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                            <span className="text-sm font-bold text-lorenzo-accent">{activeExperience.category}</span>
                                        </div>
                                    </div>

                                    <div className="h-1 w-20 bg-lorenzo-accent rounded-full" />

                                    <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 text-justify">
                                        {activeExperience.description}
                                    </p>
                                </div>

                                {/* Right Column - Certificate Image or Placeholder */}
                                <div className="flex items-center justify-center px-8">
                                    {activeExperience.imagePath ? (
                                        <div className="relative w-full h-auto rounded-2xl overflow-hidden border-2 border-lorenzo-accent/30 hover:border-lorenzo-accent/60 transition-all duration-300">
                                            <Image
                                                src={activeExperience.imagePath}
                                                alt={`${activeExperience.role} certificate`}
                                                width={800}
                                                height={1100}
                                                className="w-full h-auto object-contain bg-white/5"
                                            />
                                        </div>
                                    ) : (
                                        <div className="relative w-full aspect-[4/3] bg-white/5 border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center group hover:border-lorenzo-accent/50 transition-all duration-300">
                                            <div className="text-center p-8">
                                                <svg
                                                    width="80"
                                                    height="80"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    className="mx-auto mb-4 text-white/30 group-hover:text-lorenzo-accent/50 transition-colors duration-300"
                                                >
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                    <polyline points="14 2 14 8 20 8" />
                                                    <line x1="16" y1="13" x2="8" y2="13" />
                                                    <line x1="16" y1="17" x2="8" y2="17" />
                                                    <polyline points="10 9 9 9 8 9" />
                                                </svg>
                                                <p className="text-white/50 font-semibold uppercase tracking-wider text-sm">
                                                    Certificate Image
                                                </p>
                                                <p className="text-white/30 text-xs mt-2">
                                                    Coming Soon
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Back to Home Button - Centered in the cutout area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
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
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
