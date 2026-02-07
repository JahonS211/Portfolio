'use client';

import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function MouseFollowFocus() {
   const cursorX = useMotionValue(-100);
   const cursorY = useMotionValue(-100);

   const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
   const cursorXSpring = useSpring(cursorX, springConfig);
   const cursorYSpring = useSpring(cursorY, springConfig);

   useEffect(() => {
      const moveCursor = (e: MouseEvent) => {
         cursorX.set(e.clientX);
         cursorY.set(e.clientY);
      };

      window.addEventListener('mousemove', moveCursor);

      return () => {
         window.removeEventListener('mousemove', moveCursor);
      };
   }, [cursorX, cursorY]);

   return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
         <motion.div
            style={{
               translateX: cursorXSpring,
               translateY: cursorYSpring,
            }}
            className="absolute top-0 left-0" // Reset position to top-left so translate works from 0,0
         >
            {/* The glow element centered on the cursor value */}
            <div className="w-[250px] h-[250px] bg-linear-to-r from-purple-500/40 to-blue-500/40 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
         </motion.div>
      </div>
   );
}
