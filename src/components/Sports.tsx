"use client";

import Image from "next/image"
import { motion } from "framer-motion"

type CategoryCard = {
    name: string
    imageSrc: string
    imageAlt: string
}

const categories: CategoryCard[] = [
    { name: "Cricket academy", imageSrc: "/images/Cricket1.png", imageAlt: "Cricket" },
    { name: "Football academy", imageSrc: "/images/Football.png", imageAlt: "Football" },
    { name: "Tennis academy", imageSrc: "/images/tennis.png", imageAlt: "Tennis" },
    { name: "Badminton academy", imageSrc: "/images/badminton.png", imageAlt: "Badminton" },
    { name: "Swimming academy", imageSrc: "/images/swimming.png", imageAlt: "Cricket" },
    { name: "California Bowl", imageSrc: "/images/Ctennis.png", imageAlt: "Football" },
    { name: "Padel Tennis", imageSrc: "/images/padel.png", imageAlt: "Tennis" },
    { name: "HotFut Sports", imageSrc: "/images/hotfut.png", imageAlt: "Badminton" },
    // { name: "Cricket academy", imageSrc: "/images/banner-left.png", imageAlt: "Cricket" },
    // { name: "Football academy", imageSrc: "/images/banner-left.png", imageAlt: "Football" },
]

export default function Sports() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0, y: 30 },
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    // Chunks for 4-4-2 layout (Total 10)
    const row1 = categories.slice(0, 4);
    const row2 = categories.slice(4, 8);
    const row3 = categories.slice(8, 10);

    const renderCard = (cat: CategoryCard, index: number) => (
        <motion.div
            key={`${cat.name}-${index}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative h-[200px] w-[200px] md:h-[240px] md:w-[240px] rounded-[24px] md:rounded-[28px] bg-[#2354A2]"
        >
            {/* vertical category label */}
            <div className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2">
                <span className="block select-none text-black/50 font-extrabold text-lg md:text-xl tracking-tight [writing-mode:vertical-rl] rotate-180">
                    {cat.name}
                </span>
            </div>

            {/* athlete image */}
            <div className="absolute inset-x-0 -top-8 md:-top-10 hover:scale-110 transition-all duration-300 ease-in-out h-full">
                <Image
                    src={cat.imageSrc || "/images/banner-left.png"}
                    alt={cat.imageAlt}
                    fill
                    sizes="(max-width: 768px) 200px, 240px"
                    className="object-contain object-bottom"
                    priority={false}
                />
            </div>
        </motion.div>
    );

    return (
        <section id="sports" className="w-full bg-gray-300 py-20 md:py-28 relative z-20 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-10 space-y-6"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#12394C] mb-4">
                            Sports
                        </p>   
                        <h2 className="font-raleway text-3xl md:text-5xl font-bold leading-tight tracking-tight text-[#2354A2] uppercase">
                            Experience <br className="md:hidden" />
                            <span className="text-[#2354A2]">The Stadium Life</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-black/80 font-medium">
                            Here, sports aren&apos;t boxed into a corner; they define the township. With 12.5 acres dedicated exclusively to sports, managed by the Ileseum Club, this is one of Pune’s most ambitious sports-first residential townships. Here, play isn’t occasional. It’s institutionalized.
                        </p>
                    </motion.div>

                    {/* Mobile/Tablet: Standard Grid */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:hidden mt-12 grid grid-cols-1 sm:grid-cols-2 gap-14 sm:gap-16 justify-items-center"
                    >
                        {categories.map((cat, index) => renderCard(cat, index))}
                    </motion.div>

                    {/* Desktop: Custom 4-4-2 Row Layout */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="hidden lg:flex flex-col items-center gap-12 mt-16"
                    >
                        {/* Row 1: 4 Cards */}
                        <div className="flex flex-wrap justify-center gap-10">
                            {row1.map((cat, index) => renderCard(cat, index))}
                        </div>

                        {/* Row 2: 4 Cards */}
                        <div className="flex flex-wrap justify-center gap-10">
                            {row2.map((cat, index) => renderCard(cat, index + 4))}
                        </div>

                        {/* Row 3: 2 Cards Centered */}
                        <div className="flex flex-wrap justify-center gap-10">
                            {row3.map((cat, index) => renderCard(cat, index + 8))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
