"use client"

import { GraduationCap, Wrench, Cpu, Code2, Sparkles, Terminal } from "lucide-react"

export default function PortfolioAbout() {
  return (
    <section id="about" className="py-12 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical 24px Padding) */}
        <div className="neu-raised rounded-[40px] p-6 sm:p-8 space-y-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-slate-800 font-bold text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>BACKGROUND & EDUCATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
              About <span className="text-slate-900">Me</span>
            </h2>
            <p className="text-slate-600 text-sm font-normal">
              Merging mechanical precision engineering with embedded robotics, control systems, and modern web application development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Story Card Left Column (Concentric 24px Radius, Symmetrical p-6 Padding) */}
            <div className="lg:col-span-7 neu-raised rounded-[24px] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full neu-button flex items-center justify-center text-slate-700">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Mechanical & Systems Engineer
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm">
                  Studying at the <strong className="text-slate-900 font-semibold">NUST School of Mechanical and Manufacturing Engineering (SMME)</strong>, Islamabad. My work bridges physical hardware design, precision machining, thermal optimization, and intelligent embedded software.
                </p>

                <p className="text-slate-600 leading-relaxed text-sm">
                  Experienced across <strong className="text-slate-900">precision tool manufacturing, balsa cantilever surge gate structural analysis, Chevron heat exchanger solar panel cooling</strong>, and real-time <strong className="text-slate-900 font-semibold">ATmega328 / PID self-balancing robotics</strong> and web budget management systems.
                </p>
              </div>

              {/* Education Inset Box (Concentric 16px Radius) */}
              <div className="neu-inset rounded-[16px] p-4 sm:p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full neu-button flex items-center justify-center text-slate-700 shrink-0">
                  <GraduationCap className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">NUST SMME</h4>
                  <p className="text-xs text-slate-700 font-mono font-semibold mt-0.5">Mechanical & Manufacturing Engineering</p>
                  <p className="text-xs text-slate-600 font-medium mt-1">Specialized in Mechanics of Materials, Precision Tool Machining, Thermal Systems, and Mechatronics.</p>
                </div>
              </div>

            </div>

            {/* Capability Feature Cards Right Column (Concentric 24px Radius) */}
            <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
              
              <div className="neu-raised rounded-[24px] p-6 flex items-start gap-4 hover:scale-[1.01] transition-transform">
                <div className="w-12 h-12 rounded-[16px] neu-button flex items-center justify-center text-slate-700 shrink-0">
                  <Wrench className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Precision Machining & CAD</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    SolidWorks 3D CAD modeling, Mathcad structural stress analysis, manual lathe/mill operation, and cutting tool geometry optimization.
                  </p>
                </div>
              </div>

              <div className="neu-raised rounded-[24px] p-6 flex items-start gap-4 hover:scale-[1.01] transition-transform">
                <div className="w-12 h-12 rounded-[16px] neu-button flex items-center justify-center text-slate-700 shrink-0">
                  <Cpu className="w-6 h-6 text-slate-700" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Embedded Control & IoT</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    PID closed-loop control, 6-axis MPU-6050 motion processing, ATmega328 firmware, ultrasonic radar visualization, and automated irrigation.
                  </p>
                </div>
              </div>

              <div className="neu-raised rounded-[24px] p-6 flex items-start gap-4 hover:scale-[1.01] transition-transform">
                <div className="w-12 h-12 rounded-[16px] neu-button flex items-center justify-center text-slate-700 shrink-0">
                  <Code2 className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Software & OOP Systems</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">
                    C++ inventory & decision-making recommendation algorithms, web budget tracking applications (Lab-Ledger), and Processing IDE real-time displays.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
