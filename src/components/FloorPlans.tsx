'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Ruler, BedDouble, Bath, Square, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { useScheduleModal } from "@/context/ModalContext";

const FLOOR_PLANS = [
    {
        id: '4bhk-a',
        title: '4 BHK Unit A Type (Series 1 & 6)',
        type: '4 BHK (A)',
        price: '1.97 Cr* Onwards',
        area: '1411 Sq.Ft.',
        carpet: '1320 Sq.Ft.',
        balcony: '91 Sq.Ft.',
        image: '/images/Newplan1.png',
        features: ['New Glass Facade Elevation', 'Possession Dec 2028', '2 Car Parks (Limited Offer)', 'Rooftop Lounge & Bar', 'Heated Pool with Cabanas', 'Private Cinema']
    },
    {
        id: '4bhk-b',
        title: '4 BHK Unit B Type (Series 2 & 5)',
        type: '4 BHK (B)',
        price: '1.81 Cr* Onwards',
        area: '1294 Sq.Ft.',
        carpet: '1238 Sq.Ft.',
        balcony: '56 Sq.Ft.',
        image: '/images/Newplan2.png',
        features: ['New Glass Facade Elevation', 'Possession Dec 2028', '2 Car Parks (Limited Offer)', 'Business Lounge & Co-working', 'Pet Spa & Grooming', 'Emergency Medical Room']
    },
    {
        id: '3bhk',
        title: '3 BHK Unit Type (Series 4 & 7)',
        type: '3 BHK',
        price: '1.71 Cr* Onwards',
        area: '1222 Sq.Ft.',
        carpet: '1132 Sq.Ft.',
        balcony: '90 Sq.Ft.',
        image: '/images/Newplan3.png',
        features: ['New Glass Facade Elevation', 'Possession Dec 2028', '2 Car Parks (Limited Offer)', 'Kids’ Creche & Daycare', 'Music & Dance Studio', 'Art Gallery & Library']
    },
    {
        id: '2-5bhk',
        title: '2.5 BHK Unit (Series 3 & 8)',
        type: '2.5 BHK',
        price: '1.44 Cr* Onwards',
        area: '1030 Sq.Ft.',
        carpet: '978 Sq.Ft.',
        balcony: '52 Sq.Ft.',
        image: '/images/Newplan4.png',
        features: ['New Glass Facade Elevation', 'Possession Dec 2028', 'Indoor Games & Card Room', 'Banquet Hall', 'Snooker Room', 'Gym & Meditation Pavilion']
    },
    {
        id: '1-5bhk-refuge',
        title: '1.5 BHK Unit (Series 3 & 8) Refuge Floor',
        type: '1.5 BHK (Refuge)',
        price: 'Request Price',
        area: '821 Sq.Ft.',
        carpet: '821 Sq.Ft.',
        balcony: '0 Sq.Ft.',
        image: '/images/Newplan5.png',
        features: ['New Glass Facade Elevation', 'Possession Dec 2028', 'Steam, Sauna & Ice Bath', 'Emergency Medical Room', 'Private Deck Access', 'Integrated Refuge Area']
    },
    {
        id: 'typical-floor',
        title: 'Typical Floor Layout Plan',
        type: 'Typical Layout',
        price: 'TBA',
        area: 'Full Tower Layout',
        carpet: 'Multi-Unit Typical',
        balcony: 'All Series Integrated',
        image: '/images/Newplan6.png',
        features: ['New Glass Facade Elevation', 'Possession Dec 2028', 'Luxury High-Speed Lifts', 'Sky Lounge Access', 'Central Lifestyle Zone', 'Enhanced Safety Pylon']
    },
    {
        id: 'refuge-floor',
        title: 'Refuge Floor Layout Plan',
        type: 'Refuge Layout',
        price: 'TBA',
        area: 'Full Refuge Level',
        carpet: 'Multi-Unit Refuge',
        balcony: 'Integrated Refuge Area',
        image: '/images/Newplan7.png',
        features: ['New Glass Facade Elevation', 'Possession Dec 2028', 'Dedicated Refuge Safety Zone', 'Direct Fire Escape access', 'Emergency Hub', 'Medical Room Proximity']
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
        <section id="floor-plans" className="w-full bg-gray-300 py-12 md:py-16 relative overflow-hidden">
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
                    </div>
                    <h2 className="font-raleway text-4xl md:text-5xl uppercase font-bold leading-tight tracking-tight text-[#2354A2]">
                        Master <span className="text-[#3A5D8F]">Floor Plans</span>
                    </h2>
                    <p className="text-neutral-700 max-w-2xl mt-4 font-medium text-xl">
                        Meticulously crafted layouts designed to maximize space, light, and luxury. Discover your future sanctuary.
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="relative mb-12">
                    {/* Mobile: two rows — 4 tabs then 3 centered */}
                    <div className="md:hidden space-y-2">
                        <div className="grid grid-cols-4 gap-2">
                            {FLOOR_PLANS.slice(0, 4).map((plan) => (
                                <button
                                    key={plan.id}
                                    onClick={() => setActiveTab(plan.id)}
                                    className={`px-1 py-3 rounded-xl font-raleway font-semibold cursor-pointer transition-all duration-300 border text-[9px] sm:text-xs whitespace-nowrap tracking-tighter ${activeTab === plan.id
                                        ? 'bg-[#12394C] border-[#12394C] text-white shadow-lg'
                                        : 'bg-white/50 border-gray-400 text-neutral-600 hover:border-[#3A5D8F] hover:text-[#3A5D8F]'
                                    }`}
                                >
                                    {plan.type}
                                </button>
                            ))}
                        </div>
                        <div className="flex justify-center gap-2">
                            {FLOOR_PLANS.slice(4).map((plan) => (
                                <button
                                    key={plan.id}
                                    onClick={() => setActiveTab(plan.id)}
                                    className={`px-1 py-3 rounded-xl font-raleway font-semibold cursor-pointer transition-all duration-300 border text-[9px] sm:text-xs whitespace-nowrap tracking-tighter w-[calc(25%+0.25rem)] ${activeTab === plan.id
                                        ? 'bg-[#12394C] border-[#12394C] text-white shadow-lg'
                                        : 'bg-white/50 border-gray-400 text-neutral-600 hover:border-[#3A5D8F] hover:text-[#3A5D8F]'
                                    }`}
                                >
                                    {plan.type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Desktop: original flex-wrap layout */}
                    <div className="hidden md:flex md:flex-wrap justify-center gap-4">
                        {FLOOR_PLANS.map((plan) => (
                            <button
                                key={plan.id}
                                onClick={() => setActiveTab(plan.id)}
                                className={`px-8 py-3 rounded-full font-raleway font-semibold cursor-pointer transition-all duration-300 border text-sm whitespace-nowrap ${activeTab === plan.id
                                    ? 'bg-[#12394C] border-[#12394C] text-white shadow-lg transform scale-105'
                                    : 'bg-white/50 border-gray-400 text-neutral-600 hover:border-[#3A5D8F] hover:text-[#3A5D8F]'
                                }`}
                            >
                                {plan.type}
                            </button>
                        ))}
                    </div>
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
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
                            <div className="bg-white p-3 md:p-6 rounded-2xl border border-gray-400 shadow-md">
                                <Tag className="text-[#3A5D8F] mb-3 w-5 h-5 md:w-6 md:h-6" />
                                <div className="text-neutral-500 text-[10px] md:text-sm uppercase tracking-widest font-bold">Starting Price</div>
                                <div className="text-[#12394C] text-sm md:text-xl font-bold">{activePlan.price}</div>
                            </div>
                            <div className="bg-white p-3 md:p-6 rounded-2xl border border-gray-400 shadow-md">
                                <Square className="text-[#3A5D8F] mb-3 w-5 h-5 md:w-6 md:h-6" />
                                <div className="text-neutral-500 text-[10px] md:text-sm uppercase tracking-widest font-bold">Carpet Area</div>
                                <div className="text-[#12394C] text-sm md:text-xl font-bold">{activePlan.carpet}</div>
                            </div>
                            <div className="bg-white p-3 md:p-6 rounded-2xl border border-gray-400 shadow-md">
                                <BedDouble className="text-[#3A5D8F] mb-3 w-5 h-5 md:w-6 md:h-6" />
                                <div className="text-neutral-500 text-[10px] md:text-sm uppercase tracking-widest font-bold">Unit Type</div>
                                <div className="text-[#12394C] text-sm md:text-xl font-bold">{activePlan.type}</div>
                            </div>
                            <div className="bg-white p-3 md:p-6 rounded-2xl border border-gray-400 shadow-md">
                                <Bath className="text-[#3A5D8F] mb-3 w-5 h-5 md:w-6 md:h-6" />
                                <div className="text-neutral-500 text-[10px] md:text-sm uppercase tracking-widest font-bold">Balcony</div>
                                <div className="text-[#12394C] text-sm md:text-xl font-bold">{activePlan.balcony}</div>
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
