"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useScheduleModal } from "@/context/ModalContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openScheduleModal } = useScheduleModal();

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky header after 150px of scrolling
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Banner Header (Absolute) - Visible initially, fades out on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.header
            key="banner-header"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute top-6 left-0 right-0 z-20 flex justify-center px-4"
          >
            <div className="flex w-full max-w-7xl items-center justify-between rounded-full bg-black/30 pl-5 pr-6 py-3 shadow-lg shadow-black/10 backdrop-blur">
              <Link href="/" className="flex items-center gap-5">
                <Image
                  src="/images/logo.png"
                  alt="House logo"
                  width={80}
                  height={80}
                  className="h-12 w-auto shrink-0 rounded-full object-contain"
                />
              </Link>

              <nav className="hidden items-center gap-10 text-md font-medium text-white md:flex">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hover:text-[#FFD44F] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <button
                  onClick={openScheduleModal}
                  className="hidden rounded-full bg-[#FFD44F] px-6 py-2 text-md font-semibold text-neutral-900 transition hover:bg-[#FFD44F]/50 md:inline-block cursor-pointer"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* 2. Sticky Header (Fixed) - Slides down when scrolled past banner */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          duration: 0.8 // Premium feel transition
        }}
        className="fixed top-0 left-0 right-0 z-50 bg-white py-3 pl-5 pr-6 shadow-md"
      >
        <div className="mx-auto flex  items-center justify-between">
          <Link href="/" className="flex items-center gap-5">
            <Image
              src="/images/logo.png"
              alt="Ganga Legend Logo"
              width={80}
              height={80}
              className="h-12 w-auto shrink-0 object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-10 text-sm font-semibold text-neutral-800 md:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-[#3A5D8F] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={openScheduleModal}
              className="rounded-full bg-[#12394C] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#3A5D8F] cursor-pointer"
            >
             Enquire Now            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}