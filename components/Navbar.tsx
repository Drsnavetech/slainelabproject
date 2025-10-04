"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" alt="Asido Foundation" width={120} height={40} />
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6 text-sm font-semibold text-blue-700">
        <Link href="/about">ABOUT US</Link>
        <Link href="/impact">IMPACT</Link>
        <Link href="/get-involved">GET INVOLVED</Link>
        <Link href="/stay-informed">STAY INFORMED</Link>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/pledge" className="text-sm font-semibold text-blue-700">
          TAKE THE PLEDGE
        </Link>

        <button className="p-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-100 transition">
          🔍
        </button>

        <Link
          href="/donate"
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 py-2 rounded-md text-sm"
        >
          DONATE
        </Link>
      </div>

      {/* Mobile Menu Button (if needed later) */}
      <button
        className="md:hidden text-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
