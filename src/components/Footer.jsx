import logo from "../assets/logosmall.png";
import socials from "../assets/socials.png";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#01295C] to-[#00142D] text-white py-20">
            <div className="absolute left-[200px] w-[200px] h-[200px] rounded-full border border-white opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 place-items-center">
        
          {/* COLUMN 1 */}
          <div className="space-y-2 ">

            {/* Logo */}
            <div className="inline-block bg-white rounded-[20px] px-4 py-2">
              <img
                src={logo}
                alt="Company Logo"
                className="w-[75px] h-auto"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold">
              Building <span className="text-[#E04A00]">Ventures</span>, Building{" "}
              <span className="text-[#E04A00]">Nation</span>.
            </h3>

            {/* Subtext */}
            <p className="text-sm leading-6 max-w-[360px] text-white/80">
              A venture builder empowering mission-driven founders with
              resources, functional expertise and strategic partnerships to{" "}
              <span className="text-[#E04A00] font-medium">
                dream, build, and grow
              </span>.
            </p>

            {/* Socials */}
            <div>
                <img src={socials} alt="Facebook" className="cursor-pointer" />
            </div>

          </div>

          {/* COLUMN 2 */}
          <div className="space-y-5">
            <h4 className="font-bold">Home</h4>
            <p className="text-white/80 hover:text-white cursor-pointer">About InCORE</p>
            <p className="text-white/80 hover:text-white cursor-pointer">Contact us</p>
            <p className="text-white/80 hover:text-white cursor-pointer">Customer Stories</p>
            <p className="text-white/80 hover:text-white cursor-pointer">About Indifly</p>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-5">
            <h4 className="font-bold">InCore</h4>
            <p className="text-white/80 hover:text-white cursor-pointer">Insure (Marketing & Growth)</p>
            <p className="text-white/80 hover:text-white cursor-pointer">InStack (Tech & Product)</p>
            <p className="text-white/80 hover:text-white cursor-pointer">InVolve (HR & Culture)</p>
            <p className="text-white/80 hover:text-white cursor-pointer">InSure (Legal & Compliance)</p>
          </div>

          {/* COLUMN 4 */}
          <div className="space-y-5">
            <h4 className="font-bold">Quick Links</h4>
            <p className="text-white/80 hover:text-white cursor-pointer">Blogs</p>
            <p className="text-white/80 hover:text-white cursor-pointer">Privacy Policy</p>
            <p className="text-white/80 hover:text-white cursor-pointer">Terms & Conditions</p>
            <p className="text-white/80 hover:text-white cursor-pointer">SiteMap</p>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;