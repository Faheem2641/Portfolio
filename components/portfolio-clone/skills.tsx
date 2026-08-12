"use client"

import { motion } from "framer-motion"
import { Cpu, Code2, Wrench, Settings, Activity } from "lucide-react"
import { skillsData, SkillCategory } from "@/data/skills"

function getCategoryIcon(iconName: string) {
  switch (iconName) {
    case "Wrench":
      return <Wrench className="w-5 h-5" />
    case "Cpu":
      return <Cpu className="w-5 h-5" />
    case "Code2":
      return <Code2 className="w-5 h-5" />
    case "Activity":
      return <Activity className="w-5 h-5" />
    default:
      return <Settings className="w-5 h-5" />
  }
}

export default function PortfolioSkills() {
  return (
    <section id="skills" className="py-5 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical 24px Padding) */}
        <div className="neu-raised rounded-[40px] p-6 sm:p-8 space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-slate-800 font-bold text-xs font-mono">
              <Cpu className="w-3.5 h-3.5 text-slate-700" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
              Technical <span className="text-slate-900">Skills</span>
            </h2>
          </div>

          {/* Responsive 3-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {skillsData.map((group: SkillCategory, idx: number) => {
              return (
                <div
                  key={idx}
                  className="neu-raised rounded-[24px] p-6 flex flex-col justify-between space-y-6 hover:scale-[1.005] transition-transform h-auto"
                >
                  <div className="space-y-5">
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-300/40">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-[16px] neu-button flex items-center justify-center text-slate-800">
                          {getCategoryIcon(group.iconName)}
                        </div>
                        <h3 className="text-base font-black text-slate-900 leading-snug">
                          {group.category}
                        </h3>
                      </div>
                    </div>

                    {/* Side-by-side 2-Column Capsule Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {group.skills.map((s, sIdx) => (
                        <motion.div
                          key={sIdx}
                          initial={{ opacity: 0, y: 4 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.2, delay: sIdx * 0.015 }}
                          className="neu-inset-sm px-3 py-2 rounded-[14px] text-slate-800 text-[11px] sm:text-xs font-bold leading-snug flex items-center gap-2 hover:scale-[1.02] transition-transform cursor-default h-full"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0" />
                          <span>{s.name}</span>
                        </motion.div>
                      ))}
                    </div>
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
