// src/ProductPage.jsx
import { useParams } from "react-router-dom";
import hoodieWhite from "./assets/sudaderablanca.png";
import hoodieAlt from "./assets/hybrid3.png";

export default function ProductPage() {
  const { id } = useParams(); // Si después manejas varios productos

  return (
    <section className="min-h-screen px-10 pt-32 pb-20 text-neutral-800 font-light bg-white">
      <div className="flex flex-wrap gap-16 items-start justify-center">
        {/* Left - Imagen principal y secundaria */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={hoodieWhite}
            alt="Producto principal"
            className="w-[340px] h-[400px] object-contain rounded-xl shadow"
          />
          <div className="flex gap-2">
            <img
              src={hoodieWhite}
              alt="Vista 1"
              className="w-14 h-14 object-contain border border-neutral-300 rounded-md"
            />
            <img
              src={hoodieAlt}
              alt="Vista 2"
              className="w-14 h-14 object-contain border border-neutral-300 rounded-md"
            />
          </div>
        </div>

        {/* Right - Info y selección */}
        <div className="max-w-sm w-full space-y-6">
          <div>
            <h1 className="text-xl tracking-wide font-light">White Hoodie</h1>
            <p className="text-sm text-neutral-500 mt-1">$precio</p>
            <p className="text-xs mt-4 text-neutral-600">descripción</p>
          </div>

          {/* Selector de tallas */}
          <div>
            <p className="text-xs text-neutral-500 mb-2">Size</p>
            <div className="flex gap-2 flex-wrap">
              {["XS", "S", "M", "L", "XL", "2X"].map((size) => (
                <button
                  key={size}
                  className="border px-3 py-1 text-xs hover:bg-neutral-100 transition"
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="mt-2 text-[10px] text-neutral-400">
              FIND YOUR SIZE | MEASUREMENT GUIDE
            </p>
          </div>

          {/* Botón */}
          <button className="w-full bg-[#dcdcdc] hover:bg-[#cfcfcf] text-sm py-2 transition">
            ADD
          </button>
        </div>
      </div>
    </section>
  );
}
