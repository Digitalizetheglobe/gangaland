'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-300 font-raleway p-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Simple Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors"
          >
            <div className="bg-[#FFD44F] text-black font-bold rounded-full p-3">
              Back to Home
            </div>
          </Link>
        </div>

        {/* Basic Content */}
        <article className="prose prose-invert prose-neutral max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-neutral-500 mb-8">Last Updated: March 17, 2026</p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              At {SITE_CONFIG.name}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-4">When you use our enquiry form, we collect the following information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Unit Preference</li>
              <li>Enquiry Details</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To respond to your enquiries and provide requested information.</li>
              <li>To schedule site visits or virtual tours.</li>
              <li>To send updates about project progress and exclusive offers.</li>
              <li>To improve our website and customer service experience.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access, loss, or misuse. Your data is stored securely and handled with care.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">5. Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, rent, or trade your personal information. We only share it with authorized partners under strict confidentiality agreements to provide you with the best service possible.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, correct, or request the deletion of your personal data. If you have any concerns or wish to exercise your rights, please contact us.
            </p>
          </section>

          <section className="mb-12 border-t border-neutral-800 pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">7. Contact Us</h2>
            <div className="space-y-2">
              {/* <p>Email: <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-white hover:underline">{SITE_CONFIG.contact.email}</a></p> */}
              <p>Phone: <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-white hover:underline">{SITE_CONFIG.contact.phone}</a></p>
              <p>Address: <span className="text-neutral-400">{SITE_CONFIG.address}</span></p>
            </div>
          </section>
        </article>

        <footer className="mt-20 pt-8 border-t border-neutral-900 text-sm text-neutral-600 flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
          {/* <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div> */}
        </footer>
      </div>
    </main>
  );
}
