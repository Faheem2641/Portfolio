"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import InteractivePortrait from "./interactive-portrait"
import SignatureMarqueeSection from "./signature-marquee-section"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)

  // Wait for preloader (2.5s + buffer)
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 2600)
    return () => clearTimeout(timer)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Phase 1: Shrink Portrait (0% -> 40%)
  // Maps scroll 0-0.4 to scale 1-0.45
  const rawScale = useTransform(smoothProgress, [0, 0.4], [1, 0.45])
  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Phase 2: Text Parallax (0% -> 80%)
  // Text moves slightly to create depth
  const textOpacity = useTransform(smoothProgress, [0, 0.3], [0, 1])

  // Phase 3: Exit (60% -> 100%)
  // Everything slides up to reveal next section
  const exitY = useTransform(smoothProgress, [0.6, 1], ["0%", "-100%"])
  const exitOpacity = useTransform(smoothProgress, [0.7, 1], [1, 0])

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-[#1a1f1a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-background">
        {/* Background Grid Layer - Always visible but moves/fades */}
        <div
          className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#e8e8e3 1px, transparent 1px), linear-gradient(90deg, #e8e8e3 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        {/* Decorative Corner Text (Fades out on scroll) */}
        <motion.div
          className="absolute inset-0 z-0 w-full h-full p-8 md:p-12 flex flex-col justify-between pointer-events-none mix-blend-difference"
          style={{ opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]) }}
        >
          <div className="flex justify-between items-start">
            <span className="font-mono text-xs md:text-sm tracking-widest text-lorenzo-text-light/60">EST. 2025</span>
            <span className="font-mono text-xs md:text-sm tracking-widest text-lorenzo-text-light/60 text-right">
              SYSTEMS &<br />MECHANICS
            </span>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs md:text-sm tracking-widest text-lorenzo-text-light/60">ISLAMABAD, PK</span>
              <span className="font-mono text-xs md:text-sm tracking-widest text-lorenzo-text-light/60">33.6844° N, 73.0479° E</span>
            </div>

            {/* Scroll Indicator */}
            <div className="bg-[#162439] border border-white/10 rounded-full px-5 py-3 flex items-center gap-3 animate-bounce shadow-lg cursor-pointer hover:bg-[#162439]/80 transition-colors">
              <span className="font-mono text-[10px] uppercase tracking-widest text-lorenzo-text-light font-bold">Scroll</span>
              <div className="bg-lorenzo-accent/10 rounded-full p-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lorenzo-accent">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Background Text Layer (Marquee) */}
        <motion.div
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          style={{
            y: exitY,
            opacity: exitOpacity,
          }}
        >
          <motion.div
            className="w-full h-full flex items-center justify-center"
            style={{ opacity: textOpacity }}
          >
            <SignatureMarqueeSection />
          </motion.div>
        </motion.div>

        {/* Foreground Portrait Layer */}
        <motion.div
          className="relative z-10 w-full h-full flex items-center justify-center"
          style={{
            scale: scale,
            y: exitY,
            opacity: exitOpacity,
          }}
        >
          {isReady && <InteractivePortrait />}
        </motion.div>
      </div>
    </section>
  )
}
