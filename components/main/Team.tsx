"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Team: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="team">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Meet the Team
      </h1>

      <div className="w-full flex flex-col items-center justify-center gap-20 px-14 md:flex-row md:flex-wrap md:px-100">
        <ProjectCard
          src="/team1.JPG"
          title="Kalab Bezuayhu"
          description="Head of Digital Solutions."
        />
        <ProjectCard
          src="/Team 2.JPG"
          title="Hailegebreal Samuel"
          description="Develops scalable web, mobile, and ERP solutions."
        />
        <ProjectCard
          src="/Team 3.JPG"
          title="Marta shemeles"
          description="Creates user-centered interfaces and seamless experiences."
          
        />
        <ProjectCard
          src="/Team 4.JPG"
          title="Abrham Abebe"
          description="Builds secure systems and manages backend and integrations."
        />
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Want to collaborate with us?
        </h2>
        <Link
          href="/contact"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full transition-all"
        >
          Contact Now
        </Link>
      </div>
    </div>
  );
};

export default Team;
