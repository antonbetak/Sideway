import { Menu, ShoppingBag, User } from "lucide-react";
import isotipo from "./assets/isotipo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-2 bg-white/80 backdrop-blur-lg shadow-xl rounded-full border border-neutral-300 flex items-center justify-between gap-6 w-[90%] max-w-xl text-sm text-neutral-700">
      {/* Left */}
      <div className="flex items-center gap-2">
        <Menu className="w-4 h-4" />
        <span className="cursor-pointer">Home</span>
      </div>

      {/* Center - Logo */}
      <div className="flex justify-center">
        <img src={isotipo} alt="Isotipo" className="h-12" />
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <ShoppingBag className="w-4 h-4" />
        <User className="w-4 h-4" />
      </div>
    </nav>
  );
}
