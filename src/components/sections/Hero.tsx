import { motion } from "motion/react";
import { TiltCard } from "../ui/TiltCard";
import { ThroneArtwork } from "../ui/FigmaArtworks";
import scrollSword from "../../assets/images/scroll_sword.png";
interface HeroProps {
  onExploreClick: () => void;
  onOpenProject: (id: string) => void;
  onContactClick: () => void;
}

export function Hero({ onExploreClick, onContactClick }: HeroProps) {
  // Replace this with your actual URL or path (e.g. "/resume.pdf" or a Google Drive link)
  const resumeUrl =
    "https://drive.google.com/drive/folders/1VMohCFg0M7Hh_inbC1OxGoq19hOBjIwu?usp=drive_link";

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden py-12 md:py-20 bg-[#090909]">
      {/* Subtle Atmospheric Diffuse Breathing Lighting */}
      <motion.div
        className="pointer-events-none absolute -top-40 left-10 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full z-0"
        animate={{ opacity: [1, 0.5, 0.15, 0.5, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-500/20 blur-[130px] rounded-full z-0"
        animate={{ opacity: [0.15, 0.5, 1, 0.5, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative from Figma */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Line 1 */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal">
              Greetings, mine own nameth is
            </p>

            {/* Line 2: Giant JAMAL heading in Akira Expanded */}
            <h1 className="font-akira text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white font-extrabold uppercase leading-none">
              JAMAL
            </h1>

            {/* Line 3: Styled Role text without background boxes */}
            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-neutral-200">
              <span>i am an</span>
              <span className="text-[#4A88E8] font-bold text-xs sm:text-sm tracking-wider uppercase">
                DIGITAL ARTIST
              </span>
              <span>yond maketh digital art</span>
            </div>

            {/* Line 4: Figma Prompt Copy */}
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-lg">
              wouldst thee prithee checketh mine own works? if it be true aye
              thee can scroll down!
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#1B273E] hover:bg-[#253755] text-white font-medium text-xs sm:text-sm tracking-wider border border-[#2E4369] transition shadow-lg cursor-pointer"
              >
                Resume
              </a>

              <button
                onClick={onContactClick}
                className="px-7 py-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-white font-medium text-xs sm:text-sm tracking-wider border border-white/10 transition cursor-pointer"
              >
                Contact me!
              </button>
            </div>

            {/* Figma Scroll Indicator with Image and Montserrat Light */}
            {/* Figma Scroll Indicator with Image and Montserrat Light */}
            <div className="pt-6">
              <button
                onClick={onExploreClick}
                className="group flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition cursor-pointer"
                aria-label="Scroll Down"
              >
                <img
                  src={scrollSword}
                  alt="Scroll indicator"
                  className="h-50 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] group-hover:translate-y-1 transition-all duration-300"
                />
                <span
                  className="text-[10px] tracking-widest uppercase opacity-70 font-light"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Scroll
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with 3D Tilt Hover Animation & Neon Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative group"
          >
            {/* Multi-layered Neon Glow Light Behind the Image */}
            <div className="absolute -inset-6 sm:-inset-10 rounded-[40px] bg-gradient-to-tr from-cyan-500/20 via-amber-500/15 to-blue-600/20 blur-3xl opacity-35 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" />

            <div
              className="absolute -inset-2 sm:-inset-3 rounded-[32px] bg-gradient-to-r from-cyan-400/25 via-amber-400/25 to-cyan-500/25 blur-xl opacity-40 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none animate-pulse"
              style={{ animationDuration: "4s" }}
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-400/15 rounded-full blur-[60px] pointer-events-none" />

            <TiltCard
              maxTilt={10}
              perspective={1100}
              scale={1.02}
              glowColor="rgba(6, 182, 212, 0.18)"
              className="rounded-3xl relative z-10"
            >
              <ThroneArtwork />
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
