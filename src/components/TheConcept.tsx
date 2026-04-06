"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  AppWindow,
  Smartphone,
  Users,
  ArrowRight,
  Crosshair,
  X
} from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

const ecosystems = [
  {
    title: "Longevity Architecture",
    description: "7 scientific pillars engineered into every surface and system. A living operating system for your biology.",
    icon: Smartphone,
    img: "/images/concept1.png",
    video: "https://youtu.be/rk3rZ_rGca4?si=k6yicOWkC4B24aKV",
    label: "[BIO_DATA_LAYER_01]",
    coords: "48.8566° N, 2.3522° E"
  },
  {
    title: "Longevity Coaching",
    description: "TLB App + TLB Ring + Personal Coach for continuous bio-feedback. Real-time health-span optimization.",
    icon: AppWindow,
    img: "/images/concept2.png",
    video: "https://youtu.be/rk3rZ_rGca4?si=k6yicOWkC4B24aKV",
    label: "[PERFORMANCE_NEXUS]",
    coords: "34.0522° N, 118.2437° W"
  },
  {
    title: "Longevity Ecosystem",
    description: "Movement culture, nutrition pathways, and community rituals built into the urban fabric.",
    icon: Users,
    img: "/images/concept3.png",
    video: "https://youtu.be/rk3rZ_rGca4?si=k6yicOWkC4B24aKV",
    label: "[SOCIAL_CONNECTv2]",
    coords: "51.5074° N, 0.1278° W"
  },
];

const TechnicalAnnotation = ({ label, coords, side }: { label: string, coords: string, side: "left" | "right" }) => (
  <div className={`flex flex-col ${side === "left" ? "items-start text-left left-12" : "items-end text-right right-12"} absolute bottom-12 z-20 space-y-2 opacity-80 backdrop-blur-md bg-white/40 p-4 rounded-xl border border-black/5`}>
    <div className="flex items-center gap-3">
       {side === "left" && <Crosshair size={12} className="text-[#B8860B]" />}
       <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-800">{label}</span>
       {side === "right" && <Crosshair size={12} className="text-[#B8860B]" />}
    </div>
    <span className="font-mono text-[9px] text-neutral-500 tracking-widest">{coords}</span>
  </div>
);

const getYoutubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0&modestbranding=1` : url;
};

const VideoModal = ({ isOpen, onClose, videoSrc }: { isOpen: boolean; onClose: () => void; videoSrc: string }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setIsLoading(true); // Reset loading state when modal opens
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Loading State */}
                        <AnimatePresence>
                            {isLoading && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-neutral-900"
                                >
                                    <div className="w-12 h-12 border-4 border-[#FFD44F]/20 border-t-[#FFD44F] rounded-full animate-spin mb-4" />
                                    <span className="font-mono text-xs text-[#FFD44F]/70 tracking-widest uppercase">Initializing...</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be') ? (
                            <iframe
                                src={getYoutubeEmbedUrl(videoSrc)}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                onLoad={() => setIsLoading(false)}
                                className="w-full h-full"
                            />
                        ) : (
                            <video
                                src={videoSrc}
                                autoPlay
                                controls
                                onLoadedData={() => setIsLoading(false)}
                                className="w-full h-full object-contain"
                            />
                        )}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-[1000] p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-md"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// This component handles the scroll logic and renders ONLY after Client side hydration
const ConceptContent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState("");

    const handleOpenModal = (video: string) => {
        setActiveVideo(video);
        setIsModalOpen(true);
    };

    return (
        <section id="the-concept" className="relative bg-gray-300  py-12 md:py-16 overflow-hidden">
            {/* Modal */}
            <VideoModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                videoSrc={activeVideo} 
            />

            {/* Background Decorative Element */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FFD44F]/20 to-transparent" />
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#FFD44F]/20 to-transparent" />
            </div>

            <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-24">
                {/* Section Header */}
                <div className="mb-12 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4 flex items-center gap-4"
                    >
                        {/* <span className="h-px w-12 bg-[#3A5D8F]" /> */}
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#12394C] mb-4">The Concept</span>
                        {/* <span className="h-px w-12 bg-[#3A5D8F]" /> */}
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-raleway text-3xl md:text-5xl font-bold leading-tight tracking-tight text-[#2354A2] uppercase"
                    >
                        The Living Blueprint
                    </motion.h3>
                </div>

                <div className="space-y-12 lg:space-y-20">
                    {ecosystems.map((item, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className={`flex flex-col gap-8 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                
                                {/* Image Container */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative w-full lg:w-1/2 group"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-xl">
                                        <img 
                                            src={item.img} 
                                            alt={item.title}
                                            className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Overlays removed per request to make it plain */}
                                    </div>
                                    
                                    {/* Decorative Line Work */}
                                    <div className={`absolute -bottom-6 ${isEven ? "-right-6" : "-left-6"} w-24 h-24 border-b-2 border-${isEven ? 'r' : 'l'}-2 border-[#FFD44F]/20 rounded-${isEven ? 'br' : 'bl'}-3xl pointer-events-none hidden lg:block`} />
                                </motion.div>

                                {/* Content Container */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                    className="w-full lg:w-1/2 space-y-6"
                                >
                                    <div className={`flex items-center gap-3 ${!isEven && 'lg:flex-row-reverse'}`}>
                                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black/5 border border-black/10 text-[#B8860B] shadow-[0_0_20px_rgba(184,134,11,0.1)]">
                                            <item.icon size={28} />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-mono text-xs font-bold text-[#3A5D8F] tracking-widest">LEVEL_0{idx + 1}</span>
                                            <div className={`h-px w-12 bg-gradient-to-r ${isEven ? 'from-[#3A5D8F]/30 to-transparent' : 'from-transparent to-[#3A5D8F]/30'}`} />
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className={`font-raleway text-5xl font-bold tracking-tight text-[#3A5D8F] md:text-5xl ${!isEven && 'lg:text-right'}`}>
                                            {item.title}
                                        </h4>
                                        <p className={`max-w-xl text-xl font-light leading-relaxed text-neutral-600 ${!isEven && 'lg:ml-auto lg:text-right'}`}>
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className={`flex ${!isEven ? 'lg:justify-end' : 'justify-start'}`}>
                                        <div 
                                            onClick={() => handleOpenModal(item.video)}
                                            className="group flex items-center gap-4 bg-[#FFD44F] text-[#12394C] px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] cursor-pointer hover:bg-[#FFD44F]/90 hover:shadow-lg hover:shadow-[#FFD44F]/20 transition-all duration-300"
                                        >
                                            Discover Architecture
                                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Vertical Blueprint Way Background Text - Static/Sticky during scroll */}
            {/* <div className="fixed top-1/2 right-12 z-0 -translate-y-1/2 overflow-hidden pointer-events-none hidden xl:block opacity-30">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col items-end gap-6"
                >
                    <div className="h-48 w-px bg-black/20" />
                    <h2 className="rotate-180 [writing-mode:vertical-lr] font-raleway text-sm font-black uppercase tracking-[1em] text-[#3A5D8F]">
                        Blueprint Way
                    </h2>
                </motion.div>
            </div> */}
        </section>
    );
};

export default function TheConcept() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <ConceptContent />;
}
