import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const phrases = [
  "Building Intelligent & Secure Systems.",
  "Crafting Scalable Solutions.",
  "Designing Future-Ready APIs.",
  "Pioneering AI Innovation."
];

export default function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      }, 70);
    } else {
      timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, 30);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f3ff] opacity-5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#bc13fe] opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-[#00f3ff] animate-pulse-glow" />
          <span className="text-[#00f3ff] text-sm font-mono tracking-wider">SYSTEM ONLINE</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-[#00f3ff] via-[#bc13fe] to-[#00f3ff] bg-clip-text text-transparent bg-[length:200%_auto] animate-[scanline_3s_linear_infinite]">
            Vignesh
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="h-12 md:h-16 mb-8"
        >
          <p className="text-xl md:text-2xl text-[#a0a0a0] font-display">
            <span className="text-white">{displayText}</span>
            <span className="animate-blink">|</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-lg text-[#a0a0a0] mb-10 max-w-2xl mx-auto"
        >
          Backend & Cloud Engineer | AI Systems Builder
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-transparent border-2 border-[#00f3ff] text-[#00f3ff] font-display font-semibold rounded-lg overflow-hidden"
            style={{ boxShadow: '0 0 20px rgba(0, 243, 255, 0.2), inset 0 0 20px rgba(0, 243, 255, 0.05)' }}
          >
            <span className="absolute inset-0 bg-[#00f3ff]/10 group-hover:bg-[#00f3ff]/20 transition-colors" />
            <span className="relative flex items-center gap-2">
              <Terminal size={18} />
              Initialize Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 border-2 border-[#bc13fe]/50 text-[#bc13fe] font-display font-semibold rounded-lg hover:border-[#bc13fe] hover:bg-[#bc13fe]/10 transition-all"
          >
            <span className="flex items-center gap-2">
              Open Comm Channel
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#a0a0a0] text-sm"
        >
          ↓ Scroll to Explore
        </motion.div>
      </motion.div>
    </section>
  );
}