import Incore from "../assets/incore-1 1.png";
import arrow from "../assets/arrow.png";
import orangeArrow from "../assets/orangearrow.png";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <>
      {/* HERO ROW 1 */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Business growth"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/55"></div>
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#07172C]"></div>
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

      {/*HERO ROW 2 */}
      <section className="w-full bg-[#07172C] py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="
      grid
      gap-6
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      auto-rows-auto
    ">

      {/* LARGE CARD */}
      <div
        className="
          lg:row-span-2
          rounded-[24px]
          p-6
          flex flex-col
          justify-between
          shadow-[0_12px_30px_rgba(0,0,0,0.15)]
        "
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

        <p className="text-sm text-[#01295C] leading-5">
          Learn more about our portfolio brands in the{" "}
          <span className="font-extrabold">BFSI sector</span> in India.
        </p>

        <button className="bg-[#024397] text-white text-sm font-medium py-2 px-4 rounded-lg w-fit">
          Know more
        </button>
      </div>

      {/* INCOR E */}
      <div className="rounded-[16px] bg-[#E04A00] flex items-center justify-center h-[165px] shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
        <img alt="Incore" src={Incore} className="max-h-[60%] object-contain" />
      </div>

      {/* INDSIGHTS */}
      <div className="rounded-[16px] p-[1px] bg-[linear-gradient(298.25deg,#C5D9F2_-11.43%,#0070FF_55.01%)] h-[165px]">
        <div
          className="w-full h-full rounded-[15px] flex items-center justify-center text-white"
          style={{
            background:
              "linear-gradient(109.37deg, #0058CA 5.94%, #4094FF 96.05%)",
          }}
        >
          <h3 className="text-[32px] font-extrabold italic leading-none">
            INDsights
          </h3>
        </div>
      </div>

      {/* BECOME PARTNER */}
      <div className="rounded-[16px] p-[1px] bg-[linear-gradient(102.64deg,#FFFFFF_9.15%,#013271_100%)]">
        <div
          className="w-full h-full rounded-[15px] p-6 flex flex-col justify-between"
          style={{
            background:
              "linear-gradient(106.21deg, #FFFFFF 0%, #B1D3FF 91.57%)",
          }}
        >
          <div className="text-[#013271]">
            <p className="text-[28px] font-bold leading-[36px]">
              Become our
            </p>
            <h3 className="text-[32px] font-bold italic leading-[36px]">
              Partner
            </h3>
          </div>

          <div className="self-end">
            <img src={arrow} alt="arrow" className="w-[28px] h-[28px]" />
          </div>
        </div>
      </div>

      {/* GET IN TOUCH */}
      <div
        className="rounded-[16px] border border-[#FFC6A9] p-6 flex flex-col justify-between"
        style={{
          background:
            "linear-gradient(121.14deg, #FFFFFF 8.99%, #FFEAE0 100%)",
        }}
      >
        <div className="text-[#013271]">
          <p className="text-[28px] font-bold leading-[36px]">
            Get in
          </p>
          <h3 className="text-[32px] text-[#E04A00] font-bold leading-[36px]">
            Touch
          </h3>
        </div>

        <div className="self-end">
          <img src={orangeArrow} alt="arrow" className="w-[28px] h-[28px]" />
        </div>
      </div>

    </div>
  </div>
</section>
    </>
  );
}

export default Hero;