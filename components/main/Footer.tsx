"use client";

import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import {
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-gray-200 shadow-lg p-6">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-start justify-around flex-wrap gap-10">

          {/* Community */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-[16px] mb-4">Community</div>
            <a href="https://www.youtube.com/@STUDIO_1155/" target="_blank" rel="noopener noreferrer" className="flex items-center my-2">
              <FaYoutube />
              <span className="text-[15px] ml-2">YouTube</span>
            </a>
            <a href="https://github.com/Studio-III-3/" target="_blank" rel="noopener noreferrer" className="flex items-center my-2">
              <RxGithubLogo />
              <span className="text-[15px] ml-2">GitHub</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-[16px] mb-4">Social Media</div>
            <a href="https://www.instagram.com/Habesha_Bytes" target="_blank" rel="noopener noreferrer" className="flex items-center my-2">
              <RxInstagramLogo />
              <span className="text-[15px] ml-2">Instagram</span>
            </a>
            <a href="https://twitter.com/habesha_bytes" target="_blank" rel="noopener noreferrer" className="flex items-center my-2">
              <RxTwitterLogo />
              <span className="text-[15px] ml-2">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/habesha-bytes-b37ab238b/" target="_blank" rel="noopener noreferrer" className="flex items-center my-2">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-2">LinkedIn</span>
            </a>
            <a href="https://www.tiktok.com/@habesha_bytes" target="_blank" rel="noopener noreferrer" className="flex items-center my-2">
              <FaTiktok />
              <span className="text-[15px] ml-2">TikTok</span>
            </a>
            <a href="https://t.me/habesha_byts" target="_blank" rel="noopener noreferrer" className="flex items-center my-2">
              <FaTelegramPlane />
              <span className="text-[15px] ml-2">Telegram</span>
            </a>
          </div>

          {/* Contact */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-[16px] mb-4">Contact us</div>
            <p className="flex items-center my-2">
              <span className="text-[15px] ml-2">+251-922-147-939</span>
            </p>
            <p className="flex items-center my-2">
              <a
                href="mailto:habeshabytes@gmail.com"
                className="text-[15px] ml-2 hover:text-blue-500 transition-colors"
              >
                habeshabytes@gmail.com
              </a>
            </p>
          </div>

        </div>

        {/* Footer copyright */}
        <div className="text-center py-6 text-gray-400 mt-6">
          &copy; ሐበሻ Bytes. All rights reserved {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
