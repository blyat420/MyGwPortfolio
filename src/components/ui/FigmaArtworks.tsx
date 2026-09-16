import React, { useState } from "react";
import throneArtworkImg from "../../assets/images/regenerated_image_1788951605332.png";
import spidermanCatCardImg from "../../assets/images/spiderman_cat_card.png";
import wizardArtworkImg from "../../assets/images/regenerated_image_1788951610165.png";
import vintagePhoneImg from "../../assets/images/regenerated_image_1788951625342.png";

/**
 * Jamalism custom monogram logo matching the Figma design
 */
export function JamalismLogo({
  className = "w-7 h-7",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Jamalism Logo"
    >
      {/* Top Dot */}
      <circle cx="33" cy="11" r="4.5" fill="white" />
      {/* Left accent dot */}
      <circle cx="15" cy="22" r="4" fill="white" />
      {/* Stem and bottom curve */}
      <path
        d="M33 19V32C33 36.4183 29.4183 40 25 40C20.5817 40 17 36.4183 17 32"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Hero Visual: Jamal on the Elden Ring Dark Throne
 * Ornate dark gothic stone throne, knight armor, fur cloak, spectacles, and moody rim lighting
 */
export function ThroneArtwork({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full aspect-[4/5] sm:aspect-[3/4] max-w-lg mx-auto rounded-3xl overflow-hidden border border-cyan-500/15 bg-[#090C14] shadow-[0_0_20px_rgba(6,182,212,0.12)] ${className}`}
    >
      {/* Main Image in full crisp opacity */}
      <img
        src={throneArtworkImg}
        alt="Jamal on Throne"
        className="w-full h-full object-cover object-top hover:scale-105 transition duration-700"
      />

      {/* Subtle bottom gradient purely for the label text */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-5 px-6 pointer-events-none">
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3">
          <div className="text-[11px] font-mono text-neutral-300 font-medium tracking-wider">
            ELDEN LORD &bull; DIGITAL ARTIST
          </div>
          <span className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-[10px] font-bold">
            JAMAL
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * About Me Left: Scholar / Wizard Jamal
 */
export function WizardArtwork({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0D16] group ${className}`}
    >
      <img
        src={wizardArtworkImg}
        alt="Rizal Jamalul Lail - Scholar Wizard"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#090C14] via-[#090C14]/60 to-transparent pt-12 pb-4 px-4 text-left">
        <div className="text-[11px] font-mono text-cyan-400">
          CREATIVE SCHOLAR
        </div>
        <div className="text-sm font-semibold text-white">
          Rizal Jamalul Lail
        </div>
      </div>
    </div>
  );
}

/**
 * About Me Right: Spider-Man Cat on Pedestal (#CAR)
 * Designed identical in full card framing, aspect ratio, and typography to WizardArtwork
 */
export function SpidermanCatArtwork({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0D16] group ${className}`}
    >
      <img
        src={spidermanCatCardImg}
        alt="Spider-Cat (#CAR) on Pedestal - Pet & Mascot"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#090C14] via-[#090C14]/60 to-transparent pt-12 pb-4 px-4 text-left pointer-events-none">
        <div className="text-[11px] font-mono text-red-400 font-semibold tracking-wider">
          PET &amp; MASCOT
        </div>
        <div className="text-sm font-semibold text-white">
          #CAR &bull; Spider-Cat
        </div>
      </div>
    </div>
  );
}

/**
 * Contact: Vintage Rotary Telephone on Pedestal
 */
export function VintagePhoneArtwork({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-xs mx-auto aspect-square rounded-3xl overflow-hidden border border-white/10 bg-[#090D18] flex flex-col items-center justify-center p-6 shadow-2xl group ${className}`}
    >
      {/* Ambient Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none" />

      {/* Rotary Phone Image */}
      <div className="relative z-10 w-56 h-56 sm:w-60 sm:h-60 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
        <img
          src={vintagePhoneImg}
          alt="Vintage Rotary Telephone"
          className="w-full h-full object-contain scale-125 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.85)]"
        />
      </div>

      {/* Pedestal Base Ring */}
      <div className="relative z-10 mt-1 w-44 h-4 rounded-full bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 border border-white/10 shadow-inner" />
    </div>
  );
}

/**
 * JamalPOS Screens Pair:
 * Left: Cashier Till Terminal
 * Right: "Stock and till, finally reading from the same page."
 */
export function JamalPosScreenPair({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {/* Left Screen: Cashier Till UI */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0D111A] p-4 shadow-xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-neutral-400">
          <span className="font-bold text-cyan-400">JamalPOS Cashier</span>
          <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
            ONLINE
          </span>
        </div>

        {/* Mock Catalog Items */}
        <div className="grid grid-cols-2 gap-2 my-3">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs space-y-1">
            <div className="text-neutral-300 font-medium truncate">
              Kopi Susu Gula Aren
            </div>
            <div className="text-cyan-400 font-mono font-bold">Rp 22.000</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs space-y-1">
            <div className="text-neutral-300 font-medium truncate">
              Americano
            </div>
            <div className="text-cyan-400 font-mono font-bold">Rp 18.000</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs space-y-1">
            <div className="text-neutral-300 font-medium truncate">
              Nasi Goreng Kampung
            </div>
            <div className="text-cyan-400 font-mono font-bold">Rp 28.000</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs space-y-1">
            <div className="text-neutral-300 font-medium truncate">
              Croissant Butter
            </div>
            <div className="text-cyan-400 font-mono font-bold">Rp 19.000</div>
          </div>
        </div>

        {/* Current Order Summary Bar */}
        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs">
          <div>
            <div className="text-[10px] text-neutral-400 uppercase">
              Subtotal (3 items)
            </div>
            <div className="text-sm font-mono font-bold text-white">
              Rp 59.000
            </div>
          </div>
          <button className="px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs transition">
            Charge &rarr;
          </button>
        </div>
      </div>

      {/* Right Screen: Stock and till presentation */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0F1420] p-6 shadow-xl flex flex-col justify-between">
        <div className="space-y-2">
          <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
            &bull; Inventory &amp; Point of Sale system
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            Stock and till, finally reading from the same page.
          </h4>
          <p className="text-xs text-neutral-400 leading-relaxed">
            A checkout that keeps up with the queue, and a stockroom that never
            finds out about a sale after the fact. JamalPOS ties cashier and
            back office to one source of truth.
          </p>
        </div>

        <div className="pt-4 flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono">
            Open the till &rarr;
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-white/5 text-neutral-300 border border-white/10 text-xs font-mono">
            View back-office
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * REED Screen Pair:
 * Left: Welcome Back Login Modal with Anime Character
 * Right: REED Manga Platform Dashboard (ORV - Chapter 12)
 */
export function ReedScreenPair({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {/* Left Screen: Welcome Back Login Modal */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0F1117] p-4 flex gap-4 shadow-xl">
        <div className="w-1/2 rounded-xl overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80"
            alt="Manga Character"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center space-y-2.5 text-left text-xs">
          <div className="text-amber-400 font-bold font-mono text-sm">
            REED.
          </div>
          <div className="text-white font-bold text-sm">WELCOME BACK</div>
          <div className="text-[10px] text-neutral-400">
            LET&apos;S START READING!
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="h-6 rounded bg-white/5 border border-white/10 text-[10px] px-2 flex items-center text-neutral-400">
              username
            </div>
            <div className="h-6 rounded bg-white/5 border border-white/10 text-[10px] px-2 flex items-center text-neutral-400">
              password
            </div>
          </div>
          <button className="w-full py-1.5 rounded bg-amber-400 text-black font-bold text-[10px]">
            LOGIN
          </button>
        </div>
      </div>

      {/* Right Screen: Featured Manga ORV Chapter 12 */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0B0D13] p-4 relative shadow-xl flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10 font-mono text-neutral-400">
          <span className="text-amber-400 font-bold">REED. MANGA LIST</span>
          <span>THIS WEEK TRENDING</span>
        </div>

        <div className="my-3 p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-black/40 to-transparent border border-red-500/20 space-y-2">
          <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-mono text-[10px]">
            FEATURED
          </span>
          <h4 className="text-base sm:text-lg font-black text-white">
            ORV &mdash; CHAPTER 12
          </h4>
          <p className="text-xs text-neutral-300 line-clamp-2">
            Dokja navigates the unfolding scenario as the world transitions into
            an apocalypse governed by the Star Stream.
          </p>
          <div className="flex gap-1.5 pt-1 text-[9px] font-mono text-neutral-400">
            <span className="px-1.5 py-0.5 rounded bg-white/5">FANTASY</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5">ACTION</span>
            <span className="px-1.5 py-0.5 rounded bg-white/5">
              REINCARNATION
            </span>
          </div>
        </div>

        <div className="text-[10px] font-mono text-neutral-500 flex justify-between">
          <span>SUBSCRIBE TO PREMIUM</span>
          <span className="text-amber-400">READ NOW &rarr;</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Festika 8 Poster Display:
 * Geometric Red Logo & Robot Mascot
 */
export function Festika8Poster({ className = "" }: { className?: string }) {
  return (
    <div
      className={`max-w-md mx-auto aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-[#F5F5F7] text-neutral-900 p-8 flex flex-col items-center justify-between shadow-2xl ${className}`}
    >
      {/* Festika Geometric Rosette Emblem */}
      <div className="relative w-36 h-36 mt-4">
        <svg viewBox="0 0 100 100" className="w-full h-full text-[#991B1B]">
          <circle
            cx="50"
            cy="35"
            r="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <circle
            cx="65"
            cy="50"
            r="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <circle
            cx="50"
            cy="65"
            r="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <circle
            cx="35"
            cy="50"
            r="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
        </svg>
      </div>

      {/* FESTIKA Typography */}
      <div className="text-center space-y-1">
        <h3 className="font-display font-black text-4xl sm:text-5xl text-[#991B1B] tracking-tight">
          FESTIKA
        </h3>
        <p className="text-[10px] font-mono tracking-widest text-neutral-600 font-bold uppercase">
          Teknologi Inovasi Kesenian Olahraga
        </p>
      </div>

      {/* Cute White Robot Mascot with Red Jetpack */}
      <div className="relative w-36 h-40 mb-2">
        <svg viewBox="0 0 100 120" className="w-full h-full">
          {/* Antenna */}
          <line
            x1="50"
            y1="10"
            x2="50"
            y2="25"
            stroke="#991B1B"
            strokeWidth="3"
          />
          <circle cx="50" cy="10" r="5" fill="#991B1B" />
          {/* Robot Head */}
          <rect
            x="25"
            y="25"
            width="50"
            height="35"
            rx="10"
            fill="white"
            stroke="#991B1B"
            strokeWidth="3"
          />
          {/* Eyes (> <) */}
          <text x="35" y="47" fontSize="16" fill="#991B1B" fontWeight="bold">
            &gt;
          </text>
          <text x="55" y="47" fontSize="16" fill="#991B1B" fontWeight="bold">
            &lt;
          </text>
          {/* Robot Body */}
          <rect
            x="30"
            y="65"
            width="40"
            height="40"
            rx="12"
            fill="white"
            stroke="#991B1B"
            strokeWidth="3"
          />
          <circle cx="50" cy="85" r="8" fill="#991B1B" />
          {/* Red Jet Thrusters */}
          <rect x="15" y="70" width="10" height="20" rx="4" fill="#991B1B" />
          <rect x="75" y="70" width="10" height="20" rx="4" fill="#991B1B" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Jamal Worshipper (HRIS) Screens Pair:
 * Left: Cat Meme Login Screen
 * Right: Jamal HRIS Analytics Dashboard
 */
export function JamalHrisScreenPair({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {/* Left Screen: Cat meme login */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0D1017] p-5 shadow-xl flex flex-col justify-between">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>Jamal Worshipper</span>
        </div>

        {/* Cat Meme Row */}
        <div className="my-4 flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=200&q=80"
              alt="Cat 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=200&q=80"
              alt="Cat 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
            <img
              src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=200&q=80"
              alt="Cat 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center space-y-1">
          <h4 className="text-white font-bold text-sm">
            One place for attendance, leave, and payroll.
          </h4>
          <p className="text-[11px] text-neutral-400">
            Sign in to your HR workspace
          </p>
        </div>
      </div>

      {/* Right Screen: HRIS Analytics Dashboard */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0A0D15] p-5 shadow-xl space-y-4">
        <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/10">
          <span className="text-white font-semibold">HRIS Analytics</span>
          <span className="text-cyan-400">DEMO ACCESS</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="text-lg font-mono font-bold text-cyan-400">0/6</div>
            <div className="text-[10px] text-neutral-400">Present Today</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="text-lg font-mono font-bold text-emerald-400">
              0
            </div>
            <div className="text-[10px] text-neutral-400">Late Arrivals</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="text-lg font-mono font-bold text-amber-400">0</div>
            <div className="text-[10px] text-neutral-400">On Leave</div>
          </div>
        </div>

        {/* Division Donut representation */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
          <span className="text-neutral-300 font-mono text-[11px]">
            Headcount by Division
          </span>
          <span className="text-cyan-400 font-mono text-[11px]">
            6 Roles Configured
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Echo of the Hollow Screen Pair:
 * Left: Pixel Art Dungeon Title "ECHO OF THE HOLLOW DEMO"
 * Right: BENGI. MAIN CHARACTER Sheet
 */
export function EchoHollowScreenPair({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}>
      {/* Left: Pixel Dungeon Title Screen */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-black p-6 flex flex-col items-center justify-center text-center space-y-4 shadow-xl relative min-h-[220px]">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-red-950/20" />
        <div className="relative z-10 space-y-1">
          <div className="text-[10px] font-mono text-red-500 uppercase tracking-widest">
            &bull; DEMO EDITION &bull;
          </div>
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-white tracking-widest uppercase">
            ECHO OF THE HOLLOW
          </h3>
        </div>
        <div className="relative z-10 space-y-2 text-xs font-mono">
          <div className="px-6 py-1.5 rounded bg-red-600/30 text-white border border-red-500/50 hover:bg-red-600/50 transition cursor-pointer">
            &mdash; PLAY &mdash;
          </div>
          <div className="text-neutral-500 hover:text-neutral-300 transition cursor-pointer">
            EXIT
          </div>
        </div>
      </div>

      {/* Right: Bengi Character Sheet */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#F5F5F7] text-neutral-900 p-6 shadow-xl flex gap-4 items-center">
        {/* Bengi Creature Silhouette */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-28 h-36 bg-black rounded-t-full relative flex flex-col items-center justify-center p-2 shadow-lg">
            {/* Horns */}
            <div className="absolute -top-3 left-3 w-4 h-6 bg-black transform -rotate-20 rounded" />
            <div className="absolute -top-3 right-3 w-4 h-6 bg-black transform rotate-20 rounded" />
            {/* Glowing Eyes */}
            <div className="flex gap-4 my-2">
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_white]" />
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_8px_white]" />
            </div>
            {/* Red Cloak / Cape */}
            <div className="w-full h-16 bg-[#B91C1C] rounded-b-xl mt-auto border-t-2 border-white/20" />
          </div>
        </div>

        {/* Character Info */}
        <div className="w-1/2 space-y-2 text-left">
          <h4 className="font-display font-black text-lg text-black">BENGI.</h4>
          <div className="text-[10px] font-mono uppercase text-[#B91C1C] font-bold">
            MAIN CHARACTER
          </div>
          <p className="text-[11px] text-neutral-700 leading-relaxed line-clamp-4">
            Bengi merupakan karakter utama dalam game Echo of the Hollow.
            Mengusung gaya visual 2D dengan pendekatan minimalis bertubuh gelap
            dan jubah merah misterius.
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * Lerna Screen:
 * Digital education app blending social features and gamification.
 * Features the signature LE monogram, Masuk/Daftar onboarding UI, and smart dashboard preview.
 */
export function LernaScreenPair({ className = "" }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<"welcome" | "dashboard">(
    "welcome",
  );
  const [userStatus, setUserStatus] = useState<string | null>(null);

  return (
    <div className={`w-full max-w-xl mx-auto ${className}`}>
      {/* Phone Screen Card matching Figma p6.png */}
      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white text-neutral-900 shadow-2xl transition-all duration-300">
        {/* Phone Top Status Bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[11px] font-medium text-neutral-500 border-b border-neutral-100">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-mono text-[10px]">4G</span>
            <span className="text-xs">&#128267;</span>
          </div>
        </div>

        {activeTab === "welcome" ? (
          <div className="p-8 sm:p-10 flex flex-col items-center text-center space-y-6">
            {/* Intertwined "LE" Monogram Logo from Figma */}
            <div className="pt-2 flex flex-col items-center">
              <svg viewBox="0 0 160 140" className="w-36 h-32 sm:w-44 sm:h-36">
                <defs>
                  <linearGradient
                    id="leBlueGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#1E88E5" />
                    <stop offset="100%" stopColor="#1565C0" />
                  </linearGradient>
                </defs>
                {/* Monogram Serif 'L' */}
                <path
                  d="M 35 15 L 65 15 L 65 95 L 105 95 L 105 115 L 35 115 Z"
                  fill="url(#leBlueGrad)"
                />
                {/* Monogram Serif 'E' Intertwined */}
                <path
                  d="M 70 35 L 125 35 L 125 55 L 94 55 L 94 68 L 120 68 L 120 85 L 94 85 L 94 98 L 128 98 L 128 115 L 70 115 Z"
                  fill="#1E88E5"
                  opacity="0.95"
                />
              </svg>

              {/* LERNA serif label */}
              <h2 className="font-serif font-bold text-2xl sm:text-3xl tracking-[0.2em] text-[#1565C0] mt-1">
                LERNA
              </h2>
            </div>

            {/* Subtitle Caption */}
            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
              Masuk atau daftar sebelum melanjutkan
            </p>

            {/* Action Buttons */}
            <div className="w-full max-w-xs space-y-3.5 pt-1">
              <button
                onClick={() => {
                  setUserStatus("Masuk sebagai Pelajar");
                  setActiveTab("dashboard");
                }}
                className="w-full py-3.5 px-6 rounded-full bg-[#1E88E5] hover:bg-[#1976D2] active:scale-[0.98] text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-blue-500/25 transition cursor-pointer"
              >
                MASUK
              </button>

              <button
                onClick={() => {
                  setUserStatus("Daftar Akun Baru");
                  setActiveTab("dashboard");
                }}
                className="w-full py-3.5 px-6 rounded-full bg-white hover:bg-neutral-50 active:scale-[0.98] text-neutral-800 font-bold text-sm tracking-wider uppercase border border-neutral-200 shadow-sm transition cursor-pointer"
              >
                DAFTAR
              </button>
            </div>

            {/* Social Divider */}
            <div className="w-full max-w-xs pt-3">
              <div className="relative flex items-center justify-center">
                <div className="border-t border-neutral-200 w-full" />
                <span className="bg-white px-3 text-[11px] text-neutral-400 absolute">
                  Atau masuk melalui sosial media anda
                </span>
              </div>
            </div>

            {/* Google Sign-in Circle Button */}
            <div className="pt-2">
              <button
                onClick={() => {
                  setUserStatus("Masuk dengan Google (Rizal Jamalul)");
                  setActiveTab("dashboard");
                }}
                className="w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition flex items-center justify-center cursor-pointer"
                title="Masuk dengan Google"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.34z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Preview: Smart Learning Dashboard & Gamification */
          <div className="p-6 space-y-5 bg-[#F8FAFC]">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1E88E5] text-white flex items-center justify-center font-bold text-xs">
                  LE
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm text-neutral-800">
                    Smart Learning
                  </div>
                  <div className="text-[10px] text-emerald-600 font-medium">
                    {userStatus || "Active Learner"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveTab("welcome")}
                className="px-2.5 py-1 text-[11px] font-mono rounded bg-neutral-200 hover:bg-neutral-300 text-neutral-700 transition"
              >
                &larr; Welcome Screen
              </button>
            </div>

            {/* Gamification Stats: Level, XP, Misi */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
                <div className="text-xs text-blue-600 font-semibold">Level</div>
                <div className="text-lg font-black text-[#1565C0]">14</div>
                <div className="text-[9px] text-blue-500">Scholar</div>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
                <div className="text-xs text-amber-700 font-semibold">XP</div>
                <div className="text-lg font-black text-amber-600">850</div>
                <div className="text-[9px] text-amber-600">+50 Hari ini</div>
              </div>
              <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200">
                <div className="text-xs text-purple-700 font-semibold">
                  Misi
                </div>
                <div className="text-lg font-black text-purple-600">3/4</div>
                <div className="text-[9px] text-purple-600">Selesai</div>
              </div>
            </div>

            {/* Smart Learning Modules */}
            <div className="space-y-2 text-left">
              <div className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                Fitur Unggulan Lerna
              </div>
              <div className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900">
                    Adaptive Learning Path
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    Rekomendasi materi sesuai progresmu
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                  Aktif
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900">
                    Komunitas &amp; Diskusi Chat
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    Belajar bareng teman secara interaktif
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
                  Online
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-neutral-200 shadow-sm flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-neutral-900">
                    E-Commerce Kebutuhan Belajar
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    Akses buku, kursus &amp; perlengkapan dalam 1 app
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-700">
                  Toko
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
