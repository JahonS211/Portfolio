'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
   const { t } = useLanguage();

   return (
      <section id="contact" className="w-full py-20 flex justify-center">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl glass-ios p-8 md:p-12 rounded-[40px] relative overflow-hidden"
         >
            {/* Decorative background glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl"></div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
               {t.contact.title}
            </h2>

            <form className="space-y-6 relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label htmlFor="name" className="text-sm text-gray-400 ml-1">{t.contact.nameLabel}</label>
                     <input
                        type="text"
                        id="name"
                        placeholder={t.contact.namePlaceholder}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                     />
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="email" className="text-sm text-gray-400 ml-1">{t.contact.emailLabel}</label>
                     <input
                        type="email"
                        id="email"
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label htmlFor="phone" className="text-sm text-gray-400 ml-1">{t.contact.phoneLabel}</label>
                     <input
                        type="tel"
                        id="phone"
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                     />
                  </div>
                  <div className="space-y-2">
                     <label htmlFor="subject" className="text-sm text-gray-400 ml-1">{t.contact.subjectLabel}</label>
                     <input
                        type="text"
                        id="subject"
                        placeholder={t.contact.subjectPlaceholder}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                     />
                  </div>
               </div>

               <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400 ml-1">{t.contact.messageLabel}</label>
                  <textarea
                     id="message"
                     rows={5}
                     placeholder={t.contact.messagePlaceholder}
                     className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
               </div>

               <div className="flex justify-center pt-4">
                  <button
                     type="submit"
                     className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-600/20"
                  >
                     {t.contact.sendButton}
                     <Send size={18} />
                  </button>
               </div>
            </form>
         </motion.div>
      </section>
   );
}
