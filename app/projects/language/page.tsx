"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Footer from "@/components/footer"

interface Language {
    id: string
    name: string
    level: string
    description: string
    imagePath?: string
}

const languages: Language[] = [
    {
        id: "urdu",
        name: "Urdu",
        level: "Native",
        description: "As a native Urdu speaker, I have complete fluency in reading, writing, and speaking. Urdu is my mother tongue and primary language for daily communication, cultural understanding, and expression.",
        // imagePath: "/images/language/urdu-certificate.jpg" // Add your image path here
    },
    {
        id: "english",
        name: "English",
        level: "Fluent",
        description: "I can easily understand, speak, and write in English. I use English for academic purposes, professional communication, and technical documentation. My proficiency enables me to engage confidently in complex discussions and presentations.",
        // imagePath: "/images/language/english-certificate.jpg" // Add your image path here
    },
]

export default function LanguagePage() {
    const [activeTab, setActiveTab] = useState(languages[0].id)

    const activeLanguage = languages.find(lang => lang.id === activeTab) || languages[0]

    return (
        <>
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
                            Language{" "}
                            <span className="text-lorenzo-accent font-brier">Skills</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-xl md:text-2xl font-light opacity-80 max-w-3xl mx-auto"
                        >
                            Communication across cultures, connecting through words
                        </motion.p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {languages.map((language, index) => (
                            <motion.button
                                key={language.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                onClick={() => setActiveTab(language.id)}
                                className={`px-6 py-3 rounded-lg font-bold uppercase tracking-wide text-sm transition-all duration-300 whitespace-nowrap ${activeTab === language.id
                                    ? "bg-lorenzo-accent text-lorenzo-dark shadow-lg shadow-lorenzo-accent/30"
                                    : "bg-lorenzo-accent/70 text-lorenzo-dark/80 hover:bg-lorenzo-accent hover:text-lorenzo-dark"
                                    }`}
                            >
                                {language.name}
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
                                className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-8 md:p-12 relative pb-32 overflow-hidden"
                            >
                                {/* Cutout overlay for button area */}
                                <div
                                    className="absolute bottom-0 left-0 w-[200px] h-[80px] bg-lorenzo-dark border-t-2 border-r-2 border-white/10"
                                    style={{
                                        borderTopRightRadius: '16px'
                                    }}
                                />

                                <div className={`relative z-10 ${activeLanguage.id === 'english' ? 'grid grid-cols-1 lg:grid-cols-2 gap-12' : ''}`}>
                                    {/* Left Column - Details */}
                                    <div className={`space-y-6 mb-20 ${activeLanguage.id === 'urdu' ? 'max-w-4xl mx-auto' : ''}`}>
                                        <div>
                                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
                                                {activeLanguage.name}
                                            </h2>
                                            <div className="inline-flex items-center gap-2 bg-lorenzo-accent/20 px-4 py-2 rounded-full border-2 border-lorenzo-accent/50">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                                <span className="text-sm font-bold text-lorenzo-accent uppercase tracking-wider">{activeLanguage.level}</span>
                                            </div>
                                        </div>

                                        <div className="h-1 w-20 bg-lorenzo-accent rounded-full" />

                                        <p className="text-lg md:text-xl font-light leading-relaxed opacity-90 text-justify">
                                            {activeLanguage.description}
                                        </p>
                                    </div>

                                    {/* Right Column - Proficiency Certificate Image (Only for English) */}
                                    {activeLanguage.id === 'english' && (
                                        <div className="flex items-center justify-center px-8">
                                            {activeLanguage.imagePath ? (
                                                <div className="relative w-full h-auto rounded-2xl overflow-hidden border-2 border-lorenzo-accent/30 hover:border-lorenzo-accent/60 transition-all duration-300">
                                                    <Image
                                                        src={activeLanguage.imagePath}
                                                        alt={`${activeLanguage.name} proficiency certificate`}
                                                        width={800}
                                                        height={1100}
                                                        className="w-full h-auto object-contain bg-white/5"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="relative w-full aspect-[3/4] bg-white/5 border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center group hover:border-lorenzo-accent/50 transition-all duration-300">
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
                                                            Proficiency Certificate
                                                        </p>
                                                        <p className="text-white/30 text-xs mt-2">
                                                            Coming Soon
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Back to Home Button */}
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
            <Footer />
        </>
    )
}
