"use client"

import CountUp from "react-countup"

const counters = [
  {
    number: 14,
    label: "PLANNED TOWERS",
    unit: ""
  },
  {
    number: 9,
    label: "TOWERS DELIVERED",
    unit:""
  },
  {
    number: 70,
    label: "OPEN SPACE",
    unit: "%"
  },
  {
    number: 1200,
    label: "SPORTY FAMILIES",
    unit:''
  },
  {
    number: 30,
    label: "SPORTS TOWNSHIP",
    unit:"ACRE"
  },
]

export default function Counter() {
  return (
    <section
      className="relative w-full h-[400px] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      {/* background image with light tint */}
      <div
        className="absolute inset-0 bg-[#ffffff]/60"
        style={{
          backgroundImage: "url('/images/sports-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* dark overlay on top of background */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full px-6 md:px-10 text-center">
        {/* heading */}
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 md:mb-10 tracking-tight">
        The Stadium Life at a Glance
        </h2>

        {/* counters row */}
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between">
          {counters.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              {/* white translucent circle */}
              <div className="w-40 h-40 md:w-40 md:h-40 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center mb-5 shadow-lg">
                <span className="text-3xl lg:text-5xl font-bold text-white">
                  <CountUp end={item.number} duration={3} /> <span className="text-[30px] my-auto">{item.unit}</span> 
                </span>
              </div>

              {/* label */}
              <p className="text-[11px] md:text-md tracking-[0.35em] text-white font-bold uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}