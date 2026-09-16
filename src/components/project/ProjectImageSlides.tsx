import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Maximize2, Play, Eye } from 'lucide-react';
import { ProjectItem, ProjectMedia } from '../../types';

interface ProjectImageSlidesProps {
  project: ProjectItem;
  onOpenLightbox?: (mediaList: ProjectMedia[], initialIndex: number) => void;
  showInteractiveDemo?: boolean;
  onToggleDemo?: () => void;
}

export function ProjectImageSlides({
  project,
  onOpenLightbox,
  showInteractiveDemo = false,
  onToggleDemo,
}: ProjectImageSlidesProps) {
  // Current active slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [project.id]);

  const images = project.gallery;
  const hasMultipleImages = images.length > 1;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  const currentMedia = images[currentIndex] || images[0];

  return (
    <div id="project-image-slides-container" className="space-y-4 w-full">
      {/* Control Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-sans text-[#aaadad] font-semibold uppercase tracking-wider">
            PROJECT SLIDES
          </span>
          <span className="font-sans text-neutral-400">
            Slide {currentIndex + 1} of {images.length}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Demo toggle button if project has interactive demo */}
          {project.hasInteractiveDemo && onToggleDemo && (
            <button
              id="project-slides-demo-toggle-btn"
              onClick={onToggleDemo}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25 transition text-xs font-sans flex items-center gap-1.5 cursor-pointer"
            >
              {showInteractiveDemo ? (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Show Slides</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Launch Live Demo</span>
                </>
              )}
            </button>
          )}

          {/* Lightbox full view trigger */}
          {onOpenLightbox && (
            <button
              id="project-slides-fullscreen-btn"
              onClick={() => onOpenLightbox(images, currentIndex)}
              className="px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition border border-white/10 cursor-pointer flex items-center gap-1.5"
              title="Open Fullscreen Lightbox"
            >
              <Maximize2 className="w-3.5 h-3.5 text-white" />
              <span className="hidden sm:inline text-xs font-sans">Fullscreen</span>
            </button>
          )}
        </div>
      </div>

      {/* ================= MAIN SLIDES CAROUSEL ================= */}
      <div
        id="project-slides-carousel"
        className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#090C15] shadow-2xl"
      >
        {/* Main Slide Container */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[620px] bg-[#07090F] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMedia.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full flex items-center justify-center relative cursor-zoom-in"
              onClick={() => onOpenLightbox && onOpenLightbox(images, currentIndex)}
            >
              <img
                src={currentMedia.url}
                alt={currentMedia.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-2 sm:p-4 select-none"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows (if multiple images) */}
          {hasMultipleImages && (
            <>
              <button
                id="project-slides-prev-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/75 border border-white/15 text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-sm"
                title="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="project-slides-next-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-black/75 border border-white/15 text-white hover:bg-cyan-500 hover:text-black hover:border-cyan-400 transition-all duration-200 cursor-pointer shadow-lg backdrop-blur-sm"
                title="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Top Indicator Badge */}
          <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-black/85 border border-white/15 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-md">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Caption and Stepper Bar */}
        <div className="p-4 sm:p-5 bg-[#0B0F1C] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-left">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-white truncate font-sans">
              {currentMedia.caption}
            </p>
            <p className="text-xs text-neutral-400 font-sans mt-0.5">
              {project.title} &bull; Slide {currentIndex + 1} of {images.length}
            </p>
          </div>

          {/* Dots / Stepper Pagination */}
          {hasMultipleImages && (
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-xs py-1 scrollbar-none">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer shrink-0 ${
                    currentIndex === i
                      ? 'w-5 bg-cyan-400'
                      : 'w-1.5 bg-white/25 hover:bg-white/50'
                  }`}
                  title={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Thumbnail Bar (if multiple images) */}
      {hasMultipleImages && (
        <div
          id="project-slides-thumbnail-strip"
          className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-white/20"
        >
          {images.map((media, idx) => {
            const isSelected = currentIndex === idx;
            return (
              <button
                key={media.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-24 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer bg-[#0A0D17] ${
                  isSelected
                    ? 'border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)] scale-105'
                    : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                }`}
                title={media.caption}
              >
                <img
                  src={media.url}
                  alt={media.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-black/75 text-[9px] font-mono text-center text-neutral-200 py-0.5 truncate px-1">
                  #{idx + 1}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
