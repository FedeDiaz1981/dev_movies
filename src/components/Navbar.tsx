import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // 👈 Agregamos íconos

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="font-light">DEV</span>
          <span className="font-bold text-white">Movies</span>
        </h1>

        {/* Botón hamburguesa (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú (desktop) */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li className="hover:underline cursor-pointer">Inicio</li>
          <li className="hover:underline cursor-pointer">Populares</li>
          <li className="hover:underline cursor-pointer">Mi lista</li>
        </ul>
      </div>

      {/* Menú (mobile) */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2 bg-blue-600 text-sm">
          <li
            className="hover:underline cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </li>
          <li
            className="hover:underline cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Populares
          </li>
          <li
            className="hover:underline cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Mi lista
          </li>
        </ul>
      )}
    </nav>
  );
}
