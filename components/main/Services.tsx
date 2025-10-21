"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 sm:py-20" id="services">
      <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10">
        Our Services
      </h1>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <ProjectCard
          src="/web 1.png"
          title="Website Development"
          description="We design and develop dynamic, SEO-optimized websites that elevate brand presence and drive business growth — from corporate sites to powerful e-commerce platforms."
        />
        <ProjectCard
          src="/mobile 2.png"
          title="Mobile App Development"
          description="We create intuitive, scalable mobile applications that enhance customer engagement and streamline business operations across Android and iOS devices."
        />
        <ProjectCard
          src="/software 3.jpg"
          title="System Development"
          description="We build robust enterprise systems tailored to your workflow — empowering automation, data management, and seamless integration across departments."
        />
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Interested in working with us?
        </h2>

        <Link
          href="/packages"
          className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90 text-white px-6 py-3 rounded-full transition-all inline-block"
        >
          All Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
