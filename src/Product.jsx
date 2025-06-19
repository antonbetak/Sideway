import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "./data/products";
import { motion, AnimatePresence } from "framer-motion";

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState(null);
  const [index, setIndex] = useState(0);

  if (!product) return <p className="p-10 text-center">Producto no encontrado.</p>;

  const images = product.images || [product.image]; // soporte para múltiples imágenes

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="min-h-screen px-10 pt-32 pb-20 text-neutral-800 font-light">
      <div className="flex gap-20 items-start">
        {/* Carrusel de imágenes */}
        <div className="w-1/2 flex flex-col items-center relative">
          <div className="w-full h-[500px] rounded-xl overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={`Producto ${index}`}
                className="w-full h-full object-cover rounded-xl"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
          </div>

          {/* Botones de navegación */}
          {images.length > 1 && (
            <div className="flex gap-4 mt-4">
              <button onClick={prev} className="px-4 py-2 bg-neutral-200 rounded hover:bg-neutral-300">
                ◀
              </button>
              <button onClick={next} className="px-4 py-2 bg-neutral-200 rounded hover:bg-neutral-300">
                ▶
              </button>
            </div>
          )}
        </div>

        {/* Info del producto */}
        <div className="flex flex-col gap-6 w-1/2">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p>{product.description}</p>
          <p className="text-lg font-medium">{product.price}</p>

          <div>
            <p className="mb-2 text-sm">Talla:</p>
            <div className="flex gap-2 flex-wrap">
              {(product.sizes || ["XS", "S", "M", "L", "XL", "2X"]).map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border text-sm transition ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-neutral-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="mt-6 bg-black text-white py-3 px-6 text-sm hover:opacity-90">
            Añadir al carrito
          </button>
        </div>
      </div>
    </section>
  );
}
