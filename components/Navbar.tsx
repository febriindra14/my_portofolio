"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="font-bold text-lg"></h1>

        <div className="hidden md:flex space-x-6 text-sm">
          <Link
            href="/"
            className={`relative pb-1 transition ${
              pathname === "/" ? "font-medium" : "hover:text-blue-500"
            }`}
          >
            Home
            {pathname === "/" && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black rounded-full"></span>
            )}
          </Link>

          <Link
            href="/about"
            className={`relative pb-1 transition ${
              pathname === "/about" ? "font-medium" : "hover:text-blue-500"
            }`}
          >
            About
            {pathname === "/about" && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black rounded-full"></span>
            )}
          </Link>

          <Link
            href="/projects"
            className={`relative pb-1 transition ${
              pathname === "/projects" ? "font-medium" : "hover:text-blue-500"
            }`}
          >
            Projects
            {pathname === "/projects" && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black rounded-full"></span>
            )}
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span
            className={`w-6 h-0.5 bg-black transition ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 text-sm">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`block ${
              pathname === "/"
                ? "font-medium underline underline-offset-4"
                : "hover:text-blue-500"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className={`block ${
              pathname === "/about"
                ? "font-medium underline underline-offset-4"
                : "hover:text-blue-500"
            }`}
          >
            About
          </Link>

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className={`block ${
              pathname === "/projects"
                ? "font-medium underline underline-offset-4"
                : "hover:text-blue-500"
            }`}
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
