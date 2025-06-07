import sudaderaNegra from "../assets/sudaderanegra.png";
import sudaderaBlanca from "../assets/sudaderablanca.png";
import playera1 from "../assets/playera1.png";
import playerablanca from "../assets/playerablanca.png";
import accesorioAw from "../assets/aw.png";

export const products = [
  {
    id: "black-hoodie",
    name: "Sudadera Negra",
    price: "$59.99",
    description: "Corte relajado, capucha y bolsillo frontal",
    image: sudaderaNegra,
  },
  {
    id: "white-hoodie",
    name: "Sudadera Blanca",
    price: "$64.99",
    description: "Estilo minimalista con textura suave",
    image: sudaderaBlanca,
  },
  {
    id: "black-tshirt",
    name: "Playera Negra",
    price: "$29.99",
    description: "Playera de algodón corte recto, estilo urbano",
    image: playera1,
  },
  {
    id: "white-tshirt",
    name: "Playera Blanca",
    price: "$32.99",
    description: "Estilo limpio con tacto suave, ideal para verano",
    image: playerablanca,
  },
  {
    id: "accesorio-aw",
    name: "Accesorio AW",
    price: "$19.99",
    description: "Diseño utilitario con estilo funcional",
    image: accesorioAw,
    sizes: ["S", "L"], // Tallas específicas solo para este producto
  },
];
