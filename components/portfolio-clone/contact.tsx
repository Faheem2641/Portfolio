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
  Loader2,
  AlertCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
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
    setTimeout(() => setCopied(false), 2200)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "15df6855-e507-44a2-b47f-5de155ffa7ff"
    const payload = {
      access_key: accessKey,
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim() ? `[Portfolio Inquiry] ${formData.subject.trim()}` : `New Portfolio Inquiry from ${formData.name}`,
      message: formData.message.trim(),
      from_name: `${formData.name.trim()} (Portfolio)`,
    }

    try {
      // Primary Attempt: Direct client-side fetch to Web3Forms API
      let success = false
      let errorMessage = ""

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        })

        const data = await response.json().catch(() => null)
        if (response.ok && data?.success) {
          success = true
        } else if (data?.message) {
          errorMessage = data.message
        }
      } catch (clientErr) {
        console.warn("Direct Web3Forms submit prevented by client environment, trying fallback route:", clientErr)
      }

      // Secondary Fallback Attempt: Server API route (/api/contact)
      if (!success) {
        const serverRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            subject: formData.subject.trim(),
            message: formData.message.trim(),
          }),
        })

        const serverData = await serverRes.json().catch(() => null)
        if (serverRes.ok && serverData?.success) {
          success = true
        } else if (serverData?.error) {
          errorMessage = serverData.error
        }
      }

      if (success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setErrors({ form: errorMessage || "Unable to deliver message right now. Please copy direct email above!" })
      }
    } catch (err) {
      console.error("Submission exception:", err)
      setErrors({ form: "Network connection error. Please use direct email option on left." })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleResetForm = () => {
    setSubmitted(false)
    setErrors({})
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-8 neu-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Frame */}
        <div className="neu-raised rounded-[28px] sm:rounded-[40px] p-5 sm:p-10 space-y-6 sm:space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">
              Let's Build Something <span className="text-topping">Remarkable</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-normal">
              Have a project idea, engineering challenge, or technical role? Send a message directly to my inbox!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* Direct Info Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5 flex flex-col justify-between">
              
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

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCopyEmail}
                  type="button"
                  className="w-full py-3.5 px-4 rounded-full neu-button text-xs font-bold text-slate-800 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-topping" />
                      <span className="text-topping font-bold">Email Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-600" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Location & Availability */}
              <div className="neu-raised rounded-[20px] p-3.5 sm:p-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-[12px] neu-button flex items-center justify-center text-topping shrink-0 mt-0.5">
                    <MapPin className="w-4.5 h-4.5 text-topping" />
                  </div>
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div>
                      <h4 className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-wider">Location & Status</h4>
                      <p className="text-xs sm:text-sm font-bold text-slate-800 flex flex-wrap items-center gap-1.5 mt-0.5">
                        <span>Islamabad, Pakistan</span>
                        <span className="text-[10px] font-mono font-normal text-slate-500">PKT (UTC+5)</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-topping font-medium">
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-topping opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-topping"></span>
                      </span>
                      <span>Available for Remote Contracts, Internships & Part-time Roles</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Cards */}
              <div className="neu-raised rounded-[24px] p-6 space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-700 uppercase mb-2">Connect Across Platforms</h4>
                
                <motion.a
                  whileHover={{ scale: 1.01, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://github.com/Faheem2641"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-full neu-button text-xs font-bold text-slate-800 hover:text-slate-950 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-700" />
                    <span>GitHub Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.01, x: 2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.linkedin.com/in/faheem-ali-b87293373/?skipRedirect=true"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-full neu-button text-xs font-bold text-slate-800 hover:text-slate-950 transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-slate-700" />
                    <span>LinkedIn Network</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </motion.a>
              </div>

            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 h-full">
              <div className="neu-raised rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 h-full flex flex-col justify-between space-y-4">

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success-state"
                      initial={{ opacity: 0, scale: 0.92, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="py-10 text-center space-y-5"
                    >
                      <div className="relative w-20 h-20 rounded-full neu-button text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                        <Check className="w-10 h-10 text-emerald-600" />
                        <Sparkles className="w-5 h-5 text-emerald-500 absolute -top-1 -right-1 animate-bounce" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-800">Message Sent Successfully!</h3>
                        <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto font-medium leading-relaxed">
                          Thank you for getting in touch. Your message has been delivered directly to <span className="font-bold text-slate-800">{emailAddress}</span>. I'll respond within 24 hours.
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={handleResetForm}
                        type="button"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full neu-button text-xs font-bold text-slate-800 cursor-pointer shadow-md"
                      >
                        <RotateCcw className="w-4 h-4 text-slate-700" />
                        <span>Send Another Message</span>
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="flex-1 flex flex-col justify-between space-y-3.5 sm:space-y-4"
                    >
                      
                      {/* Global Neumorphic Form Error Banner */}
                      <AnimatePresence>
                        {errors.form && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="neu-inset rounded-[18px] p-4 flex items-start gap-3 bg-rose-500/10 border border-rose-400/40 text-rose-800 shadow-inner"
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <label htmlFor="contact-name" className="text-xs font-mono font-bold text-slate-800">Your Name *</label>
                            <AnimatePresence>
                              {errors.name && (
                                <motion.span
                                  initial={{ opacity: 0, x: 5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0 }}
                                  className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1"
                                >
                                  <AlertCircle className="w-3 h-3 shrink-0" />
                                  <span>{errors.name}</span>
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                          <div className={`neu-inset rounded-[16px] px-4 py-2.5 transition-all focus-within:ring-2 focus-within:ring-slate-400/50 ${errors.name ? "ring-2 ring-rose-500/60 bg-rose-500/5" : ""}`}>
                            <input
                              id="contact-name"
                              type="text"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              placeholder="e.g. Ali"
                              className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400"
                            />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <label htmlFor="contact-email" className="text-xs font-mono font-bold text-slate-800">Your Email *</label>
                            <AnimatePresence>
                              {errors.email && (
                                <motion.span
                                  initial={{ opacity: 0, x: 5 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0 }}
                                  className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1"
                                >
                                  <AlertCircle className="w-3 h-3 shrink-0" />
                                  <span>{errors.email}</span>
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                          <div className={`neu-inset rounded-[16px] px-4 py-2.5 transition-all focus-within:ring-2 focus-within:ring-slate-400/50 ${errors.email ? "ring-2 ring-rose-500/60 bg-rose-500/5" : ""}`}>
                            <input
                              id="contact-email"
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
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label htmlFor="contact-subject" className="text-xs font-mono font-bold text-slate-800">Subject *</label>
                          <AnimatePresence>
                            {errors.subject && (
                              <motion.span
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1"
                              >
                                <AlertCircle className="w-3 h-3 shrink-0" />
                                <span>{errors.subject}</span>
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className={`neu-inset rounded-[16px] px-4 py-2.5 transition-all focus-within:ring-2 focus-within:ring-slate-400/50 ${errors.subject ? "ring-2 ring-rose-500/60 bg-rose-500/5" : ""}`}>
                          <input
                            id="contact-subject"
                            type="text"
                            value={formData.subject}
                            onChange={(e) => handleInputChange("subject", e.target.value)}
                            placeholder="e.g. Mechanical Design, Embedded IoT, Web Collaboration"
                            className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-1 flex-1 flex flex-col min-h-0">
                        <div className="flex items-center justify-between">
                          <label htmlFor="contact-message" className="text-xs font-mono font-bold text-slate-800">Message *</label>
                          <AnimatePresence>
                            {errors.message && (
                              <motion.span
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1"
                              >
                                <AlertCircle className="w-3 h-3 shrink-0" />
                                <span>{errors.message}</span>
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                        <div className={`neu-inset rounded-[16px] px-4 py-2.5 flex-1 flex flex-col transition-all focus-within:ring-2 focus-within:ring-slate-400/50 ${errors.message ? "ring-2 ring-rose-500/60 bg-rose-500/5" : ""}`}>
                          <textarea
                            id="contact-message"
                            value={formData.message}
                            onChange={(e) => handleInputChange("message", e.target.value)}
                            placeholder="Share details about your project scope, technical requirements, timeline, or inquiry..."
                            className="w-full bg-transparent border-none outline-none text-xs text-slate-800 font-medium placeholder-slate-400 resize-none flex-1 min-h-[60px]"
                          ></textarea>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 sm:py-3.5 rounded-full neu-button font-bold text-xs text-topping flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer transition-all"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 text-topping animate-spin" />
                            <span>Delivering Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-topping" />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>

                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
