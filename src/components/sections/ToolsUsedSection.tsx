import React from 'react';
import { motion } from 'motion/react';

interface ToolItem {
  name: string;
  category?: string;
  icon: React.ComponentType;
}

// Crisp, accurate vector logos matching official brand identities
const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" className="w-full h-full" fill="none">
    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
  </svg>
);

const PhotoshopIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#001E36" />
    <path d="M13 14h7.2c3.4 0 5.8 1.8 5.8 4.9 0 3.2-2.4 5.1-6 5.1h-3.4V34H13V14zm3.6 3.2v3.8h3.3c1.6 0 2.6-.9 2.6-1.9 0-1.1-.9-1.9-2.5-1.9h-3.4z" fill="#31A8FF"/>
    <path d="M28.4 28.6c1.2.9 2.7 1.4 4.3 1.4 1.7 0 2.6-.6 2.6-1.6 0-.9-.7-1.3-2.7-1.9-3.1-.9-4.8-2.2-4.8-4.6 0-2.8 2.3-4.7 5.9-4.7 2 0 3.7.6 4.9 1.5l-1.2 2.8c-1.1-.7-2.3-1.1-3.6-1.1-1.5 0-2.3.6-2.3 1.5 0 .8.7 1.2 2.6 1.8 3.2.9 4.9 2.2 4.9 4.8 0 3-2.4 4.8-6.3 4.8-2.3 0-4.3-.7-5.7-1.8l1.5-2.7z" fill="#31A8FF"/>
  </svg>
);

const CanvaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <defs>
      <linearGradient id="canvaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00C4CC"/>
        <stop offset="55%" stopColor="#2E6EEF"/>
        <stop offset="100%" stopColor="#7D2AE8"/>
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="8" fill="url(#canvaGrad)"/>
    <path d="M28.6 17.5c-1.8-.7-4.2-.7-6.2.2-4.6 2-6.5 6.7-5.5 11.4 1 4.5 5 7.4 9.6 6.8 3.2-.4 5.8-2.3 6.9-4.9l-3.3-1.5c-.7 1.7-2.1 2.9-4.1 3.2-2.7.4-5.2-1.2-5.8-4-.6-2.9.7-6 3.5-7.2 1.4-.6 3-.6 4.4-.1l-1.5 3.3 5.4-1.2-2.2-5.5-1.2 2.7z" fill="#FFFFFF"/>
  </svg>
);

const InDesignIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#49021F"/>
    <path d="M14 14h3.6v20H14V14z" fill="#FF3366"/>
    <path d="M22 21h3.4v1.8c1.1-1.3 2.7-2.1 4.6-2.1 3.8 0 6.5 2.8 6.5 6.8 0 4.1-2.7 6.8-6.5 6.8-1.9 0-3.5-.8-4.6-2.1V36H22V21zm3.6 6.5c0 2.2 1.4 3.7 3.4 3.7 2 0 3.4-1.5 3.4-3.7 0-2.1-1.4-3.6-3.4-3.6-2 0-3.4 1.5-3.4 3.6z" fill="#FF3366"/>
  </svg>
);

const IllustratorIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#330000"/>
    <path d="M18.8 14h3.5l5.8 20h-3.7l-1.1-3.9H17.8L16.7 34H13l5.8-20zm3.8 12.6L20.5 19l-2.1 7.6h4.2z" fill="#FF9A00"/>
    <path d="M30.2 14h3.6v3.8h-3.6V14zm0 5.6h3.6V34h-3.6V19.6z" fill="#FF9A00"/>
  </svg>
);

const PremiereProIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#00005B"/>
    <path d="M13 14h7.2c3.4 0 5.8 1.8 5.8 4.9 0 3.2-2.4 5.1-6 5.1h-3.4V34H13V14zm3.6 3.2v3.8h3.3c1.6 0 2.6-.9 2.6-1.9 0-1.1-.9-1.9-2.5-1.9h-3.4z" fill="#EA77FF"/>
    <path d="M28.4 20h3.4v2.2c.9-1.6 2.4-2.5 4.2-2.5v3.9c-2.4 0-4 1.4-4 4.2V34h-3.6V20z" fill="#EA77FF"/>
  </svg>
);

const AfterEffectsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#00005B"/>
    <path d="M17.8 14h3.5l5.8 20h-3.7l-1.1-3.9H16.8L15.7 34H12l5.8-20zm3.8 12.6L19.5 19l-2.1 7.6h4.2z" fill="#9999FF"/>
    <path d="M27.5 26.8c.2 2.6 1.9 4.1 4.1 4.1 1.5 0 2.8-.6 3.6-1.7l2.1 2.1c-1.5 1.7-3.4 2.6-5.9 2.6-4.4 0-7.3-3-7.3-7.2 0-4.2 2.8-7.2 7-7.2 4.4 0 6.9 3.2 6.7 7.4h-10.3zm6.8-2.7c-.2-2-1.5-3.4-3.3-3.4-1.8 0-3.2 1.4-3.4 3.4h6.7z" fill="#9999FF"/>
  </svg>
);

const CapcutIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#121316"/>
    <path d="M10 14h18l-8 10H10z" fill="#00E5FF"/>
    <path d="M20 24h18l-8 10H20z" fill="#FF0055"/>
    <path d="M14 17h18l-8 10H14z" fill="#FFFFFF"/>
    <path d="M16 21h18l-8 10H16z" fill="#FFFFFF" fillOpacity="0.8"/>
  </svg>
);

const VSCodeIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#181A20"/>
    <g transform="translate(4, 4) scale(0.83)">
      <path d="M35.6 6.8a2.5 2.5 0 0 0-2.7.5L18.4 18.5 11.8 13.5a1.8 1.8 0 0 0-2.3.1L5.5 16.9a1.8 1.8 0 0 0-.1 2.5l7 6.6-7 6.6a1.8 1.8 0 0 0 .1 2.5l4 3.3a1.8 1.8 0 0 0 2.3.1l6.6-5 14.5 11.2a2.5 2.5 0 0 0 4-1.9V8.7c0-.8-.4-1.5-1-1.9z" fill="#0065A9"/>
      <path d="M36 8.7L22.2 21.2l-3.8-2.7L32.9 7.3c.9-.7 2.2-.7 3.1.2V8.7z" fill="#007ACC"/>
      <path d="M36 39.3L22.2 26.8l-3.8 2.7 14.5 11.2c.9.7 2.2.7 3.1-.2V39.3z" fill="#1F9CF0"/>
      <path d="M36 8.7L22.2 24 36 39.3V8.7z" fill="#007ACC" opacity="0.6"/>
    </g>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#181A22"/>
    <g transform="translate(6, 6) scale(0.75)">
      <path d="M23.6 4c-8.4 0-7.9 3.6-7.9 3.6l.01 3.8h8.1v1.1H12.4s-5.2-.6-5.2 7.7c0 8.3 4.6 8 4.6 8h2.7v-3.9s-.2-4.6 4.5-4.6h7.8s4.4.1 4.4-4.3V8.3S31.2 4 23.6 4zm-4.3 2.4c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" fill="#3776AB"/>
      <path d="M24.4 44c8.4 0 7.9-3.6 7.9-3.6l-.01-3.8h-8.1v-1.1h11.4s5.2.6 5.2-7.7c0-8.3-4.6-8-4.6-8h-2.7v3.9s.2 4.6-4.5 4.6h-7.8s-4.4-.1-4.4 4.3v7.1s-.6 4.3 7 4.3zm4.3-2.4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#FFD43B"/>
    </g>
  </svg>
);

const CSharpIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <path d="M24 3L42 13.5V34.5L24 45L6 34.5V13.5L24 3Z" fill="#9B4993"/>
    <path d="M24 6.8L38.8 15.3V32.7L24 41.2L9.2 32.7V15.3L24 6.8Z" fill="#68217A"/>
    <text x="24" y="29.5" fill="#FFFFFF" fontSize="15" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">C#</text>
  </svg>
);

const BlenderIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#181A20"/>
    <g transform="translate(6, 6) scale(0.75)">
      {/* 3 arms radiating */}
      <path d="M24 6a2 2 0 0 1 2 2v9.5h-4V8a2 2 0 0 1 2-2z" fill="#EA7600"/>
      <path d="M10 13a2 2 0 0 1 2.8-.2l7.2 6.5-2.7 3-7.2-6.5A2 2 0 0 1 10 13z" fill="#EA7600"/>
      <path d="M38 13a2 2 0 0 1-.1 2.8l-7.2 6.5-2.7-3 7.2-6.5a2 2 0 0 1 2.8.2z" fill="#EA7600"/>
      {/* Outer orange loop */}
      <circle cx="24" cy="28" r="14" fill="#EA7600"/>
      {/* White circle */}
      <circle cx="24" cy="28" r="9" fill="#FFFFFF"/>
      {/* Central blue dot */}
      <circle cx="24" cy="28" r="5.5" fill="#265787"/>
    </g>
  </svg>
);

const UnityIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#141519"/>
    <g transform="translate(8, 8) scale(0.67)">
      {/* Top prism */}
      <path d="M24 2l12 7v10l-12-7V2z" fill="#FFFFFF"/>
      <path d="M24 2L12 9v10l12-7V2z" fill="#CCCCCC"/>
      {/* Left prism */}
      <path d="M6 34l-4-7 8.6-5 4 7L6 34z" fill="#CCCCCC"/>
      <path d="M6 34l8.6-5 6 10.4-8.6 5L6 34z" fill="#FFFFFF"/>
      {/* Right prism */}
      <path d="M42 34l-6 10.4-8.6-5 6-10.4 8.6 5z" fill="#FFFFFF"/>
      <path d="M42 34l-8.6-5 4-7 8.6 5-4 7z" fill="#999999"/>
      {/* Center cube */}
      <polygon points="24,19 33,24 33,34 24,39 15,34 15,24" fill="#141519"/>
      <polygon points="24,22 30,25.5 30,32.5 24,36 18,32.5 18,25.5" fill="#FFFFFF"/>
    </g>
  </svg>
);

const GodotIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#181A22"/>
    <g transform="translate(6, 6) scale(0.75)">
      {/* Head shape */}
      <rect x="9" y="14" width="30" height="24" rx="6" fill="#478CBF"/>
      {/* Gear teeth */}
      <rect x="22" y="8" width="4" height="7" rx="1.5" fill="#478CBF"/>
      <rect x="13" y="9" width="4" height="6" rx="1.5" fill="#478CBF"/>
      <rect x="31" y="9" width="4" height="6" rx="1.5" fill="#478CBF"/>
      {/* Eyes */}
      <circle cx="17" cy="24" r="5" fill="#FFFFFF"/>
      <circle cx="31" cy="24" r="5" fill="#FFFFFF"/>
      <circle cx="17" cy="24" r="2.6" fill="#1F232A"/>
      <circle cx="31" cy="24" r="2.6" fill="#1F232A"/>
      <circle cx="18" cy="23" r="1" fill="#FFFFFF"/>
      <circle cx="32" cy="23" r="1" fill="#FFFFFF"/>
      {/* Mouth */}
      <rect x="19" y="32" width="10" height="2.5" rx="1.25" fill="#FFFFFF"/>
      {/* Antenna connectors */}
      <rect x="6" y="22" width="3.5" height="7" rx="1" fill="#478CBF"/>
      <rect x="38.5" y="22" width="3.5" height="7" rx="1" fill="#478CBF"/>
    </g>
  </svg>
);

const MicrosoftsIcon = () => (
  <svg viewBox="0 0 48 48" className="w-full h-full">
    <rect width="48" height="48" rx="8" fill="#1C1E24"/>
    <g transform="translate(12, 12)">
      <rect x="0" y="0" width="11" height="11" fill="#F25022"/>
      <rect x="13" y="0" width="11" height="11" fill="#7FBA00"/>
      <rect x="0" y="13" width="11" height="11" fill="#00A4EF"/>
      <rect x="13" y="13" width="11" height="11" fill="#FFB900"/>
    </g>
  </svg>
);

// Grouped in 3 rows exactly matching the user's reference image:
// Row 1: Figma, Adobe Photoshop, Canva, InDesign, Illustrator
// Row 2: Premiere Pro, After Effects, Capcut, VSCode, Python
// Row 3: C#, Blender, Unity, Godot, Microsofts
const TOOL_ROWS: ToolItem[][] = [
  [
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Adobe Photoshop', icon: PhotoshopIcon },
    { name: 'Canva', icon: CanvaIcon },
    { name: 'InDesign', icon: InDesignIcon },
    { name: 'Illustrator', icon: IllustratorIcon },
  ],
  [
    { name: 'Premiere Pro', icon: PremiereProIcon },
    { name: 'After Effects', icon: AfterEffectsIcon },
    { name: 'Capcut', icon: CapcutIcon },
    { name: 'VSCode', icon: VSCodeIcon },
    { name: 'Python', icon: PythonIcon },
  ],
  [
    { name: 'C#', icon: CSharpIcon },
    { name: 'Blender', icon: BlenderIcon },
    { name: 'Unity', icon: UnityIcon },
    { name: 'Godot', icon: GodotIcon },
    { name: 'Microsofts', icon: MicrosoftsIcon },
  ],
];

export function ToolsUsedSection() {
  return (
    <section
      id="tools-used-section"
      className="py-14 sm:py-20 relative bg-[#090909] border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching exact reference: "TOOLS yond i hath used" */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="flex flex-wrap items-baseline gap-2.5 sm:gap-3.5">
            <span className="font-akira text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-widest uppercase">
              TOOLS
            </span>
            <span className="text-xl sm:text-2xl lg:text-3xl text-neutral-400 font-light lowercase tracking-normal">
              yond i hath used
            </span>
          </h2>
        </motion.div>

        {/* Tools Chips Layout matching reference grid & flow */}
        <div className="space-y-3 sm:space-y-3.5">
          {TOOL_ROWS.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: rowIndex * 0.1 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              {row.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-[#1E2024]/90 hover:bg-[#252830] border border-white/10 hover:border-white/25 transition-all duration-200 shadow-sm cursor-default"
                  >
                    {/* Logo container with dark subtle inset */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-[#2B2D33]/60 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-inner border border-white/5 group-hover:scale-105 transition-transform duration-200">
                      <Icon />
                    </div>

                    {/* Tool Name Label */}
                    <span className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white transition-colors tracking-tight whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
