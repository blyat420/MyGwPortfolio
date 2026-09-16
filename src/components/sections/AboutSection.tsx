import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { WizardArtwork, SpidermanCatArtwork } from "../ui/FigmaArtworks";

// Sesuaikan path ini dengan lokasi kamu menyimpan foto aslimu
import basePhoto from "../../assets/images/base_photo.jpg";
// Siapkan foto base untuk kucing
import catBasePhoto from "../../assets/images/cat_base_photo.jpg";

// Sub-komponen Spotlight Hover untuk Wizard
function SpotlightWizard() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-crosshair shadow-2xl"
    >
      <div className="w-full h-full">
        <WizardArtwork />
      </div>

      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          WebkitMaskImage: `radial-gradient(circle 85px at ${mousePos.x}px ${mousePos.y}px, black 70%, transparent 100%)`,
          maskImage: `radial-gradient(circle 85px at ${mousePos.x}px ${mousePos.y}px, black 70%, transparent 100%)`,
        }}
      >
        <img
          src={basePhoto}
          alt="Real Photo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>
    </div>
  );
}

// Sub-komponen Spotlight Hover untuk Spider-Cat
function SpotlightSpidermanCat() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-crosshair shadow-2xl"
    >
      <div className="w-full h-full">
        <SpidermanCatArtwork />
      </div>

      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{
          WebkitMaskImage: `radial-gradient(circle 85px at ${mousePos.x}px ${mousePos.y}px, black 70%, transparent 100%)`,
          maskImage: `radial-gradient(circle 85px at ${mousePos.x}px ${mousePos.y}px, black 70%, transparent 100%)`,
        }}
      >
        <img
          src={catBasePhoto}
          alt="Real Cat Photo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section
      id="about-section"
      className="py-20 sm:py-28 relative overflow-hidden bg-[#090909]"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
            About{" "}
            <span className="font-akira font-extrabold text-white">ME</span>
          </h2>
        </motion.div>

        {/* 3-Column Layout from Figma */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 max-w-sm mx-auto w-full"
          >
            <SpotlightWizard />
          </motion.div>

          {/* Center Column: Narrative Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4 text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 px-2 sm:px-4 text-left"
          >
            <p>
              Mine own nameth is{" "}
              <strong className="text-white font-semibold">
                Rizal jamalul lail
              </strong>
              , i maketh designs, videos, ui ux , games, and websites.
            </p>
            <p className="text-neutral-400">
              I enjoy turning ideas and user needs into simple, engaging, and
              functional digital experiences. I&apos;m constantly learning,
              exploring new design approaches, and improving my skills through
              projects, competitions, and creative work.
            </p>
            <p className="text-neutral-400">
              As you can see from the previous reference (Elden Ring throne), my
              hobby is{" "}
              <strong className="text-neutral-200 font-medium">gaming</strong>.
              Also I like to read Manhwa.
            </p>
          </motion.div>

          {/* Right Column: Spider-Man Cat Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4 max-w-sm mx-auto w-full"
          >
            <SpotlightSpidermanCat />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
