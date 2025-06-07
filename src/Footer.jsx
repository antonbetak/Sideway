import logo from "./assets/logo.png";

export default function Footer() {
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

        {/* Right - Placeholder vacío (para balance visual) */}
        <div className="hidden md:flex w-[140px] h-[1px]" />
      </div>

      {/* Línea inferior + copyright */}
      <div className="mt-16 border-t border-neutral-300 pt-6 text-xs flex justify-between text-neutral-400 max-w-6xl mx-auto">
        <p>© 2024 — copyright</p>
        <p className="cursor-pointer hover:underline">privacy</p>
      </div>
    </footer>
  );
}
