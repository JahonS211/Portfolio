import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Playlist from '../components/Playlist';

export default function Home() {
   return (
      <div className="flex flex-col w-full max-w-7xl mx-auto space-y-20 md:space-y-32">
         <Hero />
         <About />
         <Education />
         <Projects />
         <Playlist />
         <Contact />
      </div>
   );
}
