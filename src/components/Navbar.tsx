'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const { t } = useLanguage();

   // Links configuration
   const links = [
      { name: t.nav.about, href: '#about' },
      { name: t.nav.education, href: '#education' },
      { name: t.nav.skills, href: '#skills' },
      { name: t.nav.projects, href: '#projects' },
      { name: t.nav.contact, href: '#contact' },
   ];

   return (
      <>
         {/* Desktop Dynamic Island - Always Expanded */}
         <motion.div
            className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
         >
            <motion.nav
               className="glass-ios relative px-6 py-3 rounded-[32px] whitespace-nowrap"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
            >
               <div className="flex items-center justify-between gap-6">
                  {/* Logo */}
                  <div className="text-xl font-bold text-white shrink-0">
                     JS<span className="text-purple-500">.</span>
                  </div>

                  {/* Links Container */}
                  <div className="flex items-center gap-6">
                     {links.map((link) => (
                        <Link
                           key={link.href}
                           href={link.href}
                           className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                        >
                           {link.name}
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                        </Link>
                     ))}
                     <div className="w-px h-4 bg-white/20" />
                     <LanguageSwitcher />
                  </div>
               </div>
            </motion.nav>
         </motion.div>

         {/* Mobile Navbar - Simple Floating Pill */}
         <div className="md:hidden fixed top-4 left-4 right-4 z-50 flex justify-between items-center glass-ios px-4 py-3 rounded-2xl">
            <Link href="/" className="text-xl font-bold text-white">
               JS<span className="text-purple-500">.</span>
            </Link>

            <div className="flex items-center gap-3">
               <LanguageSwitcher />
               <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 rounded-full bg-white/10 text-white"
               >
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
               </button>
            </div>
         </div>

         {/* Mobile Menu Dropdown */}
         <AnimatePresence>
            {isMobileMenuOpen && (
               <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="fixed top-20 left-4 right-4 z-40 glass-ios rounded-3xl p-6 md:hidden flex flex-col gap-4"
               >
                  {links.map((link) => (
                     <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg font-medium text-white/80 hover:text-white py-2 border-b border-white/5 last:border-0"
                     >
                        {link.name}
                     </Link>
                  ))}
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
