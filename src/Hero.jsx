import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import hybridImage from "./assets/hybrid3.png";
import playera1 from "./assets/playera1.png";
import logo from "./assets/logo.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-10 pt-40 pb-12 flex gap-14 text-neutral-800 font-light bg-transparent"
    >
      {/* Left Column */}
      <div className="flex flex-col w-1/3">
        {/* Search */}
        <div className="flex border bg-gray-100 px-4 py-2 items-center gap-2 mb-8">
          <span>🔍</span>
          <input
            className="bg-transparent outline-none w-full text-sm"
            placeholder="Search"
          />
        </div>

        {/* Logo */}
        <img src={logo} alt="SIDEWAYS Logo" className="w-64 mb-10" />

        {/* Collection info */}
        <div className="text-[26px] tracking-wide leading-6 font-extralight mb-10">
          <p className="uppercase">Collection</p>
          <p className="mt-1 text-[24px] font-extralight">
            Summer
            <br />
            2025
          </p>
        </div>

        {/* Go to shop button */}
        <button
          onClick={() => navigate("/inicio")}
          className="flex items-center justify-between w-64 px-6 py-3 bg-[#dcdcdc] hover:bg-[#dcdcdc] transition text-sm tracking-wide mt-10"
        >
          <span>Go To Shop</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>

      {/* Right Column – Styled Image Cards */}
      <div className="flex-1 flex items-start justify-center gap-10 relative mt-6">
        {/* Image 1 */}
        <div className="bg-gray-100 rounded-[12px] p-2 w-[420px] h-[540px] overflow-hidden translate-y-[-10px]">
          <img
            src={hybridImage}
            alt="Hybrid"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>

        {/* Image 2 */}
        <div className="bg-gray-200 rounded-[12px] p-2 w-[420px] h-[540px] overflow-hidden translate-y-[10px]">
          <img
            src={playera1}
            alt="Playera"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>
      </div>
    </motion.section>
  );
}

