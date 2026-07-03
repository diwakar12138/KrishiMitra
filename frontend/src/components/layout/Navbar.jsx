import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Features", "About", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 sm:h-18 md:h-20 flex items-center justify-between md:grid md:grid-cols-[minmax(200px,auto)_1fr_minmax(200px,auto)] lg:grid-cols-[minmax(260px,auto)_1fr_minmax(260px,auto)] md:gap-4 lg:gap-6">

          {/* LEFT: Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* CENTER: Nav links (desktop/tablet only) */}
          <nav className="hidden md:flex justify-center">
            <ul className="flex items-center gap-6 lg:gap-11 text-sm lg:text-[15px] font-semibold text-gray-700">
              {navLinks.map((link) => (
                <li
                  key={link}
                  className="relative cursor-pointer pb-1 transition-colors hover:text-green-700 whitespace-nowrap"
                >
                  {link}
                  <span className="absolute left-0 -bottom-0 w-full h-[2.5px] bg-green-700 rounded-full scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100" />
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: Auth buttons (desktop/tablet only) */}
          <div className="hidden md:flex shrink-0 items-center justify-end gap-2 lg:gap-3">
            <button className="inline-flex items-center justify-center h-10 lg:h-11 px-4 lg:px-6 rounded-lg border border-green-700 text-green-700 text-sm font-semibold whitespace-nowrap hover:bg-green-50 transition-colors duration-200">
              Login
            </button>
            <button className="inline-flex items-center justify-center h-10 lg:h-11 px-4 lg:px-6 rounded-lg bg-green-700 text-white text-sm font-semibold whitespace-nowrap hover:bg-green-800 transition-colors duration-200 shadow-sm">
              Register
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl text-gray-700 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-gray-100 bg-white ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col p-5 gap-1 text-base font-medium text-gray-700">
          {navLinks.map((link) => (
            <li
              key={link}
              className="py-2.5 px-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors cursor-pointer"
            >
              {link}
            </li>
          ))}

          <div className="flex gap-3 mt-3">
            <button className="flex-1 border border-green-700 rounded-lg py-2.5 text-green-700 font-semibold">
              Login
            </button>
            <button className="flex-1 rounded-lg py-2.5 bg-green-700 text-white font-semibold">
              Register
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;