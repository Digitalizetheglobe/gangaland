'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Ruler, BedDouble, Bath, Square, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScheduleModal } from "@/context/ModalContext";

const FLOOR_PLANS = [
    {
        id: 'master-layout',
        title: 'Master Layout Plan',
        type: 'Master Layout',
        area: '30+ Acres Township',
        carpet: 'Phase-2 Development',
        balcony: 'Sports-First Living',
        image: '/images/Masterplan.png',
        features: ['1.25 Acre Central Park', 'Club Ileseum 2', 'GG International School', 'Temple Zone & Pylon']
    },
    {
        id: '3bhk-w1-s1',
        title: '3 BHK Luxe Apartment (1 Series)',
        type: 'Wing-1 | Series 1',
        area: '1250 - 1380 Sq.Ft.',
        carpet: '1120 Sq.Ft.',
        balcony: '110 Sq.Ft.',
        image: '/images/Plan2.png',
        features: ['B5 Tower', 'Premium Series 1', 'Garden View', 'Cross Ventilation']
    },
    {
        id: '3bhk-w1-s2',
        title: '3 BHK Luxe Apartment (2 Series)',
        type: 'Wing-1 | Series 2',
        area: '1250 - 1380 Sq.Ft.',
        carpet: '1120 Sq.Ft.',
        balcony: '110 Sq.Ft.',
        image: '/images/Plan3.png',
        features: ['B5 Tower', 'Premium Series 2', 'City Skyline Views', 'Master Suite Balcony']
    },
    {
        id: '3bhk-w2-s1',
        title: '3 BHK Luxe Apartment (1 Series)',
        type: 'Wing-2 | Series 1',
        area: '1250 - 1380 Sq.Ft.',
        carpet: '1120 Sq.Ft.',
        balcony: '110 Sq.Ft.',
        image: '/images/Plan4.png',
        features: ['B5 Tower', 'Wing-2 Exclusive', 'Pool Facing', 'Elegant Layout']
    },
    {
        id: '3bhk-w2-s2',
        title: '3 BHK Luxe Apartment (2 Series)',
        type: 'Wing-2 | Series 2',
        area: '1250 - 1380 Sq.Ft.',
        carpet: '1120 Sq.Ft.',
        balcony: '110 Sq.Ft.',
        image: '/images/Plan1.png',
        features: ['B5 Tower', 'Wing-2 Premium', 'Spacious Living', 'Elite Finishes']
    }
];

const FloorPlans = () => {
    const [activeTab, setActiveTab] = useState(FLOOR_PLANS[0].id);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const { openScheduleModal } = useScheduleModal();

    const activePlan = FLOOR_PLANS.find(plan => plan.id === activeTab) || FLOOR_PLANS[0];

    const currentIdx = FLOOR_PLANS.findIndex(plan => plan.id === activeTab);

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const nextIdx = (currentIdx + 1) % FLOOR_PLANS.length;
        setActiveTab(FLOOR_PLANS[nextIdx].id);
    };

    const handlePrev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const prevIdx = (currentIdx - 1 + FLOOR_PLANS.length) % FLOOR_PLANS.length;
        setActiveTab(FLOOR_PLANS[prevIdx].id);
    };

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isLightboxOpen) return;
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') setIsLightboxOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, currentIdx]);

    return (
        <section id="floor-plans" className="w-full bg-gray-300 py-20 md:py-28 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#3A5D8F]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#2354A2]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4 mb-16 text-center md:text-left"
                >
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">Design & Space</span>
                        {/* <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-[2px] bg-[#3A5D8F]" 
                        /> */}
                    </div>
                    <h2 className="font-raleway text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#2354A2]">
                        Master <span className="text-[#3A5D8F]">Floor Plans</span>
                    </h2>
                    <p className="text-neutral-700 max-w-2xl mt-4 font-medium text-xl">
                        Meticulously crafted layouts designed to maximize space, light, and luxury. Discover your future sanctuary.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-12">
                    {FLOOR_PLANS.map((plan) => (
                        <button
                            key={plan.id}
                            onClick={() => setActiveTab(plan.id)}
                            className={`w-[calc(50%-0.5rem)] md:w-auto px-4 md:px-8 py-3 rounded-full font-raleway font-semibold cursor-pointer transition-all duration-300 border text-xs md:text-sm ${activeTab === plan.id
                                    ? 'bg-[#3A5D8F] border-[#3A5D8F] text-white shadow-lg'
                                    : 'border-gray-400 text-neutral-600 hover:border-[#3A5D8F] hover:text-[#3A5D8F]'
                                }`}
                        >
                            {plan.type}
                        </button>
                    ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Image Section */}
                    <motion.div
                        key={`${activeTab}-image`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7 group relative rounded-3xl overflow-hidden bg-white border border-gray-400 p-4 md:p-8 cursor-pointer shadow-xl"
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        <div className="relative aspect-[4/3] w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={activePlan.image}
                                alt={activePlan.title}
                                fill
                                className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                priority
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="bg-white/90 p-4 rounded-full shadow-xl"
                                >
                                    <Maximize2 className="w-8 h-8 text-[#2354A2]" />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Details Section */}
                    <motion.div
                        key={`${activeTab}-details`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-raleway font-bold text-[#2354A2] mb-2">{activePlan.title}</h3>
                            <p className="text-[#3A5D8F] font-bold text-xl tracking-tighter">Experience Grandeur</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-400 shadow-md">
                                <Ruler className="text-[#3A5D8F] mb-3 w-6 h-6" />
                                <div className="text-neutral-500 text-sm uppercase tracking-widest font-bold">Total Area</div>
                                <div className="text-[#12394C] text-xl font-bold">{activePlan.area}</div>
                            </div>
                            <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-400 shadow-md">
                                <Square className="text-[#3A5D8F] mb-3 w-6 h-6" />
                                <div className="text-neutral-500 text-sm uppercase tracking-widest font-bold">Carpet Area</div>
                                <div className="text-[#12394C] text-xl font-bold">{activePlan.carpet}</div>
                            </div>
                            <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-400 shadow-md">
                                <BedDouble className="text-[#3A5D8F] mb-3 w-6 h-6" />
                                <div className="text-neutral-500 text-sm uppercase tracking-widest font-bold">Unit Type</div>
                                <div className="text-[#12394C] text-xl font-bold">{activePlan.type}</div>
                            </div>
                            <div className="bg-white p-4 md:p-6 rounded-2xl border border-gray-400 shadow-md">
                                <Bath className="text-[#3A5D8F] mb-3 w-6 h-6" />
                                <div className="text-neutral-500 text-sm uppercase tracking-widest font-bold">Balcony</div>
                                <div className="text-[#12394C] text-xl font-bold">{activePlan.balcony}</div>
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-4 pt-4">
                            <h4 className="text-[#12394C] font-raleway font-bold text-lg">Key Highlights:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {activePlan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-neutral-700 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#3A5D8F]" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={openScheduleModal}
                            className="group flex flex-1 sm:flex-initial items-center justify-center gap-2.5 rounded-full cursor-pointer bg-[#FFD44F] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#FFD44F]/60"
                        >
                            Get More Details
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md"
                        onClick={() => setIsLightboxOpen(false)}
                    >
                        <button
                            onClick={() => setIsLightboxOpen(false)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110] cursor-pointer p-3 bg-white/5 rounded-full hover:bg-white/10"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <motion.div
                            key={activeTab}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative w-full max-w-7xl h-[80vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-4 md:p-8 flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Navigation Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 md:left-8 z-[120] text-[#3A5D8F] hover:text-[#2354A2] transition-colors cursor-pointer p-2 md:p-4 bg-gray-100/80 rounded-full hover:bg-white shadow-lg border border-gray-200"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                            </button>

                            <div className="relative w-full h-full">
                                <Image
                                    src={activePlan.image}
                                    alt="Full Floor Plan"
                                    fill
                                    className="object-contain p-8"
                                    quality={100}
                                    priority
                                />
                            </div>

                            <button
                                onClick={handleNext}
                                className="absolute right-4 md:right-8 z-[120] text-[#3A5D8F] hover:text-[#2354A2] transition-colors cursor-pointer p-2 md:p-4 bg-gray-100/80 rounded-full hover:bg-white shadow-lg border border-gray-200"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default FloorPlans;
