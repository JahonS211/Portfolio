'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, SkipBack, SkipForward } from 'lucide-react';

export default function BackgroundMusic() {
   const [isPlaying, setIsPlaying] = useState(false);
   const [isMuted, setIsMuted] = useState(false);
   const [volume, setVolume] = useState(0.4);
   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
   const audioRef = useRef<HTMLAudioElement | null>(null);

   const [isExpanded, setIsExpanded] = useState(false);
   const timeoutRef = useRef<NodeJS.Timeout | null>(null);
   const containerRef = useRef<HTMLDivElement>(null);

   const playlist = [
      "/music.mp3",
      "/music2.mp3",
      "/music3.mp3"
   ];

   // Auto-collapse timer logic
   const resetInteractTimer = () => {
      // Check if device supports hover (Desktop)
      // On desktop, we want immediate close on mouse leave, so we disable the persistent timer.
      const hasHover = window.matchMedia('(hover: hover)').matches;

      if (hasHover) {
         if (timeoutRef.current) clearTimeout(timeoutRef.current);
         setIsExpanded(false);
         return;
      }

      // On mobile (Touch), keep the 5s timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsExpanded(true);
      timeoutRef.current = setTimeout(() => {
         setIsExpanded(false);
      }, 5000);
   };

   // Close controls when clicking outside
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setIsExpanded(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

   useEffect(() => {
      // Function to unlock audio context on any user interaction
      const unlockAudio = () => {
         if (audioRef.current) {
            console.log("Attempting to play audio...");
            // If already playing, just cleanup
            if (!audioRef.current.paused) {
               setIsPlaying(true);
               cleanUpListeners();
               return;
            }

            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
               playPromise
                  .then(() => {
                     setIsPlaying(true);
                     if (audioRef.current) audioRef.current.volume = volume;
                     cleanUpListeners();
                  })
                  .catch((e) => {
                     // Console log optional, keep listening
                  });
            }
         }
      };

      const cleanUpListeners = () => {
         ['click', 'touchstart', 'keydown', 'mousemove', 'wheel'].forEach(evt =>
            document.removeEventListener(evt, unlockAudio)
         );
         window.removeEventListener('scroll', unlockAudio);
      };

      // 1. Try immediate autoplay
      if (audioRef.current) {
         const playPromise = audioRef.current.play();
         if (playPromise !== undefined) {
            playPromise
               .then(() => {
                  setIsPlaying(true);
                  if (audioRef.current) audioRef.current.volume = volume;
               })
               .catch(() => {
                  // Autoplay failed, but listeners are already set below
               });
         }
      }

      // 2. Attach aggressive listeners immediately
      // Using { passive: true } for better performance on scroll/touch
      ['click', 'touchstart', 'keydown', 'mousemove', 'wheel'].forEach(evt =>
         document.addEventListener(evt, unlockAudio, { passive: true })
      );
      window.addEventListener('scroll', unlockAudio, { passive: true });

      return () => {
         cleanUpListeners();
         if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
   }, []);

   // Handle track changes
   useEffect(() => {
      if (audioRef.current && isPlaying) {
         audioRef.current.play().catch(e => console.log("Play failed:", e));
      }
   }, [currentTrackIndex]);

   const togglePlay = () => {
      resetInteractTimer();
      if (audioRef.current) {
         if (isPlaying) {
            audioRef.current.pause();
         } else {
            audioRef.current.play();
         }
         setIsPlaying(!isPlaying);
      }
   };

   const toggleMute = () => {
      resetInteractTimer();
      if (audioRef.current) {
         audioRef.current.muted = !isMuted;
         setIsMuted(!isMuted);
      }
   };

   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      resetInteractTimer();
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      if (audioRef.current) {
         audioRef.current.volume = newVolume;
         if (newVolume === 0) {
            setIsMuted(true);
            audioRef.current.muted = true;
         } else if (isMuted) {
            setIsMuted(false);
            audioRef.current.muted = false;
         }
      }
   };

   const nextTrack = () => {
      resetInteractTimer();
      setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
      setIsPlaying(true);
   };

   const prevTrack = () => {
      resetInteractTimer();
      setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
      setIsPlaying(true);
   };

   const handleEnded = () => {
      nextTrack();
   };

   // Aggressive autoplay trigger
   const handleCanPlay = () => {
      if (audioRef.current && !isPlaying) {
         audioRef.current.play()
            .then(() => {
               setIsPlaying(true);
               if (audioRef.current) audioRef.current.volume = volume;
            })
            .catch(e => console.log("Auto-start blocked by browser:", e));
      }
   };

   return (
      <div
         ref={containerRef}
         className="fixed bottom-6 left-6 z-50 flex items-center gap-3 group"
         onClick={resetInteractTimer}
         onMouseEnter={resetInteractTimer}
      >
         <audio
            ref={audioRef}
            src={playlist[currentTrackIndex]}
            onEnded={handleEnded}
            onCanPlay={handleCanPlay}
            autoPlay
            playsInline
         />

         <div className="flex items-center p-3 rounded-full glass dark:glass-dark bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-gray-800 dark:text-white transition-all hover:scale-105">

            {/* Play/Pause Button (Always Visible) */}
            <button
               onClick={(e) => { e.stopPropagation(); togglePlay(); }}
               className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
               aria-label={isPlaying ? "Pause" : "Play"}
            >
               {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
            </button>

            {/* Expandable Controls */}
            <div className={`flex items-center gap-2 transition-all duration-500 ease-in-out overflow-hidden
          ${isExpanded ? 'max-w-[200px] opacity-100 ml-2 overflow-visible' : 'max-w-0 opacity-0 ml-0'}
          group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-2 group-hover:overflow-visible
        `}>

               {/* Prev Button */}
               <button
                  onClick={(e) => { e.stopPropagation(); prevTrack(); }}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Previous track"
               >
                  <SkipBack size={18} />
               </button>

               {/* Next Button */}
               <button
                  onClick={(e) => { e.stopPropagation(); nextTrack(); }}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  aria-label="Next track"
               >
                  <SkipForward size={18} />
               </button>

               <div className="h-4 w-px bg-gray-400/50 dark:bg-white/20 mx-1"></div>

               {/* Volume Control Group */}
               <div className="relative group/volume flex items-center justify-center">
                  {/* Vertical Slider popup - Desktop Only */}
                  {/* Added pb-4 padding-bottom to bridge the gap between button and slider */}
                  <div className="hidden md:flex absolute bottom-full left-1/2 -translate-x-1/2 pb-4 flex-col items-center justify-end opacity-0 invisible group-hover/volume:opacity-100 group-hover/volume:visible transition-all duration-300 z-20">
                     <div className="w-8 h-24 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-xl">
                        <input
                           type="range"
                           min="0"
                           max="1"
                           step="0.01"
                           value={isMuted ? 0 : volume}
                           onChange={handleVolumeChange}
                           className="w-20 h-1 bg-gray-400/50 rounded-lg appearance-none cursor-pointer -rotate-90 accent-purple-500"
                           title={`Volume: ${Math.round(volume * 100)}%`}
                        />
                     </div>
                  </div>

                  {/* Mute Button */}
                  <button
                     onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                     className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative z-10"
                     aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                     {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
