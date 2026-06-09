'use client'; // 因為我們有用到 window.scrollTo，所以需要加上這行

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconBase } from 'react-icons';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const socialLinks = [
   { name: 'GitHub', url: 'https://github.com/TerKSDev', icon: FiGithub },
   {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: FiLinkedin,
   },
];

export default function Footer() {
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <footer
         id="contact"
         className="relative w-full px-8 md:px-24 lg:px-36 md:py-20 md:pt-32 bg-main min-h-[calc(100vh-68.8px)] overflow-hidden flex flex-col"
      >
         <div className="absolute top-0 left-0 w-full flex justify-center">
            <div className="w-1/2 h-px bg-linear-to-r from-transparent via-stone-300 to-transparent"></div>
         </div>

         <div className="absolute right-4 md:right-12 top-1/3 [writing-mode:vertical-rl] text-stone-300 tracking-[0.5em] text-sm font-serif hidden md:block select-none">
            お問い合わせ
         </div>

         {/* 主要內容區塊 */}
         <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-0 z-10 w-full mt-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
         >
            {/* 左側：大標題與信箱聯絡 */}
            <div className="flex flex-col gap-8">
               <div className="flex flex-col gap-4">
                  <h2 className="text-4xl md:text-6xl font-serif text-stone-800 tracking-wide leading-none">
                     Let's Connect.
                  </h2>
                  <div className="flex items-center gap-4">
                     <div className="w-8 h-px bg-[#8B3A3A]/70"></div>
                     <span className="text-sm text-stone-400 font-serif tracking-widest">
                        一緒になにか創りませんか
                     </span>
                  </div>
               </div>

               <Link
                  href="mailto:huoyan0928@gmail.com"
                  className="group flex items-center gap-4 w-fit mt-4 pb-2 border-b border-stone-300 hover:border-[#8B3A3A] transition-colors duration-500 text-stone-700 tracking-widest text-sm md:text-base uppercase"
               >
                  <FiMail className="w-4 h-4 text-stone-400 group-hover:text-[#8B3A3A] transition-colors duration-300" />
                  huoyan0928@gmail.com
                  <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#8B3A3A] transition-all duration-300" />
               </Link>
            </div>

            <div className="flex flex-col items-start md:items-end gap-8 mb-12">
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

         <div className="sticky sm:absolute bottom-0 left-0 w-full flex flex-col-reverse md:flex-row justify-between items-center py-8 px-8 md:px-24 lg:px-36 border-t border-stone-200 gap-8 md:gap-0 z-10 max-h-fit">
            <div className="text-xs text-stone-400 font-serif tracking-[0.2em] uppercase">
               © {new Date().getFullYear()} TerKS.Dev
            </div>

            <div className="font-serif font-light flex h-9 w-9 items-center justify-center border-[1.5px] border-[#8B3A3A] text-[#8B3A3A] rounded-sm hover:bg-[#8B3A3A] hover:text-main transition-colors duration-500 cursor-default">
               創
            </div>

            <button
               onClick={scrollToTop}
               className="group flex items-center gap-2 text-xs text-stone-400 font-serif tracking-[0.2em] uppercase hover:text-[#8B3A3A] transition-colors duration-300"
            >
               Back to Top
               <span className="block transform group-hover:-translate-y-1 group-hover:text-[#8B3A3A] transition-all duration-300">
                  ↑
               </span>
            </button>
         </div>
      </footer>
   );
}
