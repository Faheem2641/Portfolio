"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
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

// Hero section component with portrait image display
function TypedRoleText() {
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const roles = [
    "Mechanical Engineer",
    "Embedded Systems & IoT Trainee",
    "Precision Machining Trainee",
  ]

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

  return (
    <div className="h-7 sm:h-8 flex items-center overflow-hidden">
      <span className="text-sm sm:text-xl lg:text-2xl font-bold font-mono text-topping leading-none truncate">
        {typedText}
      </span>
      <span className="w-0.5 h-4 sm:h-5 bg-topping animate-pulse ml-1 shrink-0"></span>
    </div>
  )
}

export default function PortfolioHero() {
  const [activeCodeTab, setActiveCodeTab] = useState<"mech" | "fea" | "cnc">("mech")
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

  return (
    <section className="pt-14 md:pt-3 pb-4 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Frame with Concentric 56px Radius & Symmetrical Padding */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="neu-raised rounded-[28px] sm:rounded-[40px] p-4 sm:p-8 space-y-6 sm:space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Column - Concentric 24px Cards */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 flex flex-col justify-start">
              
              {/* Portrait Image Container */}
              <div className="neu-raised rounded-[20px] sm:rounded-[24px] p-3.5 sm:p-5">
                <div className="relative w-full h-[280px] sm:h-[320px] neu-inset rounded-[16px] overflow-hidden p-2">
                  <img
                    src="/images/Generated Image November 15, 2025 - 4_50PM.png"
                    alt="Faheem Ali Portrait"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-top rounded-[12px] shadow-sm transition-transform duration-300 scale-[1.15] hover:scale-[1.20]"
                  />
                </div>
              </div>

              {/* Engineering Quote Container */}
              <div className="neu-raised rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 text-center flex items-center justify-center">
                <p className="text-xs sm:text-sm md:text-base font-mono font-extrabold text-topping italic tracking-tight">
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
                  <TypedRoleText />
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
                    href="/Faheem_Ali_CV.pdf"
                    download="Faheem_Ali_CV.pdf"
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
