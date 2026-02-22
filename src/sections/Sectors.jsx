import brush from "../assets/orangebrush.png"
import sectorsImg from "../assets/sectors.png"
import { useState } from "react";

function Sectors() {
  const [active, setActive] = useState("Payments");
  const [activeBrand, setActiveBrand] = useState("Indipe");

  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      <div
        className="absolute"
        style={{
          width: "400px",
          height: "630px",
          top: "-350px",
          left: "-200px",
          borderRadius: "83px",
          transform: "rotate(-25.58deg)",
          background: "linear-gradient( #FFFFFF 36.86%, #FFEADF 96.46%)",
          zIndex: 0,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <div className="relative w-117.5 h-[110px] flex items-center justify-center">
          <img
            src={brush}
            alt="brush background"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <h2 className="relative text-white text-[32px] font-bold">
            Our Sectors
          </h2>
        </div>
      </div>

      <div className="mt-12 max-w-[858px] mx-auto text-center">

        <h3 className="text-[20px] font-bold leading-[122%] text-[#353636]">
          <span className="text-[#E04A00]">Integrated,</span>
          <span className="text-[#0252D4]"> Inclusive</span>
          <span className="text-[#FF915C]"> & Innovative</span>
        </h3>
        <p className="mt-4 text-[16px] font-normal leading-[122%] text-[#353636]">
          Equipping diverse brands in multiple sectors with essential resources,
          expertise, and unwavering support
        </p>
      </div>

      {/* Sector Tabs */}
      <div className="mt-12 flex justify-center">
        <div className="flex gap-4">

          {["Payments", "Financial Services", "ONDC Logistics"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
              px-6
              h-[48px]
              rounded-lg
              text-sm
              font-semibold
              transition-all
              duration-300
              ${active === item
                  ? "text-white bg-gradient-to-r from-[#006FFF] to-[#0B44FF]"
                  : "text-[#446FA7] bg-[#E6EAEF]"
                }
            `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <div className="mt-16 px-4">
          <div className="max-w-6xl mx-auto">

            <div
              className="
        w-full
        rounded-[24px]
        p-6 md:p-10
      "
              style={{
                background: "linear-gradient(73.45deg, #FECCB2 0%, #FFFFFF 100%)",
              }}
            >

              {/* Top Left Tabs */}
              <div className="flex flex-wrap gap-3">
                {["Indipe", "indiConnect", "Indinext"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveBrand(item)}
                    className={`
              px-5
              h-[40px]
              rounded-lg
              text-sm
              font-semibold
              transition-all
              duration-300
              ${activeBrand === item
                        ? "bg-[#01295C] text-white"
                        : "bg-white text-[#01295C] border border-[#01295C]/20"}
            `}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Content Grid */}
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>

                  <h3 className="text-[16px] font-bold leading-[24px] tracking-[-0.011em] bg-gradient-to-r from-[#164786] to-[#0252D4] bg-clip-text text-transparent">
                    Wealth Tech
                  </h3>

                  <p className="mt-4 text-[18px] md:text-[20px] leading-[24px] text-[#353636]">
                    Seamless wealth creation and digital payments for all
                  </p>

                  <p className="mt-6 text-[14px] leading-[1.6] text-[#353636]">
                    Empowering individuals with secure, user-friendly financial tools.
                    From UPI transactions to personalized wealth management, we make
                    financial growth accessible to everyone.
                  </p>

                  <ul className="mt-6 space-y-2 text-[14px] leading-[1.6] text-[#353636] list-disc list-inside">
                    <li>User-friendly mutual fund investments</li>
                    <li>Secure UPI transactions</li>
                    <li>Advanced portfolio tracking tools</li>
                    <li>Personalized financial guidance</li>
                    <li>Partner program for mutual fund distribution</li>
                  </ul>

                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">
                  <div style={{
                background: "linear-gradient(80.45deg, #FECCB2 -100%, #FFFFFF 90%)",
              }}  className="w-full max-w-[420px] aspect-[4/3] bg-[#E6EAEF] rounded-xl overflow-hidden ">
                    <img
                      src={sectorsImg}
                      alt="Sector"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Sectors;
