import React from "react";
import { motion } from "framer-motion";

const skills = {
  frontend: [
    "React",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    
    "TypeScript",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "REST APIs",
  ],
  tools: [
    "Git & GitHub",
    "VS Code",
    "Postman",
    "Firebase",
    "Vercel",
    "Netlify",
    
  ],
};

const SkillSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#1f2226] border-b border-gray-800"
    >
      <div className="responsive max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div
           className="grid grid-cols-1 md:grid-cols-3 gap-10"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
        >
          {/* Frontend */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-red-500 mb-4 text-center">
              Frontend
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              {skills.frontend.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-gray-700 rounded-md py-2 hover:bg-red-600 cursor-default transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-red-500 mb-4 text-center">
              Backend
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              {skills.backend.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-gray-700 rounded-md py-2 hover:bg-red-600 cursor-default transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-gray-800 rounded-lg p-6 shadow-lg"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-red-500 mb-4 text-center">
              Tools
            </h3>
            <ul className="space-y-2 text-gray-300 text-center">
              {skills.tools.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-gray-700 rounded-md py-2 hover:bg-red-600 cursor-default transition-colors"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
