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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="h-12 md:h-0" /> {/* Mobile Spacer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-8 md:hidden"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image src="/images/logo.png" alt="Logo" width={100} height={40} className="h-8 w-auto" />
                </Link>
                <div className="h-6 w-px bg-black/10" />
                <Link
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-col justify-center"
                >
                  <span className="font-raleway text-[12px] font-black uppercase tracking-[0.05em] leading-none text-[#3A5D8F]">The Living</span>
                  <span className="font-raleway text-[12px] font-black uppercase tracking-[0.05em] leading-none mt-1 text-[#2354A2]">Blueprint</span>
                </Link>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-black"><X size={32} /></button>
            </div>

            <nav className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold text-neutral-900 border-b border-black/5 pb-4"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Button removed from mobile menu per request */}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? "top-0 px-0" : "top-6 px-6"
          }`}
      >
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled
          ? "w-full bg-white py-6 px-6 md:px-12 border-b border-black/5 shadow-md"
          : "w-full max-w-[1400px] bg-white/60 py-4 px-8 rounded-full border border-white/20 shadow-2xl backdrop-blur-md"
          }`}>
          <div className="flex items-center gap-4 shrink-0">
            <Link href="/" className="shrink-0">
              <Image
                src="/images/logo.png"
                alt="Ganga Legend Logo"
                width={180}
                height={60}
                className={`w-auto transition-all duration-500 ${isScrolled ? "h-10 md:h-12" : "h-10 md:h-12"}`}
              />
            </Link>
            <div className="h-10 w-px bg-black/10 hidden md:block" />
            <Link
              href="#"
              className="flex flex-col justify-center"
            >
              <span className="font-raleway text-[14px] font-black uppercase tracking-[0.05em] leading-none text-[#000000]">The Living</span>
              <span className="font-raleway text-[14px] font-black uppercase tracking-[0.05em] leading-none mt-1 text-[#000000]">Blueprint</span>
            </Link>
          </div>

          <nav className="hidden items-center gap-3 lg:gap-5 xl:gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap text-[13px] font-bold uppercase tracking-widest transition-colors hover:text-[#3A5D8F] ${isScrolled ? "text-neutral-800" : "text-black"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={openScheduleModal}
              className={`hidden md:block rounded-full font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap shadow-lg ${isScrolled
                ? "bg-[#12394C] text-white px-8 py-4 text-[12px] hover:bg-[#3A5D8F]"
                : "bg-[#FFD44F] text-neutral-900 px-6 py-3 text-[11px] hover:bg-[#FFD44F]/80 shadow-[#FFD44F]/20"
                }`}
            >
              Enquire Now
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="block md:hidden text-black hover:opacity-70 transition-opacity"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}