"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between px-[10px]">
        {/* Logo */}
        <Link href="/" className="h-auto w-auto flex items-center">
          <Image
            src="/NavLogo.PNG"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            ሐበሻ Bytes
          </span>
        </Link>

        {/* Desktop navigation — untouched */}
        <div className="hidden md:flex w-[500px] h-full items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/#about-me" className="cursor-pointer">Home</Link>
            <Link href="/#skills" className="cursor-pointer">Skills</Link>
            <Link href="/#services" className="cursor-pointer">Services</Link>
            <Link href="/#team" className="cursor-pointer">Team</Link>
            <Link href="/#projects" className="cursor-pointer">Projects</Link>
          </div>
        </div>

        {/* Mobile hamburger button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden text-gray-200 px-3 py-2 rounded-full border border-[#7042f861] bg-gradient-to-r from-purple-500/30 to-cyan-500/30 hover:from-purple-500/50 hover:to-cyan-500/50 ring-1 ring-[#7042f861] transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-gradient-to-b from-[#030014]/95 via-[#0f0a2b]/95 to-[#030014]/95 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-0 left-0 right-0 mt-[65px] mx-4 rounded-2xl border border-[#7042f861] bg-[#0b0a1f]/80 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-gray-300 font-semibold">Menu</span>
                <button
                  aria-label="Close menu"
                  className="text-gray-300 p-2 rounded-full hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  <RxCross2 />
                </button>
              </div>
              <div className="border-t border-[#7042f861]" />

              <div className="flex flex-col px-4 py-4 gap-2 text-gray-200">

                {/* Home */}
                <Link href="/#about-me" className="text-lg font-semibold py-2 rounded-xl hover:bg-white/10" onClick={() => setOpen(false)}>Home</Link>
                <Link href="/#skills" className="text-lg font-semibold py-2 rounded-xl hover:bg-white/10" onClick={() => setOpen(false)}>Skills</Link>

                {/* Services with submenu */}
                <div className="flex flex-col w-full">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="text-lg font-semibold py-2 rounded-xl hover:bg-white/10 flex justify-between items-center w-full"
                  >
                    Services
                    <span className="ml-2 text-sm">{servicesOpen ? "v" : ">"}</span>
                  </button>
                  {servicesOpen && (
                    <div className="flex flex-col w-full mt-1 bg-[#0300145e] rounded-lg overflow-hidden">
                      <Link
                        href="/packages"
                        className="text-base font-medium py-2 px-4 hover:bg-white/10"
                        onClick={() => setOpen(false)}
                      >
                        Packages
                      </Link>
                    </div>
                  )}
                </div>

                {/* Team with submenu */}
                <div className="flex flex-col w-full mt-1">
                  <button
                    onClick={() => setTeamOpen(!teamOpen)}
                    className="text-lg font-semibold py-2 rounded-xl hover:bg-white/10 flex justify-between items-center w-full"
                  >
                    Team
                    <span className="ml-2 text-sm">{teamOpen ? "v" : ">"}</span>
                  </button>
                  {teamOpen && (
                    <div className="flex flex-col w-full mt-1 bg-[#0300145e] rounded-lg overflow-hidden">
                      <Link
                        href="/contact"
                        className="text-base font-medium py-2 px-4 hover:bg-white/10"
                        onClick={() => setOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  )}
                </div>

                {/* Projects */}
                <Link href="/#projects" className="text-lg font-semibold py-2 rounded-xl hover:bg-white/10" onClick={() => setOpen(false)}>Projects</Link>

              </div>

           
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
