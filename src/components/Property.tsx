"use client";

import Image from "next/image";
import { PROPERTY_FEATURES } from "@/constants/propertyFeatures";

export default function AboutProperty() {
  return (
    <section id="property" className="relative bg-neutral-950 py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#FFD44F]">
                About Our Property
              </h2>
              <h3 className="font-serif text-4xl font-medium leading-tight md:text-5xl">
                Experience the Pinnacle of <br />
                <span className="italic">Luxury Living</span>
              </h3>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-neutral-400">
              Nestled in the heart of the city's most prestigious district, our property defines a new standard of elegance. Every detail has been meticulously crafted to offer an unparalleled living experience that combines modern sophistication with timeless comfort.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              {PROPERTY_FEATURES.map((feature, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">{feature.title}</p>
                  <p className="text-2xl font-semibold text-white">{feature.value}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button className="group relative overflow-hidden rounded-full border border-[#FFD44F] px-8 py-3 text-[#FFD44F] transition-all hover:bg-[#FFD44F] hover:text-black">
                <span className="relative z-10 font-semibold">Download Brochure</span>
              </button>
            </div>
          </div>

          {/* Right Side: Image/Visuals */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="/images/luxury-apartment.png"
                alt="Luxury Property Exterior"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-[#FFD44F] p-8 text-neutral-900 shadow-2xl md:block">
              <div className="space-y-1">
                <p className="text-4xl font-bold">15+</p>
                <p className="text-sm font-medium uppercase tracking-tighter">Premium Amenities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
