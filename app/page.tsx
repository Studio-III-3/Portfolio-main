"use client";

import React from "react";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Services from "@/components/main/Services";
import Team from "@/components/main/Team";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full relative z-10 flex flex-col gap-20">
      {/* Main Sections */}
      <Hero />
      <Skills />
      <Services />
      <Team />
      <Encryption />
      <Projects />

      {/* Footer */}
      <Footer />
    </main>
  );
}
