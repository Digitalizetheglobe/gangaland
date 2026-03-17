"use client"

import React, { createContext, useContext, useState, type ReactNode, type ChangeEvent, type FormEvent } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { SITE_CONFIG } from "@/constants/siteConfig"
import emailjs from "@emailjs/browser"
import { EMAILJS_CONFIG } from "@/constants/emailjs"

interface ScheduleModalContextType {
  openScheduleModal: () => void
  closeScheduleModal: () => void
}

const ScheduleModalContext = createContext<ScheduleModalContextType | undefined>(undefined)

export function useScheduleModal() {
  const context = useContext(ScheduleModalContext)
  if (!context) {
    throw new Error("useScheduleModal must be used within a ScheduleModalProvider")
  }
  return context
}

export function ScheduleModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    unit: "",
    message: "",
  })

  const openScheduleModal = () => {
    setIsOpen(true)
    setSubmitStatus("idle")
  }
  const closeScheduleModal = () => {
    if (!isSubmitting) {
      setIsOpen(false)
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const templateParams = {
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        unit: formValues.unit || "Not Specified",
        message: formValues.message,
        site_name: SITE_CONFIG.name,
        time: new Date().toLocaleString('en-IN', { 
          dateStyle: 'medium', 
          timeStyle: 'short' 
        }),
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus("success")
      setFormValues({ name: "", email: "", phone: "", unit: "", message: "" })
      
      // Auto close after 3 seconds on success
      setTimeout(() => {
        setIsOpen(false)
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <ScheduleModalContext.Provider value={{ openScheduleModal, closeScheduleModal }}>
      {children}
      
      {/* Global Schedule Visit Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={closeScheduleModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-6 shadow-2xl md:p-8"
            >
              <button
                onClick={closeScheduleModal}
                disabled={isSubmitting}
                className="absolute right-4 top-4 cursor-pointer rounded-full bg-white/5 p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD44F]">
                  Ganga Legends
                </p>
                <h3 className="font-raleway text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Schedule a Visit
                </h3>
              </div>

              {submitStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 rounded-full bg-green-500/20 p-4 text-green-500">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-white">Visit Scheduled!</h4>
                  <p className="text-neutral-400">
                    Thank you for your interest. Our team will contact you shortly to confirm your visit.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="global-modal-name" className="text-sm font-medium text-neutral-300">
                      Full Name
                    </label>
                    <input
                      id="global-modal-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#FFD44F] focus:ring-1 focus:ring-[#FFD44F]"
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="global-modal-email" className="text-sm font-medium text-neutral-300">
                        Email
                      </label>
                      <input
                        id="global-modal-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formValues.email}
                        onChange={handleInputChange}
                        className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#FFD44F] focus:ring-1 focus:ring-[#FFD44F]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="global-modal-phone" className="text-sm font-medium text-neutral-300">
                        Phone Number
                      </label>
                      <input
                        id="global-modal-phone"
                        name="phone"
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit number"
                        value={formValues.phone}
                        onChange={(e) => {
                          const digitsOnly = e.target.value.replace(/\D/g, "")
                          handleInputChange({
                            ...e,
                            target: { ...e.target, name: "phone", value: digitsOnly },
                          } as any)
                        }}
                        className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#FFD44F] focus:ring-1 focus:ring-[#FFD44F]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="global-modal-unit" className="text-sm font-medium text-neutral-300">
                      Unit Interested In
                    </label>
                    <select
                      id="global-modal-unit"
                      name="unit"
                      required
                      value={formValues.unit}
                      onChange={handleInputChange}
                      className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none focus:border-[#FFD44F] focus:ring-1 focus:ring-[#FFD44F] appearance-none"
                    >
                      <option value="" disabled className="bg-neutral-900">Select Unit</option>
                      <option value="3 BHK" className="bg-neutral-900">3 BHK Apartment</option>
                      <option value="3.5 BHK" className="bg-neutral-900">3.5 BHK Apartment</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="global-modal-message" className="text-sm font-medium text-neutral-300">
                      Message
                    </label>
                    <textarea
                      id="global-modal-message"
                      name="message"
                      rows={3}
                      placeholder="Tell us more about what you're looking for..."
                      value={formValues.message}
                      onChange={handleInputChange}
                      className="min-h-[80px] w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#FFD44F] focus:ring-1 focus:ring-[#FFD44F]"
                    />
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-xs text-neutral-400">
                    <input
                      id="global-modal-consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-0.5 h-4 w-4 cursor-pointer rounded border-white/20 text-[#FFD44F] focus:ring-1 focus:ring-[#FFD44F] focus:ring-offset-0 bg-transparent"
                    />
                    <label htmlFor="global-modal-consent" className="cursor-pointer leading-relaxed">
                      I agree to the{" "}
                      <Link href="/privacy-policy" className="font-bold text-[#FFD44F] hover:underline">
                        privacy policy
                      </Link>{" "}
                      of{" "}
                      <span className="font-bold text-white">
                        {SITE_CONFIG.name}
                      </span>
                    </label>
                  </div>

                  {submitStatus === "error" && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-xs font-medium text-red-500">
                      <AlertCircle className="h-4 w-4" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-[#FFD44F] text-sm font-bold text-black transition-all hover:bg-[#FFD44F]/80 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      "Book Visit"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ScheduleModalContext.Provider>
  )
}
