'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Shield, Lock, Eye, FileText, UserCheck } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface Section {
  id: string;
  title: string;
  icon: any; // Using any for icon components to avoid complex Lucide typing issues
}

export default function PrivacyPolicy() {
  const sections: Section[] = [
    { id: "introduction", title: "Introduction", icon: FileText },
    { id: "information", title: "Information We Collect", icon: Eye },
    { id: "usage", title: "How We Use Your Data", icon: UserCheck },
    { id: "security", title: "Data Security", icon: Lock },
    { id: "sharing", title: "Information Sharing", icon: Shield },
    { id: "rights", title: "Your Rights", icon: UserCheck },
    { id: "contact", title: "Contact Us", icon: Mail },
  ];

  return (
    <main className="relative min-h-screen bg-[#050509] text-white font-raleway selection:bg-[#FFD44F] selection:text-neutral-950 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#FFD44F]/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -80, 0],
            y: [0, 120, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />
      </div>

      {/* Header Space */}
      <div className="h-24 md:h-32"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar / Quick Links (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32 space-y-6">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 rounded-full text-sm font-semibold bg-[#FFD44F] px-6 py-2.5 text-neutral-950 hover:bg-[#FFD44F]/80 transition-all group scale-100 hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Home
              </Link>

              <nav className="space-y-1 pt-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-bold mb-4 pl-2">Quick Navigation</p>
                {sections.map((section) => (
                  <a 
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-400 hover:text-[#FFD44F] hover:bg-white/5 rounded-lg transition-all group"
                  >
                    <section.icon className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <motion.div 
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="mb-8 lg:hidden"
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 rounded-full text-sm font-semibold bg-[#FFD44F] px-5 py-2 text-neutral-950 group"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back
              </Link>
            </motion.div>

            {/* Title Section */}
            <motion.header 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 uppercase">
                Privacy <span className="text-[#FFD44F]">Policy</span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-neutral-400">
                <p className="text-lg">Effective Date: March 17, 2026</p>
                <span className="hidden sm:block h-1.5 w-1.5 rounded-full bg-neutral-700"></span>
                <p className="text-lg">Last Updated: March 17, 2026</p>
              </div>
              <div className="mt-8 h-1 w-24 bg-gradient-to-r from-[#FFD44F] to-transparent rounded-full"></div>
            </motion.header>

            {/* Content Sections */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              {/* Introduction */}
              <motion.section id="introduction" variants={fadeInUp} className="group relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#FFD44F] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 hover:border-white/20 transition-colors shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#FFD44F]/10 rounded-2xl">
                      <FileText className="h-6 w-6 text-[#FFD44F]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Introduction</h2>
                  </div>
                  <p className="text-neutral-300 leading-relaxed text-lg">
                    At <strong className="text-white">{SITE_CONFIG.name}</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.
                  </p>
                </div>
              </motion.section>

              {/* Information We Collect */}
              <motion.section id="information" variants={fadeInUp} className="group relative">
                 <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#FFD44F] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                 <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 hover:border-white/20 transition-colors shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#FFD44F]/10 rounded-2xl">
                      <Eye className="h-6 w-6 text-[#FFD44F]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Information We Collect</h2>
                  </div>
                  <p className="text-neutral-300 mb-6 text-lg">
                    When you use our enquiry form, we collect the following information:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["Full Name", "Email Address", "Phone Number", "Unit Preference", "Enquiry Details"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-neutral-300 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-[#FFD44F]/30 transition-colors">
                        <span className="h-2 w-2 rounded-full bg-[#FFD44F]"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>

              {/* How We Use Your Data */}
              <motion.section id="usage" variants={fadeInUp} className="group relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#FFD44F] rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 hover:border-white/20 transition-colors shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#FFD44F]/10 rounded-2xl">
                      <UserCheck className="h-6 w-6 text-[#FFD44F]" />
                    </div>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-wider">How We Use Your Data</h2>
                  </div>
                  <div className="grid gap-6">
                    {[
                      { title: "Response", desc: "To respond to your enquiries and provide requested information." },
                      { title: "Scheduling", desc: "To schedule site visits or virtual tours." },
                      { title: "Updates", desc: "To send updates about project progress and exclusive offers." },
                      { title: "Innovation", desc: "To improve our website and customer service experience." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-2xl border border-white/5 hover:bg-white/5 transition-all">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-[#FFD44F] text-black flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-1">{item.title}</h3>
                          <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>

              {/* Security & Sharing Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.section id="security" variants={fadeInUp} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-white/20 transition-all">
                  <Lock className="h-8 w-8 text-[#FFD44F] mb-6" />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Data Security</h2>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    We implement industry-standard security measures to protect your personal information from unauthorized access, loss, or misuse.
                  </p>
                </motion.section>

                <motion.section id="sharing" variants={fadeInUp} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-white/20 transition-all">
                  <Shield className="h-8 w-8 text-[#FFD44F] mb-6" />
                  <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4">Sharing</h2>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    We do not sell, rent, or trade your personal information. We only share with authorized partners under strict confidentiality.
                  </p>
                </motion.section>
              </div>

              {/* Rights Section */}
              <motion.section id="rights" variants={fadeInUp} className="bg-[#FFD44F] rounded-3xl p-8 md:p-12 text-neutral-950 overflow-hidden relative">
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div className="flex-1 space-y-4">
                    <h2 className="text-3xl font-black uppercase">Your Rights Matter</h2>
                    <p className="font-medium opacity-80">
                      You have full control over your data. Access, correct, or opt-out at any time. We respect your choice.
                    </p>
                  </div>
                  {/* <div className="flex flex-wrap gap-2 justify-center">
                    {["Access", "Correct", "Opt-out"].map((btn) => (
                      <span key={btn} className="px-6 py-2 bg-neutral-950 text-white rounded-full text-sm font-bold">
                        {btn}
                      </span>
                    ))}
                  </div> */}
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
              </motion.section>

              {/* Contact Us */}
              <motion.section id="contact" variants={fadeInUp} className="group">
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#FFD44F]/10 rounded-2xl">
                          <Mail className="h-6 w-6 text-[#FFD44F]" />
                        </div>
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Contact Us</h2>
                      </div>
                      <p className="text-neutral-400 leading-relaxed">
                        If you have any questions about this Privacy Policy or our data practices, our team is here to help.
                      </p>
                    </div>
                    
                    <div className="flex-1 grid gap-4">
                      <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#FFD44F]/50 transition-all group/card">
                        <div className="p-3 bg-neutral-900 rounded-xl group-hover/card:bg-[#FFD44F] group-hover/card:text-black transition-colors">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Email Us</p>
                          <p className="text-white font-medium">{SITE_CONFIG.contact.email}</p>
                        </div>
                      </a>

                      <a href={`tel:${SITE_CONFIG.contact.phone}`} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#FFD44F]/50 transition-all group/card">
                        <div className="p-3 bg-neutral-900 rounded-xl group-hover/card:bg-[#FFD44F] group-hover/card:text-black transition-colors">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Call Us</p>
                          <p className="text-white font-medium">{SITE_CONFIG.contact.phone}</p>
                        </div>
                      </a>

                      <a href="https://maps.app.goo.gl/Qf22nwGyAKUiTNLV8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#FFD44F]/50 transition-all group/card">
                        <div className="p-3 bg-neutral-900 rounded-xl group-hover/card:bg-[#FFD44F] group-hover/card:text-black transition-colors">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider">Visit Us</p>
                          <p className="text-white font-medium line-clamp-1">{SITE_CONFIG.address}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.section>
            </motion.div>

            {/* Footer */}
            <motion.footer 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-500 text-sm"
            >
              <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-[#FFD44F] transition-colors">Terms of Service</Link>
                <Link href="/" className="hover:text-[#FFD44F] transition-colors">Cookie Policy</Link>
              </div>
            </motion.footer>
          </div>
        </div>
      </div>
    </main>
  );
}
