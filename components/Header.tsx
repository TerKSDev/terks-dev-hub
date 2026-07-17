"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Project", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className="w-full sticky top-0 z-50 transition-all duration-300 scroll-mt-16"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full border-b border-stone-200 py-4 px-5 md:px-24 lg:px-36 bg-main/90 backdrop-blur-md relative z-20">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4 group cursor-default w-fit">
            <div className="font-serif font-light flex h-9 w-9 items-center justify-center border-[1.5px] border-emphasize text-emphasize rounded-sm group-hover:bg-emphasize group-hover:text-main transition-colors duration-500">
              創
            </div>

            <div className="text-xs text-stone-600 font-serif tracking-[0.2em] uppercase mt-1">
              TerKS.Dev
            </div>
          </div>

          <nav className="font-serif text-xs uppercase tracking-[0.2em] text-stone-500 items-center hidden lg:flex">
            <ul className="flex items-center gap-8 md:gap-12">
              {navigationItems.map((item) => (
                <li
                  key={item.name}
                  className="relative group cursor-pointer py-2"
                >
                  <Link
                    href={item.href}
                    className={`transition-colors duration-500 group-hover:text-stone-900 ${
                      item.name === "Contact"
                        ? "text-stone-800 font-medium"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>

                  <div
                    className={`absolute bottom-0 left-0 w-full h-px bg-stone-800 origin-right scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:origin-left group-hover:scale-x-100 ${
                      item.name === "Contact" ? "bg-emphasize" : ""
                    }`}
                  ></div>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="lg:hidden flex"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {!isMenuOpen ? (
              <div className="flex flex-col gap-1.5 cursor-pointer group rounded-md outline-none mr-1">
                <div className="bg-stone-400 group-hover:bg-stone-600 min-w-6 min-h-0.5 rounded-full"></div>
                <div className="bg-stone-400 group-hover:bg-stone-600 min-w-6 min-h-0.5 rounded-full"></div>
                <div className="bg-stone-400 group-hover:bg-stone-600 min-w-6 min-h-0.5 rounded-full"></div>
              </div>
            ) : (
              <div className="relative cursor-pointer group mr-4 outline-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 min-w-6 rounded-full min-h-0.5 bg-stone-400 transition-colors duration-500 group-hover:bg-stone-600"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 min-w-6 rounded-full min-h-0.5 bg-stone-400 transition-colors duration-500 group-hover:bg-stone-600"></div>
              </div>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 w-full bg-main border-b border-stone-200 shadow-lg z-10"
          >
            <nav className="font-serif text-xs uppercase tracking-[0.2em]  items-center flex flex-col gap-6 shadow-inner py-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  onClick={() => setIsMenuOpen(false)}
                  href={item.href}
                  className={`transition-colors duration-500 text-center text-stone-500 hover:text-stone-700 flex justify-center group-hover:text-stone-900 w-full`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
