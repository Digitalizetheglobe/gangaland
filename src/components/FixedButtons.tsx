"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, Info, ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useScheduleModal } from "@/context/ModalContext";

export default function FixedButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { openScheduleModal } = useScheduleModal();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Left side buttons */}
      <div className="fixed left-0 bottom-[15%] md:bottom-6 z-50 flex -translate-y-1/2 flex-col gap-2">
        <Link
          href="https://wa.me/+917026967026"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex w-10 md:w-12 items-center justify-start overflow-hidden rounded-r-lg bg-green-500 p-2 text-white shadow-lg transition-all duration-300 md:hover:w-36"
        >
          <Image 
            src="/images/whats-app.png" 
            alt="WhatsApp" 
            width={32} 
            height={32} 
            className="shrink-0"
          />
          <span className="ml-3 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
            WhatsApp
          </span>
        </Link>

        <button
          onClick={openScheduleModal}
          className="group flex w-10 md:w-12 items-center justify-start overflow-hidden rounded-r-lg bg-[#2354A2] p-2.5 md:p-3 text-white shadow-lg transition-all duration-300 md:hover:w-40 cursor-pointer"
        >
          <Info className="h-6 w-6 shrink-0" />
          <span className="ml-3 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
          Schedule a Visit
          </span>
        </button>
      </div>

      {/* Right side buttons */}
      <div className="fixed right-0 bottom-[25%] md:bottom-26 z-50 flex -translate-y-1/2 flex-col gap-2">
        <Link
          href="tel:+91 7026967026"
          className="group flex w-10 md:w-12 flex-row-reverse items-center justify-start overflow-hidden rounded-l-lg bg-[#FFD44F] p-2.5 md:p-3 text-black shadow-lg transition-all duration-300 md:hover:w-32"
        >
          <Phone className="h-6 w-6 shrink-0" />
          <span className="mr-3 whitespace-nowrap text-sm font-bold opacity-0 transition-opacity duration-300 md:group-hover:opacity-100">
            Call Now
          </span>
        </Link>
      </div>

      {/* Back to top button (bottom right) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-[20%] md:bottom-18 right-1 z-50 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#FFD44F] text-black shadow-lg transition-all duration-300 hover:bg-[#2354A2] cursor-pointer ${
          showBackToTop ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );
}
