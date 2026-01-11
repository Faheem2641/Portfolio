"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const handIcons = [
  "/images/icon/icon-hand1.png",
  "/images/icon/icon-hand2.png",
  "/images/icon/icon-hand3.png",
  "/images/icon/icon-hand4.png",
  "/images/icon/icon-hand6.png",
]

export default function SocialSection() {
  const [currentIconIndex, setCurrentIconIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prev) => (prev + 1) % handIcons.length)
    }, 1200) // Slower for smoother flow
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="social-section" className="relative bg-[#F5F1E8] text-black py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative h-32 flex items-center justify-center mt-8">
          {/* Replaced static image with animated icon switcher */}
          <div className="relative h-full w-auto max-h-[60px] aspect-square">
            {handIcons.map((icon, index) => (
              <motion.div
                key={icon}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIconIndex ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={icon || "/placeholder.svg"}
                  className="h-full w-full object-contain"
                  alt="Animated hand icon"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-2.5"
        >
          <h2 className="text-4xl md:text-7xl font-black uppercase leading-none leading-[2.25] text-lorenzo-dark lg:text-6xl">
            WHAT'S UP
          </h2>
          <h3 className="text-3xl md:text-6xl font-brier mt-2 lg:text-6xl leading-10 text-lorenzo-dark">ON SOCIALS</h3>
        </motion.div>

        {/* Social Cards Removed */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-2 mt-8"
        >
          <p className="text-lg md:text-xl font-serif text-black/80 font-medium">Let’s Connect</p>

          <div className="flex justify-center mt-8">
            <div className="bg-[#162439] border border-white/10 rounded-full p-2 flex flex-wrap justify-center gap-2 shadow-2xl max-w-4xl mx-auto">
              {[
                { label: "EMAIL", href: "mailto:fali.ug24smme@student.nust.edu.pk" },
                { label: "GITHUB", href: "https://github.com/Faheem2641" },
                { label: "LINKEDIN", href: "https://www.linkedin.com/in/faheem-ali-b87293373/" },
                { label: "WHATSAPP", href: "https://wa.me/923304188776" },
                { label: "RESUME", href: "#" }
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex items-center justify-center bg-[#e8e8e3] rounded-full px-6 py-3 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <span className="font-black uppercase text-xs md:text-sm tracking-widest text-[#162439]">{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
