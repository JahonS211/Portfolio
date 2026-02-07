'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const skills = [
   { name: 'HTML', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
   { name: 'CSS', icon: 'https://cdn.simpleicons.org/css/3' },
   { name: 'JS', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
   { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
   { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
   { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
   { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
   { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
];

export default function OrbitingSkills() {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) return null; // Prevent server-side rendering of random elements

   return (
      <div className="relative flex items-center justify-center w-full h-[320px] sm:h-[400px] md:h-[500px] overflow-hidden">
         <div className="relative w-[500px] h-[500px] flex items-center justify-center scale-[0.6] sm:scale-[0.8] md:scale-100 transition-transform origin-center">
            {/* Center Content */}
            <div className="absolute z-10 flex flex-col items-center justify-center bg-slate-100 dark:bg-white/5 backdrop-blur-md rounded-full w-40 h-40 border border-slate-200 dark:border-white/10 shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)]">
               <span className="text-7xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500">
                  {'</>'}
               </span>
            </div>

            {/* Orbit Rings */}
            <div className="absolute border border-white/10 rounded-full w-[320px] h-[320px] opacity-30" />
            <div className="absolute border p-1 border-white/5 border-dashed rounded-full w-[500px] h-[500px] opacity-20 animate-spin-slow" />

            {/* Orbiting Icons */}
            <motion.div
               className="absolute w-full h-full"
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
               {skills.map((skill, index) => {
                  const angle = (index * 360) / skills.length;
                  const radius = 190; // Distance from center
                  return (
                     <div
                        key={skill.name}
                        className="absolute left-1/2 top-1/2 w-16 h-16 -ml-8 -mt-8"
                        style={{
                           transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                        }}
                     >
                        <motion.div
                           className="w-16 h-16 bg-[#0A0A0A] border border-white/10 rounded-xl flex items-center justify-center p-3.5 shadow-xl shadow-purple-500/10"
                           animate={{ rotate: -360 }}
                           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                           <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                        </motion.div>
                     </div>
                  );
               })}
            </motion.div>

            {/* Floating particles background effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
               {[...Array(20)].map((_, i) => (
                  <motion.div
                     key={i}
                     className="absolute bg-purple-500/30 rounded-full w-1 h-1"
                     initial={{
                        x: Math.random() * 500,
                        y: Math.random() * 500,
                        opacity: 0,
                     }}
                     animate={{
                        y: [null, Math.random() * -100],
                        opacity: [0, 1, 0],
                     }}
                     transition={{
                        duration: Math.random() * 5 + 2,
                        repeat: Infinity,
                        ease: "linear",
                     }}
                  />
               ))}
            </div>
         </div>
      </div >
   );
}
