'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const skills = [
   { name: 'HTML', level: 75, color: 'bg-orange-500' },
   { name: 'CSS', level: 80, color: 'bg-blue-500' },
   { name: 'Bootstrap', level: 70, color: 'bg-purple-600' },
   { name: 'JavaScript', level: 60, color: 'bg-yellow-400' },
   { name: 'React', level: 55, color: 'bg-cyan-400' },
   { name: 'Tailwind CSS', level: 45, color: 'bg-cyan-500' },
];

const languages = [
   'Uzbek (Native)',
   'English (Pre-Intermediate)',
   'Russian (Elementary)'
];

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

export default function About() {
   const { t } = useLanguage();

   return (
      <section id="about" className="w-full py-20 px-4 md:px-8">
         <motion.div
            className="grid md:grid-cols-2 gap-16 items-start max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
         >
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">{t.about.title}</h2>
               <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: t.about.bio1 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: t.about.bio2 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: t.about.bio3 }}></p>
               </div>

               <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-white">{t.about.languagesTitle}</h3>
                  <div className="flex flex-wrap gap-3">
                     {languages.map((lang, index) => (
                        <span
                           key={index}
                           className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                        >
                           {lang}
                        </span>
                     ))}
                  </div>
               </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
               variants={itemVariants}
               className="glass-ios rounded-[32px] p-8"
            >
               <h3 className="text-2xl font-semibold mb-8">{t.about.skillsTitle}</h3>
               <div className="space-y-6">
                  {skills.map((skill, index) => (
                     <div key={skill.name}>
                        <div className="flex justify-between mb-2 text-sm font-medium">
                           <span className="text-gray-200">{skill.name}</span>
                           <span className="text-purple-400">{skill.level}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden">
                           <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 + (0.1 * index), ease: "easeOut" }}
                              className={`h-full rounded-full ${skill.color}`}
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </motion.div>
         </motion.div>
      </section>
   );
}
