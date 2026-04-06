"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Arjun & Meera",
    role: "Homeowners",
    quote:
      "Every corner of the community feels carefully planned. The amenities and green spaces make everyday life feel like a retreat.",
  },
  {
    name: "Rahul Desai",
    role: "Resident",
    quote:
      "From security to maintenance, everything is managed professionally. It truly feels like a premium, well-run gated community.",
  },
  {
    name: "Priya & Kunal",
    role: "Young Couple",
    quote:
      "We were looking for a modern, elegant home with great connectivity. This project checked every box and more.",
  },
];

export default function Testimonial() {

  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="w-full bg-gray-300 py-12 md:py-16 relative z-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center md:text-left"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A5D8F]">
            Testimonials
          </p>
          <h2 className="font-raleway text-4xl md:text-5xl font-bold leading-tight tracking-tight text-[#3A5D8F]">
            Stories From Our{" "}
            <span className=" text-[#3A5D8F]">Residents</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-neutral-600 md:mx-0 md:text-xl">
            Hear from families and residents who chose this address for its
            design, comfort, and community-first living experience.
          </p>
        </motion.div>

      
        <div className="mt-12 overflow-hidden relative">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30, 
                ease: "linear",
              },
            }}
            className="flex gap-6 whitespace-nowrap"
          >
            {duplicatedTestimonials.map((t, idx) => (
              <motion.article
                key={`${t.name}-${idx}`}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative flex w-[350px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg shadow-neutral-300/70 transition-colors hover:border-[#3A5D8F]/70"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,93,143,0.16),_transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative space-y-4">
                  <div className="inline-flex items-center gap-2 text-[#3A5D8F]">
                    <span className="text-xl leading-none">“</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                      Verified Resident
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-neutral-700 md:text-base whitespace-normal">
                    {t.quote}
                  </p>
                </div>

                <div className="relative mt-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-neutral-900 md:text-base">
                      {t.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                      {t.role}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3A5D8F]/10 text-[#3A5D8F] ring-1 ring-[#3A5D8F]/40">
                    <span className="text-xs font-semibold">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-300 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-300 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
