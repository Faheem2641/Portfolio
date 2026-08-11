"use client"

import { useState, useEffect } from "react"
import { Menu, X, User, Briefcase, FolderGit2, Cpu, Mail } from "lucide-react"

const navLinks = [
  { name: "About Me", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function PortfolioNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((sec) => observer.observe(sec))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Desktop Left-Hand Side Vertical Neumorphic Navigation Dock */}
      <aside className="hidden md:flex fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center justify-center neu-raised p-2 rounded-[28px] transition-all duration-300">
        
        {/* Single Internal Neumorphic Container for All Buttons */}
        <div className="neu-inset px-2 py-4 rounded-[20px] flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-1">
            {navLinks.map((link) => {
              const linkId = link.href.replace("#", "")
              const isActive = activeSection === linkId
              return (
                <div key={link.name} className="h-28 w-10 flex items-center justify-center relative">
                  <a
                    href={link.href}
                    onClick={() => setActiveSection(linkId)}
                    className={`-rotate-90 whitespace-nowrap text-xs font-bold tracking-wider transition-all duration-300 py-1.5 px-4 rounded-full flex items-center gap-2 ${
                      isActive
                        ? "text-[#18181b] neu-button-active bg-[#d8d8d8]"
                        : "text-zinc-600 hover:text-[#18181b]"
                    }`}
                  >
                    {isActive && (
                      <span className="w-3 h-0.5 rounded-full bg-slate-800 shrink-0"></span>
                    )}
                    <span>{link.name}</span>
                  </a>
                </div>
              )
            })}
          </nav>
        </div>

      </aside>

      {/* Mobile Top Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden px-4 py-4">
        <div className="flex items-center justify-between neu-raised px-5 py-2.5 rounded-full">
          <span className="font-mono text-xs text-slate-800 font-bold tracking-wider">FAHEEM ALI</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="neu-button p-2 rounded-full text-slate-700"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="mt-3 max-w-xs mx-auto neu-raised rounded-3xl p-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="neu-button flex items-center justify-center gap-2 py-3 text-xs font-bold text-slate-700 rounded-2xl"
                >
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span>{link.name}</span>
                </a>
              )
            })}
          </div>
        )}
      </header>
    </>
  )
}
