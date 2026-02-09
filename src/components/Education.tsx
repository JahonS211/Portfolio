'use client';

import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Calendar, Clock, CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.2,
      },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Education() {
   const { t } = useLanguage();

   const handleNajotTalimClick = (e: React.MouseEvent<HTMLDivElement>) => {
      // Confetti effect
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
         particleCount: 100,
         spread: 70,
         origin: { x, y },
         colors: ['#FFD700', '#FFA500', '#FF4500'], // Goldish colors
         zIndex: 9999,
      });
   };

   return (
      <section id="education" className="py-20 w-full transition-colors duration-300">
         <motion.div
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
         >
            <motion.div
               variants={itemVariants}
               className="text-center mb-16"
            >
               <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-gray-900">
                  {t.education.title}
               </h2>
               <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  {t.education.subtitle}
               </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
               {/* Education Card */}
               <motion.div
                  variants={itemVariants}
                  onClick={handleNajotTalimClick}
                  className="group relative cursor-pointer overflow-hidden rounded-[40px] glass-ios p-8 transition-all hover:scale-[1.01]"
               >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  <span className="inline-block px-4 py-1.5 rounded-full bg-green-500 text-white text-xs font-bold mb-6 shadow-lg shadow-green-500/20">
                     {t.education.role}
                  </span>

                  <h3 className="text-3xl font-bold mb-2 dark:text-white text-gray-900 group-hover:text-green-500 transition-colors">
                     PDP School
                  </h3>
                  <p className="text-green-500 font-medium mb-6">
                     {t.education.course}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                     {t.education.description}
                  </p>

                  <div className="flex gap-4 mb-8">
                     <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-xl">
                        <Calendar size={18} className="text-green-500" />
                        <span className="text-sm font-medium dark:text-gray-300 text-gray-700">2024 - 2026</span>
                     </div>
                     <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-4 py-2 rounded-xl">
                        <Clock size={18} className="text-green-500" />
                        <span className="text-sm font-medium dark:text-gray-300 text-gray-700">24 {t.education.months}</span>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     {t.education.achievements.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                           <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                           <span className="text-sm dark:text-gray-400 text-gray-600">{item}</span>
                        </div>
                     ))}
                  </div>
               </motion.div>

               {/* Stats / Tech Stack Side */}
               <motion.div
                  variants={itemVariants}
                  className="space-y-8"
               >
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                        <code className="text-xl font-bold">&lt;/&gt;</code>
                     </div>
                     <h3 className="text-2xl font-bold dark:text-white text-gray-900">
                        {t.education.technologiesTitle}
                     </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                     {/* This could be dynamic, but hardcoding for layout match for now */}
                     {['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Redux', 'SCSS', 'HTML5', 'CSS3', 'Git'].map((tech) => (
                        <div key={tech} className="flex items-center gap-3 p-4 rounded-[20px] glass-ios glass-ios-hover transition-colors">
                           {/* Icons would ideally be proper SVG components */}
                           <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                              <span className="text-xs font-bold text-gray-500">
                                 {tech.slice(0, 2)}
                              </span>
                           </div>
                           <span className="text-sm font-medium dark:text-gray-200 text-gray-900">{tech}</span>
                        </div>
                     ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                     <div className="p-6 rounded-[24px] glass-ios text-center">
                        <div className="text-3xl font-bold text-green-500 mb-1">15+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                     </div>
                     <div className="p-6 rounded-[24px] glass-ios text-center">
                        <div className="text-3xl font-bold text-green-500 mb-1">2</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Year duration</div>
                     </div>
                     <div className="p-6 rounded-[24px] glass-ios text-center">
                        <div className="text-3xl font-bold text-green-500 mb-1">7+</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Technology</div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </motion.div>
      </section>
   );
}
