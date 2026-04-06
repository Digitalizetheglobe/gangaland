"use client"

import CountUp from "react-countup"
import { motion } from "framer-motion"

const counters = [
  { number: 14, label: "PLANNED TOWERS", unit: "" },
  { number: 9, label: "TOWERS DELIVERED", unit: "" },
  { number: 70, label: "OPEN SPACE", unit: "%" },
  { number: 1200, label: "SPORTY FAMILIES", unit: "+" },
  { number: 30, label: "SPORTS TOWNSHIP", unit: "ACRE" },
]

export default function Counter() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      className="relative w-full min-h-[400px] py-12 md:py-16 flex items-center justify-center text-white overflow-hidden"
    >
      {/* background image with light tint */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[#ffffff]/60"
        style={{
          backgroundImage: "url('/images/sports-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* dark overlay on top of background */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full px-6 md:px-10 text-center">
        {/* heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-raleway text-4xl uppercase md:text-5xl font-bold tracking-tight leading-tight text-white mb-8 md:mb-10"
        >
          The Stadium Life at a Glance
        </motion.h2>

        {/* counters row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 sm:gap-10 lg:gap-6 items-center place-items-center"
        >
          {counters.map((item, index) => (
            <div 
              key={item.label} 
              className={`flex flex-col items-center ${
                index === 4 ? "sm:col-span-2 md:col-span-1 lg:col-span-1" : "col-span-1"
              }`}
            >
              {/* white translucent circle */}
              <motion.div 
                variants={itemVariants}
                className="w-28 h-28 sm:w-32 md:w-36 lg:w-40 lg:h-40 md:h-36 sm:h-32 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center mb-4 md:mb-5 shadow-lg border border-white/20"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  <CountUp end={item.number} duration={4} enableScrollSpy scrollSpyOnce /><span className="text-xl sm:text-2xl md:text-[30px] my-auto ml-0.5">{item.unit}</span>
                </span>
              </motion.div>

              {/* label */}
              <motion.p 
                variants={itemVariants}
                className="text-[10px] md:text-sm lg:text-[14px] xl:text-lg tracking-[0.2em] md:tracking-[0.35em] text-white font-bold uppercase text-center"
              >
                {item.label}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
