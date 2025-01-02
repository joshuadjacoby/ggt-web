"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-gradient-to-r from-orange-500 to-red-500 p-4 shadow-lg"
      style={{ background: "linear-gradient(to right, #FB6E4A, #E63946)" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-lg font-bold">
          Golden Gate Therapy
        </Link>
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
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link
            href="/about"
            className="text-white font-medium hover:text-yellow-100"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-white font-medium hover:text-yellow-100"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-white font-medium hover:text-yellow-100"
          >
            Contact
          </Link>
        </div>
      </div>
      {/* Dropdown menu for smaller screens */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2 space-y-2">
          <Link href="/" className="block text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="block text-white hover:text-gray-200">
            About
          </Link>
          <Link
            href="/services"
            className="block text-white hover:text-gray-200"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-gray-200"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
