import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png"

function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-15 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="backdrop-blur-xl bg-white/20 border border-white/40 shadow-[0_4px_24px_rgba(1,41,92,0.2)] rounded-2xl px-6 py-4 md:py-5 flex items-center justify-between">

          {/* Left side */}
          <div className="flex items-center gap-4">
            <img alt="Logo" src={logo} className="font-semibold text-lg"/>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-6 text-[14px] font-medium text-[#01295C]">
              <a href="#">Our Portfolio</a>
              <a href="#">InCore</a>
              <a href="#">IND Sights</a>
              <a href="#">About us</a>
              <a href="#">Get in touch</a>
              <button className="w-9 h-9 flex items-center justify-center rounded-full border border-white/40">
                🔍
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-2xl text-[#01295C]"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>

          </div>
        </div>

      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden max-w-7xl mx-auto px-6 mt-3"
          >
            <div className="backdrop-blur-xl bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 text-[#01295C] text-sm font-medium">
              <a onClick={() => setOpen(false)} href="#">Our Portfolio</a>
              <a onClick={() => setOpen(false)} href="#">InCore</a>
              <a onClick={() => setOpen(false)} href="#">IND Sights</a>
              <a onClick={() => setOpen(false)} href="#">About us</a>

              <button className="bg-[#01295C] text-white py-2 rounded-lg mt-2">
                Get in touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default NavBar