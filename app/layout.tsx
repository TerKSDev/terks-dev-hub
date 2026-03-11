import type { Metadata } from 'next';
import Header from './_components/Header';
import { Playfair_Display, Inter, Noto_Serif_JP } from 'next/font/google';
import './globals.css';

// 西式優雅襯線體
const playfairDisplay = Playfair_Display({
   subsets: ['latin'],
   variable: '--font-playfair-display',
   weight: ['400', '500', '600'], // 限制字重，保持輕盈感
});

// 現代無襯線體 (適合極小的輔助文字)
const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
   weight: ['300', '400', '500'],
});

// 日文專用襯線體 (東方禪意的靈魂)
const notoSerifJP = Noto_Serif_JP({
   subsets: ['latin'],
   variable: '--font-noto-serif-jp',
   weight: ['200', '300', '400', '500'], // 使用偏細的字重
});

// 幫你把 Metadata 更新成更有質感的作品集預設
export const metadata: Metadata = {
   title: 'TerKS.Dev | Creative Full-Stack Developer',
   description:
      'Minimalist web development portfolio blending elegant design with robust architecture.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="scroll-smooth">
         <body
            className={`${playfairDisplay.variable} ${inter.variable} ${notoSerifJP.variable} antialiased text-stone-800 selection:bg-[#8B3A3A]/20 selection:text-[#8B3A3A]`}
         >
            <div className="pointer-events-none fixed inset-0 z-9999 h-full w-full opacity-[0.035] mix-blend-multiply">
               <svg
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <filter id="noiseFilter">
                     <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.85" // 稍微調細一點點，讓顆粒感更精緻
                        numOctaves="3"
                        stitchTiles="stitch"
                     />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
               </svg>
            </div>

            <Header />

            <div className="fixed top-0 right-0 h-screen border-l border-stone-200 w-6 md:w-12 lg:w-20 z-50 hidden md:block"></div>
            <div className="fixed top-0 left-0 h-screen border-r border-stone-200 w-6 md:w-12 lg:w-20 z-50 hidden md:block"></div>
            <main className="relative z-10">{children}</main>
         </body>
      </html>
   );
}
