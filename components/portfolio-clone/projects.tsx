"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FolderGit2,
  Github,
  ExternalLink,
  Calendar,
  Building2,
  FileText,
  Eye,
  Cpu,
  ChevronDown,
  ChevronUp
} from "lucide-react"
import { projectsData, ProjectLink } from "@/data/projects"

function getLinkIcon(label: string) {
  const lower = label.toLowerCase()
  if (lower.includes("github")) return <Github className="w-3.5 h-3.5" />
  if (lower.includes("report") || lower.includes("doc")) return <FileText className="w-3.5 h-3.5" />
  if (lower.includes("view") || lower.includes("car") || lower.includes("robot")) return <Eye className="w-3.5 h-3.5" />
  if (lower.includes("simulation") || lower.includes("proteus") || lower.includes("protues")) return <Cpu className="w-3.5 h-3.5 text-slate-700" />
  return <ExternalLink className="w-3.5 h-3.5" />
}

export default function PortfolioProjects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  return (
    <section id="projects" className="py-5 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical 24px Padding) */}
        <div className="neu-raised rounded-[40px] p-6 sm:p-8 space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-slate-800 font-bold text-xs font-mono">
              <FolderGit2 className="w-3.5 h-3.5 text-slate-700" />
              <span>PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
              Featured <span className="text-slate-900">Projects</span>
            </h2>
            <p className="text-slate-600 text-sm font-normal">
              Engineering, IoT automation, structural design, and full-stack software applications.
            </p>
          </div>

          {/* Responsive Grid (3 columns desktop, 2 columns tablet, 1 column mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            <AnimatePresence>
              {projectsData.map((project, idx) => {
                const isExpanded = expandedIndex === idx

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="neu-raised rounded-[24px] p-6 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 space-y-5 h-full"
                  >
                    {/* Top Content Group */}
                    <div className="space-y-4">
                      
                      {/* Association & Date Pills */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                        {project.association && (
                          <span className="neu-inset-sm px-3 py-1 rounded-full text-slate-900 font-bold flex items-center gap-1.5 max-w-full truncate">
                            <Building2 className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                            <span className="truncate">{project.association}</span>
                          </span>
                        )}
                        {project.date && (
                          <span className="neu-inset-sm px-3 py-1 rounded-full text-slate-800 font-bold flex items-center gap-1.5 shrink-0">
                            <Calendar className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                            <span>{project.date}</span>
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-black text-slate-800 leading-snug tracking-tight">
                        {project.title}
                      </h3>

                      {/* Description with Expand / Line-clamp toggle */}
                      <div>
                        <p
                          className={`text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify [text-justify:inter-word] ${
                            !isExpanded ? "line-clamp-4" : ""
                          }`}
                        >
                          {project.description}
                        </p>
                        {project.description.length > 180 && (
                          <button
                            onClick={() => toggleExpand(idx)}
                            className="mt-1.5 text-xs font-bold text-slate-900 hover:text-black flex items-center gap-1 transition-colors"
                          >
                            <span>{isExpanded ? "Show less" : "Read more"}</span>
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Bottom Content Group: Skills & Links */}
                    <div className="space-y-4 pt-3 border-t border-slate-300/40">
                      
                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="neu-inset-sm px-2.5 py-1 rounded-[10px] text-slate-800 text-xs font-mono font-bold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Resource Link Chips */}
                      {project.links && project.links.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {project.links.map((link: ProjectLink, lIdx: number) => {
                            const hasUrl = Boolean(link.url && link.url.trim() !== "")

                            if (hasUrl) {
                              return (
                                <a
                                  key={lIdx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="neu-button px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 hover:text-slate-950 flex items-center gap-1.5"
                                >
                                  {getLinkIcon(link.label)}
                                  <span>{link.label}</span>
                                </a>
                              )
                            }

                            return (
                              <span
                                key={lIdx}
                                className="neu-button px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 cursor-default flex items-center gap-1.5 opacity-90"
                                title="Link coming soon"
                              >
                                {getLinkIcon(link.label)}
                                <span>{link.label}</span>
                              </span>
                            )
                          })}
                        </div>
                      )}

                    </div>

                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  )
}
