"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 py-16 text-white md:py-24 relative z-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Logo and About */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Ganga Legend Logo"
                width={120}
                height={60}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white">
              Discover a stadium-sized lifestyle at Ganga Legends. Pune&apos;s most ambitious sports-first residential township, where everyday is a celebration of active living.
            </p>
            <div className="flex items-center gap-4">
              {/* Social Links */}
              {["facebook", "instagram", "youtube", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:scale-110"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <Image
                    src={`/images/${social}.png`}
                    alt={social}
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFD44F]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFD44F]">
              Get In Touch
            </h4>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <p className="flex items-start gap-3 text-sm text-white">
                  <span className="mt-1 text-[#FFD44F]">📍</span>
                  Ganga Legends, Near Hyundai Showroom, Bavdhan, Pune, Maharashtra 411021
                </p>
                <p className="flex items-center gap-3 text-sm text-white">
                  <span className="text-[#FFD44F]">📞</span>
                  +91 91122 33445
                </p>
                <p className="flex items-center gap-3 text-sm text-white">
                  <span className="text-[#FFD44F]">✉️</span>
                  sales@gangalegends.com
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-white">
                  MahaRERA Registration
                </p>
                <p className="text-sm text-white">
                  P52100021021 | P52100024316
                </p>
                <div className="h-12 w-32 rounded bg-white/5 flex items-center justify-center relative">
                   <span className="text-[10px] text-white">RERA LOGO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white pt-8 md:mt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-xs text-white">
              © {currentYear} Ganga Legends. All rights reserved. 
              <span className="mx-2">|</span>
              <Link href="#privacy" className="hover:text-white transition">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link href="#terms" className="hover:text-white transition">Terms & Conditions</Link>
            </p>
            <p className="text-[10px] uppercase tracking-widest text-white">
              Designed for a premium life
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
