import sudaderaNegra from "./assets/sudaderanegra.png";
import sudaderaBlanca from "./assets/sudaderablanca.png";
import logo from "./assets/logo.png";
import hybridImage from "./assets/hybrid3.png";
import atrasblanca from "./assets/atrasblanca.png";
import { useRef } from "react";

export default function Inicio() {
  const shopRef = useRef(null);

  const scrollToShop = () => {
    if (shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[160vh] px-10 pt-40 pb-20 flex flex-col gap-14 text-neutral-800 font-light bg-transparent">
      {/* Top Row */}
      <div className="flex gap-14">
        {/* Left Column */}
        <div className="flex flex-col w-1/3">
          {/* Search */}
          <div className="flex border bg-[#dcdcdc] px-4 py-2 items-center gap-2 mb-8 text-sm tracking-wide">
            <span>🔍</span>
            <input
              className="bg-transparent outline-none w-full text-sm"
              placeholder="Search"
            />
          </div>

          {/* Logo */}
          <img src={logo} alt="SIDEWAYS Logo" className="w-64 mb-10" />

          {/* Collection info */}
          <div className="text-[24px] tracking-wide leading-6 font-extralight mb-16">
            <p className="uppercase">Collection</p>
            <p className="mt-1 text-[22px] font-extralight">
              Summer
              <br />
              2025
            </p>
          </div>

          {/* Scroll to shop section button */}
          <button
            onClick={scrollToShop}
            className="flex items-center justify-between w-64 px-6 py-3 bg-[#dcdcdc] text-sm tracking-wide mt-10"
          >
            <span>Ver productos</span>
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
              src={sudaderaNegra}
              alt="Sudadera Negra"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-gray-200 rounded-[12px] p-2 w-[420px] h-[540px] overflow-hidden translate-y-[10px]">
            <img
              src={atrasblanca}
              alt="Sudadera Blanca"
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
        </div>
      </div>

      {/* Shop Section anchor */}
      <div ref={shopRef} id="shop-section" className="mt-40 w-full">
        <h2 className="text-2xl mb-8 tracking-wider">Hoodies</h2>

        <div className="grid grid-cols-2 gap-12">
          {/* Producto 1 */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <img
              src={sudaderaNegra}
              alt="Sudadera Negra"
              className="rounded-lg w-full h-[400px] object-cover mb-4"
            />
            <div className="text-sm">
              <p className="font-medium mb-1">Sudadera Negra</p>
              <p className="text-neutral-500 mb-1">Corte relajado, capucha y bolsillo frontal</p>
              <p className="text-neutral-800 font-semibold">$59.99</p>
            </div>
          </div>

          {/* Producto 2 */}
          <div className="bg-white rounded-xl shadow-md p-4">
            <img
              src={sudaderaBlanca}
              alt="Sudadera Blanca"
              className="rounded-lg w-full h-[400px] object-cover mb-4"
            />
            <div className="text-sm">
              <p className="font-medium mb-1">Sudadera Blanca</p>
              <p className="text-neutral-500 mb-1">Estilo minimalista con textura suave</p>
              <p className="text-neutral-800 font-semibold">$64.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
