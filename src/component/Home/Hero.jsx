import React from "react";
import { motion } from "framer-motion";
import TypewriterLoop from "./TypewriterLoop";

const Hero = () => {
  return (
    <div className="relative  border-b border-gray-800 py-24 md:py-32  overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-[#212428] to-gray-800 opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 w-full space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-sm uppercase tracking-wider text-gray-400 font-medium">
            Welcome to my world
          </h1>

          <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Hi, I’m <span className="text-red-500">Imran Hosen</span>
          </h1>

          <h2 className="text-lg sm:text-xl lg:text-5xl font-semibold text-gray-300">
            A{" "}
            <span>
              <TypewriterLoop
                words={["Developer.", "Professional Coder.", "UI/UX Designer."]}
                typingSpeed={50}
                deletingSpeed={50}
                pauseAfter={2000}
                className="text-lg sm:text-xl lg:text-5xl font-semibold"
              />
            </span>
          </h2>

          <p className="text-gray-400 max-w-lg leading-relaxed">
            I craft modern and responsive web applications with clean,
            maintainable code and intuitive user experiences. My focus is on
            building functional, visually appealing, and performance-optimized
            solutions that not only meet client needs but also delight users.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="mailto:imranfaraji880@gmail.com?subject=Hire%20Me%20For%20A%20Project&body=Hi%20Imran%2C%0A%0AI%20am%20interested%20in%20working%20with%20you."
              className="inline-block px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
            >
              Hire Me
            </a>
            <button className="px-6 py-3 border border-gray-500 text-gray-300 rounded-full hover:bg-gray-700 transition-all">
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 w-full flex items-center justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img
              className="lg:w-[70%] lg:h-[650px] md:h-[500px] h-80 object-cover rounded-2xl shadow-2xl shadow-gray-800"
              src="https://i.ibb.co.com/nNVGDGKc/Untitled-1000-x-1200-px.png"
              alt="Imran Hosen"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
