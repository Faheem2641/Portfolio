"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface ProjectDetailViewProps {
    project: any // Typing loosely to handle both Ansys and Inventor shapes which are similar
    backLink: string
    backLabel: string
}

export default function ProjectDetailView({ project, backLink, backLabel }: ProjectDetailViewProps) {
    if (!project) return null

    return (
        <div className="min-h-screen bg-[#151921] pt-32 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <Link
                    href={backLink}
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to {backLabel}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900"
                    >
                        <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111112] via-transparent to-transparent opacity-60" />
                    </motion.div>

                    {/* Right: Content */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {/* Header */}
                            <div className="mb-8">
                                <span className="text-lorenzo-accent font-mono text-sm uppercase tracking-[0.2em] mb-2 block">
                                    {project.subtitle || project.category}
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-[0.9] tracking-tight mb-6">
                                    {project.title}
                                </h1>
                                <p className="text-xl text-white/70 font-light leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="h-[1px] w-full bg-white/10 mb-8" />

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-8 mb-10">
                                {project.details && Object.entries(project.details).map(([key, value]) => (
                                    <div key={key}>
                                        <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1">{key}</span>
                                        <span className="font-mono text-white text-lg">
                                            {String(value)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="flex gap-4">
                                {project.stats && project.stats.map((stat: any, index: number) => (
                                    <div key={index} className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg">
                                        <span className="block text-2xl font-bold text-white mb-1">{stat.value}</span>
                                        <span className="text-[10px] text-lorenzo-accent uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
