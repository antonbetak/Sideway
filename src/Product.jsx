import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "./data/products";

export default function Product() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <p className="p-10 text-center">Producto no encontrado.</p>;

  return (
    <section className="min-h-screen px-10 pt-32 pb-20 text-neutral-800 font-light">
      <div className="flex gap-20 items-start">
        {/* Imagen principal */}
        <div className="w-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl max-w-md"
            loading="lazy"
          />
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
