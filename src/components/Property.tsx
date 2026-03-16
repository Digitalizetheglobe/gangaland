"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutProperty() {
  return (
    <section id="property" className="relative overflow-hidden bg-neutral-950 py-20 text-white md:py-24">
      {/* Dynamic Background Glows */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-[#FFD44F]/5 blur-[120px]" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="pointer-events-none absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]" 
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 space-y-6"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-[1px] w-12 bg-[#FFD44F]/50"></span>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFD44F]">
              About
            </h2>
            <span className="h-[1px] w-12 bg-[#FFD44F]/50"></span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-raleway text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white"
          >
            The Ganga Legends <br />
            <span className="bg-gradient-to-r from-[#FFD44F] via-[#FFE59E] to-[#FFD44F] bg-clip-text text-transparent">
              Luxury Living
            </span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mt-4 h-px bg-gradient-to-r from-transparent via-[#FFD44F]/40 to-transparent"
          ></motion.div>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto max-w-7xl space-y-12 mb-12 text-justify"
        >
          <p className="text-xl leading-relaxed font-light text-neutral-400">
            At Ganga Legends County, homes are not an afterthought; they are an essential part of the performance ecosystem. Spread across <span className="text-white font-medium">30 acres</span>, this sports-first township in Bavdhan offers thoughtfully planned <span className="text-[#FFD44F] font-medium">3 BHK and 3.5 BHK residences</span> designed for families who believe in active, disciplined, future-ready living.
          </p>
        </motion.div>

        {/* Visual Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative mt-20"
        >
          <div className="group relative z-10 mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl transition-transform duration-700 hover:-translate-y-2">
            <div className="aspect-[30/11] relative h-full w-full">
              <Image
                src="/images/about.png"
                alt="Luxury Property Exterior"
                fill
                className="object-cover"
              />
            </div>
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>

          {/* Decorative Back-Frame */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-10 -left-6 z-0 h-full w-full max-w-4xl rounded-[2.5rem] border border-[#FFD44F]/10 -translate-x-4 md:translate-x-0 mx-auto left-0 right-0 pointer-events-none" 
          />
        </motion.div>
      </div>
    </section>
  );
}
