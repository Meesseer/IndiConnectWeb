import Incore from "../assets/incore-1 1.png";
import arrow from "../assets/arrow.png";
import orangeArrow from "../assets/orangearrow.png";
import heroImg from "../assets/hero.png";
import { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [hoveredRow1, setHoveredRow1] = useState(null);
  const [hoveredRow2, setHoveredRow2] = useState(null);

  return (
    <>
      {/* ================= HERO ROW 1 ================= */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Business growth"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#07172C]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-52 md:pt-56 pb-20">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold tracking-[-0.011em] leading-[1.15]">
            Building <span className="text-[#E04A00]">Ventures</span>, Building{" "}
            <span className="text-[#E04A00]">Nation</span>.
          </h1>

          <p className="mt-6 text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] max-w-4xl mx-auto opacity-90">
            A venture builder empowering mission-driven founders with
            resources, functional expertise and strategic partnerships to{" "}
            <span className="text-[#E04A00] font-medium">
              dream, build, and grow
            </span>.
          </p>
        </div>
      </section>

      {/* ================= HERO ROW 2 ================= */}
      <section className="w-full bg-[#07172C] py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* 2 COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-2 gap-8">

            {/* ========== LARGE CARD ========== */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="lg:row-span-2 h-full rounded-[24px] p-6 flex flex-col justify-between shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
              style={{
                background:
                  "linear-gradient(135.66deg, #FCEEE8 18.2%, #A17F71 110.34%)",
              }}
            >
              <div>
                <p className="text-black text-sm font-medium">Our</p>
                <h3 className="text-[32px] font-extrabold italic leading-tight bg-gradient-to-r from-[#01295C] to-[#3B82F6] bg-clip-text text-transparent">
                  Ventures
                </h3>
              </div>

              <p className="text-sm text-[#01295C] leading-5 mt-4">
                Learn more about our portfolio brands in the{" "}
                <span className="font-extrabold">BFSI sector</span> in India.
              </p>

              <button className="bg-[#024397] text-white text-sm font-medium py-2 px-4 rounded-lg w-fit mt-4">
                Know more
              </button>
            </motion.div>

            {/* ========== RIGHT SIDE STACKED CARDS ========== */}

              {/* ---------- ROW 1 ---------- */}
              <div className="flex gap-6 h-[165px]">

                <motion.div
                  layout
                  className="flex-1 rounded-[16px] bg-[#E04A00] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
                  onHoverStart={() => setHoveredRow1("left")}
                  onHoverEnd={() => setHoveredRow1(null)}
                  animate={{
                    flex:
                      hoveredRow1 === "left"
                        ? 1.6
                        : hoveredRow1 === "right"
                        ? 0.6
                        : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    alt="Incore"
                    src={Incore}
                    className="max-h-[60%] object-contain"
                  />
                </motion.div>

                <motion.div
                  layout
                  className="flex-1 rounded-[16px] p-[1px] bg-[linear-gradient(298.25deg,#C5D9F2_-11.43%,#0070FF_55.01%)]"
                  onHoverStart={() => setHoveredRow1("right")}
                  onHoverEnd={() => setHoveredRow1(null)}
                  animate={{
                    flex:
                      hoveredRow1 === "right"
                        ? 1.6
                        : hoveredRow1 === "left"
                        ? 0.6
                        : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className="w-full h-full rounded-[15px] flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(109.37deg, #0058CA 5.94%, #4094FF 96.05%)",
                    }}
                  >
                    <h3 className="text-[32px] font-extrabold italic">
                      INDsights
                    </h3>
                  </div>
                </motion.div>

              </div>

              {/* ---------- ROW 2 ---------- */}
              <div className="flex gap-6 h-[158px]">

                <motion.div
                  layout
                  className="flex-1 rounded-[16px] p-[1px] bg-[linear-gradient(102.64deg,#FFFFFF_9.15%,#013271_100%)]"
                  onHoverStart={() => setHoveredRow2("left")}
                  onHoverEnd={() => setHoveredRow2(null)}
                  animate={{
                    flex:
                      hoveredRow2 === "left"
                        ? 1.6
                        : hoveredRow2 === "right"
                        ? 0.6
                        : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className="w-full h-full rounded-[15px] p-6 flex flex-col justify-between"
                    style={{
                      background:
                        "linear-gradient(106.21deg, #FFFFFF 0%, #B1D3FF 91.57%)",
                    }}
                  >
                    <div className="text-[#013271]">
                      <p className="text-[28px] font-bold">Become our</p>
                      <h3 className="text-[32px] font-bold italic">
                        Partner
                      </h3>
                    </div>
                    <div className="self-end">
                      <img src={arrow} alt="arrow" className="w-[28px]" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  layout
                  className="flex-1 rounded-[16px] border border-[#FFC6A9] p-6 flex flex-col justify-between"
                  onHoverStart={() => setHoveredRow2("right")}
                  onHoverEnd={() => setHoveredRow2(null)}
                  animate={{
                    flex:
                      hoveredRow2 === "right"
                        ? 0.7
                        : hoveredRow2 === "left"
                        ? 0.6
                        : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    background:
                      "linear-gradient(121.14deg, #FFFFFF 8.99%, #FFEAE0 100%)",
                  }}
                >
                  <div className="text-[#013271]">
                    <p className="text-[28px] font-bold">Get in</p>
                    <h3 className="text-[32px] text-[#E04A00] font-bold">
                      Touch
                    </h3>
                  </div>
                  <div className="self-end">
                    <img
                      src={orangeArrow}
                      alt="arrow"
                      className="w-[28px]"
                    />
                  </div>
                </motion.div>

              </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;