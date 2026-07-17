"use client";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative w-full grid grid-cols-1 xl:grid-cols-2 gap-12 px-6 md:px-24 lg:px-36 py-16 min-h-[calc(100vh-68.8px)] items-center overflow-hidden scroll-mt-17.25"
    >
      {/* Decorative Lines */}
      <div className="w-full border-stone-200 border-top h-px absolute top-0 left-0"></div>

      {/* Full-width Divider (Top) */}
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <div className="w-1/2 h-px bg-linear-to-r from-transparent via-stone-300 to-transparent"></div>
      </div>

      {/* Vertical Text */}
      <div className="absolute sm:left-5 lg:left-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-stone-300 tracking-[0.5em] text-sm font-serif hidden md:block select-none">
        シンプルさと機能性の融合
      </div>

      {/* Left Column - Introduction */}
      <motion.div
        className="flex flex-col gap-8 text-start z-10 md:ml-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
          },
        }}
      >
        <motion.div
          className="flex items-center gap-4"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <div className="w-8 h-px bg-stone-400"></div>
          <span className="text-stone-500 tracking-[0.3em] text-xs uppercase font-light">
            TerKS Portfolio
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl text-justify md:text-5xl lg:text-6xl text-nowrap font-serif text-stone-800 leading-snug tracking-wide"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          Next.js Full-Stack <br /> Developer.
        </motion.h1>

        <motion.p
          className="text-stone-500 text-justify font-light text-sm sm:text-base md:text-lg lg:text-xl leading-loose w-full lg:max-w-lg"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          {`I'm an IT graduate based in Malaysia. I focus on building elegant and efficient web applications that solve real-world problems, blending minimalist design with robust server-side architecture.`}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-12 mt-4"
        >
          <Link
            href="#projects"
            className="group flex items-center gap-3 w-fit  pb-2 border-b border-stone-300 hover:border-stone-800 transition-colors duration-500 text-stone-700 tracking-widest text-sm uppercase"
          >
            Explore My Projects
            <FiArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
          </Link>
          <div className="relative">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-3 w-fit  pb-2 border-b border-stone-300 hover:border-stone-800 transition-colors duration-500 text-stone-700 tracking-widest text-sm uppercase"
            >
              My Resume
              <FiDownload className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column - Decorative Visuals */}
      <motion.div
        className="absolute xl:relative flex items-center justify-center w-full h-100 lg:h-full"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div className="absolute w-80 h-80 bg-stone-200/30 rounded-full blur-3xl"></div>
        <div className="absolute w-[20rem] h-80 md:w-md md:h-112 border-[0.5px] border-stone-300/50 lg:border-stone-300 rounded-full"></div>
        <div className="absolute w-[20rem] h-80 md:w-md md:h-112 border-[0.5px] border-stone-200/50 lg:border-stone-200 rounded-full translate-x-6 translate-y-6"></div>

        <div className="text-[8rem] md:text-[12rem] text-stone-500/3 lg:text-stone-800/5 font-serif font-light z-0 select-none">
          創
        </div>

        <div className="absolute top-1/4 right-1/4 lg:right-1/4 w-10 h-10 border lg:border-[#8B3A3A] lg:text-[#8B3A3A] border-[#8B3A3A]/25 text-[#8B3A3A]/25 flex items-center justify-center text-lg font-serif rounded-sm rotate-6 opacity-80 select-none cursor-default">
          作
        </div>
      </motion.div>

      <div className="w-full border-stone-200 border-b h-px absolute bottom-0 left-0"></div>
    </section>
  );
}
