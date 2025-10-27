import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight hover:scale-105 transition-transform cursor-pointer">
          MiMarca<span className="text-pink-300">.</span>
        </h1>

        {/* Links Desktop */}
        <ul className="hidden md:flex gap-8 text-lg">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            </li>
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
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-lg hover:text-pink-200 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar