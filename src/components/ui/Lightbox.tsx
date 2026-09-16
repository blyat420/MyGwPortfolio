import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from 'lucide-react';
import { ProjectMedia } from '../../types';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  mediaList: ProjectMedia[];
  initialIndex?: number;
}

export function Lightbox({ isOpen, onClose, mediaList, initialIndex = 0 }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, mediaList.length]);

  if (!isOpen || mediaList.length === 0) return null;

  const currentMedia = mediaList[currentIndex] || mediaList[0];

  const handleNext = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  const handlePrev = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.8 : 1));
  };

  return (
    <AnimatePresence>
      <div
        id="lightbox-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6"
      >
        {/* Top Control Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-neutral-300">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-white/10 text-xs font-mono text-cyan-400">
              {currentIndex + 1} / {mediaList.length}
            </span>
            <span className="text-xs uppercase tracking-wider text-neutral-400 hidden sm:inline-block">
              {currentMedia.type}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="lightbox-zoom-toggle-btn"
              onClick={toggleZoom}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-neutral-200"
              title={zoomLevel > 1 ? 'Reset Zoom' : 'Zoom In (1.8x)'}
            >
              {zoomLevel > 1 ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
            </button>
            <a
              id="lightbox-open-original-btn"
              href={currentMedia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-neutral-200"
              title="Open Original Asset"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
            <button
              id="lightbox-close-btn"
              onClick={onClose}
              className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/40 text-red-300 transition"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        {mediaList.length > 1 && (
          <>
            <button
              id="lightbox-prev-btn"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 hover:border-cyan-500/50 text-neutral-200 transition"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              id="lightbox-next-btn"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 hover:border-cyan-500/50 text-neutral-200 transition"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Main Image Stage */}
        <div className="relative max-w-6xl max-h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
          <motion.div
            key={currentMedia.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative flex items-center justify-center overflow-auto max-w-full max-h-[75vh]"
          >
            <img
              src={currentMedia.url}
              alt={currentMedia.caption}
              referrerPolicy="no-referrer"
              className="max-h-[72vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10 transition-transform duration-300 cursor-zoom-in select-none"
              style={{
                transform: `scale(${zoomLevel})`,
                cursor: zoomLevel > 1 ? 'zoom-out' : 'zoom-in'
              }}
              onClick={toggleZoom}
            />
          </motion.div>

          {/* Caption & Metadata */}
          <div className="mt-4 px-4 py-2 rounded-lg bg-black/60 border border-white/10 text-center max-w-2xl">
            <p className="text-sm text-neutral-200 font-medium">{currentMedia.caption}</p>
            <span className="text-xs text-neutral-400 font-mono mt-0.5 inline-block">
              High-Fidelity Studio Asset &bull; Click image to toggle zoom
            </span>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
