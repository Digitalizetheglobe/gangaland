"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useScheduleModal } from "@/context/ModalContext";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-md flex flex-col pt-24 px-6 md:hidden"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-neutral-800"
            >
              <X className="h-8 w-8" />
            </button>
            
            <nav className="flex flex-col gap-6 text-xl font-medium text-neutral-800">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2 hover:text-[#3A5D8F] transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            
            <div className="mt-10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openScheduleModal();
                }}
                className="w-full rounded-full bg-[#12394C] px-6 py-4 text-center text-xl font-bold text-white transition hover:bg-[#3A5D8F]"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Banner Header (Absolute) - Visible initially, fades out on scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.header
            key="banner-header"
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute top-4 md:top-6 left-0 right-0 z-20 flex justify-center px-4"
          >
            <div className="flex w-full max-w-7xl items-center justify-between rounded-full bg-black/30 pl-4 md:pl-5 pr-4 md:pr-6 py-2 md:py-3 shadow-lg shadow-black/10 backdrop-blur">
              <Link href="/" className="flex items-center gap-4 md:gap-5">
                <Image
                  src="/images/logo.png"
                  alt="House logo"
                  width={80}
                  height={80}
                  className="h-10 w-10 md:h-12 md:w-auto shrink-0 rounded-full object-contain"
                />
              </Link>

              <nav className="hidden items-center gap-10 text-md font-semibold text-white md:flex">
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

              <div className="flex items-center gap-2 md:gap-3">
                <button
                  onClick={openScheduleModal}
                  className="rounded-full bg-[#FFD44F] px-4 py-1.5 text-xs font-semibold text-neutral-900 transition hover:bg-[#FFD44F]/50 md:px-6 md:py-2 md:text-base cursor-pointer"
                >
                  Enquire Now
                </button>
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="block md:hidden p-1.5 text-white hover:text-[#FFD44F]"
                >
                  <Menu className="h-6 w-6" />
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
        className="fixed top-0 left-0 right-0 z-50 bg-white py-2 md:py-3 pl-4 md:pl-5 pr-4 md:pr-6 shadow-md"
      >
        <div className="mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 md:gap-5">
            <Image
              src="/images/logo.png"
              alt="Ganga Legend Logo"
              width={80}
              height={80}
              className="h-10 w-10 md:h-12 md:w-auto shrink-0 object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-10 text-xl font-medium text-neutral-800 md:flex">
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

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={openScheduleModal}
              className="rounded-full bg-[#12394C] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-[#3A5D8F] md:px-6 md:py-2.5 md:text-sm cursor-pointer"
            >
             Enquire Now            
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="block md:hidden p-1.5 text-neutral-800 hover:text-[#3A5D8F]"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}