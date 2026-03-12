"use client";

import { useState, useEffect } from "react";

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    if (videoOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  return (
    <section className="relative z-10 flex min-h-screen">
      {/* Left panel - black background + image */}
      <div className="relative flex w-[35%] min-w-[360px] max-w-[600px] flex-col justify-center overflow-hidden bg-[#050509] px-10 py-32 md:px-14 lg:px-20">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/banner-left.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-lg space-y-8">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-neutral-800/90 px-5 py-3 text-sm text-white ring-1 ring-white/10 backdrop-blur-sm">
            <svg className="h-4 w-4 shrink-0 text-white/90" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="font-medium">538 Joanie Fort Apt. 933 Louisiana</span>
          </div>

          {/* Headline - serif, premium feel */}
          <h1 className="font-serif text-4xl font-medium leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Modern Space And Premium Of Apartment.
          </h1>

          {/* Description */}
          <p className="max-w-md text-base leading-relaxed text-gray-400">
            Welcome to a realm of unparalleled luxury and tranquility, nestled within London, of property.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-5">
            <button className="group flex items-center gap-2.5 rounded-lg bg-orange-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 hover:shadow-orange-500/30">
              Schedule A Visit
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="flex cursor-pointer items-center gap-3 rounded-full border-0 bg-transparent text-inherit transition hover:opacity-90"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500 shadow-md">
                <svg className="ml-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-base font-medium text-white">Video</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right panel - video with diagonal clip - wider */}
      <div className="relative hidden flex-1 md:block">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Slider arrows - far right */}
        {/* <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-md transition hover:bg-white"
            aria-label="Previous"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-800 shadow-md transition hover:bg-white"
            aria-label="Next"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div> */}
      </div>

      {/* Video modal - plays your video when Video button is clicked */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setVideoOpen(false)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="presentation"
          >
            <video
              src="/videos/banner-video.mp4"
              controls
              autoPlay
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
            <button
              type="button"
              onClick={() => setVideoOpen(false)}
              className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Mobile - video */}
      <div className="relative block h-72 w-full md:hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/banner-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
