"use client"

import { motion } from "framer-motion"

const languages = [
    {
        name: "English",
        level: "Professional Proficiency",
        description: "Fluent in written and spoken English. Experienced in technical documentation and professional communication.",
        percentage: 95,
    },
    {
        name: "Urdu",
        level: "Native / Bilingual",
        description: "Native proficiency with deep understanding of cultural nuances and literature.",
        percentage: 100,
    },
    {
        name: "German",
        level: "Beginner (A1)",
        description: "Basic understanding of German language structure and everyday vocabulary.",
        percentage: 30,
    }
]

export default function LanguageSection() {
    return (
        <section className="relative bg-lorenzo-dark text-lorenzo-text-light py-12 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6"
                    >
                        Language <span className="text-lorenzo-accent font-brier">Skills</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-2 bg-lorenzo-accent mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 relative z-10">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={lang.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-6 hover:border-lorenzo-accent/50 transition-all duration-300 flex flex-col group h-full"
                        >
                            {/* Language Name */}
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2 text-lorenzo-accent">
                                {lang.name}
                            </h2>

                            {/* Level */}
                            <h3 className="text-sm font-bold text-lorenzo-text-light/70 mb-4 uppercase">
                                {lang.level}
                            </h3>

                            {/* Description */}
                            <p className="text-sm font-light leading-relaxed opacity-90 mb-6 flex-grow text-justify">
                                {lang.description}
                            </p>

                            {/* Progress Bar */}
                            <div className="mt-auto">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold uppercase text-lorenzo-accent">Proficiency</span>
                                    <span className="text-xs font-bold text-lorenzo-text-light/50">{lang.percentage}%</span>
                                </div>
                                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percentage}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                        className="h-full bg-lorenzo-accent"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Back to Home Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex justify-center relative z-10"
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

            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none z-0">
                <svg width="100%" height="100%">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
        </section>
    )
}
