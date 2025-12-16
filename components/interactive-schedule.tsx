"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const scheduleData = [
  {
    id: 1,
    round: "1",
    title: "Manufacture of Industrial Equipment",
    description: "From design through fabrication, erection & commissioning - we deliver complete electrical solutions for industrial projects.",
    image: "/images/faheem-ali-podio3.png",
  },
  {
    id: 2,
    round: "2",
    title: "Medical Equipment Design and Manufacture",
    description: "Advanced medical equipment design and manufacturing and solutions.",
    image: "/images/faheem-ali-podio5.png",
  },
  {
    id: 3,
    round: "3",
    title: "Lighting Solution Design and Manufacture",
    description: "Providing optic solution design and manufacture for advanced optical systems.",
    image: "/images/faheem-ali-podio4.png",
  },
  {
    id: 4,
    round: "4",
    title: "Electronic Product Design and Manufacture",
    description: "Optimize your products on-demand to secure essential certifications.",
    image: "/images/faheem-ali-podio7.png",
  },
  {
    id: 5,
    round: "5",
    title: "Solutions for Holography",
    description: "We provide graphics, photo-realistic rendering and computational photography services for diverse visual needs.",
    image: "/images/faheem-ali-podio3.png",
  },
]

export function InteractiveSchedule() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null)

  return (
    <div className="w-full bg-[#0a0e1a] py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
            <svg className="w-full h-full absolute" style={{ minHeight: '100%' }}>
              <path
                d={`M 15% 15% L 35% 15% L 35% 35% L 65% 35% L 65% 55% L 35% 55% L 35% 75% L 65% 75% L 65% 85%`}
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="2"
                fill="none"
                className="hidden md:block"
              />
            </svg>
          </div>

          {/* Items */}
          <div className="space-y-12 md:space-y-0">
            {scheduleData.map((item, index) => {
              const isEven = index % 2 === 0
              const isLeft = isEven

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'
                    } mb-16 md:mb-24`}
                  onMouseEnter={() => setHoveredEvent(item.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                >
                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] ${isLeft ? 'md:text-right md:pr-20' : 'md:text-left md:pl-20'
                      }`}
                  >
                    <div className="bg-[#0f1420] border border-white/10 rounded-lg p-6 md:p-8 hover:border-lorenzo-accent/50 transition-all duration-300 group">
                      <h3 className="font-[family-name:var(--font-oswald)] font-bold text-2xl md:text-3xl text-white mb-3 group-hover:text-lorenzo-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Number Circle - Centered */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-[#1a2332] border-4 border-[#0a0e1a] ring-2 ring-blue-500/30 z-10">
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-2xl text-white">
                      {item.round}
                    </span>
                  </div>

                  {/* Mobile Number */}
                  <div className="md:hidden absolute -left-2 top-6 flex items-center justify-center w-12 h-12 rounded-full bg-[#1a2332] border-4 border-[#0a0e1a] ring-2 ring-blue-500/30">
                    <span className="font-[family-name:var(--font-oswald)] font-bold text-xl text-white">
                      {item.round}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Hover Image Preview */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 w-[300px] md:w-[400px] aspect-[3/4] mix-blend-normal">
        {hoveredEvent && (
          <motion.div
            key={hoveredEvent}
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
            transition={{ duration: 0.15, ease: "backOut" }}
            className="w-full h-full relative rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src={scheduleData.find((d) => d.id === hoveredEvent)?.image || ""}
              alt="Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        )}
      </div>
    </div>
  )
}
