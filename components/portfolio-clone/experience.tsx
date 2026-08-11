"use client"

import { Briefcase, MapPin, Calendar, Building2, Award, ChevronRight } from "lucide-react"
import { experiencesData, ExperienceEntry, ExperienceRole } from "@/data/experience"

export default function PortfolioExperience() {
  return (
    <section id="experience" className="py-12 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical 24px Padding) */}
        <div className="neu-raised rounded-[40px] p-6 sm:p-8 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-slate-800 font-bold text-xs font-mono">
              <Briefcase className="w-3.5 h-3.5 text-slate-700" />
              <span>CAREER TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
              Work <span className="text-slate-900">Experience</span>
            </h2>
            <p className="text-slate-600 text-sm font-normal">
              Engineering research, R&D internships, and hands-on manufacturing apprenticeships.
            </p>
          </div>

          {/* 3-Column Grid Layout (Natural Content Heights) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {experiencesData.map((exp: ExperienceEntry, idx: number) => {
              const hasRoles = Boolean(exp.roles && exp.roles.length > 0)

              return (
                <div
                  key={idx}
                  className="neu-raised rounded-[24px] p-6 flex flex-col hover:scale-[1.01] transition-all duration-300 space-y-5 h-auto"
                >
                  {/* Top Content Group */}
                  <div className="space-y-4">
                    
                    {/* Type & Duration Pills */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      {exp.type && (
                        <span className="neu-inset-sm px-3 py-1 rounded-full text-slate-900 font-bold flex items-center gap-1.5 max-w-full truncate">
                          <Briefcase className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                          <span className="truncate">{exp.type}</span>
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
                      <h3 className="text-lg sm:text-xl font-black text-slate-800 leading-snug tracking-tight">
                        {exp.organization}
                      </h3>

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
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {exp.description}
                      </p>
                    )}

                    {/* Nested Roles Stack */}
                    {hasRoles && (
                      <div className="space-y-3 pt-1">
                        {exp.roles!.map((role: ExperienceRole, rIdx: number) => (
                          <div
                            key={rIdx}
                            className="neu-inset p-3.5 rounded-[16px] space-y-2"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-1.5">
                                <ChevronRight className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
                                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                                  {role.title}
                                </h4>
                              </div>
                              {role.type && (
                                <span className="text-xs font-mono font-bold text-slate-800 bg-slate-300/80 px-2.5 py-0.5 rounded-full shrink-0">
                                  {role.type}
                                </span>
                              )}
                            </div>

                            {role.duration && (
                              <p className="text-xs font-mono font-semibold text-slate-700 pl-5">
                                {role.duration}
                              </p>
                            )}

                            {role.description && (
                              <p className="text-xs text-slate-600 leading-relaxed pl-5 font-normal">
                                {role.description}
                              </p>
                            )}

                            {/* Attachments */}
                            {role.attachments && role.attachments.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pl-5 pt-1">
                                {role.attachments.map((att: string, aIdx: number) => (
                                  <span
                                    key={aIdx}
                                    className="neu-button px-3 py-1 rounded-full text-xs font-bold text-slate-900 flex items-center gap-1.5"
                                  >
                                    <Award className="w-3.5 h-3.5 text-amber-600" />
                                    <span>{att}</span>
                                  </span>
                                ))}
                              </div>
                            )}

                            {/* Role Skills */}
                            {role.skills && role.skills.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 pl-5 pt-1">
                                {role.skills.map((skill: string, sIdx: number) => (
                                  <span
                                    key={sIdx}
                                    className="neu-inset-sm px-2.5 py-1 rounded-[8px] text-xs font-mono font-bold text-slate-800"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}

