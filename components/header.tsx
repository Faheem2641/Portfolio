"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      // Determine visibility
      if (currentScroll < 10) {
        setIsVisible(true)
      } else if (currentScroll > lastScrollY) {
        setIsVisible(false) // Scrolling down
      } else {
        setIsVisible(true) // Scrolling up
      }
      setLastScrollY(currentScroll)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="bg-[#162439] border border-white/10 rounded-full px-6 py-3 flex items-center shadow-2xl pointer-events-auto w-[95%] max-w-6xl justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <span className="font-brier text-xl text-lorenzo-accent whitespace-nowrap tracking-widest pr-4">
              FAHEEM ALI
            </span>
          </div>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden md:flex items-center gap-10 px-6 bg-white/10 rounded-full py-2 border border-white/20 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            {[
              { name: "Home", href: "#" },
              { name: "About", href: "#mission" },
              { name: "Gallery", href: "#masonry-gallery" },
              { name: "Insights", href: "#interactive-schedule" }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-xs font-bold uppercase tracking-widest text-[#e8e8e3]/60 hover:text-[#e8e8e3] transition-all duration-300 group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-lorenzo-accent transition-all duration-300 group-hover:w-full opacity-50" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#social-section"
              className="hidden md:inline-flex bg-gradient-to-r from-lorenzo-accent to-[#d1d1cc] text-[#0a192f] rounded-full px-7 py-3 font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(232,232,227,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 items-center gap-2 border border-white/20"
            >
              Let's Talk
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 bg-white/5 hover:bg-white/10 rounded-full text-lorenzo-text-light transition-colors border border-white/5"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Menu Overlay for Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#162439]/95 backdrop-blur-xl"
            onClick={() => setMenuOpen(false)}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-white/10 rounded-full text-lorenzo-text-light transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="text-center"
            >
              <motion.ul className="space-y-8">
                {[
                  { name: "HOME", href: "#" },
                  { name: "MISSION", href: "#mission" },
                  { name: "GALLERY", href: "#masonry-gallery" },
                  { name: "HELMETS", href: "#helmets" },
                  { name: "STORE", href: "#store" },
                  { name: "CONTACT", href: "#social-section" }
                ].map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 },
                    }}
                  >
                    <a
                      href={item.href}
                      className="text-4xl md:text-5xl font-black uppercase text-lorenzo-text-light hover:text-lorenzo-accent transition-colors duration-300 inline-block font-brier"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: 20 },
                }}
                className="mt-16 flex justify-center gap-8"
              >
                {["Instagram", "TikTok", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-sm font-bold uppercase tracking-widest text-lorenzo-text-light/50 hover:text-lorenzo-accent transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
