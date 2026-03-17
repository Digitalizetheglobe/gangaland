'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white font-raleway selection:bg-[#FFD44F] selection:text-neutral-950">
      {/* Header Space */}
      <div className="h-20 md:h-24"></div>

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        {/* Back Link */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           className="mb-12"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFD44F] hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-white">
            Privacy <span className="text-[#FFD44F]">Policy</span>
          </h1>
          <p className="text-neutral-400 text-lg">Last Updated: March 17, 2026</p>
          <div className="h-1 w-20 bg-[#FFD44F] rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="space-y-12 text-neutral-300 leading-relaxed text-lg">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-[#FFD44F] pl-4">
              Introduction
            </h2>
            <p>
              At <strong className="text-white">{SITE_CONFIG.name}</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-[#FFD44F] pl-4">
              Information We Collect
            </h2>
            <p>
              When you use our enquiry form, we collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 marker:text-[#FFD44F]">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Unit preference (e.g., 3 BHK, 3.5 BHK)</li>
              <li>Any message or enquiry details you provide</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-[#FFD44F] pl-4">
              How We Use Your Data
            </h2>
            <p>
              The information we collect is used solely for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 marker:text-[#FFD44F]">
              <li>To respond to your enquiries and provide requested information.</li>
              <li>To schedule site visits or virtual tours.</li>
              <li>To send updates about project progress, pricing, and exclusive offers.</li>
              <li>To improve our website and customer service experience.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-[#FFD44F] pl-4">
              Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, loss, or misuse. Your data is stored securely and is only accessible to authorized personnel who need it to fulfill your requests.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-[#FFD44F] pl-4">
              Information Sharing
            </h2>
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may only share your details with our authorized sales partners or service providers who assist us in communicating with you, under strict confidentiality agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-[#FFD44F] pl-4">
              Your Rights
            </h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 marker:text-[#FFD44F]">
              <li>Access and review the personal information we hold about you.</li>
              <li>Request the correction or update of any inaccurate data.</li>
              <li>Opt-out of marketing communications at any time by contacting us.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider border-l-4 border-[#FFD44F] pl-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10 space-y-3">
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-white hover:text-[#FFD44F] transition-all">
                  {SITE_CONFIG.contact.email}
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong>{" "}
                <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-white hover:text-[#FFD44F] transition-all">
                  {SITE_CONFIG.contact.phone}
                </a>
              </p>
              <p className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="text-white shrink-0">Address:</strong>{" "}
                <a 
                  href="https://maps.app.goo.gl/Qf22nwGyAKUiTNLV8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#FFD44F] transition-all"
                >
                  {SITE_CONFIG.address}
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Footer Link */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
           <Link 
            href="/" 
            className="text-neutral-500 hover:text-[#FFD44F] transition-colors text-sm"
          >
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </Link>
        </div>
      </div>
    </main>
  );
}
