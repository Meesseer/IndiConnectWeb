import brush from "../assets/orangebrush.png"
import payments from "../assets/sectors.png"
import finance from "../assets/financialservices.png"
import ondc from "../assets/ondclogistics.png"
import indinext from "../assets/indinext.png"
import indiConnect from "../assets/indiconnect.png"
import { useState, useEffect} from "react";
import { motion,AnimatePresence } from "framer-motion";


function Sectors() {
  const [active, setActive] = useState("Payments");
  const [activeBrand, setActiveBrand] = useState("Indipe");
  
  const sectorContent = {
    Payments: {
      brands:{
        Indipe:{
          title: "Wealth Tech",
          subtitle: "Seamless wealth creation and digital payments for all",
          description:
          "Empowering individuals with secure, user-friendly financial tools. From UPI transactions to personalized wealth management, we make financial growth accessible to everyone.",
          points: [
            "User-friendly mutual fund investments",
            "Secure UPI transactions",
            "Advanced portfolio tracking tools",
            "Personalized financial guidance",
            "Partner program for mutual fund distribution",
          ],
          image: payments
        },
        IndiConnect: {
          title: "B2B Payments",
          subtitle: "One-stop platform for payments, banking, and compliance — designed for SMEs and co-operatives.",
          description:
          "Indiconnect unifies essential financial services into one seamless stack.",
          points: [
            "UPI, Cards, Wallets, Netbanking",
            "Virtual accounts & payouts",
            "Automated reconciliation",
            "Personalized financial guidance",
            "Partner program for mutual fund distribution",
          ],
          image: indiConnect
        },
        Indinext: {
          title: "UPI Infrastructure",
          subtitle: "UPI infrastructure built for Bharat, ready for the world.",
          description:
            "IndiNXT powers banks, fintechs, and enterprises with secure, scalable, and intelligent payment switching solutions.",
            points: [
              "UPI Acquiring & Issuing Switch",
              "T-OTP Solutions",
              "Fraud & risk management",
              "Personalized financial guidance",
            "Partner program for mutual fund distribution",
          ],
          image: indinext
        }
      }
    },
    "Financial Services": {
      brands: {
        Sec2Pay:{
          title: "Whitelabel Fintech Infrastructure",
          subtitle: "Sec2Pay empowers institutions to launch fintech services under their own brand",
          description:
          "From prepaid cards to payments, lending, and more. A compliant, modular platform to scale financial inclusion.",
          points: [
            "White-label payment solutions",
            "Prepaid cards & wallets",
            "Micro-ATM & AePS",
            "Lending & credit enablement",
            "Enterprise-grade compliance & security",
          ],
          image: finance
        },
        Indikendra: {
          title: "Last mile digital banking",
          subtitle: "IndiKendra bridges financial access by offering last-mile digital and assisted services, ensuring inclusion across towns and villages.",
          description:
          "We bring comprehensive financial and eGovernance services to every corner.",
          points: [
            "Banking & cash transfers in your shop",
            "Utility & bill payments made simple",
            "Train, bus & flight bookings at your doorstep",
            "Lending & credit enablement",
            "Enterprise-grade compliance & security",
          ],
          image: finance
        }
      }
    },
    
    "ONDC Logistics": {
      brands: {
        Indispeed:{
          title: "Smarter Logistics for Bharat",
          subtitle: "ONDC-powered courier and delivery orchestration platform.",
          description:
            " IndiSpeed enables D2C brands, enterprises, and sellers to ship faster, smarter, and at scale.",
            points: [
              "API-first logistics integration",
              "Bulk dispatch via enterprise dashboard",
              "ONDC-ready multi-channel plugins",
              "Intercity & hyperlocal delivery",
              "Transparent pricing & SLA tracking",
            ],
            image: ondc
          }
        }
      },
  };
  
  const brands = sectorContent[active].brands;
  const brandKeys = Object.keys(brands);
  const safeBrandKey =
  brands[activeBrand] ? activeBrand : brandKeys[0];

  const currentBrand = brands[safeBrandKey];
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.15 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  

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
          {Object.keys(sectorContent).map((sector) => (
            <button
              key={sector}
              onClick={() => setActive(sector)}
              className={`px-6 h-[48px] rounded-lg text-sm font-semibold transition-all duration-300 ${
                active === sector
                  ? "text-white bg-gradient-to-r from-[#006FFF] to-[#0B44FF]"
                  : "text-[#446FA7] bg-[#E6EAEF]"
              }`}
            >
              {sector}
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
                {Object.keys(sectorContent[active].brands).map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setActiveBrand(brand)}
                    className={`px-5 h-[40px] rounded-lg text-sm font-semibold transition-all duration-300 ${
                      activeBrand === brand
                        ? "bg-[#01295C] text-white"
                        : "bg-white text-[#01295C] border border-[#01295C]/20"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>

              {/* Content Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active}-${activeBrand}`}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={containerVariants}
                  className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                    {/* LEFT CONTENT */}
                    <motion.div variants={textVariants}>

                      <h3 className="text-[16px] font-bold leading-[24px] tracking-[-0.011em] bg-gradient-to-r from-[#164786] to-[#0252D4] bg-clip-text text-transparent">
                        {currentBrand.title}
                      </h3>

                      <p className="mt-4 text-[18px] md:text-[20px] leading-[24px] text-[#353636]">
                        {currentBrand.subtitle}
                      </p>

                      <p className="mt-6 text-[14px] leading-[1.6] text-[#353636]">
                        {currentBrand.description}
                      </p>

                      <ul className="mt-6 space-y-2 text-[14px] leading-[1.6] text-[#353636] list-disc list-inside">
                        {currentBrand.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>

                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div variants={imageVariants} className="flex justify-center">
                      <div style={{
                        background: "linear-gradient(80.45deg, #FECCB2 -100%, #FFFFFF 110%)",
                      }} className="w-full max-w-[600px] aspect-[4/3] bg-[#E6EAEF] rounded-xl overflow-visible ">
                        <img
                          src={currentBrand.image}
                          alt="Sector"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Sectors;
