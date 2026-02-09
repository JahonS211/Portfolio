'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const projects = [
   {
      title: 'Shop.co',
      description: 'A modern e-commerce application built with React and Tailwind CSS.',
      tags: ['React', 'Tailwind CSS'],
      link: 'http://shop-co-henna-seven.vercel.app/',
      featured: true,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop', // Product/Shop image
   },
   {
      title: 'Weather App',
      description: 'Real-time weather forecast application using standard CSS and React.',
      tags: ['React', 'CSS', 'API'],
      link: 'http://genuine-tapioca-fb359e.netlify.app/',
      featured: true,
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop', // Weather image
   },
   {
      title: 'Namanganliklar',
      description: 'Community website built with HTML, Sass, and JavaScript.',
      tags: ['HTML', 'Sass', 'JavaScript'],
      link: 'http://stellar-piroshki-fabc04.netlify.app/',
      featured: true,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop', // Community/Group image
   },
   {
      title: 'Project Alpha',
      description: 'Responsive web application.',
      tags: ['HTML', 'CSS', 'JS'],
      link: 'https://dazzling-caramel-409225.netlify.app/',
      featured: false,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', // Generic Tech
   },
   {
      title: 'Project Beta',
      description: 'Interactive dashboard interface.',
      tags: ['React'],
      link: 'https://visionary-gelato-fde40f.netlify.app/',
      featured: false,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', // Dashboard
   },
   {
      title: 'Project Gamma',
      description: 'Landing page implementation.',
      tags: ['Tailwind'],
      link: 'https://teal-beijinho-44e264.netlify.app/',
      featured: false,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop', // Web Design
   },
   {
      title: 'Project Delta',
      description: 'Experimental UI design.',
      tags: ['Framer Motion'],
      link: 'https://zesty-youtiao-a93b60.netlify.app/',
      featured: false,
      image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop', // Abstract UI
   },
];

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.1,
      },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
   const { t } = useLanguage();

   return (
      <section id="projects" className="w-full py-20 px-4 md:px-8">
         <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient"
         >
            {t.projects.title}
         </motion.h2>

         <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
         >
            {projects.map((project, index) => (
               <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className={`group block p-6 rounded-[32px] glass-ios glass-ios-hover relative overflow-hidden ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                     }`}
               >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                     <span className="p-2 bg-black/50 rounded-full text-white block backdrop-blur-sm">
                        <ExternalLink size={20} className="text-purple-400" />
                     </span>
                  </div>

                  <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                     />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                     {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 h-12 overflow-hidden">
                     {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                     {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                           {tag}
                        </span>
                     ))}
                  </div>
               </motion.a>
            ))}
         </motion.div>
      </section>
   );
}
