"use client";

import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

export default function School() {
    return (
        <section id="school" className="relative overflow-hidden bg-neutral-950 py-24 text-white md:py-32">
            {/* Background Atmosphere */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="pointer-events-none absolute -top-48 right-0 h-[600px] w-[600px] rounded-full bg-[#FFD44F]/5 blur-[150px]" 
            />

            <div className="mx-auto max-w-7xl px-6">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto mb-20 max-w-4xl text-center space-y-8"
                >
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-px w-10 bg-[#FFD44F]/40"></span>
                        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFD44F]">
                            Education
                        </h2>
                        <span className="h-px w-10 bg-[#FFD44F]/40"></span>
                    </div>

                    <h2 className="font-raleway text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white text-center">
                        GGIS: Education That Begins <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-[#FFD44F] via-[#FFE59E] to-[#FFD44F] bg-clip-text text-transparent">
                            At Your Doorstep
                        </span>
                    </h2>

                    <p className="mx-auto max-w-8xl text-xl leading-relaxed font-light text-neutral-400 text-justify md:text-center">
                        At Ganga Legends County, education, sports, and care come together seamlessly, supported by <span className="text-white font-medium">GGIS</span>, an on-campus international school with a daycare facility. For families choosing <span className="text-white font-medium">premium 3 BHK</span> in Bavdhan, or <span className="text-[#FFD44F] font-medium">sports-centric 3.5 BHK flats</span> in Bavdhan, Ganga Legends County creates an environment where academics, physical training, and values grow side by side. With no daily commute, children gain more time to learn, play, and rest, while parents enjoy complete peace of mind knowing their child is always close and safe.
                    </p>
                </motion.div>

                {/* Triple Panel Gallery */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className=""
                >
                    {/* Panel 1 */}
                    <div className="group relative aspect-[21/9] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-700 hover:-translate-y-2">
                        <div className="relative h-full w-full">
                            <Image
                                src="/images/School.png"
                                alt="School Environment"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-10">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#FFD44F]">Modern Campus</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
