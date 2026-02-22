import journeyBg from "../assets/journey.png";
import brush from "../assets/whitebrush.png";
import brushTwo from "../assets/whitebrush2.png";

function Journey() {
  return (
    <section className="relative w-full py-28 overflow-hidden bg-gradient-to-r from-[#E04A00] to-[#FF915C]">
      <div className="absolute left-[-200px] top-130 w-[436px] h-[436px] rounded-full border border-white opacity-30"></div>
      <div className="absolute right-[-200px] top-80 w-[400px] h-[400px] rounded-full border border-white opacity-30"></div>
      <div className="absolute right-[200px] top-30 w-[50px] h-[50px] rounded-full border border-white opacity-30"></div>
      
      <img
        src={journeyBg}
        alt=""
        className="absolute bottom-0 left-0 w-full opacity-60 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <div className="flex justify-center mb-6">
          <div className="relative w-[500px] h-[120px] flex items-center justify-center">
            <img
              src={brush}
              alt=""
              className="absolute inset-0 w-full h-full object-contain z-0"
            />
            <img
              src={brushTwo}
              alt=""
              className="absolute inset-0 w-full h-full object-contain z-10 translate-x-2 -translate-y-1"
            />
            
            <h2 className="relative z-20 text-[#E04A00] text-[32px] md:text-[36px] font-bold">
              Our Journey, Measured
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-white text-[18px] md:text-[20px] mb-16">
          Metrics that speak of countless stories of growth{" "}
          <span className="italic font-semibold">across Bharat!</span>
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">

          <div className="bg-white/5 backdrop-blur-md border border-white/50 rounded-2xl py-12 px-6 text-white shadow-lg">
            <h3 className="text-[48px] font-bold">7+</h3>
            <p className="mt-2 text-[20px]">Companies</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/50 rounded-2xl py-12 px-6 text-white shadow-lg">
            <h3 className="text-[48px] font-bold">3L+</h3>
            <p className="mt-2 text-[20px]">Partners</p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/50 rounded-2xl py-12 px-6 text-white shadow-lg">
            <h3 className="text-[48px] font-bold">1.26Cr+</h3>
            <p className="mt-2 text-[20px]">Customers</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Journey;