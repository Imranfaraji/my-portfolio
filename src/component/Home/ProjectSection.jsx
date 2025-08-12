import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A modern weather forecast app using React, OpenWeather API, and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/imranfaraji880/weather-app",
    liveDemo: "https://weather-app.example.com",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description:
      "Full-stack MERN e-commerce platform with user authentication and payment integration.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/imranfaraji880/ecommerce-store",
    liveDemo: "https://ecommerce-store.example.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built with React and Tailwind CSS showcasing projects and skills.",
    image:
      "https://images.unsplash.com/photo-1523475496153-3a89f8e2aa63?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/imranfaraji880/portfolio",
    liveDemo: "https://imran-portfolio.example.com",
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "A task management app with CRUD operations, user login, and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/imranfaraji880/task-manager",
    liveDemo: "https://task-manager.example.com",
  },
];

// Animation variants for framer-motion
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ProjectSection = () => {
  return (
    <section
      id="project"
      className="py-24 bg-[#1f2226] border-b border-gray-800"
    >
      <div className="responsive max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map(({ id, title, description, image, github, liveDemo }, i) => (
            <motion.div
              key={id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg cursor-pointer
                hover:shadow-[0_0_20px_rgba(239,68,68,0.7)] transition-shadow duration-500"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{description}</p>
                <div className="flex gap-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
