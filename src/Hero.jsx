import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./assets/logo.png";
import deporte from "./assets/deporte.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen w-full bg-neutral-100 overflow-hidden"
    >
      {/* Logo en esquina superior izquierda con sombra */}
      <div className="absolute top-6 left-6 z-20">
        <img
          src={logo}
          alt="SIDEWAYS Logo"
          className="h-20 opacity-90 drop-shadow-lg"
        />
      </div>

      {/* Imagen full width con margen para dejar espacio al navbar */}
      <div className="relative w-full mt-28">
        <img
          src={deporte}
          alt="Deporte"
          loading="lazy"
          className="w-full h-auto object-cover"
        />

        {/* Contenido alineado a la izquierda */}
        <div className="absolute inset-0 flex flex-col justify-center pl-12 text-left">
          <h1 className="text-5xl md:text-6xl font-light text-white drop-shadow-lg">
            SUMMER 2025
          </h1>
          <p className="mt-2 text-white uppercase tracking-widest text-sm drop-shadow-md">
            NEW COLLECTION
          </p>

          {/* Botones modernos con separación */}
          <div className="mt-20 flex gap-6">
            <button
              onClick={() => navigate("/inicio")}
              className="px-8 py-3 rounded-full bg-white text-black text-sm font-medium tracking-wider uppercase shadow-md hover:bg-neutral-200 transition-all duration-300"
            >
              Men
            </button>
            <button
              onClick={() => navigate("/inicio")}
              className="px-8 py-3 rounded-full bg-white text-black text-sm font-medium tracking-wider uppercase shadow-md hover:bg-neutral-200 transition-all duration-300"
            >
              Women
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
