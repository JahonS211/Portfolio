'use client';

import { useEffect } from 'react';

export default function GlobalClickEffect() {
   useEffect(() => {
      const handleClick = (e: MouseEvent) => {
         if (window.innerWidth < 768) return;

         const spinner = document.createElement('div');
         spinner.style.position = 'fixed';
         spinner.style.left = `${e.clientX}px`;
         spinner.style.top = `${e.clientY}px`;
         spinner.style.width = '32px';
         spinner.style.height = '32px';
         spinner.style.pointerEvents = 'none';
         spinner.style.transform = 'translate(-50%, -50%)';
         spinner.style.zIndex = '9999';

         const lines = 12;
         const radius = 12;

         for (let i = 0; i < lines; i++) {
            const line = document.createElement('span');
            const angle = (360 / lines) * i;

            line.style.position = 'absolute';
            line.style.left = '50%';
            line.style.top = '50%';
            line.style.width = '2px';
            line.style.height = '6px';
            line.style.background = 'white';
            line.style.borderRadius = '2px';
            line.style.opacity = `${(i + 1) / lines}`;
            line.style.transform = `
          rotate(${angle}deg)
          translate(0, -${radius}px)
        `;
            line.style.transformOrigin = 'center bottom';

            spinner.appendChild(line);
         }

         spinner.animate(
            [
               { transform: 'translate(-50%, -50%) scale(0.6)', opacity: 1 },
               { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
               { transform: 'translate(-50%, -50%) scale(1)', opacity: 0 }
            ],
            {
               duration: 550,
               easing: 'ease-out'
            }
         );

         document.body.appendChild(spinner);

         setTimeout(() => {
            spinner.remove();
         }, 550);
      };

      window.addEventListener('click', handleClick);
      return () => window.removeEventListener('click', handleClick);
   }, []);

   return null;
}
