import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Inicio from "./Inicio";
import Product from "./Product"; // 👈 Importa el nuevo componente

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;


