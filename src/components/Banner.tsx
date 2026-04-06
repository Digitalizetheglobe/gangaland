"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useScheduleModal } from "@/context/ModalContext";
import { X } from "lucide-react";

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const { openScheduleModal } = useScheduleModal();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    if (videoOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  return (
    <section className="relative z-10 mt-10 sm:mt-0 flex flex-col md:flex-row md:min-h-screen" id="home">
      {/* Left panel - black background + image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex w-full md:w-[35%] min-w-0 md:min-w-[360px] max-w-full md:max-w-[600px] flex-col justify-center overflow-hidden bg-[#050509] px-6 py-12 md:px-14 md:py-16 lg:px-20"
      >
        {/* Background image */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/banner-left.png"
            alt="Banner Background"
            fill
            className="object-cover opacity-60"
            priority
          />
        </motion.div>

        <div className="relative z-10 max-w-lg space-y-8">
          {/* Headline - premium feel */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-raleway text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white uppercase"
          >
            Live the <br className="md:hidden" /> Stadium Life
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md text-sm sm:text-base md:text-xl leading-relaxed text-gray-400"
          >
            Experience a world-class lifestyle at Ganga Legends, Pune&apos;s most ambitious sports-first residential township.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5"
          >
            <button
              onClick={openScheduleModal}
              className="group flex w-full sm:w-auto text-xs sm:text-sm items-center justify-center gap-2.5 rounded-full cursor-pointer bg-[#FFD44F] px-7 py-4 font-semibold text-black transition hover:bg-[#FFD44F]/60"
            >
              Enquire Now
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
            <button
              onClick={() => setVideoOpen(true)}
              className="group flex w-full sm:w-auto text-xs sm:text-sm items-center justify-center gap-2 cursor-pointer rounded-full bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/20"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFD44F]">
                <svg className="h-3 w-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              Watch Video
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right panel - video with diagonal clip - wider */}
      <motion.div
        initial={{ opacity: 0, clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
        animate={{ opacity: 1, clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        transition={{ duration: 1.2, ease: "circOut" }}
        className="relative hidden flex-1 md:block"
      >
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Pricing Overlay - Desktop */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 1, duration: 0.8 }}
           className="absolute bottom-50 right-30 z-10 min-w-[300px] rounded-2xl border border-white/20 bg-black/40 p-6 shadow-2xl backdrop-blur-md"
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="w-full border-b border-white/10 pb-3">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FFD44F]">Available Units</h3>
              <p className="mt-1.5 text-xs text-neutral-300">Premium Sports-Centric Homes</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-4 py-1">
              <div className="flex flex-col items-center justify-center gap-1">
                 <span className="text-xl font-bold text-white">3 BHK</span>
                 <span className="text-sm font-medium text-neutral-200">₹1.77 Cr to ₹1.87 Cr</span>
              </div>
              <div className="h-px w-12 bg-white/10"></div>
              <div className="flex flex-col items-center justify-center gap-1">
                 <span className="text-xl font-bold text-white">3.5 BHK</span>
                 <span className="text-sm font-medium text-neutral-200">₹1.96 Cr to ₹2.16 Cr</span>
              </div>
            </div>
            <div className="w-full pt-2">
              <button 
                onClick={openScheduleModal}
                className="w-full cursor-pointer rounded-full bg-[#FFD44F] px-2 py-2 text-md font-bold text-black transition hover:bg-[#FFD44F]/80"
              >
                Get Floor Plans
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Video modal - plays your video when Video button is clicked */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setVideoOpen(false)}
            role="presentation"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-5xl cursor-pointer"
              onClick={() => setVideoOpen(false)}
              onKeyDown={(e) => e.stopPropagation()}
              role="presentation"
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
                <video
                  src="/videos/video.mp4"
                  controls
                  autoPlay
                  className="h-full w-full cursor-pointer"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute top-6 right-6 md:top-6 md:right-2 text-white hover:text-[#FFD44F] transition-colors z-[110] cursor-pointer p-2 bg-black rounded-full hover:bg-black/20"
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile - video */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative block h-72 w-full md:hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>

        {/* Pricing Overlay - Mobile */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3, duration: 0.6 }}
           className="absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/20 bg-black/50 p-4 shadow-lg backdrop-blur-md"
        >
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="w-full border-b border-white/10 pb-2">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD44F]">Available Units</h3>
              <p className="mt-1 text-[10px] text-neutral-300">Premium Sports-Centric Homes</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center space-y-3 py-1">
              <div className="flex flex-col items-center justify-center gap-0.5">
                 <span className="text-base font-bold text-white">3 BHK</span>
                 <span className="text-xs font-medium text-neutral-200">₹1.77 Cr to ₹1.87 Cr</span>
              </div>
              <div className="h-px w-8 bg-white/10"></div>
              <div className="flex flex-col items-center justify-center gap-0.5">
                 <span className="text-base font-bold text-white">3.5 BHK</span>
                 <span className="text-xs font-medium text-neutral-200">₹1.96 Cr to ₹2.16 Cr</span>
              </div>
            </div>
            <div className="w-full pt-1">
              <button 
                onClick={openScheduleModal}
                className="w-full cursor-pointer rounded-full bg-[#FFD44F] px-4 py-2 text-[10px] font-bold text-black transition hover:bg-[#FFD44F]/80"
              >
                Get Floor Plans
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
