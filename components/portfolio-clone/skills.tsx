"use client"

import { motion } from "framer-motion"
import { Cpu, Code2, Wrench, Settings, Activity, ShieldCheck } from "lucide-react"
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
    <section id="skills" className="py-12 neu-bg">
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
              Skills & <span className="text-slate-900">Technologies</span>
            </h2>
            <p className="text-slate-600 text-sm font-normal">
              Mechanical design, precision manufacturing, embedded IoT robotics, and software engineering.
            </p>
          </div>

          {/* Grid (Concentric 24px Radius Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillsData.map((group: SkillCategory, idx: number) => {
              return (
                <div
                  key={idx}
                  className="neu-raised rounded-[24px] p-6 flex flex-col justify-between space-y-6 hover:scale-[1.01] transition-transform"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-300/40">
                      <div className="w-10 h-10 rounded-[16px] neu-button flex items-center justify-center text-slate-700">
                        {getCategoryIcon(group.iconName)}
                      </div>
                      <h3 className="text-base font-bold text-slate-800">
                        {group.category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {group.skills.map((s, sIdx) => (
                        <div
                          key={sIdx}
                          className="neu-inset rounded-[16px] p-4 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-800">{s.name}</span>
                            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full neu-button text-slate-900">
                              {s.level}
                            </span>
                          </div>

                          <div className="w-full h-2 rounded-full neu-inset overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: s.level }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: sIdx * 0.1 }}
                              className="h-full bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-full"
                            ></motion.div>
                          </div>

                          <p className="text-xs text-slate-600 font-medium leading-relaxed">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-300/40 flex items-center justify-between text-xs text-slate-600 font-mono">
                    <span className="flex items-center gap-1 text-xs font-medium text-slate-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Lab & Project Verified
                    </span>
                    <span className="text-xs font-bold text-slate-700">
                      {group.skills.length} core competencies
                    </span>
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
