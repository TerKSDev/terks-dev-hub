'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
   const navigationItems = [
      { name: 'About', href: '#about' },
      { name: 'Expertise', href: '#expertise' },
      { name: 'Project', href: '#project' },
      { name: 'Contact', href: '#contact' },
   ];

   const scrollTo = () => {
      window.scrollTo({ top: 81.6, behavior: 'smooth' });
   };

   return (
      <motion.header
         className="w-full border-b border-stone-200 py-4 flex justify-between items-center px-8 md:px-24 lg:px-36 sticky top-0 bg-main/80 backdrop-blur-md z-50 transition-all duration-300 scroll-mt-16"
         initial={{ opacity: 0, y: -16 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, ease: 'easeOut' }}
      >
         <div className="flex items-center gap-4 group cursor-default w-fit">
            <div className="font-serif font-light flex h-9 w-9 items-center justify-center border-[1.5px] border-[#8B3A3A] text-[#8B3A3A] rounded-sm group-hover:bg-[#8B3A3A] group-hover:text-main transition-colors duration-500">
               創
            </div>

            <div className="text-xs text-stone-600 font-serif tracking-[0.2em] uppercase mt-1">
               TerKS.Dev
            </div>
         </div>

         <nav className="font-serif text-xs uppercase tracking-[0.2em] text-stone-500 max-md:hidden">
            <ul className="flex items-center gap-8 md:gap-12">
               {navigationItems.map((item) => (
                  <li
                     key={item.name}
                     className="relative group cursor-pointer py-2"
                  >
                     <Link
                        href={item.href}
                        className={`transition-colors duration-500 group-hover:text-stone-900 ${
                           item.name === 'Contact'
                              ? 'text-stone-800 font-medium'
                              : ''
                        }`}
                     >
                        {item.name}
                     </Link>

                     <div
                        className={`absolute bottom-0 left-0 w-full h-px bg-stone-800 origin-right scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:origin-left group-hover:scale-x-100 ${
                           item.name === 'Contact' ? 'bg-[#8B3A3A]' : ''
                        }`}
                     ></div>
                  </li>
               ))}
            </ul>
         </nav>
      </motion.header>
   );
}
