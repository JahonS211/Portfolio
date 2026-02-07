import { Github, Mail } from 'lucide-react';

export default function Footer() {
   return (
      <footer className="w-full border-t border-white/10 glass-ios py-8 mt-20 relative z-10">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Jahongir Sadriddinov. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <a href="https://github.com/Jahons211" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  <Github size={20} />
               </a>
               <a href="mailto:jahongirsadriddinov0@gmail.com" className="hover:text-purple-400 transition-colors">
                  <Mail size={20} />
               </a>
               {/* Add other social links if available */}
            </div>
         </div>
      </footer>
   );
}
