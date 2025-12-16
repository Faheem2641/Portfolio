"use client"

import { useState, useEffect } from "react"
import { InteractiveClean } from "@/components/interactive-clean"
import { motion } from "framer-motion"

interface AnimatedCounterProps {
  target: number
  label: string
  unit?: string
}

function AnimatedCounter({ target, label, unit = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-right">
      <div className="text-xs uppercase tracking-wider text-black/60 mb-2">{label}</div>
      <div className="text-6xl md:text-8xl font-black text-black">
        {count}
        {unit}
      </div>
    </div>
  )
}

export default function BikeShowcase() {
  return (
    <section className="relative bg-lorenzo-dark px-6 md:px-12 overflow-hidden py-16 mt-24">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/5] md:aspect-square max-w-lg"
          >
            <InteractiveClean />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
