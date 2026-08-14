"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  MapPin,
  Send,
  Copy,
  Check,
  Github,
  Linkedin,
  ExternalLink,
  MessageSquare,
  Loader2,
  AlertCircle,
  AlertTriangle,
} from "lucide-react"

export default function PortfolioContact() {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  // Neumorphic Error state system for UI/UX alignment
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    subject?: string
    message?: string
    form?: string
  }>({})

  const emailAddress = "faheemali3724@gmail.com"

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; subject?: string; message?: string; form?: string } = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address"
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Invalid email format (e.g. name@company.com)"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject"
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write your message"
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters long"
    }

    if (Object.keys(newErrors).length > 0) {
      newErrors.form = "Please resolve the highlighted fields below."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: "name" | "email" | "subject" | "message", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field] || errors.form) {
      setErrors((prev) => ({ ...prev, [field]: undefined, form: undefined }))
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Send message directly to Web3Forms API from client browser
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "15df6855-e507-44a2-b47f-5de155ffa7ff"
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() ? `[Portfolio Inquiry] ${formData.subject.trim()}` : `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message.trim(),
          from_name: `${formData.name.trim()} (Portfolio)`,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        setErrors({ form: data.message || "Unable to send message. Please try again." })
        return
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      console.error("Submission error:", err)
      setErrors({ form: "Network error while sending message. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-5 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame (Concentric 40px Radius & Symmetrical Padding) */}
        <div className="neu-raised rounded-[28px] sm:rounded-[40px] p-4 sm:p-8 space-y-6 sm:space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full neu-inset text-slate-800 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4 text-slate-700" />
              <span>GET IN TOUCH</span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm font-normal pt-1">
              Have a project idea, a technical challenge, or a role to discuss? Let's talk!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Direct Info Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              {/* Direct Email Box */}
              <div className="neu-raised rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[14px] sm:rounded-[16px] neu-button flex items-center justify-center text-slate-700 shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] sm:text-xs font-mono font-bold text-slate-700 uppercase">Direct Email</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5 truncate">{emailAddress}</p>
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
              <div className="neu-raised rounded-[20px] sm:rounded-[24px] p-4 sm:p-8 space-y-5 sm:space-y-6">

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
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    
                    {/* Global Neumorphic Form Error Banner */}
                    <AnimatePresence>
                      {errors.form && (
                        <motion.div
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="neu-inset rounded-[18px] p-3.5 flex items-start gap-3 bg-rose-500/10 border border-rose-400/40 text-rose-800 shadow-inner"
                        >
                          <div className="w-7 h-7 rounded-full neu-button shrink-0 flex items-center justify-center text-rose-600 mt-0.5">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          <div className="space-y-0.5 min-w-0 flex-1">
                            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">Notice</h5>
                            <p className="text-xs font-medium text-rose-700/90 leading-tight">{errors.form}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name Field */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-mono font-bold text-slate-800">Your Name *</label>
                          {errors.name && (
                            <span className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 shrink-0" />
                              <span>{errors.name}</span>
                            </span>
                          )}
                        </div>
                        <div className={`neu-inset rounded-[16px] px-4 py-3 transition-all ${errors.name ? "ring-2 ring-rose-500/60 bg-rose-500/5" : ""}`}>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="e.g. Ali"
                            className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-mono font-bold text-slate-800">Your Email *</label>
                          {errors.email && (
                            <span className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3 shrink-0" />
                              <span>{errors.email}</span>
                            </span>
                          )}
                        </div>
                        <div className={`neu-inset rounded-[16px] px-4 py-3 transition-all ${errors.email ? "ring-2 ring-rose-500/60 bg-rose-500/5" : ""}`}>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="name@company.com"
                            className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono font-bold text-slate-800">Subject *</label>
                        {errors.subject && (
                          <span className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.subject}</span>
                          </span>
                        )}
                      </div>
                      <div className={`neu-inset rounded-[16px] px-4 py-3 transition-all ${errors.subject ? "ring-2 ring-rose-500/60 bg-rose-500/5" : ""}`}>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          placeholder="e.g. Mechanical Design, Embedded IoT, Web Collaboration"
                          className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400"
                        />
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-mono font-bold text-slate-800">Message *</label>
                        {errors.message && (
                          <span className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.message}</span>
                          </span>
                        )}
                      </div>
                      <div className={`neu-inset rounded-[16px] px-4 py-3 transition-all ${errors.message ? "ring-2 ring-rose-500/60 bg-rose-500/5" : ""}`}>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Share details about your project scope, technical requirements, timeline, or inquiry..."
                          className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400 resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full neu-button font-bold text-xs text-slate-800 hover:text-slate-950 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 text-slate-700 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-slate-700" />
                          <span>Send Message</span>
                        </>
                      )}
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

