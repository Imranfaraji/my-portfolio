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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center  tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-lg p-6 shadow-lg shadow-red-500/20 border border-gray-700 hover:shadow-red-500/40 transform hover:scale-105 transition-all duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-red-500 mb-4 text-center capitalize">
                {category}
              </h3>
              <ul className="space-y-2 text-gray-300 text-center">
                {skillList.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="bg-gray-700/50 rounded-md py-2 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
