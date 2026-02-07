'use client';

import { motion } from 'framer-motion';
import OrbitingSkills from './OrbitingSkills';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
         delayChildren: 0.2,
      },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 30 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
   const { t } = useLanguage();

   return (
      <section className="min-h-screen w-full flex items-center pt-32 relative overflow-hidden px-4 md:px-24">
         {/* Liquid Background Elements - Dynamic Aurora */}
         <motion.div
            animate={{
               scale: [1, 1.2, 1],
               rotate: [0, 90, 0],
               opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] -z-10 mix-blend-screen"
         />
         <motion.div
            animate={{
               x: [-50, 50, -50],
               y: [-30, 30, -30],
               opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-[100px] -z-10 mix-blend-screen"
         />
         <motion.div
            animate={{
               x: [50, -50, 50],
               y: [30, -30, 30],
               opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-[100px] -z-10 mix-blend-screen"
         />

         <div className="grid lg:grid-cols-2 gap-12 w-full items-center">
            {/* Left Content */}
            <motion.div
               className="flex flex-col items-start z-10"
               variants={containerVariants}
               initial="hidden"
               animate="visible"
            >
               <motion.h1
                  variants={itemVariants}
                  className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight"
               >
                  <span className="text-gray-400 text-xl md:text-3xl font-normal block mb-2">{t.hero.hi}</span>
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-gray-200 to-gray-500">
                     Jahongir <br /> Sadriddinov
                  </span>
               </motion.h1>

               <motion.h2
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500 mb-8 whitespace-pre-line tracking-tight"
               >
                  {t.hero.role}
               </motion.h2>

               <motion.div
                  variants={itemVariants}
                  className="flex space-x-4"
               >
                  <a
                     href="/cv.pdf"
                     download
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-8 py-4 rounded-3xl glass-ios hover:bg-white/10 transition-all font-medium flex items-center gap-2 group border border-white/20"
                  >
                     {t.hero.downloadCv}
                  </a>
               </motion.div>

               {/* Stats Row matching the image */}
               <motion.div
                  variants={itemVariants}
                  className="mt-12 flex items-center gap-12 text-center"
               >
                  <div>
                     <h3 className="text-3xl font-bold text-purple-500">2+</h3>
                     <p className="text-gray-400 text-sm whitespace-pre-line">{t.hero.experience}</p>
                  </div>
                  <div>
                     <h3 className="text-3xl font-bold text-purple-500">15+</h3>
                     <p className="text-gray-400 text-sm whitespace-pre-line">{t.hero.projectsDone}</p>
                  </div>
                  <div>
                     <h3 className="text-3xl font-bold text-purple-500">3+</h3>
                     <p className="text-gray-400 text-sm whitespace-pre-line">{t.hero.clients}</p>
                  </div>
               </motion.div>
            </motion.div>

            {/* Right Content - Orbital Animation */}
            <motion.div
               initial={{ opacity: 0, scale: 0.8, x: 50 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
               className="flex justify-center items-center relative"
            >
               <OrbitingSkills />
            </motion.div>
         </div>
      </section>
   );
}
