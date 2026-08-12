"use client"

import { GraduationCap, Sparkles, Terminal, Calendar, Award } from "lucide-react"

export default function PortfolioAbout() {
  return (
    <section id="about" className="py-5 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical Padding) */}
        <div className="neu-raised rounded-[28px] sm:rounded-[40px] p-4 sm:p-10 space-y-6 sm:space-y-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full neu-inset text-slate-800 font-bold text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>BACKGROUND & EDUCATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">
              About <span className="text-slate-900">Me</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              A story still being written.
            </p>
          </div>

          {/* Clean 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            
            {/* Left: Bio & Story (Col 7) */}
            <div className="lg:col-span-7 space-y-2.5 text-left">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 rounded-[12px] neu-button flex items-center justify-center text-slate-800 shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-black text-slate-800">
                  Mechanical Engineering Undergraduate
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify [text-justify:inter-word]">
                Studying at the <strong className="text-slate-900 font-bold">NUST School of Mechanical and Manufacturing Engineering (SMME)</strong>, Islamabad. I engineer solutions that bridge intelligent software with physical hardware, from full-stack web applications to embedded systems and functional engineering prototypes.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify [text-justify:inter-word]">
                My work spans <strong className="text-slate-900 font-bold">precision manufacturing</strong>, <strong className="text-slate-900 font-bold">thermal systems (Heat Exchangers)</strong>, and <strong className="text-slate-900 font-bold">embedded control (ATmega328 and Tensilica LX-6)</strong>. Alongside this, I bring hands-on experience in <strong className="text-slate-900 font-bold">CAD modeling</strong>, <strong className="text-slate-900 font-bold">digital manufacturing</strong>, <strong className="text-slate-900 font-bold">rapid prototyping</strong>, and <strong className="text-slate-900 font-bold">PCB design</strong>.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal text-justify [text-justify:inter-word]">
                My research interests align with <strong className="text-slate-900 font-bold">Machine Learning integration for Fluid Flow prediction</strong>, exploring data-driven models to reconstruct complex flow patterns for aerodynamics and fluid dynamics applications.
              </p>
            </div>

            {/* Right: Education Card (Col 5) */}
            <div className="lg:col-span-5">
              <div className="neu-inset rounded-[20px] p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-300/40">
                  <div className="w-9 h-9 rounded-[12px] neu-button flex items-center justify-center text-slate-800 shrink-0">
                    <GraduationCap className="w-5 h-5 text-slate-800" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">Education</h4>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-sm font-black text-slate-900 leading-snug">
                    National University of Sciences and Technology (NUST)
                  </h4>
                  <p className="text-xs font-bold text-slate-700">
                    Bachelor of Engineering
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-slate-300/40">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-slate-700" />
                    <span>Sep 2024 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800">
                    <Award className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Expected Graduation: May 2028</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
