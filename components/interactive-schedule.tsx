"use client"

import { motion } from "framer-motion"
import { Code, Settings, Terminal, Wrench } from "lucide-react"

export function InteractiveSchedule() {
  const mechanicalSkills = [
    "SolidWorks",
    "AutoCAD",
    "ANSYS",
    "GD&T",
    "Machining",
    "3D Printing",
  ]

  const webSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Git",
  ]

  return (
    <div className="w-full bg-lorenzo-dark py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-none mb-6 text-lorenzo-text-light"
          >
            My{" "}
            <span className="text-lorenzo-accent font-brier">Skills</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl font-light text-white opacity-80 max-w-3xl mx-auto"
          >
            Bridging the gap between physical and digital engineering with a diverse skillset.
          </motion.p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Mechanical Engineering Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#162439] border-2 border-white/10 rounded-3xl p-10 md:p-12 hover:border-lorenzo-accent/50 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-lorenzo-accent/10 flex flex-col items-start h-full"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="p-4 bg-lorenzo-accent/10 rounded-2xl border border-lorenzo-accent/20 group-hover:bg-lorenzo-accent/20 transition-colors">
                <Settings className="w-10 h-10 text-lorenzo-accent" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase text-lorenzo-text-light leading-none">
                  Hardware
                </h3>
                <span className="block text-sm font-bold text-lorenzo-accent/80 mt-2 uppercase tracking-widest">
                  Mechanical Engineering
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto w-full">
              {mechanicalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-lorenzo-accent/10 px-5 py-3 rounded-xl border border-lorenzo-accent/30 hover:bg-lorenzo-accent/20 transition-all hover:scale-105"
                >
                  <Wrench className="w-4 h-4 text-lorenzo-accent" />
                  <span className="text-base font-bold text-lorenzo-accent">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Web Development Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#162439] border-2 border-white/10 rounded-3xl p-10 md:p-12 hover:border-lorenzo-accent/50 transition-all duration-300 group shadow-lg hover:shadow-2xl hover:shadow-lorenzo-accent/10 flex flex-col items-start h-full"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="p-4 bg-lorenzo-accent/10 rounded-2xl border border-lorenzo-accent/20 group-hover:bg-lorenzo-accent/20 transition-colors">
                <Code className="w-10 h-10 text-lorenzo-accent" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black uppercase text-lorenzo-text-light leading-none">
                  Software
                </h3>
                <span className="block text-sm font-bold text-lorenzo-accent/80 mt-2 uppercase tracking-widest">
                  Web Development
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto w-full">
              {webSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 bg-lorenzo-accent/10 px-5 py-3 rounded-xl border border-lorenzo-accent/30 hover:bg-lorenzo-accent/20 transition-all hover:scale-105"
                >
                  <Terminal className="w-4 h-4 text-lorenzo-accent" />
                  <span className="text-base font-bold text-lorenzo-accent">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
