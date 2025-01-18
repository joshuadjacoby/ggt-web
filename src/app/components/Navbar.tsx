"use client";
import { useState } from "react";

type Path = "/" | "/about" | "/services" | "/contact";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path: Path) => {
    window.location.href = path;
  };

  return (
    <nav
      className="bg-gradient-to-r from-orange-500 to-red-500 p-4 shadow-lg sticky top-0 z-50"
      style={{ background: "linear-gradient(to right, #FB6E4A, #E63946)" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => navigateTo("/")}
          className="text-white text-lg font-bold"
        >
          Golden Gate Therapy
        </button>
        {/* Hamburger Menu Button */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/* Links for larger screens */}
        <div className="hidden lg:flex space-x-4">
          <button
            onClick={() => navigateTo("/")}
            className="text-white hover:text-gray-200"
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("/about")}
            className="text-white font-medium hover:text-yellow-100"
          >
            About
          </button>
          <button
            onClick={() => navigateTo("/services")}
            className="text-white font-medium hover:text-yellow-100"
          >
            Services
          </button>
          <button
            onClick={() => navigateTo("/contact")}
            className="text-white font-medium hover:text-yellow-100"
          >
            Contact
          </button>
        </div>
      </div>
      {/* Dropdown menu for smaller screens */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 space-y-2">
          <button
            onClick={() => navigateTo("/")}
            className="block text-white hover:text-gray-200"
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("/about")}
            className="block text-white hover:text-gray-200"
          >
            About
          </button>
          <button
            onClick={() => navigateTo("/services")}
            className="block text-white hover:text-gray-200"
          >
            Services
          </button>
          <button
            onClick={() => navigateTo("/contact")}
            className="block text-white hover:text-gray-200"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
