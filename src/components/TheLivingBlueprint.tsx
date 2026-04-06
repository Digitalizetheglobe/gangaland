"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
    Wind,
    Droplets,
    Leaf,
    Volume2,
    Activity,
    Smartphone,
    Gem,
    Crosshair,
    Moon,
    UtensilsCrossed,
    Users,
    Trees
} from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const pillars = [
    {
        title: "Water Architecture",
        description: "Dedicated copper drinking water tap, stainless steel storage, alkaline water, real-time WQI monitoring.",
        icon: Droplets,
        video: "/videos/copper-water.mp4",
    },
    {
        title: "Sound & Fragrance",
        description: "Acoustic softening materials, water sound structures, quiet lobby design, botanical fragrance systems.",
        icon: Volume2,
        video: "/videos/sound-fragrance.mp4",
    },
    {
        title: "Fragrance Architecture",
        description: "Curated fragrance activating the parasympathetic nervous system. Forest notes, moss, citrus, gentle earth.",
        icon: Wind,
        video: "/videos/fragrance.mp4",
    },
    {
        title: "Nature Architecture",
        description: "10,000 sq ft mini-farm, 150+ native species, hydroponic balconies, sensory gardens, barefoot trails.",
        icon: Leaf,
        video: "/videos/nature.mp4",
    },
    {
        title: "Health-Span Center",
        description: "Movement Lab, Strength Lab, Recovery Lab (cold plunge, infrared sauna), Sleep Lab, Nutrition Coaching, 7-Day Blue Zone Reset.",
        icon: Activity,
        video: "/videos/body-scan.mp4",
    },
    {
        title: "Energy & Gemstone Architecture",
        description: "Crystal pyramids, directional gemstone placement per Vastu. Amethyst for sleep, Rose Quartz for calm, Black Tourmaline for EMF shielding.",
        icon: Gem,
        video: "/videos/energy.mp4",
    },
    {
        title: "Behaviour Coaching",
        description: "TLB Ring: sleep, HRV, recovery, stress. TLB App: daily nudges, breathwork prompts, health-span markers. Personal lifestyle coach.",
        icon: Smartphone,
        video: "/videos/behaviour.mp4",
    },
];

const TechnicalMarker = ({ position }: { position: string }) => (
    <div className={`absolute ${position} flex h-8 w-8 items-center justify-center opacity-20`}>
        <div className="h-px w-full bg-neutral-900" />
        <div className="absolute h-full w-px bg-neutral-900" />
    </div>
);

const MagneticIcon = ({ Icon }: { Icon: any }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const ref = useRef<HTMLDivElement>(null);

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * 0.4);
        y.set(distanceY * 0.4);
    };

    const handlePointerLeave = () => {
        x.set(0); y.set(0);
    };

    const springConfig = { damping: 15, stiffness: 200 };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);

    return (
        <motion.div
            ref={ref}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            style={{ x: dx, y: dy }}
            className="relative z-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-[#FFD44F] border border-white/10 transition-colors group-hover:bg-[#FFD44F] group-hover:text-black"
        >
            <Icon size={24} />
        </motion.div>
    );
};

export default function TheLivingBlueprint() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section id="the-living-blueprint" className="relative overflow-hidden bg-neutral-950 py-12 md:py-16 text-white">
            {/* Blueprint Grid Background */}
            <div className="pointer-events-none absolute inset-0 -z-0 opacity-[0.03]"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

            {/* Background Decor */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 h-[800px] w-[800px] rounded-full bg-[#FFD44F]/5 blur-[160px]" />
                <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-screen-2xl px-6">
                <div className="relative">
                    {/* Header Section */}
                    <div className="mb-4 md:mb-8 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="max-w-3xl"
                        >
                            <div className="mb-8 flex items-center justify-center gap-4">
                                <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#FFD44F]">The Architecture</span>
                            </div>
                            <h2 className="font-raleway text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white text-center uppercase">
                                Longevity <br />
                                <span className="bg-gradient-to-r from-[#FFD44F] via-[#FFE59E] to-[#FFD44F] bg-clip-text text-transparent">
                                    Blueprint
                                </span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-neutral-400 md:mx-0 md:text-xl">
                                Every element is an operating system for your biology. Multi-layered engineering for a lifetime of performance.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%", maxWidth: 200 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "circOut" }}
                            className="mt-6 h-px bg-gradient-to-r from-transparent via-[#FFD44F]/40 to-transparent"
                        />
                    </div>

                    {/* Staggered Grid - 7 scientific pillars (4 in first row, 3 in second) */}
                    <div className="mb-6 md:mb-6 flex flex-wrap justify-center gap-y-10 md:gap-y-16 gap-x-8 md:gap-x-10 lg:gap-x-8">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className={`group relative flex flex-col w-full md:w-[calc(50%-24px)] lg:w-[calc(25%-24px)] ${idx % 2 === 0 ? "md:mt-0" : "md:mt-12"
                                    } ${idx % 2 === 0 ? "lg:mt-0" : "lg:mt-12"
                                    }`}
                            >
                                {/* Technical Boundary */}
                                <div className="relative mb-8 md:mb-12 h-[300px] md:h-[350px] w-full overflow-hidden rounded-[24px] md:rounded-[32px] border border-white bg-white transition-all duration-700 hover:-translate-y-4">
                                    <TechnicalMarker position="top-0 left-0" />
                                    <TechnicalMarker position="top-0 right-0" />
                                    <TechnicalMarker position="bottom-0 left-0" />
                                    <TechnicalMarker position="bottom-0 right-0" />

                                    {/* Video Viewport */}
                                    <div className="absolute inset-0 overflow-hidden rounded-[24px] md:rounded-[32px] bg-black border-[0.5px] border-white/40">
                                        <video
                                            autoPlay muted loop playsInline preload="auto"
                                            className="h-full w-full object-cover opacity-100 transition-all duration-1000 group-hover:scale-105"
                                        >
                                            <source src={pillar.video} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                            className="absolute top-8 right-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/40"
                                        >
                                            <Crosshair size={20} />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Content Block */}
                                <div className="flex flex-col px-2 md:px-4">
                                    <div className="mb-2 md:mb-3 flex items-center gap-3">
                                        <span className="font-mono text-[10px] md:text-xs font-bold text-[#FFD44F]">P-{idx + 1}</span>
                                        <div className="h-px w-6 md:w-8 bg-white/10" />
                                    </div>
                                    <h5 className="mb-2 md:mb-3 text-lg md:text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[#FFD44F]">
                                        {pillar.title}
                                    </h5>
                                    <p className="text-xs md:text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300">
                                        {pillar.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Unified Blue Zone Science (Refined & Cinematic) */}
                    <div className="relative mt-12 md:mt-20 overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-2xl max-w-7xl mx-auto bg-[#0A0A0F]">
                        {/* Bright & Visible Background Image */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/images/background.png"
                                alt="Blue Zone Background"
                                className="h-full w-full object-cover brightness-110"
                            />
                            {/* Lighter Mask for visibility */}
                            <div className="absolute inset-0 bg-black/20" />
                            {/* Legibility Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-transparent" />
                            {/* Brand Accent Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,212,79,0.08),transparent_50%)]" />
                            {/* Subtle Technical Grid */}
                            <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,212,79,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,212,79,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
                        </div>

                        <div className="relative z-10 p-6 md:p-14">
                            {/* Technical Tag - Brand Gold */}
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-4 block font-raleway text-sm font-bold uppercase tracking-[0.4em] text-center text-[#FFD44F]/80"
                            >
                                Blue Zone Science
                            </motion.span>

                            {/* Cinematic Headings - Large & Impactful */}
                            <div className="mb-14 space-y-2">
                                <motion.h2
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className="font-raleway text-2xl md:text-5xl font-bold leading-tight text-center tracking-tight text-white uppercase"
                                >
                                    They weren&apos;t trying to live long.
                                </motion.h2>
                                <motion.h2
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="font-raleway text-2xl md:text-5xl font-bold leading-tight text-center tracking-tight text-white uppercase"
                                >
                                    Their environment made it happen.
                                </motion.h2>
                            </div>

                            {/* Architectural Matrix (Compact V3) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                                className="group/matrix relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-sm"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-12 p-4 md:p-8 items-start">
                                    {[
                                        { id: "BP-01", icon: Activity, pattern: "Natural Movement", impl: "Movement ecosystem, mobility loop, bespoke longevity programs" },
                                        { id: "BP-02", icon: Users, pattern: "Community Bonds", impl: "100+ events/year, intergenerational circles, social clusters" },
                                        { id: "BP-03", icon: UtensilsCrossed, pattern: "Nature Nutrition", impl: "Vertical farms, farm-to-table partnerships, nutrition coaching" },
                                        { id: "BP-04", icon: Trees, pattern: "Nature Exposure", impl: "Zen sanctuaries, sensory gardens, regenerative mini-farm" },
                                        { id: "BP-05", icon: Wind, pattern: "Low Chronic Stress", impl: "Breathwork pods, forest bathing trails, meditation sanctuaries" },
                                        { id: "BP-06", icon: Moon, pattern: "Consistent Sleep", impl: "Circadian lighting, dedicated sleep labs, biometric insights" }
                                    ].map((row, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                                            className={`group/item flex flex-col gap-4 p-4 md:p-7 rounded-[1.25rem] md:rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur-md transition-all duration-500 hover:bg-neutral-900/60 ${idx % 2 === 0 ? "md:mt-0" : "md:mt-8"
                                                }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFD44F]/10 text-[#FFD44F]">
                                                    <row.icon size={20} />
                                                </div>
                                                <span className="font-raleway text-lg md:text-xl font-bold tracking-tight text-white group-hover/item:text-[#FFD44F] transition-colors uppercase">
                                                    {row.pattern}
                                                </span>
                                            </div>

                                            <p className="font-light text-neutral-300 text-sm md:text-base leading-relaxed">
                                                {row.impl}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
