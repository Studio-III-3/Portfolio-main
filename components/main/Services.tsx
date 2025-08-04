import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="services">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Our Services
      </h1>

      <div className="w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/webdev.png"
          title="Web Development"
          description="Custom, responsive websites tailored to your brand and goals."
        />
        <ProjectCard
          src="/design.png"
          title="UI/UX Design"
          description="User-centered design that enhances experience and engagement."
        />
        <ProjectCard
          src="/seo.png"
          title="SEO Optimization"
          description="Boost your search rankings and online visibility effectively."
        />
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">Interested in working with us?</h2>
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

export default Services;
