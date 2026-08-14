"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronRight,
  ChevronLeft,
  Terminal,
  MapPin,
  Check,
  Copy,
  Wrench,
  BookOpen,
  Cpu,
} from "lucide-react"

export default function PortfolioHero() {
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const [time, setTime] = useState({ hours: "12", minutes: "00", seconds: "00", date: "" })
  const [activeCodeTab, setActiveCodeTab] = useState<"mech" | "fea" | "cnc">("mech")
  const [asciiKey, setAsciiKey] = useState(0)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [sparkleToast, setSparkleToast] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("faheemali3724@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSparkleClick = () => {
    setSparkleToast(true)
    setTimeout(() => setSparkleToast(false), 3000)
  }

  const roles = [
    "Mechanical Engineer",
    "Embedded Systems & IoT Trainee",
    "Precision Machining Trainee",
  ]

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      setTime({
        hours: String(now.getHours()).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        seconds: String(now.getSeconds()).padStart(2, "0"),
        date: now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      })
    }
    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[loopNum % roles.length]
      if (isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length - 1))
        setTypingSpeed(40)
      } else {
        setTypedText(currentRole.substring(0, typedText.length + 1))
        setTypingSpeed(100)
      }

      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2200)
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(300)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [typedText, isDeleting, loopNum, typingSpeed])

  // Calculate clock hands angle
  const hoursNum = parseInt(time.hours) % 12
  const minsNum = parseInt(time.minutes)
  const secsNum = parseInt(time.seconds) || 0
  const hourDeg = (hoursNum + minsNum / 60) * 30
  const minuteDeg = (minsNum + secsNum / 60) * 6
  const secondDeg = secsNum * 6

  const tickAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]

  return (
    <section className="pt-14 md:pt-3 pb-4 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Frame with Concentric 56px Radius & Symmetrical Padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="neu-raised rounded-[28px] sm:rounded-[40px] p-4 sm:p-8 space-y-6 sm:space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Column - Concentric 24px Cards */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 flex flex-col justify-start">
              
              {/* GitHub ASCII Art Portrait Container */}
              <div className="neu-raised rounded-[20px] sm:rounded-[24px] p-4 sm:p-6">
                <div className="w-full neu-inset rounded-[14px] sm:rounded-[16px] p-3 sm:p-4 flex items-center justify-center overflow-hidden min-h-[200px] sm:min-h-[240px]">
                  <img
                    key={asciiKey}
                    src={`/images/ascii.svg?v=${asciiKey}`}
                    alt="Faheem Ali ASCII Portrait"
                    className="w-full h-auto max-w-[460px] object-contain block mx-auto shrink-0"
                  />
                </div>
              </div>



              {/* Engineering Quote Container */}
              <div className="neu-raised rounded-[20px] sm:rounded-[24px] p-3.5 sm:p-4 text-center flex items-center justify-center">
                <p className="text-[11px] sm:text-xs font-mono font-bold text-slate-700 italic tracking-tight">
                  “Torque, tension, and a little stubbornness.”
                </p>
              </div>

              {/* Neumorphic Social Buttons Row */}
              <div className="flex items-center justify-around gap-2 sm:gap-3 py-1">
                <a
                  href="https://github.com/Faheem2641"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full neu-button flex items-center justify-center text-slate-700 hover:text-slate-950 hover:scale-105 active:scale-95 transition-all group"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800 group-hover:scale-110 transition-transform" />
                </a>

                <a
                  href="https://www.linkedin.com/in/faheem-ali-b87293373/?skipRedirect=true"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full neu-button flex items-center justify-center text-slate-700 hover:text-slate-950 hover:scale-105 active:scale-95 transition-all group"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-sky-700 group-hover:scale-110 transition-transform" />
                </a>

                <div className="relative">
                  <button
                    onClick={handleCopyEmail}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full neu-button flex items-center justify-center text-slate-700 hover:text-slate-950 hover:scale-105 active:scale-95 transition-all group"
                    aria-label="Copy Email Address"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-topping" />
                    ) : (
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 group-hover:scale-110 transition-transform" />
                    )}
                  </button>
                  {copiedEmail && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 bg-topping text-white text-[10px] font-mono py-1 px-2.5 rounded-lg whitespace-nowrap shadow-md z-30 font-bold"
                    >
                      Email copied!
                    </motion.div>
                  )}
                </div>

                <a
                  href="#contact"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full neu-button flex items-center justify-center text-slate-700 hover:text-slate-950 hover:scale-105 active:scale-95 transition-all group"
                  aria-label="Contact Form"
                  title="Send Message"
                >
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right Column - Hero Main Presentation */}
            <div className="lg:col-span-7 neu-raised rounded-[20px] sm:rounded-[24px] p-4 sm:p-8 flex flex-col justify-start space-y-4 sm:space-y-5">
              
              <div className="space-y-3 sm:space-y-3.5">

                {/* Main Headline */}
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                    Hi, I'm <span className="text-topping">Faheem Ali</span>
                  </h1>
                  <div className="h-7 sm:h-8 flex items-center overflow-hidden">
                    <span className="text-sm sm:text-xl lg:text-2xl font-bold font-mono text-topping leading-none truncate">
                      {typedText}
                    </span>
                    <span className="w-0.5 h-4 sm:h-5 bg-topping animate-pulse ml-1 shrink-0"></span>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl text-justify [text-justify:inter-word]">
                  Merging physical mechanical design, precision manufacturing, & thermal optimization with embedded IoT robotics, C++ algorithms, & web systems. Focused on robust engineering and functional innovation.
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
                  <a
                    href="#projects"
                    className="neu-button px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-bold text-topping hover:scale-105 transition-transform flex items-center gap-2"
                  >
                    <span>View Showcase</span>
                    <ArrowRight className="w-4 h-4 text-topping" />
                  </a>

                  <a
                    href="#contact"
                    className="neu-button px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-slate-500" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>

              {/* Engineering Console Panel (Mechanical, FEA & Manufacturing Spec) */}
              <div className="neu-inset rounded-[16px] p-3 sm:p-4 space-y-3 max-w-full overflow-hidden">
                {/* Console Tab Bar */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 pb-3 border-b border-slate-300/40">
                  <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar max-w-full p-1.5 -m-1.5">
                    <button
                      onClick={() => setActiveCodeTab("mech")}
                      className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold shrink-0 transition-all ${
                        activeCodeTab === "mech"
                          ? "neu-button-active text-topping"
                          : "neu-raised-sm text-slate-700 hover:text-slate-950 active:scale-95"
                      }`}
                    >
                      mechanical-spec.ts
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("fea")}
                      className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold shrink-0 transition-all ${
                        activeCodeTab === "fea"
                          ? "neu-button-active text-topping"
                          : "neu-raised-sm text-slate-700 hover:text-slate-950 active:scale-95"
                      }`}
                    >
                      3d-printing.ts
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("cnc")}
                      className={`px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-bold shrink-0 transition-all ${
                        activeCodeTab === "cnc"
                          ? "neu-button-active text-topping"
                          : "neu-raised-sm text-slate-700 hover:text-slate-950 active:scale-95"
                      }`}
                    >
                      cnc-milling.ts
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0 hidden sm:flex">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                  </div>
                </div>

                {/* Console Engineering View */}
                <div className="font-mono text-[10px] sm:text-xs text-slate-700 leading-normal overflow-x-auto max-w-full no-scrollbar">
                  {activeCodeTab === "mech" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-0.5">
                      <p><span className="text-purple-600 font-bold">const</span> <span className="text-slate-900 font-bold">mechanicalEngineer</span> = &#123;</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">cadTools:</span> [<span className="text-topping font-bold">"SolidWorks"</span>, <span className="text-topping font-bold">"Autodesk Inventor"</span>],</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">feaTools:</span> [<span className="text-topping font-bold">"ANSYS Mechanical"</span>, <span className="text-topping font-bold">"Thermal Modeling"</span>],</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">standards:</span> [<span className="text-topping font-bold">"GD&T (ISO/ASME)"</span>, <span className="text-topping font-bold">"DFM/DFA"</span>]</p>
                      <p>&#125;;</p>
                    </motion.div>
                  )}

                  {activeCodeTab === "fea" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-0.5">
                      <p><span className="text-purple-600 font-bold">const</span> <span className="text-slate-900 font-bold">rapidPrototyping</span> = &#123;</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">processes:</span> [<span className="text-topping font-bold">"FDM 3D Printing"</span>, <span className="text-topping font-bold">"Rapid Prototyping"</span>],</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">electronics:</span> [<span className="text-topping font-bold">"PCB Etching"</span>, <span className="text-topping font-bold">"ATmega328 / ESP32"</span>],</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">verification:</span> [<span className="text-topping font-bold">"Thermal Profiling"</span>, <span className="text-topping font-bold">"Lab Validation"</span>]</p>
                      <p>&#125;;</p>
                    </motion.div>
                  )}

                  {activeCodeTab === "cnc" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-0.5">
                      <p><span className="text-purple-600 font-bold">const</span> <span className="text-slate-900 font-bold">machiningOps</span> = &#123;</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">operations:</span> [<span className="text-topping font-bold">"5-Axis CNC Milling"</span>, <span className="text-topping font-bold">"Precision Tooling"</span>],</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">machining:</span> [<span className="text-topping font-bold">"Adaptive Roughing"</span>, <span className="text-topping font-bold">"Carbide Endmilling"</span>, <span className="text-topping font-bold">"Manual Lathe & Mill"</span>],</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">qualityControl:</span> [<span className="text-topping font-bold">"G-Code Verification"</span>, <span className="text-topping font-bold">"Micrometer & Calipers"</span>],</p>
                      <p>&#125;;</p>
                    </motion.div>
                  )}
                </div>
              </div>



            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
