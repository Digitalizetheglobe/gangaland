"use client"

import React, { createContext, useContext, useState, type ReactNode, type ChangeEvent, type FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

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
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  })

  const openScheduleModal = () => setIsOpen(true)
  const closeScheduleModal = () => setIsOpen(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Visit Scheduled via Global Modal:", formValues)
    setIsOpen(false)
    setFormValues({ name: "", email: "", phone: "", date: "" })
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
                className="absolute right-4 top-4 cursor-pointer rounded-full bg-white/5 p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
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
                      })
                    }}
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none placeholder:text-neutral-500 focus:border-[#FFD44F] focus:ring-1 focus:ring-[#FFD44F]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="global-modal-date" className="text-sm font-medium text-neutral-300">
                    Preferred Date & Time
                  </label>
                  <input
                    id="global-modal-date"
                    name="date"
                    type="datetime-local"
                    required
                    value={formValues.date}
                    onChange={handleInputChange}
                    className="h-12 w-full rounded-xl border border-white/10 bg-black/20 px-4 text-sm text-white outline-none [color-scheme:dark] focus:border-[#FFD44F] focus:ring-1 focus:ring-[#FFD44F]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-[#FFD44F] text-sm font-bold text-black transition-colors hover:bg-[#FFD44F]/80"
                >
                  Book Visit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ScheduleModalContext.Provider>
  )
}
