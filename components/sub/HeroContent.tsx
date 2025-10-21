"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-20 mt-24 sm:mt-32 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-3 sm:gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0 w-fit"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
          Beyond the Code
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 sm:gap-4 mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white max-w-[600px] w-auto h-auto mx-auto md:mx-0"
        >
          <span>
          Built for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Impact{" the "}
            </span>
            Habesha Bytes Way.  
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-2 sm:my-3 max-w-[500px] mx-auto md:mx-0"
        >
We&#39;re a team of digital creators specializing in web design, mobile development, UI/UX, and creative technology. Explore our work, from responsive websites to user-centered apps, and see how we bring ideas to life.        </motion.p>   
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
          className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] object-contain"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
