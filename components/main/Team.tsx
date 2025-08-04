import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Team: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="team">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Meet the Team
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/team1.jpg"
          title="Abrham Abebe"
          description="Frontend Developer - Expert in React, animations, and responsive UI."
        />
        <ProjectCard
          src="/team2.jpg"
          title="Saron Tesfaye"
          description="Backend Developer - Specializes in APIs, databases, and performance."
        />
        <ProjectCard
          src="/team3.jpg"
          title="Lidya Mekonen"
          description="UI/UX Designer - Focused on clean design and user experience."
        />
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Want to collaborate with us?</h2>
        <a
          href="#contact"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Team;

