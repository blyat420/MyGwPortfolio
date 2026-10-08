import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate scroll progress percentage (0 to 100)
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button after scrolling down 240px
      if (scrollTop > 240) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circular progress calculation
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 group"
        >
          {/* Micro Tooltip on Hover */}
          <div className="absolute bottom-full right-0 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
            <div className="px-2.5 py-1 rounded-md bg-[#090C15]/90 border border-cyan-500/30 text-[10px] font-mono tracking-widest text-cyan-300 uppercase whitespace-nowrap shadow-lg backdrop-blur-md">
              Back to Top
            </div>
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="relative w-12 h-12 rounded-full bg-[#0A0E1A]/85 hover:bg-[#0F172A] border border-white/10 hover:border-cyan-400/60 shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_0_24px_rgba(6,182,212,0.4)] backdrop-blur-md flex items-center justify-center text-neutral-300 hover:text-cyan-300 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            {/* Circular Scroll Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 48 48"
            >
              {/* Background track circle */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-white/10"
                strokeWidth="2.5"
                fill="transparent"
              />
              {/* Animated Progress circle */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-cyan-400 transition-all duration-150 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            {/* Inner Arrow Icon */}
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200 z-10" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
