'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_IMAGES = [
    '/images/gallery%20(1).jpg',
    '/images/gallery%20(1).png',
    '/images/gallery%20(2).jpg',
    '/images/gallery%20(2).png',
];

const GallerySection = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };

    const getVisibleImages = () => {
        const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
        const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
        return [
            { index: prevIndex, image: GALLERY_IMAGES[prevIndex], type: 'prev' },
            { index: currentIndex, image: GALLERY_IMAGES[currentIndex], type: 'current' },
            { index: nextIndex, image: GALLERY_IMAGES[nextIndex], type: 'next' }
        ];
    };

    const visibleItems = getVisibleImages();

    return (
        <section id="gallery" className="w-full bg-gray-300 py-20 md:py-28 relative z-20 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4 mb-12 text-center md:text-left"
                >
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <span className="text-[#3A5D8F] font-bold uppercase tracking-widest text-sm">Our Gallery</span>
                        {/* <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="h-[2px] bg-[#3A5D8F]" 
                        /> */}
                    </div>
                    <h2 className="font-raleway uppercase text-3xl md:text-5xl font-bold leading-tight tracking-tight text-[#2354A2] ">
                        Gallery
                    </h2>
                </motion.div>

                {/* Carousel */}
                <div className="relative flex items-center justify-center md:gap-8 h-[400px] md:h-[500px]">
                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute cursor-pointer left-2 md:left-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#3A5D8F] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#2c476e] transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Slides */}
                    <div className="flex items-center justify-center w-full h-full md:gap-8">
                        {visibleItems.map((item) => (
                            <motion.div
                                key={`${item.index}-${item.type}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: item.type === 'current' ? 1 : 0.8, scale: item.type === 'current' ? 1 : 0.95 }}
                                transition={{ duration: 0.5 }}
                                className={`relative h-full transition-all duration-500 ease-in-out
                                    ${item.type === 'current'
                                        ? 'w-full md:w-[60%] z-10 shadow-2xl group cursor-pointer'
                                        : 'w-0 md:w-[20%] h-[80%] z-0 grayscale-[30%] hidden md:block'}
                                `}
                                onClick={() => item.type === 'current' && setIsModalOpen(true)}
                            >
                                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-neutral-800">
                                    <Image
                                        src={item.image}
                                        alt={`Gallery Image ${item.index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                    />
                                    {/* Hover Overlay */}
                                    {item.type === 'current' && (
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                                            <div className="bg-[#3A5D8F] rounded-full p-3 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                                <Plus className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute cursor-pointer right-2 md:right-4 z-20 w-10 h-10 md:w-12 md:h-12 bg-[#3A5D8F] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#2c476e] transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-10 right-6 md:top-20 md:right-20 text-white hover:text-[#FFD44F] transition-colors z-[110] cursor-pointer p-2 bg-white/10 rounded-full hover:bg-white/20"
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                        
                        {/* Navigation Arrows */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevSlide();
                            }}
                            className="absolute left-4 md:left-10 text-white/70 hover:text-white transition-colors z-[110] cursor-pointer p-2 md:p-3 bg-white/5 md:bg-white/10 rounded-full hover:bg-white/20"
                        >
                            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="relative w-full max-w-5xl h-[60vh] md:h-[85vh] rounded-xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={GALLERY_IMAGES[currentIndex]}
                                    alt="Full Screen Gallery Image"
                                    fill
                                    className="object-contain"
                                    quality={100}
                                    priority
                                />
                            </motion.div>
                        </motion.div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextSlide();
                            }}
                            className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-colors z-[110] cursor-pointer p-2 md:p-3 bg-white/5 md:bg-white/10 rounded-full hover:bg-white/20"
                        >
                            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                        </button>

                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GallerySection;
