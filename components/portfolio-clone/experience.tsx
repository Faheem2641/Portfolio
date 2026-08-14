"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, MapPin, Calendar, Building2, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import { experiencesData, ExperienceEntry, ExperienceRole } from "@/data/experience"

export default function PortfolioExperience() {
  const [showAllExperiences, setShowAllExperiences] = useState(false)
  const INITIAL_EXP_COUNT = 3

  const renderExperienceCard = (exp: ExperienceEntry, idx: number) => {
    const hasRoles = Boolean(exp.roles && exp.roles.length > 0)

    return (
      <div
        key={idx}
        className="neu-raised rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 flex flex-col justify-between transition-colors duration-200 space-y-4 sm:space-y-5 h-full hover:border-topping/30 border border-transparent"
      >
        {/* Top Content Group */}
        <div className="space-y-4 flex-1 flex flex-col justify-start">
          
          {/* Type & Duration Pills */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            {exp.type && (
              <span className="neu-inset-sm px-3 py-1 rounded-full text-topping font-bold flex items-center gap-1.5 max-w-full truncate">
                <Briefcase className="w-3.5 h-3.5 text-topping shrink-0" />
                <span className="truncate">{exp.type}</span>
              </span>
            )}
            {exp.workType && (
              <span className="text-xs font-mono font-bold text-slate-800 bg-slate-300/80 px-2.5 py-1 rounded-full shrink-0">
                {exp.workType}
              </span>
            )}
            {exp.duration && (
              <span className="neu-inset-sm px-3 py-1 rounded-full text-slate-800 font-bold flex items-center gap-1.5 shrink-0">
                <Calendar className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>{exp.duration}</span>
              </span>
            )}
          </div>

          {/* Organization Title */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black text-slate-800 leading-snug tracking-tight text-justify [text-justify:inter-word]">
              {exp.organization}
            </h3>
            {exp.subtitle && (
              <p className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider text-justify [text-justify:inter-word]">
                {exp.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-600 pt-1">
              {exp.company && (
                <span className="flex items-center gap-1.5 font-bold text-slate-900">
                  <Building2 className="w-3.5 h-3.5 text-slate-800" /> {exp.company}
                </span>
              )}
              {exp.location && (
                <span className="flex items-center gap-1 text-slate-700 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" /> {exp.location}
                </span>
              )}
            </div>
          </div>

          {/* Single Role Description if no nested roles */}
          {!hasRoles && exp.description && (
            <p
              className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify [text-justify:inter-word]"
              dangerouslySetInnerHTML={{ __html: exp.description }}
            />
          )}

          {/* Nested Roles Stack */}
          {hasRoles && (
            <div className="space-y-3 pt-1 flex-1 flex flex-col justify-start">
              {exp.roles!.map((role: ExperienceRole, rIdx: number) => {
                const isLastRole = rIdx === exp.roles!.length - 1
                return (
                  <div
                    key={rIdx}
                    className={`neu-inset p-4 rounded-[16px] space-y-3 flex flex-col justify-start ${
                      isLastRole ? "flex-1" : ""
                    }`}
                  >
                    {/* Role Title Header */}
                    <div className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-slate-900 shrink-0 mt-0.5 text-topping" />
                      <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug tracking-tight text-justify [text-justify:inter-word]">
                        {role.title}
                      </h4>
                    </div>

                    {/* Timeline & Work Type Row */}
                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      {role.duration && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-raised-sm text-xs font-mono font-bold text-slate-800">
                          <Calendar className="w-3 h-3 text-slate-700 shrink-0" />
                          <span>{role.duration}</span>
                        </span>
                      )}
                      {role.type && (
                        <span className="neu-raised-sm px-2.5 py-1 rounded-full text-xs font-mono font-bold text-slate-900 shrink-0">
                          {role.type}
                        </span>
                      )}
                    </div>

                    {role.description && (
                      <p
                        className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify [text-justify:inter-word]"
                        dangerouslySetInnerHTML={{ __html: role.description }}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>

      </div>
    )
  }

  return (
    <section id="experience" className="py-5 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical Padding) */}
        <div className="neu-raised rounded-[28px] sm:rounded-[40px] p-4 sm:p-8 space-y-6 sm:space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-topping font-bold text-xs font-mono">
              <Briefcase className="w-3.5 h-3.5 text-topping" />
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">
              Work <span className="text-topping">Experience</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Engineering research, R&D internships, and hands-on manufacturing apprenticeships.
            </p>
          </div>

          {/* Initial 3 Experiences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {experiencesData.slice(0, INITIAL_EXP_COUNT).map((exp, idx) =>
              renderExperienceCard(exp, idx)
            )}
          </div>

          {/* Smooth Collapsible Section for Remaining Experiences */}
          {experiencesData.length > INITIAL_EXP_COUNT && (
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden p-6 -m-6 ${
                showAllExperiences
                  ? "max-h-[5000px] opacity-100 py-6"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch pt-2">
                {experiencesData.slice(INITIAL_EXP_COUNT).map((exp, idx) =>
                  renderExperienceCard(exp, INITIAL_EXP_COUNT + idx)
                )}
              </div>
            </div>
          )}

          {/* Centered Show Remaining Experiences Toggle Button */}
          {experiencesData.length > INITIAL_EXP_COUNT && (
            <div className="flex justify-center pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                type="button"
                className="neu-button px-7 py-3.5 rounded-full text-xs font-mono font-bold text-topping hover:text-slate-900 flex items-center gap-2.5 cursor-pointer border border-topping/30 transition-all"
              >
                <span>
                  {showAllExperiences ? "View Fewer Experiences" : "View All Experiences"}
                </span>
                {showAllExperiences ? (
                  <ChevronUp className="w-4 h-4 text-topping" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-topping animate-bounce" />
                )}
              </motion.button>
            </div>
          )}

        </div>

      </div>
    </section>
  )
}


