import type { Metadata } from 'next';
import Header from './_components/Header';
import { Playfair_Display, Inter, Noto_Serif_JP } from 'next/font/google';
import './globals.css';

const playfairDisplay = Playfair_Display({
   subsets: ['latin'],
   variable: '--font-playfair-display',
   weight: ['400', '500', '600'],
});

const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
   weight: ['300', '400', '500'],
});

const notoSerifJP = Noto_Serif_JP({
   subsets: ['latin'],
   variable: '--font-noto-serif-jp',
   weight: ['200', '300', '400', '500'],
});

export const metadata: Metadata = {
   title: 'TerKS.Dev.Hub - Japanese-Style Full-Stack Developer Portfolio',
   description:
      'TerKS.Dev.Hubは、創造的なフルスタック開発者であるTerKSのポートフォリオサイトです。シンプルさと機能性を融合させたデザインで、TerKSのスキルセット、プロジェクト、そして連絡先情報を紹介しています。日本語と英語の両方に対応し、ユーザーフレンドリーなインターフェースを提供しています。',
   keywords: [
      'TerKS',
      'TerKS.Dev',
      'TerKS Portfolio',
      'Full-Stack Developer',
      'Web Developer',
      'Japanese-Style Portfolio',
   ],
   openGraph: {
      type: 'website',
      locale: 'us-en',
      url: 'https://terks-dev-hub.vercel.app',
      siteName: 'TerKS.Dev.Hub',
      images: [
         {
            url: 'https://terks-dev-hub.vercel.app/og-image.png',
            width: 1200,
            height: 630,
            alt: 'TerKS.Dev.Hub OG Image',
         },
      ],
   },
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
