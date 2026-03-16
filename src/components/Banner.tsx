"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useScheduleModal } from "@/context/ModalContext";

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
    <section className="relative z-10 flex min-h-screen">
      {/* Left panel - black background + image */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex w-[35%] min-w-[360px] max-w-[600px] flex-col justify-center overflow-hidden bg-[#050509] px-10 py-32 md:px-14 lg:px-20"
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
            className="font-raleway text-5xl md:text-6xl font-bold leading-tight tracking-tight text-white"
          >
            LIVE THE STADIUM LIFE
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-md text-base leading-relaxed text-gray-400"
          >
            Welcome to the Ganga Legends, a premium residential located in the heart of the city.
          </motion.p>

          {/* CTA buttons */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap items-center gap-5"
          >
            <button 
              onClick={openScheduleModal}
              className="group flex items-center gap-2.5 rounded-full cursor-pointer  bg-[#FFD44F] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#FFD44F]/60"
            >
              Schedule A Visit
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
            <button 
              onClick={() => setVideoOpen(true)}
              className="group flex items-center gap-3 rounded-full bg-white/10 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFD44F]">
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
      </motion.div>

      {/* Video modal - plays your video when Video button is clicked */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setVideoOpen(false)}
            role="presentation"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
              role="presentation"
            >
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
                <video
                  src="/videos/video.mp4"
                  controls
                  autoPlay
                  className="h-full w-full"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="absolute -top-14 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
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
      </motion.div>
    </section>
  );
}
