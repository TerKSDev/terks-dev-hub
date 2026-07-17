"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiDownload,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/TerKSDev", icon: FiGithub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kean-sen-ter-6a3189392",
    icon: FiLinkedin,
  },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative w-full flex sm:flex-row flex-col gap-12 px-6 md:px-24 lg:px-36 py-16 min-h-[calc(100vh-68.8px)] items-center overflow-hidden scroll-mt-17.25"
    >
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-1/2 h-px bg-linear-to-r from-transparent via-stone-300 to-transparent"></div>
      </div>

      <div className="absolute right-4 md:right-12 top-1/3 [writing-mode:vertical-rl] text-stone-300 tracking-[0.5em] text-sm font-serif hidden md:block select-none">
        お問い合わせ
      </div>

      <motion.div
        className="flex flex-col sm:flex-row sm:justify-between justify-center flex-1 sm:items-center gap-16 md:gap-0 z-10 w-full"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl font-serif text-stone-800 tracking-wide leading-none">
              {"Let's Connect."}
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#8B3A3A]/70"></div>
              <span className="text-sm text-stone-400 font-serif tracking-widest">
                一緒に何かを創りましょう
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="mailto:huoyan0928@gmail.com"
              className="group flex items-center gap-3.5 w-fit mt-4 pb-2 border-b border-stone-300 hover:border-[#8B3A3A] transition-colors duration-500 text-stone-700 tracking-widest text-sm md:text-base uppercase"
            >
              <FiMail className="w-4 h-4 text-stone-400 group-hover:text-[#8B3A3A] transition-colors duration-300" />
              huoyan0928@gmail.com
              <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#8B3A3A] transition-all duration-300" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3.5 w-fit mt-4 pb-2 border-b border-stone-300 hover:border-[#8B3A3A] transition-colors duration-500 text-stone-700 tracking-widest text-sm md:text-base uppercase"
            >
              <FiFileText className="w-4 h-4 text-stone-400 group-hover:text-[#8B3A3A] transition-colors duration-300" />
              My Resume
              <FiDownload className="w-4 h-4 transform group-hover:translate-y-0.5 group-hover:text-[#8B3A3A] transition-all duration-300" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6">
          <span className="text-xs text-stone-400 font-serif tracking-[0.3em] uppercase">
            Socials
          </span>
          <div className="flex items-center gap-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  className="text-stone-400 hover:text-stone-800 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
