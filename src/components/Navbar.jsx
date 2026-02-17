import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-20 bg-black rounded-2xl px-6 py-4 mb-10">

      <div className="flex items-center justify-between">

        <span className="kek text-lg">Crew Media Production</span>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className="hidden md:flex gap-10">
          <a href="#rolunk" className="zold">Rólunk</a>
          <a href="#projektek" className="zold">Projektek</a>
          <a href="#kapcsolat" className="zold">Kapcsolat</a>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-4 pt-6 text-center">
          <a href="#rolunk" className="zold" onClick={()=>setOpen(false)}>Rólunk</a>
          <a href="#projektek" className="zold" onClick={()=>setOpen(false)}>Projektek</a>
          <a href="#kapcsolat" className="zold" onClick={()=>setOpen(false)}>Kapcsolat</a>
        </div>
      )}

    </nav>
  );
}
