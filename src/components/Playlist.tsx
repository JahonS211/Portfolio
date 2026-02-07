'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Playlist() {
   const { t } = useLanguage();

   return (
      <section id="playlist" className="py-20 w-full">
         <div className="max-w-7xl mx-auto px-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="relative overflow-hidden rounded-3xl bg-[#121212] p-8 md:p-12 text-center border border-white/10 shadow-2xl max-w-2xl mx-auto"
            >
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFCC00]/20 rounded-full blur-[100px] pointer-events-none" />

               <div className="relative z-10 flex flex-col items-center gap-6">
                  {/* Equalizer Animation (simplified CSS) */}
                  <div className="flex items-end gap-1 h-8">
                     {[...Array(8)].map((_, i) => (
                        <motion.div
                           key={i}
                           animate={{
                              height: [10, 32, 10],
                           }}
                           transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              repeatType: 'reverse',
                              delay: i * 0.1,
                           }}
                           className="w-1.5 bg-[#FFCC00] rounded-full"
                        />
                     ))}
                  </div>

                  <div className="space-y-2">
                     <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[#FFCC00] text-sm font-medium tracking-wider uppercase border border-white/10">
                        {t.playlist.nowPlaying}
                     </span>
                     <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        {t.playlist.title}
                     </h2>
                     <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
                        {t.playlist.description}
                     </p>
                  </div>

                  <a
                     href="https://music.yandex.ru/playlists/lk.eb445d80-1e25-4b63-9db4-56f606602825?utm_source=desktop&utm_medium=copy_link"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-3 bg-[#FFCC00] hover:bg-[#E6B800] text-black font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)]"
                  >
                     <Play fill="currentColor" size={20} />
                     {t.playlist.listen}
                  </a>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
