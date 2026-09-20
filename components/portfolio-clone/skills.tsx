"use client"

import { motion } from "framer-motion"
import { skillsData } from "@/data/skills"

export default function PortfolioSkills() {
  const allSkills = skillsData.flatMap((group) => group.skills)

  return (
    <section id="skills" className="py-5 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame */}
        <div className="neu-raised rounded-[28px] sm:rounded-[40px] p-5 sm:p-8 space-y-6 sm:space-y-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">
              Technical <span className="text-topping">Skills</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              What I know. What I build with.
            </p>
          </div>

          {/* Single Unified Skills Flex Container */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 pt-2">
            {allSkills.map((s, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.015 }}
                className="neu-inset-sm px-4 py-2.5 rounded-[16px] text-slate-800 text-xs sm:text-sm font-bold flex items-center gap-2.5 cursor-default hover-scale"
              >
                <span className="w-2 h-2 rounded-full bg-topping shrink-0" />
                <span>{s.name}</span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

