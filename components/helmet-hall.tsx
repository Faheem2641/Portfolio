"use client"

import { useState } from "react"

import { motion } from "framer-motion"

const helmets = [
  { id: 1, name: "Season", year: "2025", image: "/images/helmets/helmet-collection1.png" },
  { id: 2, name: "Dark Glitter", year: "2025", image: "/images/helmets/helmet-collection2.png" },
  { id: 4, name: "Season", year: "2024", image: "/images/helmets/helmet-collection4.png" },
  { id: 7, name: "Season", year: "2025", image: "/images/helmets/helmet-collection7.png" },
  { id: 8, name: "Dark Glitter", year: "2025", image: "/images/helmets/helmet-collection8.png" },
  { id: 20, name: "Season", year: "2021", image: "/images/helmets/helmet-collection20.png" },
]

export default function HelmetHall() {
  const [hoveredHelmet, setHoveredHelmet] = useState<number | null>(null)

  return (
    <section id="helmets" className="relative min-h-screen text-white py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
            <span className="text-white">HELMETS</span>
            <br />
            <span className="text-lorenzo-accent font-brier text-8xl">HALL OF FAME</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 mt-6 max-w-2xl">
            From his iconic blobs to innovative one-off designs, Faheem Ali has always been passionate about designing
            innovative and memorable helmets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {helmets.map((helmet, index) => (
            <motion.div
              key={helmet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.03, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredHelmet(helmet.id)}
              onMouseLeave={() => setHoveredHelmet(null)}
              style={{
                gridRow: index % 4 === 1 ? "span 1" : "auto",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square overflow-hidden rounded-2xl bg-[#0a0a0a] 
                           border-2 border-gray-800 
                           group-hover:border-[#CFFF04] 
                           group-hover:shadow-2xl 
                           group-hover:shadow-[#CFFF04]/20 
                           transition-all duration-300"
              >


                <div className="absolute bottom-4 right-4 text-right">
                  <p className="text-xs md:text-sm font-bold text-white/70 group-hover:text-white transition-colors duration-300">
                    {helmet.name}
                  </p>
                  <p className="text-sm md:text-base font-black text-[#CFFF04] group-hover:scale-110 group-hover:text-white transition-all duration-300 inline-block">
                    {helmet.year}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
