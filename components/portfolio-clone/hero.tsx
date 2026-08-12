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
} from "lucide-react"

export default function PortfolioHero() {
  const [typedText, setTypedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const [time, setTime] = useState({ hours: "12", minutes: "00", seconds: "00", date: "" })
  const [activeCodeTab, setActiveCodeTab] = useState<"stack" | "agent" | "config">("stack")
  const [asciiKey, setAsciiKey] = useState(0)

  const roles = [
    "Mechanical & Manufacturing Engineer",
    "Embedded Systems & IoT Specialist",
    "Precision Machining Trainee",
    "NUST SMME Engineer",
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
  const hourDeg = (hoursNum + minsNum / 60) * 30
  const minuteDeg = minsNum * 6

  return (
    <section className="pt-14 md:pt-3 pb-4 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Frame with Concentric 56px Radius & Symmetrical 24px Padding (p-6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="neu-raised rounded-[40px] p-6 sm:p-8 space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column - Concentric 32px Cards */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              {/* GitHub ASCII Art Portrait Container (Top Left Corner) */}
              <div className="neu-raised rounded-[24px] p-6">
                <div className="w-full neu-inset rounded-[16px] p-4 flex items-center justify-center overflow-hidden min-h-[240px]">
                  <img
                    key={asciiKey}
                    src={`/images/ascii.svg?v=${asciiKey}`}
                    alt="Faheem Ali ASCII Portrait"
                    className="w-full h-auto max-w-[460px] object-contain block mx-auto shrink-0"
                  />
                </div>
              </div>

              {/* Analogue & Digital Clock Widget (Under ASCII Portrait) */}
              <div className="neu-raised rounded-[24px] p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Analog Clock Dial */}
                  <div className="w-20 h-20 rounded-full neu-inset flex items-center justify-center relative shrink-0">
                    <div className="absolute top-1 text-[8px] font-mono text-slate-400 font-bold">12</div>
                    <div className="absolute right-1 text-[8px] font-mono text-slate-400 font-bold">3</div>
                    <div className="absolute bottom-1 text-[8px] font-mono text-slate-400 font-bold">6</div>
                    <div className="absolute left-1 text-[8px] font-mono text-slate-400 font-bold">9</div>

                    <div
                      className="absolute w-1 h-5 bg-slate-800 rounded-full origin-bottom bottom-1/2 transition-transform duration-500"
                      style={{ transform: `rotate(${hourDeg}deg)` }}
                    ></div>
                    <div
                      className="absolute w-0.5 h-7 bg-slate-800 rounded-full origin-bottom bottom-1/2 transition-transform duration-300"
                      style={{ transform: `rotate(${minuteDeg}deg)` }}
                    ></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-900 z-10 neu-raised"></div>
                  </div>

                  <div>
                    <div className="text-xl font-black font-mono text-slate-800 tracking-tight">
                      {time.hours}:{time.minutes}
                      <span className="text-xs text-slate-700 font-normal ml-1">{time.seconds}s</span>
                    </div>
                    <p className="text-xs font-mono text-slate-500 font-semibold mt-0.5">{time.date}</p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
                        Available For Projects
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full neu-button flex items-center justify-center text-slate-600 shrink-0">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
              </div>

              {/* Bottom Profile Summary Card (Radius: 24px, Symmetrical p-6 Padding) */}
              <div className="neu-raised rounded-[24px] p-6 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full neu-inset flex items-center justify-center text-slate-800 font-mono font-bold text-base">
                    FA
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Faheem Ali</h4>
                    <p className="text-xs text-slate-600 font-mono font-medium">Mechanical & Manufacturing • NUST SMME</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-10 h-10 rounded-full neu-button flex items-center justify-center text-slate-700 hover:text-slate-900"
                  aria-label="Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Column - Hero Main Presentation (Radius: 24px, Symmetrical p-8 Padding) */}
            <div className="lg:col-span-7 neu-raised rounded-[24px] p-6 sm:p-8 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">

                {/* Main Headline */}
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-800 leading-none">
                    Hi, I'm <span className="text-slate-900">Faheem Ali</span>
                  </h1>
                  <div className="h-10 flex items-center">
                    <span className="text-xl sm:text-3xl font-bold font-mono text-slate-700">
                      {typedText}
                    </span>
                    <span className="w-0.5 h-7 bg-slate-800 animate-pulse ml-1"></span>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl text-justify [text-justify:inter-word]">
                  Merging physical mechanical design, precision manufacturing, & thermal optimization with <strong className="text-slate-900 font-bold">embedded IoT robotics, C++ algorithms, & web systems</strong>. Focused on robust engineering and functional innovation.
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#projects"
                    className="neu-button px-6 py-3.5 rounded-full text-xs font-bold text-slate-800 hover:text-slate-900 flex items-center gap-2"
                  >
                    <span>View Showcase</span>
                    <ArrowRight className="w-4 h-4 text-slate-700" />
                  </a>

                  <a
                    href="#contact"
                    className="neu-button px-6 py-3.5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-900 flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-slate-500" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>

              {/* Code Console Panel (Nested Inset: Concentric 16px Radius = 32px Card - 16px Padding) */}
              <div className="neu-inset rounded-[16px] p-4 space-y-3">
                {/* Console Tab Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-300/40">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveCodeTab("stack")}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                        activeCodeTab === "stack"
                          ? "neu-button-active text-slate-900"
                          : "text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      developer-stack.ts
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("agent")}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                        activeCodeTab === "agent"
                          ? "neu-button-active text-slate-900"
                          : "text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      ai-agent.py
                    </button>
                    <button
                      onClick={() => setActiveCodeTab("config")}
                      className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                        activeCodeTab === "config"
                          ? "neu-button-active text-slate-900"
                          : "text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      system.json
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                  </div>
                </div>

                {/* Console Code View */}
                <div className="font-mono text-xs text-slate-700 leading-relaxed min-h-[90px]">
                  {activeCodeTab === "stack" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                      <p><span className="text-purple-600 font-bold">const</span> <span className="text-slate-900 font-bold">engineer</span> = &#123;</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">name:</span> <span className="text-emerald-700 font-bold">"Faheem Ali"</span>,</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">education:</span> <span className="text-emerald-700 font-bold">"NUST Islamabad"</span>,</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">coreTech:</span> [<span className="text-amber-700 font-bold">"Next.js 15"</span>, <span className="text-amber-700 font-bold">"TypeScript"</span>, <span className="text-amber-700 font-bold">"Python"</span>, <span className="text-amber-700 font-bold">"LangChain"</span>],</p>
                      <p>&#125;;</p>
                    </motion.div>
                  )}

                  {activeCodeTab === "agent" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                      <p><span className="text-purple-600 font-bold">class</span> <span className="text-slate-900 font-bold">AIAgentWorkflow</span>:</p>
                      <p className="pl-4"><span className="text-slate-700 font-bold">def</span> <span className="text-emerald-700 font-bold">execute_rag_pipeline</span>(query: str):</p>
                      <p className="pl-8 text-slate-700 font-medium">embeddings = openai.embed(query)</p>
                      <p className="pl-8 text-slate-700 font-medium">results = vector_db.similarity_search(embeddings)</p>
                      <p className="pl-8 text-amber-700 font-bold">return langchain.synthesize(results)</p>
                    </motion.div>
                  )}

                  {activeCodeTab === "config" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-1">
                      <p>&#123;</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">"status":</span> <span className="text-emerald-700 font-bold">"Operational"</span>,</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">"availability":</span> <span className="text-slate-800 font-bold">"Immediate Contracts & Roles"</span>,</p>
                      <p className="pl-4"><span className="text-slate-600 font-bold">"location":</span> <span className="text-slate-800 font-bold">"Islamabad / Global Remote"</span></p>
                      <p>&#125;</p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Concentric Stat Pills Bar (Nested Insets: Concentric 16px Radius) */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-300/40">
                <div className="neu-inset-sm p-4 rounded-[16px] text-center">
                  <div className="text-lg font-black text-slate-800">15+</div>
                  <div className="text-xs font-mono text-slate-700 font-bold uppercase">Projects Delivered</div>
                </div>
                <div className="neu-inset-sm p-4 rounded-[16px] text-center">
                  <div className="text-lg font-black text-slate-800">3+</div>
                  <div className="text-xs font-mono text-slate-700 font-bold uppercase">Years Exp</div>
                </div>
                <div className="neu-inset-sm p-4 rounded-[16px] text-center">
                  <div className="text-lg font-black text-slate-800">100%</div>
                  <div className="text-xs font-mono text-slate-700 font-bold uppercase">Satisfaction</div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
