"use client";

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<Props> = ({ src, title, description, children, }) => {
  return (
    <div className="relative rounded-xl shadow-lg border border-[#2A0E61] flex flex-col bg-gray-900 overflow-hidden hover:scale-[1.02] transition-all duration-300 w-full h-auto">
      
      {/* Image Section */}
      <div className="relative w-full h-[380px] sm:h-[250px] md:h-[320px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-[495px] sm:h-[420px] md:h-[140px] object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="relative p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-white mb-2">{title}</h1>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>

        {children && <div className="mt-4 flex justify-center sm:justify-start">{children}</div>}
      </div>
    </div>
  );
};

export default ProjectCard;
