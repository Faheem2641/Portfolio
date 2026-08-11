"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Copy, Check, Github, Linkedin, ExternalLink, MessageSquare } from "lucide-react"

export default function PortfolioContact() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const emailAddress = "faheemali3724@gmail.com"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 4000)
  }

  return (
    <section id="contact" className="py-12 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical 24px Padding) */}
        <div className="neu-raised rounded-[40px] p-6 sm:p-8 space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full neu-inset text-slate-800 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4 text-slate-700" />
              <span>GET IN TOUCH</span>
            </div>
            <p className="text-slate-600 text-sm font-normal pt-1">
              Have a project idea, a technical challenge, or a role to discuss? Let's talk!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Direct Info Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Email Box (Concentric 24px Radius, Symmetrical p-6 Padding) */}
              <div className="neu-raised rounded-[24px] p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-[16px] neu-button flex items-center justify-center text-slate-700 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase">Direct Email</h4>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{emailAddress}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-full py-3.5 px-4 rounded-full neu-button text-xs font-bold text-slate-800 flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-600" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Availability (Concentric 24px Radius) */}
              <div className="neu-raised rounded-[24px] p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[16px] neu-button flex items-center justify-center text-emerald-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase">Location</h4>
                    <p className="text-sm font-bold text-slate-800">Islamabad, Pakistan</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Available for worldwide remote contracts, part-time engineering, and technical roles.
                </p>
              </div>

              {/* Social Cards (Concentric 24px Radius) */}
              <div className="neu-raised rounded-[24px] p-6 space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-700 uppercase mb-2">Connect Across Platforms</h4>
                
                <a
                  href="https://github.com/Faheem2641"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-full neu-button text-xs font-bold text-slate-800 hover:text-slate-950"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-700" />
                    <span>GitHub Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href="https://www.linkedin.com/in/faheem-ali-b87293373/?skipRedirect=true"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-full neu-button text-xs font-bold text-slate-800 hover:text-slate-950"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-slate-700" />
                    <span>LinkedIn Network</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>

            </div>

            {/* Form Column (Concentric 24px Radius, Symmetrical p-6 sm:p-8 Padding) */}
            <div className="lg:col-span-7">
              <div className="neu-raised rounded-[24px] p-6 sm:p-8 space-y-6">

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full neu-button text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">Message Sent Successfully!</h3>
                    <p className="text-slate-600 text-xs max-w-md mx-auto font-medium">
                      Thank you for reaching out. I'll get back to your inquiry within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-xs font-mono font-bold text-slate-800">Your Name *</label>
                        <div className="neu-inset rounded-[16px] px-4 py-3">
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-mono font-bold text-slate-800">Your Email *</label>
                        <div className="neu-inset rounded-[16px] px-4 py-3">
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-800">Subject</label>
                      <div className="neu-inset rounded-[16px] px-4 py-3">
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Project Inquiry / Engineering Consulting"
                          className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono font-bold text-slate-800">Message *</label>
                      <div className="neu-inset rounded-[16px] px-4 py-3">
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project idea, requirements, or timeline..."
                          className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400 resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full neu-button font-bold text-xs text-slate-800 hover:text-slate-950 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-slate-700" />
                      <span>Send Message</span>
                    </button>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
