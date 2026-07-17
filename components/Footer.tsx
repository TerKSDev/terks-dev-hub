"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-auto w-full flex flex-col-reverse md:flex-row justify-between items-center py-4 px-8 md:px-24 lg:px-36 border-t border-stone-200 gap-8 md:gap-0 z-10 max-h-fit">
      <div className="text-xs text-stone-400 font-serif tracking-[0.2em] uppercase">
        © {new Date().getFullYear()} TerKS.Dev
      </div>

      <div className="font-serif font-light flex h-9 w-9 items-center justify-center border-[1.5px] border-emphasize text-emphasize rounded-sm hover:bg-emphasize hover:text-main transition-colors duration-500 cursor-default">
        創
      </div>

      <button
        onClick={scrollToTop}
        className="group flex items-center gap-2 text-xs text-stone-400 font-serif tracking-[0.2em] uppercase hover:text-emphasize transition-colors duration-300"
      >
        Back to Top
        <span className="block transform group-hover:-translate-y-1 group-hover:text-emphasize transition-all duration-300">
          ↑
        </span>
      </button>
    </footer>
  );
}
