'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
// 新增引入 FiGithub 圖示
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

const projectsData = [
   {
      id: '〇一',
      name: 'Game Portal',
      system: 'Digital Distribution Platform',
      description:
         'A conceptual game storefront inspired by Steam. It reimagines complex game discovery through a clean, interactive Bento Grid UI.',
      tech: ['Next.js', 'Tailwind CSS', 'RAWG API'],
      year: '2026',
      image: '/game-portal.png',
      websiteUrl: 'https://gamestore.quadrawebs.com',
      githubUrl: 'https://github.com/TerKSDev/game-portal',
      openSource: true,
   },
   {
      id: '〇二',
      name: 'Techne.',
      system: 'Gamified Mentorship Platform',
      description:
         'A minimalist, light-themed talent application that turns skill-building into an engaging journey. It connects mentors and learners through an RPG-style quest and leveling system.',
      tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      year: '2026',
      image: '/techne.png',
      websiteUrl: 'https://talent-app.quadrawebs.com',
      openSource: false,
   },
];

export default function Projects() {
   return (
      <section
         id="project"
         className="relative w-full px-8 md:px-24 lg:px-36 py-16 pb-36 overflow-hidden scroll-mt-17.25"
      >
         <div className="absolute top-0 left-0 w-full flex justify-center">
            <div className="w-1/2 h-px bg-linear-to-r from-transparent via-stone-300 to-transparent"></div>
         </div>

         <div className="absolute left-4 md:left-12 top-1/2 [writing-mode:vertical-rl] text-stone-300 tracking-[0.5em] text-sm font-serif hidden md:block select-none">
            厳選された作品
         </div>

         {/* Section Header */}
         <motion.div
            className="flex items-end justify-between mb-20 z-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
         >
            <div className="flex flex-col gap-4">
               <div className="flex items-baseline gap-6">
                  <h2 className="text-4xl md:text-5xl text-stone-800 font-serif tracking-wide">
                     Selected Projects.
                  </h2>
                  <div className="text-sm text-stone-400 font-serif tracking-widest">
                     作品
                  </div>
               </div>
               <div className="flex">
                  <div className="w-8 h-px bg-[#8B3A3A]/70"></div>
                  <div className="w-16 h-px bg-stone-300"></div>
               </div>
            </div>
         </motion.div>

         {/* Projects List */}
         <div className="flex flex-col gap-32 md:gap-52">
            {projectsData.map((project, index) => (
               <motion.div
                  key={index}
                  className={`flex flex-col gap-20 md:gap-24 items-center ${
                     index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
               >
                  {/* Visual / Image Column */}
                  <div className="w-full md:w-1/2 relative group cursor-pointer">
                     <div className="relative aspect-4/3 w-full border-[0.5px] border-stone-300 overflow-hidden bg-stone-100 flex items-center justify-center rounded-sm">
                        {project.image ? (
                           <Image
                              src={project.image}
                              alt={project.name}
                              fill
                              className="object-cover transition-all duration-1000 group-hover:scale-105 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                           />
                        ) : (
                           <span className="font-serif text-stone-400 text-sm tracking-widest z-10 group-hover:text-stone-600 transition-colors duration-500">
                              Image Placeholder
                           </span>
                        )}
                     </div>

                     {index % 2 === 0 ? (
                        <>
                           <div className="absolute border-l border-b border-stone-400 -bottom-4 -left-4 w-8 h-8 rounded-bl-sm"></div>
                           <div className="absolute border-r border-t border-stone-400 -top-4 -right-4 w-8 h-8 rounded-tr-sm"></div>
                        </>
                     ) : (
                        <>
                           <div className="absolute border-r border-b border-stone-400 -bottom-4 -right-4 w-8 h-8 rounded-br-sm"></div>
                           <div className="absolute border-l border-t border-stone-400 -top-4 -left-4 w-8 h-8 rounded-tl-sm"></div>
                        </>
                     )}
                  </div>

                  {/* Text Content Column */}
                  <div className="w-full md:w-1/2 flex flex-col items-start text-start">
                     <span className="font-serif text-sm font-medium tracking-widest text-[#8B3A3A]/80 mb-6">
                        {project.id} — {project.year}
                     </span>

                     <div className="mb-8 flex flex-col gap-2">
                        <h3 className="text-3xl md:text-5xl font-serif text-stone-800 leading-none">
                           {project.name}
                        </h3>
                        <div className="text-stone-400 font-serif tracking-[0.3em] text-xs uppercase">
                           {project.system}
                        </div>
                     </div>
                     <p className="text-stone-500 font-light text-base leading-loose max-w-md mb-10">
                        {project.description}
                     </p>

                     <div className="flex flex-wrap gap-4 mb-12">
                        {project.tech.map((t, i) => (
                           <span
                              key={i}
                              className="text-xs font-serif tracking-[0.2em] text-stone-400 uppercase border border-stone-200 px-4 py-2 rounded-sm hover:bg-stone-200/20 transition-colors duration-300 cursor-default"
                           >
                              {t}
                           </span>
                        ))}
                     </div>

                     <div className="flex items-center gap-8">
                        {/* View Project Button */}
                        <Link
                           href={project.websiteUrl}
                           className="group flex items-center gap-3 w-fit pb-2 border-b border-stone-300 hover:border-[#8B3A3A] transition-colors duration-500 text-stone-700 tracking-widest text-sm uppercase"
                        >
                           View Project
                           <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#8B3A3A] transition-all duration-300" />
                        </Link>

                        {/* Conditional Source Code Link */}
                        {project.openSource && (
                           <Link
                              href={project.githubUrl || '#'}
                              className="group flex items-center gap-3 w-fit pb-2 border-b border-stone-300 hover:border-stone-800 transition-colors duration-500 text-stone-400 hover:text-stone-800 tracking-widest text-sm uppercase"
                           >
                              <FiGithub className="w-4 h-4 group-hover:text-stone-800 transition-colors duration-300" />
                              Source
                           </Link>
                        )}
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>

         <div className="w-full border-stone-200 border-b h-px absolute bottom-0 left-0"></div>
      </section>
   );
}
