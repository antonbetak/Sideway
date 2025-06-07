import { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import sudaderaNegra from "./assets/sudaderanegra.png";
import sudaderaBlanca from "./assets/sudaderablanca.png";
import logo from "./assets/isotipo.png";
import atrasblanca from "./assets/atrasblanca.png";
import playera1 from "./assets/playera1.png";
import playerablanca from "./assets/playerablanca.png";
import accesorioAw from "./assets/aw.png";

// Footer dentro del mismo archivo
function Footer() {
  return (
    <footer className="w-full border-t border-neutral-300 bg-[#f8f8f8] text-neutral-600 px-10 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left - Info */}
        <div className="flex flex-col text-xs uppercase tracking-widest gap-8">
          <div>
            <p className="mb-2 text-neutral-400">Info</p>
            <p className="cursor-pointer hover:underline">About</p>
            <p className="cursor-pointer hover:underline">Contacts</p>
          </div>
          <div>
            <p className="mb-2 text-neutral-400">Languages</p>
            <p className="cursor-pointer hover:underline">ENG / ESP</p>
          </div>
        </div>

        {/* Center - Logo + Marca */}
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="SIDEWAYS Logo" className="h-10 opacity-90" loading="lazy" />
          <p className="text-3xl font-light tracking-widest text-neutral-800">SIDEWAYS</p>
        </div>

        <div className="hidden md:flex w-[140px] h-[1px]" />
      </div>

      <div className="mt-16 border-t border-neutral-300 pt-6 text-xs flex justify-between text-neutral-400 max-w-6xl mx-auto">
        <p>© 2025 — copyright</p>
        <p className="cursor-pointer hover:underline">privacy</p>
      </div>
    </footer>
  );
}

export default function Inicio() {
  const shopRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToShop = () => {
    if (shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.hash === "#shop-section" && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <section className="min-h-[160vh] px-10 pt-40 pb-20 flex flex-col gap-14 text-neutral-800 font-light bg-transparent">
        {/* Hero */}
        <div className="flex gap-14">
          <div className="flex flex-col w-1/3">
            <div className="flex border bg-[#dcdcdc] px-4 py-2 items-center gap-2 mb-8 text-sm tracking-wide">
              <span>🔍</span>
              <input
                className="bg-transparent outline-none w-full text-sm"
                placeholder="Search"
              />
            </div>
            <img src={logo} alt="SIDEWAYS Logo" className="w-64 mb-10" loading="lazy" />
            <div className="text-[24px] tracking-wide leading-6 font-extralight mb-16">
              <p className="uppercase">Collection</p>
              <p className="mt-1 text-[22px] font-extralight">
                Summer
                <br />
                2025
              </p>
            </div>
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

          {/* Hero images */}
          <div className="flex-1 flex items-start justify-center gap-10 relative mt-6">
            <div className="bg-gray-100 rounded-[12px] p-2 w-[420px] h-[540px] overflow-hidden translate-y-[-10px]">
              <img
                src={sudaderaNegra}
                loading="lazy"
                alt="Sudadera Negra"
                className="w-full h-full object-cover rounded-[12px]"
              />
            </div>
            <div className="bg-gray-200 rounded-[12px] p-2 w-[420px] h-[540px] overflow-hidden translate-y-[10px]">
              <img
                src={atrasblanca}
                loading="lazy"
                alt="Sudadera Blanca"
                className="w-full h-full object-cover rounded-[12px]"
              />
            </div>
          </div>
        </div>

        {/* Hoodies */}
        <div ref={shopRef} id="shop-section" className="mt-40 w-full">
          <h2 className="text-2xl mb-8 tracking-wider">Hoodies</h2>
          <div className="grid grid-cols-2 gap-12">
            {[{
              id: "black-hoodie", name: "Sudadera Negra", img: sudaderaNegra, desc: "Corte relajado, capucha y bolsillo frontal", price: "$59.99"
            }, {
              id: "white-hoodie", name: "Sudadera Blanca", img: sudaderaBlanca, desc: "Estilo minimalista con textura suave", price: "$64.99"
            }].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.img}
                  loading="lazy"
                  alt={item.name}
                  className="rounded-lg w-full h-[480px] object-cover object-top mb-4"
                />
                <div className="text-sm">
                  <p className="font-medium mb-1">{item.name}</p>
                  <p className="text-neutral-500 mb-1">{item.desc}</p>
                  <p className="text-neutral-800 font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* T-Shirts */}
        <div className="mt-32 w-full">
          <h2 className="text-2xl mb-8 tracking-wider">T-SHIRT</h2>
          <div className="grid grid-cols-2 gap-12">
            {[{
              id: "black-tshirt", name: "Playera Negra", img: playera1, desc: "Playera de algodón corte recto, estilo urbano", price: "$29.99"
            }, {
              id: "white-tshirt", name: "Playera Blanca", img: playerablanca, desc: "Estilo limpio con tacto suave, ideal para verano", price: "$32.99"
            }].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={item.img}
                  loading="lazy"
                  alt={item.name}
                  className="rounded-lg w-full h-[480px] object-cover object-top mb-4"
                />
                <div className="text-sm">
                  <p className="font-medium mb-1">{item.name}</p>
                  <p className="text-neutral-500 mb-1">{item.desc}</p>
                  <p className="text-neutral-800 font-semibold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accesorios */}
        <div className="mt-32 w-full">
          <h2 className="text-2xl mb-8 tracking-wider">ACCESORIOS</h2>
          <div className="grid grid-cols-2 gap-12">
            <div
              className="bg-white rounded-xl shadow-md p-4 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => navigate("/product/accesorio-aw")}
            >
              <img
                src={accesorioAw}
                loading="lazy"
                alt="Accesorio AW"
                className="rounded-lg w-full h-[480px] object-cover object-top mb-4"
              />
              <div className="text-sm">
                <p className="font-medium mb-1">Apple Watch</p>
                <p className="text-neutral-500 mb-1">Diseño utilitario con estilo funcional</p>
                <p className="text-neutral-800 font-semibold">$19.99</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer al final */}
      <Footer />
    </>
  );
}

