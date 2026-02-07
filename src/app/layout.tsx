import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalClickEffect from '@/components/GlobalClickEffect';
import BackgroundMusic from '@/components/BackgroundMusic';
import MouseFollowFocus from '@/components/MouseFollowFocus';

import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Jahongir Sadriddinov | Frontend Developer',
   description:
      'Portfolio of Jahongir Sadriddinov, Frontend Developer specializing in React, Next.js and modern UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" className="scroll-smooth dark">
         <body
            className={`${inter.className} bg-white dark:bg-black text-black dark:text-white antialiased transition-colors duration-300`}
         >
            <LanguageProvider>
               <GlobalClickEffect />
               <BackgroundMusic />
               <MouseFollowFocus />

               {/* Background Grid & Liquid Blobs */}
               <div className="fixed inset-0 -z-10 overflow-hidden">
                  {/* Light */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)] bg-size-[14px_24px] dark:hidden"></div>

                  {/* Dark */}
                  <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,#ffffff1f_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1f_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                  {/* Global Ambient Blobs for Liquid Glass Effect */}
                  <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen opacity-30 animate-pulse duration-5000 pointer-events-none"></div>
                  <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen opacity-30 animate-pulse duration-7000 pointer-events-none"></div>
                  <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-pink-600/10 rounded-full blur-[100px] mix-blend-screen opacity-20 animate-pulse duration-6000 pointer-events-none"></div>
               </div>

               <Navbar />

               <main className="pt-24 px-4 md:px-24 min-h-screen">
                  {children}
               </main>

               <Footer />
            </LanguageProvider>
         </body>
      </html>
   );
}
