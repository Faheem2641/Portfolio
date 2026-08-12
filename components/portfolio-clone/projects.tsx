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
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
  Loader2
} from "lucide-react"
import { useEffect } from "react"
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
  const [lightbox, setLightbox] = useState<{
    title: string
    images: string[]
    index: number
  } | null>(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  // Preload all project images into browser memory on mount to prevent any loading glitches
  useEffect(() => {
    projectsData.forEach((project) => {
      if (project.images) {
        project.images.forEach((src) => {
          const img = new Image()
          img.src = src
        })
      }
    })
  }, [])

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx)
  }

  const openLightbox = (title: string, images: string[], index = 0) => {
    setImgLoaded(false)
    setLightbox({ title, images, index })
  }

  const closeLightbox = () => {
    setLightbox(null)
    setImgLoaded(false)
  }

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (!lightbox) return
    setImgLoaded(false)
    setLightbox({
      ...lightbox,
      index: (lightbox.index + 1) % lightbox.images.length,
    })
  }

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (!lightbox) return
    setImgLoaded(false)
    setLightbox({
      ...lightbox,
      index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length,
    })
  }

  const setImageIndexDirectly = (index: number) => {
    if (!lightbox || lightbox.index === index) return
    setImgLoaded(false)
    setLightbox({ ...lightbox, index })
  }

  const renderLinkBtn = (link: ProjectLink, project: (typeof projectsData)[0], keyIdx: number) => {
    const hasUrl = Boolean(link.url && link.url.trim() !== "")
    const hasImages = Boolean(project.images && project.images.length > 0)

    if (hasUrl) {
      return (
        <a
          key={keyIdx}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="neu-button px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-slate-800 hover:text-slate-950 flex items-center gap-1.5 max-w-full transition-transform hover:scale-105 active:scale-95"
        >
          {getLinkIcon(link.label)}
          <span className="truncate">{link.label}</span>
        </a>
      )
    }

    if (hasImages) {
      const imgIdx = keyIdx < project.images!.length ? keyIdx : 0
      return (
        <button
          key={keyIdx}
          onClick={() => openLightbox(project.title, project.images!, imgIdx)}
          className="neu-button px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-slate-900 hover:text-black flex items-center gap-1.5 cursor-pointer max-w-full transition-transform hover:scale-105 active:scale-95"
        >
          {getLinkIcon(link.label)}
          <span className="truncate">{link.label}</span>
        </button>
      )
    }

    return (
      <span
        key={keyIdx}
        className="neu-button px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-slate-700 cursor-default flex items-center gap-1.5 opacity-90 max-w-full"
        title="Link coming soon"
      >
        {getLinkIcon(link.label)}
        <span className="truncate">{link.label}</span>
      </span>
    )
  }

  return (
    <section id="projects" className="py-5 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical Padding) */}
        <div className="neu-raised rounded-[28px] sm:rounded-[40px] p-4 sm:p-8 space-y-6 sm:space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-slate-800 font-bold text-xs font-mono">
              <FolderGit2 className="w-3.5 h-3.5 text-slate-700" />
              <span>PROJECT PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">
              Featured <span className="text-slate-900">Projects</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Things I’ve built, explored, and brought to life.
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
                    className="neu-raised rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 flex flex-col justify-between transition-colors duration-200 space-y-4 sm:space-y-5 h-full"
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
                          dangerouslySetInnerHTML={{ __html: project.description }}
                        />
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
                      


                      {/* Resource Link Chips - Flex wrap naturally with clean spacing */}
                      {project.links && project.links.length > 0 && (
                        <div className="pt-2 flex flex-wrap items-center gap-2">
                          {project.links.map((link: ProjectLink, lIdx: number) =>
                            renderLinkBtn(link, project, lIdx)
                          )}
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

      {/* Lightbox Modal for Fullscreen Image Viewing */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-slate-950/85 flex items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 8 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="neu-raised rounded-[28px] bg-[#d8d8d8] max-w-5xl max-h-[90vh] w-auto p-4 sm:p-6 relative overflow-hidden flex flex-col items-center space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="w-full flex items-center justify-between pb-2 border-b border-slate-300/60 gap-4">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    {lightbox.title}
                  </h3>
                  <p className="text-xs font-mono font-bold text-slate-600 mt-0.5">
                    Photo {lightbox.index + 1} of {lightbox.images.length}
                  </p>
                </div>
                <button
                  onClick={closeLightbox}
                  className="w-9 h-9 rounded-full neu-button flex items-center justify-center text-slate-700 hover:text-slate-900 transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Dynamic Fitting Image Container with Loader */}
              <div className="relative neu-inset rounded-[20px] p-2 flex items-center justify-center max-h-[72vh] max-w-full overflow-hidden bg-slate-900/5 min-h-[260px] min-w-[300px]">
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#d8d8d8]/50 z-10">
                    <Loader2 className="w-8 h-8 animate-spin text-slate-700" />
                  </div>
                )}

                <img
                  key={lightbox.index}
                  src={lightbox.images[lightbox.index]}
                  alt={`${lightbox.title} view ${lightbox.index + 1}`}
                  onLoad={() => setImgLoaded(true)}
                  decoding="async"
                  className={`max-h-[68vh] max-w-full w-auto h-auto object-contain rounded-[14px] transition-opacity duration-300 ${
                    imgLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Left / Right Nav Arrows if multiple images */}
                {lightbox.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 w-10 h-10 rounded-full neu-button flex items-center justify-center text-slate-800 hover:text-black transition-transform active:scale-95 shadow-md z-20"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 w-10 h-10 rounded-full neu-button flex items-center justify-center text-slate-800 hover:text-black transition-transform active:scale-95 shadow-md z-20"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails indicator bar if multiple images */}
              {lightbox.images.length > 1 && (
                <div className="flex items-center gap-2 pt-1">
                  {lightbox.images.map((img, iIdx) => (
                    <button
                      key={iIdx}
                      onClick={() => setImageIndexDirectly(iIdx)}
                      className={`w-12 h-12 rounded-[10px] neu-inset p-1 overflow-hidden transition-all ${
                        lightbox.index === iIdx ? "ring-2 ring-slate-800 scale-105" : "opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover rounded-[6px]" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
