"use client"

import { ArrowUp, Mail, Compass, Cpu } from "lucide-react"

export default function PortfolioFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="py-12 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical p-8 Padding) */}
        <div className="neu-raised rounded-[40px] p-6 sm:p-10 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Brand & Status (Col 5) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full neu-inset flex items-center justify-center font-mono font-black text-slate-800 text-base shrink-0">
                  FA
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight leading-tight">
                    FAHEEM ALI
                  </h3>
                  <p className="text-xs text-slate-700 font-mono font-semibold">
                    Mechanical & Systems Engineer
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-sm">
                Combining mechanical precision, CAD structural analysis, embedded IoT robotics, and modern software engineering at NUST SMME.
              </p>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neu-inset text-slate-800 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="font-bold text-slate-800">Available for remote contracts & technical roles</span>
              </div>
            </div>

            {/* Column 2: Quick Section Navigation (Col 4) */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-slate-800" />
                <span>Quick Navigation</span>
              </div>

              <div className="grid grid-cols-2 gap-2 max-w-xs">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3.5 py-2 rounded-full neu-button text-xs font-bold text-slate-800 hover:text-slate-950 text-center transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Direct Actions & Return to Top (Col 3) */}
            <div className="md:col-span-3 space-y-3 md:text-right flex flex-col md:items-end justify-between h-full">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider block">
                  Action Controls
                </span>
                
                <div className="flex flex-wrap md:flex-col gap-2.5 items-start md:items-end">
                  <a
                    href="#contact"
                    className="neu-button px-4 py-2.5 rounded-full text-xs font-bold text-slate-800 hover:text-slate-950 flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-800" />
                    <span>Send Message</span>
                  </a>

                  <button
                    onClick={scrollToTop}
                    className="neu-button px-4 py-2.5 rounded-full text-xs font-bold text-slate-800 hover:text-slate-950 flex items-center gap-2"
                    aria-label="Back to top"
                  >
                    <span>Back to Top</span>
                    <ArrowUp className="w-3.5 h-3.5 text-slate-800" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Inset Divider & Copyright */}
          <div className="pt-6 border-t border-slate-300/40 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-700 font-mono gap-3 font-medium">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-slate-800" />
              <span>© {new Date().getFullYear()} Faheem Ali. All rights reserved.</span>
            </div>
            <div className="text-xs text-slate-700 font-semibold">
              Crafted with Neumorphic Design & Engineering Precision
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
