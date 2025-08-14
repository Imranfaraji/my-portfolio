import React from "react";
import { useParams, Link } from "react-router"; // make sure this is react-router-dom
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const ProjectDetails = () => {
  const { id } = useParams();

  const { data: projects = [], isLoading, isError } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await axios.get(
        `https://portfolio-server-chi-five.vercel.app/projects/${id}`
      );
      return res.data; // returns array
    },
  });

  // Pick the first (and only) project from the array
  

  console.log(projects); // <-- log it AFTER defining

  if (isLoading) return <p className="text-center text-white py-10">Loading...</p>;
  if (isError) return <p className="text-center text-red-500 py-10">Failed to load project.</p>;
  if (!projects) return <p className="text-center text-red-500 py-10">Project not found.</p>;

  return (
    <div className="w-full py-32">
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-xl  text-white">
      <h1 className="text-3xl font-bold mb-4">{projects.projectName}</h1>

      <img
        src={projects.projectImage}
        alt={projects.projectName}
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">Technology Stack:</h2>
      <div className="flex gap-4 mb-4">
        {projects?.details?.techStack?.map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-1" />
            <span className="text-sm">{tech.name}</span>
          </div>
        ))}
      </div>

      <p className="mb-4">{projects?.details?.description}</p>

      <div className="flex gap-4 mb-4">
        <a
          href={projects?.details?.liveLink}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
        >
          Live Project
        </a>
        <a
          href={projects?.details?.githubLink}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          GitHub
        </a>
      </div>

      <div className="mb-2">
        <strong>Challenges:</strong>
        <p>{projects?.details?.challenges}</p>
      </div>

      <div className="mb-2">
        <strong>Future Plans:</strong>
        <p>{projects?.details?.futurePlans}</p>
      </div>

      <Link
        to="/#project"
        className="inline-block mt-4 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
      >
        Back to Projects
      </Link>
    </div>
    </div>
  );
};

export default ProjectDetails;
