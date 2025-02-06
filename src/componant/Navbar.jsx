// export default Navbar;
import { useState } from "react";
import { navLinks } from "../constant";
import { hamburger } from "../assets/icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-3  w-full bg-inherit">
      <nav className="flex items-center justify-between max-container">
        {/* Logo */}
        <Link to="/" className="w-[80px] h-[80px] flex-shrink-0">
          <img
            src={"../../public/1-removebg-preview.png"}
            alt="logo"
            className="object-contain"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden flex items-center cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img src={hamburger} alt="Menu Icon" width={30} height={30} />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-row-reverse items-center gap-3">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="py-3 px-4 hover:text-red-600 duration-200 transition-all text-gray-400"
            >
              <Link
                className="text-lg leading-normal font-montserrat"
                to={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to Action Button */}
        <button className="hidden lg:block text-white py-2 px-8 bg-blue-600 text-[18px] rounded-full font-montserrat">
          تسجيل
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="fixed top-0 right-0 w-[75%] h-full bg-white shadow-lg flex flex-col items-start py-5 gap-3 z-50">
            {/* Close Button */}
            <li className="self-start p-5">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-gray-600"
              >
                ✕
              </button>
            </li>

            {navLinks.map((item) => (
              <li key={item.label} className="py-2 pr-5">
                <a
                  href={item.href}
                  className="text-lg font-montserrat text-gray-600 hover:text-red-600 transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <button className="text-white py-2 px-8 bg-blue-600 text-[18px] rounded-full font-montserrat">
              تسجيل
            </button>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
