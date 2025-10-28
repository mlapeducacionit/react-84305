import { useState } from "react";
import { Menu, X } from "lucide-react";
import links from "../constants/item-nav";
import ItemMenu from "./ItemMenu";
import { NavLink } from "react-router";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform cursor-pointer">
          MiMarca<span className="text-pink-300">.</span>
        </h1>

        {/* Links Desktop */}
        <ul className="hidden md:flex gap-8 text-lg">
          {links.map((link, idx) => (
            <ItemMenu isMobile={false} link={link} key={link.id+idx} />
          ))}
        </ul>

        {/* Botón Hamburguesa */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-white/10 transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`md:hidden bg-linear-to-b from-purple-600 to-pink-600 transition-all duration-300 overflow-hidden ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {links.map((link, idx) => (
            <ItemMenu setOpen={setOpen} isMobile={true} link={link} key={link.id+idx} />
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar