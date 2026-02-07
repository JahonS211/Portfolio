'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const languages = [
   { code: 'en', label: 'EN', name: 'English' },
   { code: 'uz', label: 'UZ', name: 'O\'zbek' },
   { code: 'ru', label: 'RU', name: 'Русский' },
   { code: 'uz_cyrl', label: 'ЎЗ', name: 'Ўзбекча' },
] as const;

export default function LanguageSwitcher() {
   const { language, setLanguage } = useLanguage();
   const [isOpen, setIsOpen] = useState(false);

   const currentLang = languages.find(l => l.code === language) || languages[0];

   return (
      <div className="relative">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm"
         >
            <Globe size={16} />
            <span>{currentLang.label}</span>
            <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
         </button>

         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-4 w-40 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl z-[100] py-2 overflow-hidden"
               >
                  {languages.map((lang) => (
                     <button
                        key={lang.code}
                        onClick={() => {
                           setLanguage(lang.code as any);
                           setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors flex items-center gap-2 ${language === lang.code
                              ? 'text-white bg-white/10'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                           }`}
                     >
                        <span className="w-4">{lang.code === language ? '✓' : ''}</span>
                        {lang.name}
                     </button>
                  ))}
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
