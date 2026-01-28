"use client"

import { motion } from "framer-motion"

interface WebProject {
    id: string
    title: string
    projectName: string
    technologies: string[]
    period: string
    category: string
    description: string
    liveUrl?: string
    githubUrl?: string
}

const webProjects: WebProject[] = [
    {
        id: "website-1",
        title: "Elexima",
        projectName: "Elexima",
        technologies: ["TypeScript", "CSS"],
        period: "Jun 2025",
        category: "Frontend Development",
        description: "Redesigned the Elexima website as a personal practice project after attending the founder’s workshop. Built a cleaner, more contemporary interface while maintaining the brand’s identity as an electronics solution provider.",
        liveUrl: "https://elexima-jtml.vercel.app/services/industrial-electronics-manufacturing",
        githubUrl: "https://github.com/Faheem2641/Elexima",
    },
    {
        id: "website-2",
        title: "Alberto Sora",
        projectName: "Alberto Sora",
        technologies: ["TypeScript", "CSS"],
        period: "Jul 2025",
        category: "Frontend Development",
        description: "Created AlbertoSoro as my first hands-on web project, designed to display a curated range of handbags. Practiced front-end development with a focus on aesthetics, usability, and responsiveness.",
        liveUrl: "https://alberto-soro.vercel.app/",
        githubUrl: "https://github.com/Faheem2641/alberto-soro",
    },
    {
        id: "website-3",
        title: "Katachi",
        projectName: "Katachi",
        technologies: ["TypeScript", "CSS"],
        period: "Aug 2025",
        category: "Frontend Development",
        description: "Built Katachi, a product-focused maker website for a client’s Lip collection, featuring a clean and modern interface. Developed the entire front-end in Next.js for fast and responsive performance.",
        liveUrl: "https://katachi-ruby.vercel.app/",
        githubUrl: "https://github.com/Faheem2641/Katachi",
    },
]

export default function WebDevelopmentSection() {
    return (
        <section className="relative bg-lorenzo-dark text-lorenzo-text-light py-12 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6"
                    >
                        Web{" "}
                        <span className="text-lorenzo-accent font-brier">Development</span>
                    </motion.h1>
                </div>

                {/* Three Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {webProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-6 hover:border-lorenzo-accent/50 transition-all duration-300 flex flex-col"
                        >
                            {/* Project Name */}
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 text-lorenzo-accent">
                                {project.projectName}
                            </h2>

                            <h3 className="text-sm font-bold text-lorenzo-text-light/70 mb-4 uppercase">
                                {project.category}
                            </h3>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <div key={techIndex} className="flex items-center gap-1 bg-lorenzo-accent/20 px-3 py-1 rounded-full border border-lorenzo-accent/50">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="16 18 22 12 16 6" />
                                            <polyline points="8 6 2 12 8 18" />
                                        </svg>
                                        <span className="text-xs font-bold text-lorenzo-accent">{tech}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Period */}
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full mb-4 w-fit">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span className="text-xs font-semibold">{project.period}</span>
                            </div>

                            <div className="h-0.5 w-12 bg-lorenzo-accent rounded-full mb-4" />

                            {/* Description */}
                            <p className="text-sm font-light leading-relaxed opacity-90 mb-6 flex-grow text-justify">
                                {project.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-3">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-lorenzo-accent text-lorenzo-dark font-bold uppercase tracking-wide px-4 py-3.5 rounded-lg hover:bg-lorenzo-accent hover:scale-105 hover:shadow-2xl hover:shadow-lorenzo-accent/50 active:scale-95 transition-all duration-200 ease-out shadow-lg text-xs"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                        View Live
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-white/10 text-lorenzo-text-light font-bold uppercase tracking-wide px-4 py-3.5 rounded-lg hover:bg-white/20 hover:scale-105 hover:shadow-xl active:scale-95 transition-all duration-200 ease-out text-xs"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Back to Home Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex justify-center"
                >
                    <a
                        href="/"
                        className="group inline-flex items-center gap-3 bg-lorenzo-accent text-lorenzo-dark font-bold uppercase tracking-wide px-6 py-3 rounded-lg hover:bg-lorenzo-accent hover:scale-105 hover:shadow-2xl hover:shadow-lorenzo-accent/50 active:scale-95 transition-all duration-200 ease-out shadow-lg"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:-translate-x-1">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        HOME
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
