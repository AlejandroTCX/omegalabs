"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-pantone-2020 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-bold">Alejandro</div>
        <div className="hidden sm:flex space-x-4">
          <Link href="/" className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-yellow-300">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-300">
            Contact
          </Link>
          <Link href="/projects" className="text-white hover:text-yellow-300">
            Projects
          </Link>
        </div>
        <button className="block sm:hidden text-white" onClick={handleToggle}>
          {isOpen ? (
            <span className="text-2xl">×</span> // Close icon
          ) : (
            <span className="text-2xl">≡</span> // Hamburger icon
          )}
        </button>
      </div>
      <div className={`sm:hidden ${isOpen ? "block" : "hidden"} mt-2`}>
        <Link
          href="/"
          className="block px-4 py-2 text-white hover:text-yellow-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block px-4 py-2 text-white hover:text-yellow-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-2 text-white hover:text-yellow-300"
        >
          Contact
        </Link>
        <Link
          href="/projects"
          className="block px-4 py-2 text-white hover:text-yellow-300"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}
