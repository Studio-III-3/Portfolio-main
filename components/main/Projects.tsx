import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/project 1.jpg"
          title="Studio III IT support"
          description="Get fast, reliable IT support with Studio III. From troubleshooting to system optimization, we make technology simple and stress-free. Manage your devices, fix issues, and keep your business running smoothly—all in one place. Your tech, empowered."
        >
          <a
            href="https://www.youtube.com/@STUDIO_1155"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          >
            Learn More
          </a>
        </ProjectCard>

        <ProjectCard
          src="/project 2.jpg"
          title="Interactive Website Cards"
          description="Equb App is a modern digital platform that simplifies traditional Ethiopian saving circles. Users can create, join, and manage Equbs, contribute regularly, track their savings, and receive their payouts securely and transparently, all from their smartphone."
        >
          <a
            href="https://www.youtube.com/@STUDIO_1155"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          >
            Learn More
          </a>
        </ProjectCard>

        <ProjectCard
          src="/1.png"
          title="Space Themed Website"
          description="We are a leading software solutions company, delivering innovative web, mobile, and enterprise applications. Our team provides custom development, digital transformation, and IT consultancy to help businesses grow, optimize processes, and stay ahead in the digital era"
        >
          <a
            href="https://www.youtube.com/@STUDIO_1155"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400 transition-colors"
          >
            Learn More
          </a>
        </ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
