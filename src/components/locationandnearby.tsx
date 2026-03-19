'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, HeartPulse, Route, Clapperboard, Coffee, ChevronDown, ChevronUp } from 'lucide-react';

const LOCATION_DATA = [
  {
    id: 'education',
    title: 'EDUCATION',
    icon: GraduationCap,
    items: [
      { name: 'Goel Ganga International School', time: '0 Min' },
      { name: 'Suryadatta College', time: '2 Min' },
      { name: 'Ryan International School, Bavdhan', time: '7 Min' },
      { name: 'Little Millenium School', time: '7 Min' },
    ]
  },
  {
    id: 'healthcare',
    title: 'HEALTHCARE',
    icon: HeartPulse,
    items: [
      { name: 'Lopmudra Wellness Centre', time: '3 Min' },
      { name: 'Chellaram Hospital', time: '4 Min' },
      { name: 'Asian Specialty Hospital', time: '11 Min' },
      { name: 'Apple Specialty Hospital', time: '15 Min' },
    ]
  },
  {
    id: 'connectivity',
    title: 'CONNECTIVITY',
    icon: Route,
    items: [
      { name: 'Mumbai-Bangalore Highway', time: '2 Min' },
      { name: 'Pune Station', time: '15 Min' },
      { name: 'Hinjawadi IT Park', time: '22 Min' },
      { name: 'Pune International Airport', time: '45 Min' },
    ]
  },
  {
    id: 'entertainment',
    title: 'ENTERTAINMENT',
    icon: Clapperboard,
    items: [
      { name: 'Vishal Shopping Mall', time: '1 Min' },
      { name: 'Aditya Shagun Mall', time: '2 Min' },
      { name: 'Bagfull Mart', time: '3 Min' },
      { name: 'Regent Plaza Mall', time: '13 Min' },
    ]
  },
  {
    id: 'fb',
    title: 'F&B',
    icon: Coffee,
    items: [
      { name: 'Legends Cafe', time: '0 Min' },
      { name: 'La Bali Bar & Kitchen', time: '2 Min' },
      { name: 'Oliva Veg Restaurant', time: '3 Min' },
      { name: 'Planet Nine Bistro', time: '10 Min' },
    ]
  }
];

export default function LocationAndNearby() {
  const [openSection, setOpenSection] = useState<string | null>('healthcare');

  const toggleSection = (id: string) => {
    setOpenSection(prev => prev === id ? null : id);
  };

  return (
    <section id="location" className="relative w-full overflow-hidden bg-neutral-950 py-20 md:py-28 text-neutral-800 border-t border-gray-400">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center mb-16 space-y-6"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-[#FFD44F] font-bold uppercase tracking-widest text-sm">Location Advantages</span>
            {/* <div className="h-[2px] w-12 bg-[#3A5D8F]"></div> */}
          </div>
          <h2 className="font-raleway text-4xl md:text-5xl uppercase font-bold leading-tight tracking-tight text-white">
            Bavdhan: Where Pune Trains Its Future.
          </h2>
          <p className="text-xl md:text-xl leading-relaxed text-gray-400 font-medium px-4">
            Strategically located in Bavdhan, Pune, Ganga Legends County offers the rare balance of seamless connectivity
            and a convenient daily routine. With quick access to Kothrud, Baner, and Hinjawadi and smooth connectivity to the
            Mumbai-Bangalore Highway, the city stays effortlessly within reach. Add to this proximity to supermarkets,
            healthcare centres, leading schools, colleges, and IT hubs, along with the calm of hills, greenery, it's clear why this
            sports-first township is rapidly emerging as the preferred address for future-focused families.
          </p>
        </motion.div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column: Accordion */}
          <div className="flex flex-col gap-4">
            {LOCATION_DATA.map((section, index) => {
              const isOpen = openSection === section.id;
              const Icon = section.icon;

              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full"
                >
                  {/* Category Header (Button) */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`group w-full flex items-center justify-between px-6 py-4 transition-all duration-300 border cursor-pointer
                      ${isOpen 
                        ? 'bg-white/10 border-white/20 rounded-t-3xl rounded-b-none shadow-xl' 
                        : 'bg-white/5 border-white/10 rounded-full hover:border-[#3A5D8F] hover:bg-white/10'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className={`w-6 h-6 transition-colors ${isOpen ? 'text-[#FFD44F]' : 'text-[#3A5D8F] group-hover:text-white'}`} />
                      <span className={`font-bold tracking-wider uppercase text-sm transition-colors ${isOpen ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                        {section.title}
                      </span>
                    </div>
                    <div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Content list */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-white/5 rounded-b-3xl border-x border-b border-white/20 backdrop-blur-sm"
                      >
                        <ul className="px-10 py-6 space-y-4">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start text-sm md:text-base font-medium text-gray-300">
                              <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FFD44F] shrink-0" />
                              <span className="leading-snug">{item.name} - <span className="text-[#FFD44F] font-bold">{item.time}</span></span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Google Maps iFrame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3783.145232811096!2d73.775263!3d18.522338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be5f526bb13f%3A0xd00deb69a06a5a07!2sGanga%20Legends%20County!5e0!3m2!1sen!2sin!4v1773647605997!5m2!1sen!2sin" 
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
