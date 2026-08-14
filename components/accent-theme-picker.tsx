"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette, Check, Sparkles, X } from "lucide-react"

export type AccentPreset = {
  id: string
  name: string
  mainColor: string
  glowColor: string
  bgColor: string
  textColor: string
  ringColor: string
}

export const ACCENT_PRESETS: AccentPreset[] = [
  {
    id: "porcelain",
    name: "Porcelain Blue",
    mainColor: "#3b6998",
    glowColor: "#6796c7",
    bgColor: "rgba(59, 105, 152, 0.10)",
    textColor: "#1d3d61",
    ringColor: "rgba(59, 105, 152, 0.28)",
  },
  {
    id: "ashrose",
    name: "Ash Rose",
    mainColor: "#b86b77",
    glowColor: "#d896a1",
    bgColor: "rgba(184, 107, 119, 0.10)",
    textColor: "#7a3541",
    ringColor: "rgba(184, 107, 119, 0.28)",
  },
  {
    id: "teal",
    name: "Sage Teal",
    mainColor: "#2a9d8f",
    glowColor: "#48cae4",
    bgColor: "rgba(42, 157, 143, 0.10)",
    textColor: "#1b4332",
    ringColor: "rgba(42, 157, 143, 0.28)",
  },
  {
    id: "indigo",
    name: "Steel Blue",
    mainColor: "#3b82f6",
    glowColor: "#60a5fa",
    bgColor: "rgba(59, 130, 246, 0.10)",
    textColor: "#1e40af",
    ringColor: "rgba(59, 130, 246, 0.28)",
  },
  {
    id: "emerald",
    name: "Soft Emerald",
    mainColor: "#10b981",
    glowColor: "#34d399",
    bgColor: "rgba(16, 185, 129, 0.10)",
    textColor: "#065f46",
    ringColor: "rgba(16, 185, 129, 0.28)",
  },
  {
    id: "ochre",
    name: "Warm Ochre",
    mainColor: "#d97706",
    glowColor: "#f59e0b",
    bgColor: "rgba(217, 119, 6, 0.10)",
    textColor: "#92400e",
    ringColor: "rgba(217, 119, 6, 0.28)",
  },
  {
    id: "plum",
    name: "Muted Violet",
    mainColor: "#8b5cf6",
    glowColor: "#a78bfa",
    bgColor: "rgba(139, 92, 246, 0.10)",
    textColor: "#5b21b6",
    ringColor: "rgba(139, 92, 246, 0.28)",
  },
  {
    id: "slate",
    name: "Graphite Slate",
    mainColor: "#334155",
    glowColor: "#64748b",
    bgColor: "rgba(51, 65, 85, 0.08)",
    textColor: "#0f172a",
    ringColor: "rgba(51, 65, 85, 0.22)",
  },
]

export default function AccentThemePicker() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeAccent, setActiveAccent] = useState<string>("porcelain")

  const applyAccent = (preset: AccentPreset) => {
    setActiveAccent(preset.id)
    const root = document.documentElement
    root.style.setProperty("--neu-accent", preset.mainColor)
    root.style.setProperty("--neu-accent-glow", preset.glowColor)
    root.style.setProperty("--neu-accent-bg", preset.bgColor)
    root.style.setProperty("--neu-accent-text", preset.textColor)
    root.style.setProperty("--neu-accent-ring", preset.ringColor)

    try {
      localStorage.setItem("portfolio_accent_theme", preset.id)
    } catch (e) {
      // Ignore localStorage errors
    }
  }

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio_accent_theme")
      if (savedTheme) {
        const preset = ACCENT_PRESETS.find((p) => p.id === savedTheme)
        if (preset) {
          applyAccent(preset)
          return
        }
      }
    } catch (e) {
      // Fallback
    }
    applyAccent(ACCENT_PRESETS[0])
  }, [])

  const currentPreset = ACCENT_PRESETS.find((p) => p.id === activeAccent) || ACCENT_PRESETS[0]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 12 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="mb-3 neu-raised p-4 rounded-[22px] shadow-2xl w-72 space-y-3 border border-white/50"
          >
            <div className="flex items-center justify-between border-b border-slate-300/50 pb-2.5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" style={{ color: currentPreset.mainColor }} />
                <h4 className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">Accent Tone</h4>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 neu-button rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              Select a soft, professional accent tone for portfolio badges, icons, and indicators:
            </p>

            <div className="grid grid-cols-4 gap-2 pt-1">
              {ACCENT_PRESETS.map((preset) => {
                const isSelected = activeAccent === preset.id
                return (
                  <button
                    key={preset.id}
                    onClick={() => applyAccent(preset)}
                    className={`group relative p-2 rounded-[14px] flex flex-col items-center gap-1 transition-all cursor-pointer ${
                      isSelected ? "neu-inset ring-2" : "neu-button hover:scale-105"
                    }`}
                    style={{
                      borderColor: isSelected ? preset.mainColor : "transparent",
                    }}
                    title={preset.name}
                  >
                    <span
                      className="w-4.5 h-4.5 rounded-full shadow-inner flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: preset.mainColor }}
                    >
                      {isSelected && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-slate-700 truncate w-full text-center">
                      {preset.name.split(" ")[0]}
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-3 rounded-full neu-button text-slate-800 flex items-center gap-2.5 shadow-lg font-bold text-xs cursor-pointer border border-white/60"
        title="Customize Color Theme Accent"
      >
        <div
          className="w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-sm"
          style={{ backgroundColor: currentPreset.mainColor }}
        >
          <Palette className="w-2 h-2 text-white" />
        </div>
        <span className="font-mono text-[11px] font-bold tracking-wider text-slate-800">ACCENT TONE</span>
      </motion.button>
    </div>
  )
}
