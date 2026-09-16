import React from 'react';
import homeBgSvg from '../../assets/images/home_background.svg';

export function HomeBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none bg-[#030408]"
    >
      {/* High-Fidelity SVG Background reproduction */}
      <img
        src={homeBgSvg}
        alt=""
        className="w-full h-full object-cover object-center opacity-95"
      />

      {/* Layered Hardware-Accelerated Ambient Glows for extra vibrance across any viewport width */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top-Left Deep Indigo Glow */}
        <div className="absolute -top-10 left-[5%] w-[38vw] max-w-[480px] aspect-square rounded-full bg-[#193273]/60 blur-[100px] transform-gpu" />

        {/* Top-Right Subtle Wine Burgundy Glow */}
        <div className="absolute top-[3%] right-[4%] w-[30vw] max-w-[380px] aspect-square rounded-full bg-[#4a1525]/45 blur-[90px] transform-gpu" />

        {/* Center-Upper Midnight Blue Glowing Orb */}
        <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-[45vw] max-w-[560px] aspect-square rounded-full bg-[#1c3b88]/55 blur-[120px] transform-gpu" />

        {/* Lower-Right Glowing Cobalt Blue Orb */}
        <div className="absolute top-[68%] right-[6%] w-[36vw] max-w-[460px] aspect-square rounded-full bg-[#1f4296]/60 blur-[110px] transform-gpu" />

        {/* Bottom Ambient Navy Base Glow */}
        <div className="absolute -bottom-16 left-[30%] w-[42vw] max-w-[500px] aspect-square rounded-full bg-[#132759]/50 blur-[100px] transform-gpu" />
      </div>
    </div>
  );
}
