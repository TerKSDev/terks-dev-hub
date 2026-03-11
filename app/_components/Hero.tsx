'use client';

import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import Link from 'next/link';

export default function Hero() {
   return (
      <section
         id="about"
         className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-8 md:px-24 lg:px-36 py-16 min-h-[calc(100vh-68.8px)] items-center overflow-hidden scroll-mt-17.25"
      >
         <div className="w-full border-stone-200 border-top h-px absolute top-0 left-0"></div>
         <div className="absolute top-0 left-0 w-full flex justify-center">
            <div className="w-1/2 h-px bg-linear-to-r from-transparent via-stone-300 to-transparent"></div>
         </div>

         <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] text-stone-300 tracking-[0.5em] text-sm font-serif hidden md:block select-none">
            シンプルさと機能性の融合
         </div>

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
                     transition: { duration: 0.6, ease: 'easeOut' },
                  },
               }}
            >
               <div className="w-8 h-px bg-stone-400"></div>
               <span className="text-stone-500 tracking-[0.3em] text-xs uppercase font-light">
                  TerKS Portfolio
               </span>
            </motion.div>

            <motion.h1
               className="text-5xl md:text-6xl font-serif text-stone-800 leading-[1.2] tracking-wide"
               variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.7, ease: 'easeOut' },
                  },
               }}
            >
               Creative <br /> Full-Stack <br /> Developer.
            </motion.h1>

            <motion.p
               className="text-stone-500 font-light text-base leading-loose max-w-md"
               variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.7, ease: 'easeOut' },
                  },
               }}
            >
               I build elegant and efficient web applications that solve
               real-world problems, blending minimalist design with robust
               server-side architecture.
            </motion.p>

            <motion.div
               variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                     opacity: 1,
                     y: 0,
                     transition: { duration: 0.7, ease: 'easeOut' },
                  },
               }}
            >
               <Link
                  href="#project"
                  className="group flex items-center gap-3 w-fit mt-4 pb-2 border-b border-stone-300 hover:border-stone-800 transition-colors duration-500 text-stone-700 tracking-widest text-sm uppercase"
               >
                  Explore My Projects
                  <FiArrowDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" />
               </Link>
            </motion.div>
         </motion.div>

         <motion.div
            className="relative flex items-center justify-center w-full h-100 md:h-full"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
         >
            <div className="absolute w-80 h-80 bg-stone-200/30 rounded-full blur-3xl"></div>
            <div className="absolute w-[20rem] h-80 md:w-md md:h-112 border-[0.5px] border-stone-300 rounded-full"></div>
            <div className="absolute w-[20rem] h-80 md:w-md md:h-112 border-[0.5px] border-stone-200 rounded-full translate-x-6 translate-y-6"></div>

            <div className="text-[8rem] md:text-[12rem] text-stone-800/5 font-serif font-light z-0 select-none">
               創
            </div>

            <div className="absolute top-1/4 right-1/4 md:right-1/3 w-10 h-10 border border-[#8B3A3A] text-[#8B3A3A] flex items-center justify-center text-lg font-serif rounded-sm rotate-6 opacity-80 select-none cursor-default">
               作
            </div>
         </motion.div>

         <div className="w-full border-stone-200 border-b h-px absolute bottom-0 left-0"></div>
      </section>
   );
}
