import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { TiltCard } from "../ui/TiltCard";

// Import image avatar dari folder assets/images/
import catDepop from "../../assets/images/cat_depop.jpg";
import catNerdGrey from "../../assets/images/cat_nerd_grey.jpg";
import catBlep from "../../assets/images/cat_blep.jpg";
import catOrange from "../../assets/images/cat_orange.jpg";
import catNerdWhite from "../../assets/images/cat_nerd_white.jpg";

// Import gambar kucing yang mengintip
import catPeeking from "../../assets/images/cat_peeking.png";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rijalul",
    role: "Product Manager",
    company: "Fintech Solutions",
    avatar: catDepop,
    rating: 5,
    review:
      "Jamal translated our complex POS transaction flow into a clean, lightning-fast UI. The interaction design and component modularity exceeded expectations.",
  },
  {
    id: 2,
    name: "jamali",
    role: "Editorial Lead",
    company: "Comic & Manga Hub",
    avatar: catNerdGrey,
    rating: 5,
    review:
      "The reader layout created for REED feels incredibly responsive. Jamal understands modern aesthetic pacing, typography, and dark-mode ergonomics inside out.",
  },
  {
    id: 3,
    name: "lulali",
    role: "Event Director",
    company: "Festika Committee",
    avatar: catBlep,
    rating: 5,
    review:
      "Exceptional creative direction across branding, stage backdrops, and promotional assets. Delivered cohesive visual storytelling under tight deadlines.",
  },
  {
    id: 4,
    name: "adalah gw",
    role: "People Ops Lead",
    company: "Remote Sync Co.",
    avatar: catOrange,
    rating: 5,
    review:
      "The HRIS dashboard design streamlined what used to be a messy spreadsheet nightmare. Clean role-based navigation and intuitive data visualization.",
  },
  {
    id: 5,
    name: "raja jawa",
    role: "Indie Game Developer",
    company: "Pixel Forge Studio",
    avatar: catNerdWhite,
    rating: 5,
    review:
      "Incredible eye for moody lighting and pixel/3D aesthetics. The conceptual work on dungeon scenes and character design was top-tier.",
  },
];

// Sub-komponen untuk menangani logika pergerakan mouse pada masing-masing kartu
function HoverTestimonialCard({ item, index }: { item: any; index: number }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0, w: 0, h: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      w: rect.width,
      h: rect.height,
    });
  };

  // Logika Matematika untuk menentukan posisi Kucing
  let catX = 0;
  let catY = 0;
  let catRotate = 0;

  if (mouse.w > 0) {
    const { x, y, w, h } = mouse;

    // Hitung jarak kursor ke keempat sisi kotak
    const distTop = y;
    const distBottom = h - y;
    const distLeft = x;
    const distRight = w - x;
    const minDist = Math.min(distTop, distBottom, distLeft, distRight);

    // Offset: nilai seberapa jauh kucing keluar saat hover (15px) & seberapa dalam ia sembunyi saat lepas (-45px)
    const peekOffset = isHovered ? 15 : -45;
    const catHalfSize = 32; // Setengah dari ukuran kucing (w-16 = 64px)

    if (minDist === distTop) {
      catX = x - catHalfSize;
      catY = -peekOffset - catHalfSize;
      catRotate = (x / w - 0.5) * 60; // Miring sedikit ke kiri/kanan secara natural
    } else if (minDist === distLeft) {
      catX = -peekOffset - catHalfSize;
      catY = y - catHalfSize;
      catRotate = -90 + (y / h - 0.5) * 60; // Rotasi dasar -90 (hadap kanan)
    } else if (minDist === distRight) {
      catX = w + peekOffset - catHalfSize;
      catY = y - catHalfSize;
      catRotate = 90 - (y / h - 0.5) * 60; // Rotasi dasar 90 (hadap kiri)
    } else {
      catX = x - catHalfSize;
      catY = h + peekOffset - catHalfSize;
      catRotate = 180 - (x / w - 0.5) * 60; // Terbalik mengintip dari bawah
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={
        index === 3
          ? "lg:col-start-1 lg:translate-x-1/2"
          : index === 4
            ? "lg:translate-x-1/2"
            : ""
      }
    >
      <div
        className="relative h-full"
        ref={cardRef}
        onMouseEnter={(e) => {
          setIsHovered(true);
          handleMouse(e);
        }}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouse}
      >
        {/* Kucing Mengintip */}
        <motion.img
          src={catPeeking}
          alt="Peeking Cat"
          className="absolute top-0 left-0 w-16 h-auto pointer-events-none z-0 origin-center"
          initial={{ opacity: 0 }}
          animate={{
            x: catX,
            y: catY,
            rotate: catRotate,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            mass: 0.8,
          }}
        />

        {/* Kartu Testimonial */}
        <div className="relative z-10 h-full">
          <TiltCard
            maxTilt={8}
            perspective={900}
            scale={1.02}
            glowColor="rgba(251, 191, 36, 0.15)"
            className="h-full"
          >
            {/* Background diubah menjadi solid/tidak transparan (bg-[#0F131D]) agar kucing benar-benar tersembunyi */}
            <div className="h-full rounded-2xl bg-[#0F131D] border border-white/10 p-6 text-left flex flex-col justify-between space-y-5 shadow-xl hover:border-white/20 transition relative z-20 overflow-hidden">
              {/* Top: Avatar & Rating */}
              <div className="flex items-center justify-between relative z-30">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full bg-white/10 border border-white/20 object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-neutral-400">{item.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light relative z-30">
                &ldquo;{item.review}&rdquo;
              </p>

              {/* Footer: Organization */}
              <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-neutral-500 relative z-30">
                {item.company} &bull; Verified Partner
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsCarousel() {
  return (
    <section
      id="testimonials-section"
      className="py-20 sm:py-28 relative overflow-hidden bg-[#090909]"
    >
      {/* Ambient Breathing Lights */}
      {/* Left Light (Blue) */}
      <motion.div
        className="pointer-events-none absolute top-1/2 -left-32 w-[600px] h-[600px] -translate-y-1/2 bg-blue-600/20 blur-[150px] rounded-full z-0"
        animate={{ opacity: [1, 0.5, 0.15, 0.5, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Right Light (Red/Purple) */}
      <motion.div
        className="pointer-events-none absolute top-1/2 -right-32 w-[600px] h-[600px] -translate-y-1/2 bg-rose-600/15 blur-[150px] rounded-full z-0"
        animate={{ opacity: [0.15, 0.5, 1, 0.5, 0.15] }} // Reverse sequence so they breathe complimentarily
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2 mb-14"
        >
          <h2 className="font-akira text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wider uppercase">
            WHAT DOES MY CLIENT SAY?
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 italic">
            Client feedback & collaborator endorsements
          </p>
        </motion.div>

        {/* 5 Testimonial Cards Rendered through Hover Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mt-10">
          {TESTIMONIALS.map((item, index) => (
            <HoverTestimonialCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Closing Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14"
        >
          <p className="text-base sm:text-lg text-neutral-300 italic font-medium">
            &ldquo; Built with craft, precision, and reliable engineering.
            &rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
