"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 py-16 text-white md:py-24 relative z-20 pb-20 md:pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Logo and About */}
          <div className="space-y-6">
            <Link href="#home" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Ganga Legend Logo"
                width={120}
                height={60}
                className="h-18 w-auto object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white">
              Discover a stadium-sized lifestyle at Ganga Legends. Pune&apos;s most ambitious sports-first residential township, where everyday is a celebration of active living.
            </p>
            {/* <div className="flex items-center gap-4">
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
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#FFD44F]">
              Quick Links
            </h4>
            <nav className="flex flex-col items-start gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white transition hover:text-[#FFD44F]"
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
                <a
                  href="https://maps.app.goo.gl/Qf22nwGyAKUiTNLV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-white hover:text-[#FFD44F] transition-colors"
                >
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#FFD44F]" />
                  {SITE_CONFIG.address}
                </a>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="group flex items-center gap-3 text-sm text-white hover:text-[#FFD44F] transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#FFD44F]" />
                  {SITE_CONFIG.contact.phone}
                </a>
                {/* <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="group flex items-center gap-3 text-sm text-white hover:text-[#FFD44F] transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#FFD44F]" />
                  {SITE_CONFIG.contact.email}
                </a> */}
              </div>
              <div className="space-y-6">
                <p className="text-sm font-semibold md:mt-[-42px] mt-0 uppercase tracking-widest text-[#FFD44F]">
                  MahaRERA Registration
                </p>
                <p className="text-sm text-white">
                  P52100076756 | P52100076968
                </p>
                <div className="flex items-center mb-6 gap-4">
                  <a
                    href="https://maharera.mahaonline.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-24 w-24 rounded bg-white flex items-center justify-center relative overflow-hidden hover:opacity-80 transition-opacity"
                    title="View MahaRERA Registration"
                  >
                    <Image
                      src="/images/QR-code-one.png"
                      alt="MahaRERA QR Code 1"
                      fill
                      className="object-cover"
                    />
                  </a>
                  <a
                    href="https://maharera.mahaonline.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-24 w-24 rounded bg-white flex items-center justify-center relative overflow-hidden hover:opacity-80 transition-opacity"
                    title="View MahaRERA Registration"
                  >
                    {/* Replace the src below with your second QR code image */}
                    <Image
                      src="/images/Qr-two.png"
                      alt="MahaRERA QR Code 2"
                      fill
                      className="object-cover"
                    />
                  </a>
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
              <Link href="/privacy-policy" className="hover:text-[#FFD44F] transition">Privacy Policy</Link>
            </p>
            {/* <p className="text-[10px] uppercase tracking-widest text-white">
              Designed for a premium life
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
