import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Instagram } from 'lucide-react';
import phoneImg from '../../assets/images/phone.png';

interface VintagePhonePedestalProps {
  className?: string;
  whatsappUrl?: string;
  instagramUrl?: string;
}

export function VintagePhonePedestal({
  className = '',
  whatsappUrl = 'https://wa.me/6282146943003',
  instagramUrl = 'https://instagram.com/mr_jamaaal'
}: VintagePhonePedestalProps) {
  return (
    <div className={`relative mx-auto flex flex-col items-center w-full max-w-[480px] sm:max-w-[540px] select-none ${className}`}>
      {/* Dramatic Top Spotlight from Figma */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-400/15 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-32 bg-blue-600/20 blur-[60px] rounded-full pointer-events-none" />

      {/* Main Image Stage: Rotary Phone on Dark Pedestal extending to footer */}
      <div id="contact-phone-stage" className="relative w-full flex flex-col items-center justify-end pb-0 mb-0">
        <div className="relative w-full flex flex-col items-center justify-end pb-0 mb-0">
          <img
            id="contact-phone-image"
            src={phoneImg}
            alt="Vintage Rotary Telephone on Pedestal"
            referrerPolicy="no-referrer"
            className="w-full h-auto block object-contain object-bottom filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] select-none pointer-events-none transition-transform duration-500 hover:scale-[1.01]"
          />

          {/* ================= INTERACTIVE BUTTONS ON PEDESTAL ================= */}
          {/* Placed right on the front face of the dark pedestal cylinder, exactly matching Figma */}
          <div className="absolute top-[60%] sm:top-[62%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3.5 w-full px-4 z-20">
            {/* WhatsApp Action Button */}
            <motion.a
              id="contact-whatsapp-btn"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-48 sm:w-56 py-3 px-6 rounded-full bg-[#18202F]/85 hover:bg-[#222E42] border border-white/15 hover:border-emerald-400/50 text-white font-mono text-xs sm:text-sm tracking-widest font-semibold flex items-center justify-center gap-2.5 transition shadow-[0_8px_20px_rgba(0,0,0,0.6)] backdrop-blur-md group"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>WHATSAPP</span>
            </motion.a>

            {/* Instagram Action Button */}
            <motion.a
              id="contact-instagram-btn"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-48 sm:w-56 py-3 px-6 rounded-full bg-[#18202F]/85 hover:bg-[#222E42] border border-white/15 hover:border-pink-400/50 text-white font-mono text-xs sm:text-sm tracking-widest font-semibold flex items-center justify-center gap-2.5 transition shadow-[0_8px_20px_rgba(0,0,0,0.6)] backdrop-blur-md group"
            >
              <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>INSTAGRAM</span>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
