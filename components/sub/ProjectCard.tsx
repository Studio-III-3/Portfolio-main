"use client";

import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<Props> = ({ src, title, description, children }) => {
  return (
    <div className="relative rounded-xl shadow-lg border border-[#2A0E61] flex flex-col bg-gray-900 overflow-hidden hover:scale-[1.03] transition-transform duration-300 w-full h-[520px]">
      
      {/* Image Section */}
      <div className="relative w-full h-[230px] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Text Section */}
      <div className="relative p-5 flex flex-col justify-between flex-1">
        <div>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300 text-sm">{description}</p>
        </div>

        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default ProjectCard;
