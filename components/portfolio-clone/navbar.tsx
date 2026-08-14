"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i])
        if (sectionEl) {
          const top = sectionEl.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(targetId)
    }
  }

  return (
    <>
      {/* Desktop Left-Hand Side Vertical Neumorphic Navigation Dock */}
      <aside className="hidden md:flex fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center justify-center neu-raised p-2 rounded-full shadow-xl">
        
        {/* Master Inner Concentric Pill Groove */}
        <div className="neu-inset px-1.5 py-3 rounded-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-1.5">
            {navLinks.map((link) => {
              const linkId = link.href.replace("#", "")
              const isActive = activeSection === linkId

              return (
                <div key={link.name} className="h-[105px] w-10 flex items-center justify-center relative">
                  {/* Butter-Smooth Sliding Active Capsule */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-x-0.5 inset-y-1 neu-button-active rounded-full bg-[#d8d8d8] z-0 shadow-sm"
                    />
                  )}

                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative z-10 -rotate-90 whitespace-nowrap text-[11px] lg:text-xs font-bold tracking-wider transition-colors duration-200 py-1.5 px-3.5 rounded-full flex items-center gap-2 ${
                      isActive ? "text-topping font-black" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {isActive && (
                      <span className="w-2 h-0.5 rounded-full bg-topping shrink-0" />
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
              const linkId = link.href.replace("#", "")
              const isActive = activeSection === linkId

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href)
                    setMobileMenuOpen(false)
                  }}
                  className={`flex items-center justify-center gap-2 py-3 text-xs font-bold rounded-2xl transition-all ${
                    isActive ? "neu-button-active text-slate-950" : "neu-button text-slate-700"
                  }`}
                >
                  <Icon className="w-4 h-4 text-slate-700" />
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
