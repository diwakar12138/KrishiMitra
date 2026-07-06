import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "#" },
  { name: "About", path: "#" },
  { name: "Contact", path: "/contact" },
];

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-16 sm:h-18 md:h-20 flex items-center justify-between md:grid md:grid-cols-[minmax(200px,auto)_1fr_minmax(200px,auto)] lg:grid-cols-[minmax(260px,auto)_1fr_minmax(260px,auto)] md:gap-4 lg:gap-6">

          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center">
            <ul className="flex items-center gap-6 lg:gap-11 text-sm lg:text-[15px] font-semibold text-gray-700">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="relative cursor-pointer pb-1 hover:text-green-700 transition-colors whitespace-nowrap group"
                  >
                    {link.name}

                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-green-700 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex shrink-0 items-center justify-end gap-3">

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="font-semibold text-green-700 hover:text-green-800"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center h-10 lg:h-11 px-4 lg:px-6 rounded-lg border border-green-700 text-green-700 text-sm font-semibold whitespace-nowrap hover:bg-green-50 transition-colors duration-200"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center h-10 lg:h-11 px-4 lg:px-6 rounded-lg bg-green-700 text-white text-sm font-semibold whitespace-nowrap hover:bg-green-800 transition-colors duration-200 shadow-sm"
                >
                  Register
                </Link>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col p-5 gap-2 text-base font-medium text-gray-700">

          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 px-2 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <div className="flex gap-3 mt-4">

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center rounded-lg py-2.5 bg-green-700 text-white font-semibold"
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex-1 rounded-lg py-2.5 bg-red-500 text-white font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center border border-green-700 rounded-lg py-2.5 text-green-700 font-semibold hover:bg-green-50"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center rounded-lg py-2.5 bg-green-700 text-white font-semibold hover:bg-green-800"
                >
                  Register
                </Link>
              </>
            )}

          </div>

        </ul>
      </div>
    </header>
  );
}

export default Navbar;