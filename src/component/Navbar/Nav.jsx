import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", text: "Home" },
    { id: "about", text: "About" },
    { id: "skills", text: "Skills" },
    { id: "education", text: "Education" },
    { id: "projects", text: "Projects" },
    { id: "contact", text: "Contact" },
    
  ];

  return (
    <div className="w-full bg-color/80 backdrop-blur-sm py-3 fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-white flex items-center justify-between">
        {/* Logo */}
        <div
  className="text-red-500 font-extrabold text-4xl flex cursor-default select-none tracking-wide italic"
  style={{ fontFamily: "'Dancing Script', cursive" }}
>
  Imran <span className="text-white hidden md:flex">Hosen</span>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              activeClass="text-red-500 font-bold border-b-2 border-red-500"
              className="cursor-pointer hover:text-red-400 transition-all duration-300"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex items-center justify-center gap-2">
          <a
              href="mailto:imranfaraji880@gmail.com?subject=Hire%20Me%20For%20A%20Project&body=Hi%20Imran%2C%0A%0AI%20am%20interested%20in%20working%20with%20you."
              className="btn btn-sm md:btn-md bg-red-600 hover:bg-red-500 transition-all border-none shadow-none text-white"
            >
              Hire Me
            </a>

          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-color/95 backdrop-blur-sm py-4">
          <div className="flex flex-col text-white items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass="text-red-500 font-bold"
                className="cursor-pointer hover:text-red-400 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)} // close on click
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
