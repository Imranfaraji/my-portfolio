import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";

// Card Animation
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const ProjectSection = () => {
  const { data: projects = [], isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("https://portfolio-server-chi-five.vercel.app/projects");
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center text-white py-10">Loading projects...</p>;
  if (isError) return <p className="text-center text-red-500 py-10">Failed to load projects.</p>;

  return (
    <section id="project" className="py-20 bg-[#1f2226] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-14 text-center"
        >
          My <span className="">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project._id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/40 transition-shadow duration-500"
            >
              <img
                src={project.projectImage}
                alt={project.projectName}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold text-white">{project.projectName}</h2>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {project.details.description}
                </p>
                <div className="mt-4 flex text-xs justify-between">
                  <a
                    href={project.details.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Live
                  </a>
                  <a
                    href={project.details.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
                  >
                    GitHub
                  </a>
                  <Link
                    to={`/projects/${project._id}`}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View Details
                  </Link>
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