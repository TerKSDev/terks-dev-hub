'use client';

import React from 'react';
import { motion } from 'framer-motion';

const expertiseData = [
   {
      title: 'Frontend Development',
      skills: [
         { name: 'Next.js / React', level: 4 },
         { name: 'Tailwind CSS', level: 5 },
         { name: 'TypeScript', level: 4 },
      ],
   },
   {
      title: 'Backend Engineer',
      skills: [
         { name: 'Node.js', level: 3 },
         { name: 'PostgreSQL', level: 4 },
         { name: 'Prisma', level: 4 },
      ],
   },
   {
      title: 'System Architecture',
      skills: [
         { name: 'GitHub / Git', level: 5 },
         { name: 'AWS Cloud / Vercel', level: 4 },
         { name: 'Docker', level: 2 },
      ],
   },
];

const SkillRating = ({ level }: { level: number }) => (
   <div className="flex items-center gap-2">
      {[...Array(5)].map((_, i) => (
         <div
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
               i < level
                  ? 'bg-stone-700'
                  : 'bg-transparent border border-stone-300'
            }`}
         ></div>
      ))}
   </div>
);

const kanjiNumbers = ['一', '二', '三'];

export default function Expertise() {
   return (
      <section
         id="expertise"
         className="relative flex w-full flex-col px-8 md:px-24 lg:px-36 py-16 min-h-[calc(100vh-68.8px)] overflow-hidden scroll-mt-17.25"
      >
         <div className="absolute top-0 left-0 w-full flex justify-center">
            <div className="w-1/2 h-px bg-linear-to-r from-transparent via-stone-300 to-transparent"></div>
         </div>

         <div className="absolute right-4 md:right-12 top-1/3 [writing-mode:vertical-rl] text-stone-300 tracking-[0.5em] text-sm font-serif hidden md:block select-none">
            専門知識と技術
         </div>

         <motion.div
            className="flex items-end justify-between mb-20 z-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
         >
            <div className="flex flex-col gap-4">
               <div className="flex items-baseline gap-6">
                  <h1 className="text-4xl md:text-5xl text-stone-800 font-serif tracking-wide">
                     Expertise.
                  </h1>
                  <div className="text-sm text-stone-400 font-serif tracking-widest">
                     スキル
                  </div>
               </div>

               <div className="flex">
                  <div className="w-8 h-px bg-[#8B3A3A]/70"></div>
                  <div className="w-16 h-px bg-stone-300"></div>
               </div>
            </div>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 z-10">
            {expertiseData.map((exp, index) => (
               <motion.div
                  key={index}
                  className={`flex flex-col items-start px-4 md:px-12 transition-colors duration-700 hover:bg-stone-200/20 group
                     ${index !== 2 ? 'md:border-r border-stone-200' : ''} 
                     ${index !== 2 ? 'border-b md:border-b-0 border-stone-200 pb-12 md:pb-0' : ''}
                  `}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                     duration: 0.6,
                     delay: index * 0.15,
                     ease: 'easeOut',
                  }}
               >
                  <div className="flex items-center gap-3 mb-8">
                     <span className="font-serif text-sm font-medium tracking-widest text-[#8B3A3A]/80">
                        〇{kanjiNumbers[index]}
                     </span>
                     <div className="h-px w-6 bg-stone-300 group-hover:w-12 group-hover:bg-[#8B3A3A]/50 transition-all duration-500"></div>
                  </div>

                  <h3 className="text-2xl md:text-3xl tracking-wide font-serif text-stone-800 mb-12 leading-snug">
                     {exp.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                           {word}
                           {i === 0 && <br />}
                        </React.Fragment>
                     ))}
                  </h3>

                  <div className="flex flex-col gap-6 w-full mt-auto">
                     {exp.skills.map((skill, sIndex) => (
                        <div
                           key={sIndex}
                           className="flex justify-between items-center w-full group/skill"
                        >
                           <p className="text-stone-500 font-light text-xs md:text-sm tracking-widest uppercase group-hover/skill:text-stone-800 transition-colors duration-300">
                              {skill.name}
                           </p>
                           <SkillRating level={skill.level} />
                        </div>
                     ))}
                  </div>
               </motion.div>
            ))}
         </div>

         <div className="w-full border-stone-200 border-b h-px absolute bottom-0 left-0"></div>
      </section>
   );
}
