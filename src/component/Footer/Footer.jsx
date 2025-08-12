import React from "react";
import { Link } from "react-scroll";

const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/Imranfaraji",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.02c0 4.427 2.865 8.18 6.839 9.504.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.34-2.22-.252-4.555-1.11-4.555-4.943 0-1.09.39-1.98 1.029-2.678-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025a9.564 9.564 0 012.5-.336 9.54 9.54 0 012.5.336c1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.395.1 2.647.64.698 1.028 1.588 1.028 2.678 0 3.842-2.337 4.687-4.565 4.935.359.31.678.923.678 1.86 0 1.343-.012 2.423-.012 2.752 0 .268.18.577.688.479A10.019 10.019 0 0022 12.02C22 6.484 17.523 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/imran-hosen8/",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-9h2.5v9zm-1.25-10.29c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm13 10.29h-2.5v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.38v4.57h-2.5v-9h2.4v1.23h.03c.33-.62 1.13-1.27 2.32-1.27 2.48 0 2.94 1.63 2.94 3.75v5.29z" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://x.com/imranfaraj59162",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 10.77 10.77 0 01-3.42 1.3 4.52 4.52 0 00-7.7 4.12 12.86 12.86 0 01-9.32-4.72 4.48 4.48 0 001.4 6.03 4.48 4.48 0 01-2.05-.56v.06a4.52 4.52 0 003.63 4.44 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.21 3.13 9.06 9.06 0 01-6.68 1.85A12.77 12.77 0 007 19c8.3 0 12.84-6.88 12.84-12.83 0-.2 0-.42-.02-.62A9.22 9.22 0 0023 3z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#1f2226] border-t border-gray-800 py-8">
      <div className=" max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo / Name */}
        <div
  className="text-red-500 font-extrabold text-4xl cursor-default select-none tracking-wide italic"
  style={{ fontFamily: "'Dancing Script', cursive" }}
>
  Imran <span className="text-white">Hosen</span>
</div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-gray-400">
          {["home", "about", "skill", "project", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-70} // adjust if you have fixed header height
              duration={500}
              className="cursor-pointer hover:text-red-500 transition-colors duration-300 capitalize"
            >
              {section}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map(({ id, name, url, icon }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-gray-400 hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Imran Hosen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
