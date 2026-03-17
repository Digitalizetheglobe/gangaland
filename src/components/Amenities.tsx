"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AMENITIES_DATA = {
  township: [
    "1.1 Acre Public Plaza", "Health Care", "GG International School", "Day Care Facilities",
    "Indoor Badminton Courts", "2 Padel Tennis Courts", "3 Lawn Tennis Courts",
    "Cricket Practice Nets (10-lane)", "Basketball Court", "Skatepark (California Bowl)",
    "8 Lane Running Track", "Hotfut Football Ground", "Temple", "Greenart Café",
    "2 Pickleball Courts", "Business Center", "Co-Working Space", "Indoor Sports",
    "Auditorium", "Seating Arena for Spectators", "Tagda Raho by Dhoni"
  ],
  phase1: [
    "2 Acre Central Park", "Grand Entrance Gate", "Multipurpose Party Lawn with Stage",
    "Multipurpose Play Area", "Handicap Access", "Central Garden with Amphitheatre",
    "Grand Entrance Lobby & Lounge", "Air-Conditioned Gymnasium", "Steam Bath with Changing Room",
    "Temperature-controlled Swimming Pool & Kids’ Pool", "80 m Skywalk",
    "Deck Area with Semi-Covered Pergola", "Open Shower in the Pool Deck Area",
    "Rock Climbing Wall", "Sports Shop", "Golf Putting", "Children's Play with Multi Play Station",
    "Seating Plaza", "Entrance Lobby Lounge", "Indoor Games"
  ],
  phase2: [
    "Entrance Lobby Lounge", "80 m Skywalk", "Air-Conditioned Gymnasium",
    "Steam Bath with Changing Room", "Swimming Pool & Kids’ Pool", "Pool Deck",
    "Party Lawn & Stage", "Multipurpose Court", "Children's Play Area",
    "2.4 M Wide Cycling / Skating Track", "2.4 M Wide Jogging / Walking Track",
    "Toddlers’ Play Area", "Co-Working Space", "Double Height Green Tunnel",
    "Science Park", "Acupressure Pathway", "Amphitheatre", "Library", "Banquet", "Indoor Golf"
  ]
};

type TabKey = keyof typeof AMENITIES_DATA;

export default function Amenities() {
  const [activeTab, setActiveTab] = useState<TabKey>("township");

  const tabs: { key: TabKey, label: string }[] = [
    { key: "township", label: "Township Amenities" },
    { key: "phase1", label: "Central Garden - Ph. 1" },
    { key: "phase2", label: "Central Garden - Ph. 2" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="amenities" className="relative bg-neutral-950 py-20 text-white md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center md:text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD44F]">
            Amenities
          </p>
          <h2 className="font-raleway text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
            Crafted Spaces For{" "}
            <span className=" text-[#FFD44F]">Everyday Luxury</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-neutral-400 md:mx-0 md:text-xl">
            From wellness and recreation to social gatherings, every amenity is
            thoughtfully designed to elevate your lifestyle and create moments
            that feel extraordinary.
          </p>
        </motion.div>

        {/* Premium Tab Bar */}
        <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-3 border-b border-white/5 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`cursor-pointer relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.key 
                ? "bg-[#FFD44F] text-neutral-900 shadow-lg shadow-[#FFD44F]/20" 
                : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div 
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-full bg-[#FFD44F]/20 blur-md pointer-events-none" 
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="mt-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {AMENITIES_DATA[activeTab].map((item, idx) => (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-4 shadow-sm transition-all hover:bg-white/[0.06] hover:border-[#FFD44F]/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFD44F]/10 text-[#FFD44F] ring-1 ring-[#FFD44F]/30">
                    <span className="text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                    {item}
                  </h3>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,212,79,0.05),_transparent_70%)] opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
