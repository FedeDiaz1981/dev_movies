import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">
          <span className="font-light">DEV</span>
          <span className="font-bold text-white">Movies</span>
        </h1>
        <ul className="hidden md:flex space-x-6 text-sm">
          <li className="hover:underline cursor-pointer">Inicio</li>
          <li className="hover:underline cursor-pointer">Populares</li>
          <li className="hover:underline cursor-pointer">Mi lista</li>
        </ul>
      </div>
    </nav>
  );
}
