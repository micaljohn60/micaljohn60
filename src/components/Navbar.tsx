import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Animate menu on open/close
  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        gsap.to(menuRef.current, {
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        gsap.to(menuRef.current, {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
        });
      }
    }
  }, [menuOpen]);

  return (
    <header className="w-full border-b bg-white fixed top-0 left-0 z-50 ">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="h-8 w-8 rounded-b-md px-10 py-5 bg-black text-white flex items-center justify-center">
            THH
          </div>
        </div>

        {/* Desktop Nav links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a
            href="https://www.linkedin.com/in/thi-han-hein-77b85218a/"
            className="hover:text-gray-600"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/micaljohn60"
            className="hover:text-gray-600"
          >
            GitHub
          </a>
        </nav>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a className="hover:text-gray-600">Sydney, Australia</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform translate-x-full md:hidden flex flex-col p-6 gap-6"
      >
        <a href="#" className="text-lg font-medium hover:text-gray-600">
          LinkedIn
        </a>
        <a href="#" className="text-lg font-medium hover:text-gray-600">
          GitHub
        </a>
        <span className="text-sm text-gray-500">Sydney, Australia</span>
      </div>
    </header>
  );
};

export default Navbar;
