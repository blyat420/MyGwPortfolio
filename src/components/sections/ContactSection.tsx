import { motion } from "motion/react";
import { VintagePhonePedestal } from "../ui/VintagePhonePedestal";

export function ContactSection() {
  return (
    <section
      id="contact-section"
      className="pt-20 sm:pt-28 pb-0 relative overflow-hidden bg-[#090909]"
    >
      {/* Background Breathing Lighting Glow */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-500/20 blur-[150px] rounded-full z-0"
        animate={{ opacity: [1, 0.5, 0.15, 0.5, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center pb-0 mb-0">
        {/* Section Heading matching Figma */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2 mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white tracking-tight">
            Get in{" "}
            <span className="font-akira font-extrabold text-white">
              TOUCH WITH ME
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono">
            Bali, Indonesia &bull; Global Remote (WITA / UTC+8)
          </p>
        </motion.div>

        {/* Vintage Telephone on Grand Pedestal with Integrated Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full flex justify-center pt-2 pb-0 mb-0"
        >
          <VintagePhonePedestal />
        </motion.div>
      </div>
    </section>
  );
}
