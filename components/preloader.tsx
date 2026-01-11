"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    document.body.style.overflow = "hidden"

    const timer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = "unset"
    }, 3500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-lorenzo-dark overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(#e8e8e3 1px, transparent 1px), linear-gradient(90deg, #e8e8e3 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative z-10">
            <div className="relative">
              {/* Outlined Text (Background Layer) */}
              <h1
                className="font-brier text-6xl md:text-8xl lg:text-9xl tracking-tight uppercase text-transparent"
                style={{ WebkitTextStroke: '1px var(--color-lorenzo-accent)' }}
              >
                Faheem Ali
              </h1>

              {/* Filled Text (Foreground Layer - Animating Width) */}
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
              >
                <h1 className="font-brier text-6xl md:text-8xl lg:text-9xl tracking-tight uppercase text-lorenzo-accent">
                  Faheem Ali
                </h1>
              </motion.div>
            </div>

            {/* Tagline / Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 flex justify-between items-center px-2"
            >
              <span className="font-mono text-xs text-lorenzo-accent/60 tracking-widest uppercase">Portfolio 2025</span>
              <span className="font-mono text-xs text-lorenzo-accent/60 tracking-widest uppercase">Initializing...</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
