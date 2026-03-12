"use client"

import CountUp from "react-countup"

const counters = [
  {
    number: 32,
    label: "COMPLETED PROJECTS",
  },
  {
    number: 98,
    label: "HAPPY CLIENTS",
  },
  {
    number: 109,
    label: "HOURS WORKED",
  },
  {
    number: 111,
    label: "SUPPORT TICKETS",
  },
]

export default function counter() {
  return (
    <section
      className="relative w-full h-[600px] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center w-full px-10">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          Animated Counters
        </h2>

        {/* Counters */}
        <div className="flex flex-wrap justify-center gap-16">

          {counters.map((item, index) => (
            <div key={index} className="flex flex-col items-center">

              {/* circle */}
              <div className="w-44 h-44 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center mb-4">

                <span className="text-4xl text-black font-semibold">
                  <CountUp end={item.number} duration={3} />
                </span>

              </div>

              {/* label */}
              <p className="text-sm tracking-widest text-white/90">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}