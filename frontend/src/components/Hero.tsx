import React from "react";
import { motion } from "framer-motion";

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
      {/* Premium Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 mt-12">
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-white"
          style={{ fontFamily: "'Instrument Serif', serif" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Detect spam{" "}
          <em className="not-italic text-gray-500 font-light">before it</em>{" "}
          reaches you.
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed mt-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Protect your inbox with intelligent detection. Analyze emails and SMS
          messages using machine learning powered spam detection.
        </motion.p>

        <motion.button
          onClick={onCtaClick}
          className="liquid-glass rounded-full px-12 py-4 mt-8 hover:scale-[1.03] transition-transform text-white font-medium cursor-pointer relative overflow-hidden group shadow-[0_0_20px_rgba(168,85,247,0.2)] border-purple-500/20 hover:border-purple-500/40"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Analyze Message
            <span className="text-purple-400 transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
          {/* Subtle button reflection animation */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </motion.button>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
      >
        <span className="tracking-widest uppercase">Scroll to analyze</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
