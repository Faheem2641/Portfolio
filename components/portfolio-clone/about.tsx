"use client"

import { GraduationCap, Terminal, Calendar, Award, Sparkles } from "lucide-react"

export default function PortfolioAbout() {
  return (
    <section id="about" className="py-5 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical Padding) */}
        <div className="neu-raised rounded-[28px] sm:rounded-[40px] p-4 sm:p-10 space-y-6 sm:space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">
              About <span className="text-topping">Me</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              A story still being written.
            </p>
          </div>

          {/* Clean 2-Column Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch pt-2">
            
            {/* Left: Bio & Story Card in Neu-Inset Container (Col 7) */}
            <div className="md:col-span-7">
              <div className="neu-inset rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-300/40">
                    <div className="w-9 h-9 rounded-[12px] neu-button flex items-center justify-center text-topping shrink-0 shadow-topping-glow">
                      <Terminal className="w-4.5 h-4.5 text-topping" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                        Mechanical Engineering Undergraduate
                      </h3>
                      <p className="text-[11px] font-mono font-bold text-topping uppercase tracking-wider mt-0.5">
                        NUST SMME • Islamabad
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-left">
                    Studying at the <strong className="text-topping font-bold">NUST School of Mechanical and Manufacturing Engineering (SMME)</strong>, Islamabad. I engineer solutions that bridge intelligent software with physical hardware, from full-stack web applications to embedded systems and functional engineering prototypes.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-left">
                    My work spans <strong className="text-topping font-bold">precision manufacturing</strong>, <strong className="text-topping font-bold">thermal systems (Heat Exchangers)</strong>, and <strong className="text-topping font-bold">embedded control (ATmega328 and Tensilica LX-6)</strong>. Alongside this, I bring hands-on experience in <strong className="text-topping font-bold">CAD modeling</strong>, <strong className="text-topping font-bold">digital manufacturing</strong>, <strong className="text-topping font-bold">rapid prototyping</strong>, and <strong className="text-topping font-bold">PCB design</strong>.
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-left">
                    My research interests align with <strong className="text-topping font-bold">Machine Learning integration for Fluid Flow prediction</strong>, exploring data-driven models to reconstruct complex flow patterns for aerodynamics and fluid dynamics applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Education Card (Col 5) */}
            <div className="md:col-span-5 flex flex-col">
              <div className="neu-inset rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-300/40">
                    <div className="w-9 h-9 rounded-[12px] neu-button flex items-center justify-center text-topping shrink-0">
                      <GraduationCap className="w-5 h-5 text-topping" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-topping uppercase tracking-wider">Education</h4>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">Academic Profile</h3>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                      National University of Sciences and Technology (NUST)
                    </h4>
                    <p className="text-xs font-bold text-slate-700">
                      Bachelor of Engineering in Mechanical Engineering
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-300/40">
                    <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800">
                      <Calendar className="w-4 h-4 text-slate-700 shrink-0" />
                      <span>Sep 2024 – Present</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-slate-800">
                      <Award className="w-4 h-4 text-topping shrink-0" />
                      <span>Expected Graduation: May 2028</span>
                    </div>
                  </div>
                </div>

                {/* Accent Badge */}
                <div className="pt-3 border-t border-slate-300/40 flex items-center gap-2 text-[11px] font-mono font-bold text-slate-700">
                  <Sparkles className="w-3.5 h-3.5 text-topping shrink-0" />
                  <span>SMME Department • Islamabad, Pakistan</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
