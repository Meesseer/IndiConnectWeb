import React from 'react'

function Mission() {
  return (
    <section className="relative w-full py-32 overflow-hidden"
      style={{
        background: "linear-gradient(95.65deg, #01295C 29.81%, #004FB3 100%)"
      }}
    >
      <div className="absolute left-[-200px] top-80 w-[436px] h-[436px] rounded-full border border-white opacity-30"></div>
      <div className="absolute left-[400px] top 450 w-[50px] h-[50px] rounded-full border border-white opacity-30"></div>
      <div className="absolute right-[-50px] top-100 w-[80px] h-[80px] rounded-full border border-white opacity-30"></div>

      <div className="max-w-4xl mx-auto px-6 text-white relative z-10">
        <p className="text-[24px] md:text-[28px] leading-[122%]">
          We create platforms and ecosystems for{" "}
          <span className="font-semibold italic">
            mission-driven founders
          </span>{" "}
          that cultivate brands bringing about digital inclusion and transformative growth in the emerging regions of
        </p>

        <h2 className="mt-6
          text-[48px]
          md:text-[64px]
          font-bold
          italic
          leading-[122%]
          inline-block
          bg-[linear-gradient(90deg,#FF671F_0%,#FFFFFF_40%,#046A38_100%)]
          bg-clip-text
          text-transparent">
          Bharat.
        </h2>

        <p className="mt-8 text-[24px] md:text-[28px] leading-[122%]">
          We are a venture builder co-creating alongside founders in their journey{" "}
          <span className="font-semibold italic">
            from idea to industry
          </span>{" "}
          and beyond.
        </p>
      </div>
    </section>
  );
}

export default Mission;