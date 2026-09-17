"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export default function PortfolioFooter() {
  return (
    <footer className="py-3 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Thin Container Card */}
        <div className="neu-raised rounded-[24px] sm:rounded-[32px] py-4 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans font-bold text-slate-800">
          <span>© {new Date().getFullYear()} Faheem Ali. All rights reserved.</span>
          
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Faheem2641"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full neu-button flex items-center justify-center text-slate-800 hover:text-black transition-all group shrink-0"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4.5 h-4.5 text-slate-900 group-hover:scale-110 transition-transform stroke-[2]" />
            </a>

            <a
              href="https://www.linkedin.com/in/faheem-ali-b87293373/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full neu-button flex items-center justify-center text-[#0a66c2] hover:text-[#004182] transition-all group shrink-0"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4.5 h-4.5 text-[#0a66c2] group-hover:scale-110 transition-transform stroke-[2]" />
            </a>

            <a
              href="mailto:faheemali3724@gmail.com"
              className="w-9 h-9 rounded-full neu-button flex items-center justify-center text-rose-600 hover:text-rose-700 transition-all group shrink-0"
              aria-label="Email Address"
              title="Send Email"
            >
              <Mail className="w-4.5 h-4.5 text-rose-600 group-hover:scale-110 transition-transform stroke-[2]" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
